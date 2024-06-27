
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['username'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    // Validate inputs
    if (empty($name) || empty($email) || empty($message)) {
        die("Please fill all required fields.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format.");
    }

    // Set email recipient
    $to = "mutwiric00@gmail.com"; // Replace with your email address

    // Set email subject
    $subject = "New Form Submission";

    // Compose email body
    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message";

    // Set email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your submission. We'll get back to you soon.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
} else {
    // If not a POST request, redirect to the form page
    header("Location: index.php");
    exit();
}
?>
