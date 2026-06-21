<?php
// =============================================================
//  api/auth.php
//  POST /api/auth.php?action=register   → register new user
//  POST /api/auth.php?action=login      → login existing user
// =============================================================
require_once 'db.php';

$db     = getDB();
$action = $_GET['action'] ?? '';
$body   = json_decode(file_get_contents('php://input'), true);

if ($action === 'register') {
    // ---- REGISTER ----
    $required = ['full_name','email','password','role'];
    foreach ($required as $f) {
        if (empty($body[$f])) {
            http_response_code(400);
            echo json_encode(['error' => "Field '$f' is required"]);
            exit;
        }
    }

    // Check email already exists
    $check = $db->prepare("SELECT user_id FROM users WHERE email = ?");
    $check->bind_param('s', $body['email']);
    $check->execute();
    if ($check->get_result()->num_rows > 0) {
        http_response_code(409);
        echo json_encode(['error' => 'Email already registered']);
        exit;
    }

    $hash = password_hash($body['password'], PASSWORD_BCRYPT);
    $stmt = $db->prepare("INSERT INTO users (full_name, email, phone, password, role) VALUES (?,?,?,?,?)");
    $stmt->bind_param('sssss', $body['full_name'], $body['email'], $body['phone'], $hash, $body['role']);

    if (!$stmt->execute()) {
        http_response_code(500);
        echo json_encode(['error' => $db->error]);
        exit;
    }

    $userId = $db->insert_id;

    // Insert into sub-class table
    if ($body['role'] === 'client') {
        $sub = $db->prepare("INSERT INTO clients (client_id, company_name, website) VALUES (?,?,?)");
        $sub->bind_param('iss', $userId, $body['company_name'], $body['website']);
        $sub->execute();
    } else {
        $sub = $db->prepare("INSERT INTO freelancers (freelancer_id, bio, hourly_rate, title) VALUES (?,?,?,?)");
        $sub->bind_param('isds', $userId, $body['bio'], $body['hourly_rate'], $body['title']);
        $sub->execute();
    }

    http_response_code(201);
    echo json_encode(['success' => true, 'user_id' => $userId, 'role' => $body['role']]);

} elseif ($action === 'login') {
    // ---- LOGIN ----
    if (empty($body['email']) || empty($body['password'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Email and password are required']);
        exit;
    }

    $stmt = $db->prepare("SELECT user_id, full_name, email, role, avatar_url, password FROM users WHERE email = ?");
    $stmt->bind_param('s', $body['email']);
    $stmt->execute();
    $user = $stmt->get_result()->fetch_assoc();

    if (!$user || !password_verify($body['password'], $user['password'])) {
        http_response_code(401);
        echo json_encode(['error' => 'Invalid email or password']);
        exit;
    }

    // Remove password from response
    unset($user['password']);

    // Simple session token (in real app use JWT)
    $token = base64_encode($user['user_id'] . ':' . bin2hex(random_bytes(16)));

    echo json_encode(['success' => true, 'user' => $user, 'token' => $token]);

} else {
    http_response_code(400);
    echo json_encode(['error' => 'Unknown action. Use ?action=register or ?action=login']);
}

$db->close();
