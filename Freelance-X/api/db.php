<?php
// =============================================================
//  db.php — Database Connection (include this in every API file)
// =============================================================

define('DB_HOST', 'localhost');
define('DB_USER', 'root');       // XAMPP default username
define('DB_PASS', '');           // XAMPP default password (empty)
define('DB_NAME', 'fxdb');

function getDB() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($conn->connect_error) {
        http_response_code(500);
        echo json_encode(['error' => 'Database connection failed: ' . $conn->connect_error]);
        exit;
    }
    $conn->set_charset('utf8mb4');
    return $conn;
}

// Allow requests from the frontend (CORS for local development)
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}
