<?php
// =============================================================
//  api/freelancers.php
//  GET /api/freelancers.php          → all freelancer profiles
//  GET /api/freelancers.php?id=3     → single freelancer with skills
// =============================================================
require_once 'db.php';

$db = getDB();

if (isset($_GET['id'])) {
    // ---- Single freelancer with skills ----
    $id = (int) $_GET['id'];

    $stmt = $db->prepare("SELECT * FROM view_freelancer_profiles WHERE freelancer_id = ?");
    $stmt->bind_param('i', $id);
    $stmt->execute();
    $freelancer = $stmt->get_result()->fetch_assoc();

    if (!$freelancer) {
        http_response_code(404);
        echo json_encode(['error' => 'Freelancer not found']);
        exit;
    }

    // Fetch their skills
    $sStmt = $db->prepare("
        SELECT s.skill_name, s.category, fs.skill_proficiency
        FROM freelancer_skills fs
        JOIN skills s ON s.skill_id = fs.skill_id
        WHERE fs.freelancer_id = ?
    ");
    $sStmt->bind_param('i', $id);
    $sStmt->execute();
    $freelancer['skills'] = $sStmt->get_result()->fetch_all(MYSQLI_ASSOC);

    echo json_encode($freelancer);

} else {
    // ---- All freelancers ----
    $result = $db->query("SELECT * FROM view_freelancer_profiles ORDER BY avg_rating DESC");
    echo json_encode($result->fetch_all(MYSQLI_ASSOC));
}

$db->close();
