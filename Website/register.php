<?php
error_reporting(E_ALL); // Enable error reporting
ini_set('display_errors', 1);

// Function to redirect to the registration/login page
function redirect($url) {
    echo "<script>window.location.href = '$url';</script>";
    exit;
}

// Check if all required fields are provided
if (isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password'])) {
    $user_username = $_POST['username'];
    $user_email = $_POST['email'];
    $user_password = $_POST['password'];

    // Validate email format
    if (!filter_var($user_email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert('Error: Invalid email format.');</script>";
        redirect('http://localhost/mydb/registration.html'); 
    }

    // Validate password length
    if (strlen($user_password) < 8) {
        echo "<script>alert('Error: Password should be at least 8 characters long.');</script>";
        redirect('http://localhost/mydb/registration.html'); 
    }

    // Hash the password
    $hashed_password = password_hash($user_password, PASSWORD_DEFAULT);

    // Define database connection parameters
    $hostname = "localhost";
    $db_username = "root";
    $db_password = ""; 
    $database = "mydb";

    // Connect to MySQL database
    $connection = mysqli_connect($hostname, $db_username, $db_password, $database);
        
    // Check connection
    if (mysqli_connect_errno()) {
        echo "<script>alert('Database connection failed: " . mysqli_connect_error() . "');</script>";
        redirect('http://localhost/mydb/registration.html'); 
    }

    // Insert user into the database
    $query = "INSERT INTO users (username, email, password) VALUES ('$user_username', '$user_email', '$hashed_password')";
    $result = mysqli_query($connection, $query);

    if ($result) {
        // Registration successful
        echo "<script>alert('Registration successful!');</script>";
        redirect('http://localhost/mydb/login.html');
    } else {
        // Registration failed
        echo "<script>alert('Error: Registration failed. " . mysqli_error($connection) . "');</script>";
    }

    // Close database connection
    mysqli_close($connection);
} else {
    // Not all required fields provided
    echo "<script>alert('Error: Please enter valid details for all required fields.');</script>";
    redirect('http://localhost/mydb/registration.html'); 
}
?>
