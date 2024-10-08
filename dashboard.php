<?php
session_start();

if (!isset($_SESSION['username'])) {
    header("Location: login.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; }
        .navbar { background-color: #333; color: white; padding: 15px; text-align: center; }
        .navbar a { color: white; text-decoration: none; padding: 0 20px; }
        .dashboard-content { padding: 20px; text-align: center; }
        .logout a { background-color: #333; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; }
    </style>
</head>
<body>

    <div class="navbar">
        <h2>Welcome to Your Dashboard</h2>
        <a href="dashboard.php">Home</a>
        <a href="profile.php">Profile</a>
        <a href="settings.php">Settings</a>
        <a href="logout.php">Logout</a>
    </div>

    <div class="dashboard-content">
        <h3>Hello, <?php echo $_SESSION['username']; ?>!</h3>
        <p>This is your personal dashboard. From here, you can manage your profile or settings.</p>
    </div>

</body>
</html>
