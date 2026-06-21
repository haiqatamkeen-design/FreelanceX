<?php
// =============================================================
//  api/crud.php — Full CRUD Operations for Assignment 3
//  Handles: users, projects, bids, freelancers
//
//  CREATE  → POST   /api/crud.php?table=users
//  READ    → GET    /api/crud.php?table=users
//  UPDATE  → PUT    /api/crud.php?table=users&id=1
//  DELETE  → DELETE /api/crud.php?table=users&id=1
// =============================================================
require_once 'db.php';

$db     = getDB();
$method = $_SERVER['REQUEST_METHOD'];
$table  = $_GET['table'] ?? '';
$id     = (int)($_GET['id'] ?? 0);

// Allowed tables for security
$allowed = ['users','projects','bids','freelancers','skills','freelancer_skills'];
if (!in_array($table, $allowed)) {
    http_response_code(400);
    echo json_encode(['error' => "Invalid table. Allowed: " . implode(', ', $allowed)]);
    exit;
}

// ================================================================
// READ — GET all rows or single row
// ================================================================
if ($method === 'GET') {

    if ($table === 'users') {
        $sql = $id
            ? "SELECT user_id, full_name, email, phone, role, avatar_url, created_at FROM users WHERE user_id = $id"
            : "SELECT user_id, full_name, email, phone, role, avatar_url, created_at FROM users ORDER BY created_at DESC";
        $res = $db->query($sql);
        echo json_encode($id ? $res->fetch_assoc() : $res->fetch_all(MYSQLI_ASSOC));
    }

    elseif ($table === 'projects') {
        $sql = $id
            ? "SELECT p.*, u.full_name AS client_name FROM projects p JOIN users u ON u.user_id=p.client_id WHERE p.project_id=$id"
            : "SELECT p.*, u.full_name AS client_name FROM projects p JOIN users u ON u.user_id=p.client_id ORDER BY p.created_at DESC";
        $res = $db->query($sql);
        echo json_encode($id ? $res->fetch_assoc() : $res->fetch_all(MYSQLI_ASSOC));
    }

    elseif ($table === 'bids') {
        $sql = $id
            ? "SELECT b.*, u.full_name AS freelancer_name, p.title AS project_title FROM bids b JOIN users u ON u.user_id=b.freelancer_id JOIN projects p ON p.project_id=b.project_id WHERE b.bid_id=$id"
            : "SELECT b.*, u.full_name AS freelancer_name, p.title AS project_title FROM bids b JOIN users u ON u.user_id=b.freelancer_id JOIN projects p ON p.project_id=b.project_id ORDER BY b.submitted_at DESC";
        $res = $db->query($sql);
        echo json_encode($id ? $res->fetch_assoc() : $res->fetch_all(MYSQLI_ASSOC));
    }

    elseif ($table === 'freelancers') {
        $sql = $id
            ? "SELECT f.*, u.full_name, u.email, u.avatar_url FROM freelancers f JOIN users u ON u.user_id=f.freelancer_id WHERE f.freelancer_id=$id"
            : "SELECT f.*, u.full_name, u.email, u.avatar_url FROM freelancers f JOIN users u ON u.user_id=f.freelancer_id ORDER BY f.avg_rating DESC";
        $res = $db->query($sql);
        echo json_encode($id ? $res->fetch_assoc() : $res->fetch_all(MYSQLI_ASSOC));
    }

    elseif ($table === 'skills') {
        $res = $db->query("SELECT * FROM skills ORDER BY category, skill_name");
        echo json_encode($res->fetch_all(MYSQLI_ASSOC));
    }
}

// ================================================================
// CREATE — POST new record
// ================================================================
elseif ($method === 'POST') {
    $body = json_decode(file_get_contents('php://input'), true);

    if ($table === 'users') {
        if (empty($body['full_name']) || empty($body['email']) || empty($body['role'])) {
            http_response_code(400); echo json_encode(['error'=>'full_name, email, role are required']); exit;
        }
        $pass = password_hash($body['password'] ?? 'changeme123', PASSWORD_BCRYPT);
        $stmt = $db->prepare("INSERT INTO users (full_name,email,phone,password,role) VALUES (?,?,?,?,?)");
        $stmt->bind_param('sssss', $body['full_name'], $body['email'], $body['phone'], $pass, $body['role']);
        if ($stmt->execute()) {
            $uid = $db->insert_id;
            // auto-create subclass row
            if ($body['role']==='client') {
                $db->query("INSERT INTO clients (client_id) VALUES ($uid)");
            } else {
                $db->query("INSERT INTO freelancers (freelancer_id,hourly_rate) VALUES ($uid, 0)");
            }
            http_response_code(201);
            echo json_encode(['success'=>true,'user_id'=>$uid]);
        } else {
            http_response_code(500); echo json_encode(['error'=>$db->error]);
        }
    }

    elseif ($table === 'projects') {
        if (empty($body['client_id'])||empty($body['title'])||empty($body['description'])) {
            http_response_code(400); echo json_encode(['error'=>'client_id, title, description required']); exit;
        }
        $stmt = $db->prepare("INSERT INTO projects (client_id,title,description,category,scope,experience,budget_min,budget_max,deadline) VALUES (?,?,?,?,?,?,?,?,?)");
        $stmt->bind_param('isssssdds',$body['client_id'],$body['title'],$body['description'],$body['category'],$body['scope'],$body['experience'],$body['budget_min'],$body['budget_max'],$body['deadline']);
        if ($stmt->execute()) { http_response_code(201); echo json_encode(['success'=>true,'project_id'=>$db->insert_id]); }
        else { http_response_code(500); echo json_encode(['error'=>$db->error]); }
    }

    elseif ($table === 'bids') {
        $stmt = $db->prepare("INSERT INTO bids (freelancer_id,project_id,proposed_amount,estimated_days,cover_letter) VALUES (?,?,?,?,?)");
        $stmt->bind_param('iidis',$body['freelancer_id'],$body['project_id'],$body['proposed_amount'],$body['estimated_days'],$body['cover_letter']);
        if ($stmt->execute()) { http_response_code(201); echo json_encode(['success'=>true,'bid_id'=>$db->insert_id]); }
        else { http_response_code(500); echo json_encode(['error'=>$db->error]); }
    }

    elseif ($table === 'skills') {
        $stmt = $db->prepare("INSERT INTO skills (skill_name, category) VALUES (?,?)");
        $stmt->bind_param('ss', $body['skill_name'], $body['category']);
        if ($stmt->execute()) { http_response_code(201); echo json_encode(['success'=>true,'skill_id'=>$db->insert_id]); }
        else { http_response_code(500); echo json_encode(['error'=>$db->error]); }
    }
}

// ================================================================
// UPDATE — PUT update existing record
// ================================================================
elseif ($method === 'PUT') {
    if (!$id) { http_response_code(400); echo json_encode(['error'=>'id is required for update']); exit; }
    $body = json_decode(file_get_contents('php://input'), true);

    if ($table === 'users') {
        $sets = [];
        $params = [];
        $types = '';
        if (!empty($body['full_name']))  { $sets[]='full_name=?';  $params[]=$body['full_name'];  $types.='s'; }
        if (!empty($body['email']))      { $sets[]='email=?';      $params[]=$body['email'];       $types.='s'; }
        if (isset($body['phone']))       { $sets[]='phone=?';      $params[]=$body['phone'];       $types.='s'; }
        if (!empty($body['avatar_url'])) { $sets[]='avatar_url=?'; $params[]=$body['avatar_url'];  $types.='s'; }
        if (!empty($body['password']))   { $sets[]='password=?';   $params[]=password_hash($body['password'],PASSWORD_BCRYPT); $types.='s'; }
        if (empty($sets)) { echo json_encode(['error'=>'Nothing to update']); exit; }
        $params[] = $id; $types .= 'i';
        $stmt = $db->prepare("UPDATE users SET ".implode(',',$sets)." WHERE user_id=?");
        $stmt->bind_param($types, ...$params);
        echo json_encode($stmt->execute() ? ['success'=>true,'updated'=>'user #'.$id] : ['error'=>$db->error]);
    }

    elseif ($table === 'projects') {
        $sets=[]; $params=[]; $types='';
        if (!empty($body['title']))       { $sets[]='title=?';       $params[]=$body['title'];       $types.='s'; }
        if (!empty($body['description'])) { $sets[]='description=?'; $params[]=$body['description']; $types.='s'; }
        if (!empty($body['category']))    { $sets[]='category=?';    $params[]=$body['category'];    $types.='s'; }
        if (!empty($body['status']))      { $sets[]='status=?';      $params[]=$body['status'];      $types.='s'; }
        if (isset($body['budget_min']))   { $sets[]='budget_min=?';  $params[]=$body['budget_min'];  $types.='d'; }
        if (isset($body['budget_max']))   { $sets[]='budget_max=?';  $params[]=$body['budget_max'];  $types.='d'; }
        if (isset($body['deadline']))     { $sets[]='deadline=?';    $params[]=$body['deadline'];    $types.='s'; }
        if (empty($sets)) { echo json_encode(['error'=>'Nothing to update']); exit; }
        $params[]=$id; $types.='i';
        $stmt = $db->prepare("UPDATE projects SET ".implode(',',$sets)." WHERE project_id=?");
        $stmt->bind_param($types, ...$params);
        echo json_encode($stmt->execute() ? ['success'=>true,'updated'=>'project #'.$id] : ['error'=>$db->error]);
    }

    elseif ($table === 'bids') {
        $sets=[]; $params=[]; $types='';
        if (!empty($body['status']))          { $sets[]='status=?';          $params[]=$body['status'];          $types.='s'; }
        if (isset($body['proposed_amount']))  { $sets[]='proposed_amount=?'; $params[]=$body['proposed_amount']; $types.='d'; }
        if (isset($body['estimated_days']))   { $sets[]='estimated_days=?';  $params[]=$body['estimated_days'];  $types.='i'; }
        if (isset($body['cover_letter']))     { $sets[]='cover_letter=?';    $params[]=$body['cover_letter'];    $types.='s'; }
        if (empty($sets)) { echo json_encode(['error'=>'Nothing to update']); exit; }
        $params[]=$id; $types.='i';
        $stmt = $db->prepare("UPDATE bids SET ".implode(',',$sets)." WHERE bid_id=?");
        $stmt->bind_param($types, ...$params);
        echo json_encode($stmt->execute() ? ['success'=>true,'updated'=>'bid #'.$id] : ['error'=>$db->error]);
    }

    elseif ($table === 'freelancers') {
        $sets=[]; $params=[]; $types='';
        if (isset($body['bio']))          { $sets[]='bio=?';          $params[]=$body['bio'];          $types.='s'; }
        if (isset($body['hourly_rate']))  { $sets[]='hourly_rate=?';  $params[]=$body['hourly_rate'];  $types.='d'; }
        if (isset($body['title']))        { $sets[]='title=?';        $params[]=$body['title'];        $types.='s'; }
        if (isset($body['portfolio_url'])){ $sets[]='portfolio_url=?';$params[]=$body['portfolio_url'];$types.='s'; }
        if (empty($sets)) { echo json_encode(['error'=>'Nothing to update']); exit; }
        $params[]=$id; $types.='i';
        $stmt = $db->prepare("UPDATE freelancers SET ".implode(',',$sets)." WHERE freelancer_id=?");
        $stmt->bind_param($types, ...$params);
        echo json_encode($stmt->execute() ? ['success'=>true,'updated'=>'freelancer #'.$id] : ['error'=>$db->error]);
    }
}

// ================================================================
// DELETE — DELETE a record
// ================================================================
elseif ($method === 'DELETE') {
    if (!$id) { http_response_code(400); echo json_encode(['error'=>'id is required for delete']); exit; }

    if ($table === 'users') {
        // CASCADE will handle clients/freelancers subclass rows
        $stmt = $db->prepare("DELETE FROM users WHERE user_id=?");
        $stmt->bind_param('i', $id);
        echo json_encode($stmt->execute() ? ['success'=>true,'deleted'=>'user #'.$id] : ['error'=>$db->error]);
    }

    elseif ($table === 'projects') {
        $stmt = $db->prepare("DELETE FROM projects WHERE project_id=?");
        $stmt->bind_param('i', $id);
        echo json_encode($stmt->execute() ? ['success'=>true,'deleted'=>'project #'.$id] : ['error'=>$db->error]);
    }

    elseif ($table === 'bids') {
        $stmt = $db->prepare("DELETE FROM bids WHERE bid_id=?");
        $stmt->bind_param('i', $id);
        echo json_encode($stmt->execute() ? ['success'=>true,'deleted'=>'bid #'.$id] : ['error'=>$db->error]);
    }

    elseif ($table === 'skills') {
        $stmt = $db->prepare("DELETE FROM skills WHERE skill_id=?");
        $stmt->bind_param('i', $id);
        echo json_encode($stmt->execute() ? ['success'=>true,'deleted'=>'skill #'.$id] : ['error'=>$db->error]);
    }
}

$db->close();
