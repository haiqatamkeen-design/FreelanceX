<?php
// =============================================================
//  api/projects.php
//  GET  /api/projects.php            → all open projects
//  GET  /api/projects.php?id=1       → single project with bids
//  POST /api/projects.php            → create a new project
// =============================================================
require_once 'db.php';

$db     = getDB();
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {

    if (isset($_GET['id'])) {
        // ---- Single project with its bids ----
        $id = (int) $_GET['id'];

        $stmt = $db->prepare("SELECT * FROM view_open_projects WHERE project_id = ?");
        $stmt->bind_param('i', $id);
        $stmt->execute();
        $project = $stmt->get_result()->fetch_assoc();

        if (!$project) {
            http_response_code(404);
            echo json_encode(['error' => 'Project not found']);
            exit;
        }

        // Fetch bids for this project
        $bStmt = $db->prepare("SELECT * FROM view_bids_detail WHERE project_id = ?");
        $bStmt->bind_param('i', $id);
        $bStmt->execute();
        $project['bids'] = $bStmt->get_result()->fetch_all(MYSQLI_ASSOC);

        echo json_encode($project);

    } else {
        // ---- All open projects ----
        $result = $db->query("SELECT * FROM view_open_projects ORDER BY created_at DESC");
        echo json_encode($result->fetch_all(MYSQLI_ASSOC));
    }

} elseif ($method === 'POST') {
    // ---- Create new project ----
    $body = json_decode(file_get_contents('php://input'), true);

    $required = ['client_id','title','description'];
    foreach ($required as $field) {
        if (empty($body[$field])) {
            http_response_code(400);
            echo json_encode(['error' => "Field '$field' is required"]);
            exit;
        }
    }

    $stmt = $db->prepare("
        INSERT INTO projects
          (client_id, title, description, category, scope, experience, budget_min, budget_max, deadline)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");
    $stmt->bind_param(
        'isssssdds',
        $body['client_id'],
        $body['title'],
        $body['description'],
        $body['category'],
        $body['scope'],
        $body['experience'],
        $body['budget_min'],
        $body['budget_max'],
        $body['deadline']
    );

    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode(['success' => true, 'project_id' => $db->insert_id]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => $db->error]);
    }
}

$db->close();
