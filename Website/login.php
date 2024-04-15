<?php
// Function to redirect to the registration/login page
function redirect($url) {
    echo "<script>window.location.href = '$url';</script>";
    exit;
}

// Check if email and password are provided
if (isset($_POST['email']) && isset($_POST['password'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Validate email format using regular expression
    $emailPattern = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';
    if (!preg_match($emailPattern, $email)) {
        // Display error message as pop-up
        echo "<script>alert('Error: Invalid email format.');</script>";
        redirect('http://localhost/mydb/login.html'); 
        exit;
    }

    // Define database connection parameters
    $hostname = "localhost";
    $db_username = "root";
    $db_password = "";
    $database = "mydb";

    // Connect to MySQL database
    $connection = mysqli_connect($hostname, $db_username, $db_password, $database);
    
    // Check connection
    if (mysqli_connect_errno()) {
        die("<script>alert('Database connection failed: " . mysqli_connect_error() . "');</script>");
    }

    // Retrieve hashed password from database
    $query = "SELECT password FROM users WHERE email='$email'";
    $result = mysqli_query($connection, $query);

    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $hashed_password = $row['password'];
        // Verify password
        if (password_verify($password, $hashed_password)) {
            // Password is correct, login successful
            echo "<script>alert('Login successful!');</script>";
            redirect('http://localhost/mydb/search.html'); 
        } else {
            // Invalid password
            echo "<script>alert('Error: Incorrect password.');</script>";
            redirect('http://localhost/mydb/login.html'); 
        }
    } else {
        // User not found
        echo "<script>alert('Error: User not found.');</script>";
        redirect('http://localhost/mydb/login.html'); 
    }

    // Close database connection
    mysqli_close($connection);
} else {
    // Email and password not provided
    echo "<script>alert('Error: Please enter both email and password.');</script>";
    redirect('http://localhost/mydb/login.html'); 
}
?>
