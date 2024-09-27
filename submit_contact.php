<?php
header('Content-Type: application/json'); // Ensure the response is JSON

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Capture form inputs
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Basic validation
    if (!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {
        // Destination email address
        $to = "johnotolorin007@gmail.com";
        
        // Email subject and body
        $email_subject = "New Contact Form Submission: " . $subject;
        $email_body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
        
        // Email headers
        $headers = "From: $email";

        // Send the email
        if (mail($to, $email_subject, $email_body, $headers)) {
            // Send a success response in JSON
            echo json_encode(['success' => true, 'message' => "Thank you for contacting us, $name. We will get back to you shortly."]);
        } else {
            // Send a failure response in JSON
            echo json_encode(['success' => false, 'message' => "There was an issue sending your message. Please try again."]);
        }
    } else {
        // Validation failed, send failure response
        echo json_encode(['success' => false, 'message' => "Please fill in all fields."]);
    }
} else {
    // Invalid request method
    echo json_encode(['success' => false, 'message' => "Invalid request method."]);
}
?>
