<?php
// =============================================================
//  api/bids.php
//  GET  /api/bids.php?project_id=1   → all bids for a project
//  POST /api/bids.php                → submit a new bid
//  PUT  /api/bids.php                → accept or reject a bid
// =============================================================
require_once 'db.php';

$db     = getDB();
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $projectId = (int) ($_GET['project_id'] ?? 0);
    if (!$projectId) {
        http_response_code(400);
        echo json_encode(['error' => 'project_id is required']);
        exit;
    }
    $stmt = $db->prepare("SELECT * FROM view_bids_detail WHERE project_id = ? ORDER BY submitted_at DESC");
    $stmt->bind_param('i', $projectId);
    $stmt->execute();
    echo json_encode($stmt->get_result()->fetch_all(MYSQLI_ASSOC));

} elseif ($method === 'POST') {
    // ---- Submit a bid ----
    $body = json_decode(file_get_contents('php://input'), true);

    $stmt = $db->prepare("
        INSERT INTO bids (freelancer_id, project_id, proposed_amount, estimated_days, cover_letter)
        VALUES (?, ?, ?, ?, ?)
    ");
    $stmt->bind_param(
        'iidis',
        $body['freelancer_id'],
        $body['project_id'],
        $body['proposed_amount'],
        $body['estimated_days'],
        $body['cover_letter']
    );

    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode(['success' => true, 'bid_id' => $db->insert_id]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => $db->error]);
    }

} elseif ($method === 'PUT') {
    // ---- Accept or Reject a bid ----
    $body   = json_decode(file_get_contents('php://input'), true);
    $bidId  = (int) ($body['bid_id'] ?? 0);
    $action = $body['action'] ?? ''; // 'accept' or 'reject'

    if (!$bidId || !in_array($action, ['accept','reject'])) {
        http_response_code(400);
        echo json_encode(['error' => 'bid_id and action (accept/reject) are required']);
        exit;
    }

    $newStatus = $action === 'accept' ? 'accepted' : 'rejected';
    $stmt = $db->prepare("UPDATE bids SET status = ? WHERE bid_id = ?");
    $stmt->bind_param('si', $newStatus, $bidId);
    $stmt->execute();

    if ($action === 'accept') {
        // Insert into accepted_bids
        $ins = $db->prepare("INSERT IGNORE INTO accepted_bids (bid_id) VALUES (?)");
        $ins->bind_param('i', $bidId);
        $ins->execute();
    } else {
        // Insert into rejected_bids
        $ins = $db->prepare("INSERT IGNORE INTO rejected_bids (bid_id) VALUES (?)");
        $ins->bind_param('i', $bidId);
        $ins->execute();
    }

    echo json_encode(['success' => true, 'status' => $newStatus]);
}

$db->close();
