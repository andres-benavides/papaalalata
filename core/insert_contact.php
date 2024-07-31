<?php
// insert_contact.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Manejar solicitudes preflight
    exit(0);
}
require 'db_config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $lastname = $_POST['lastname'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $product = $_POST['product'] ?? '';
    $message = $_POST['message'] ?? '';


    try {
        $stmt = $pdo->prepare("INSERT INTO contacts (name, lastname, email, phone, product, message) VALUES (:name, :lastname, :email, :phone, :product, :message)");
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':lastname', $lastname);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':phone', $phone);
        $stmt->bindParam(':product', $product);
        $stmt->bindParam(':message', $message);

        $stmt->execute();

        echo "Contact added successfully.";
    } catch (\PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
} else {
    echo "Invalid request method.";
}
?>
