<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "pinto281";
    $port = 4306;

    //create connection
    $connection = new mysqli($servername, $username, $password, $dbname, $port);

    if ($connection->connect_error) {
        die("Connection Failed: " . $connection->connect_error);
    }


    //get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $contact = $_POST['number'];
    $age = $_POST['age'];
    $msg = $_POST['message'];

    //prepare and bind
    $stmt = $connection->prepare("INSERT INTO `resume-data` (name,email,contact,age,message) VALUES (?,?,?,?,?)");
    $stmt->bind_param("sssss", $name, $email, $contact, $age, $msg);

    if ($stmt->execute()) {
    ?>
        <html>

    <head>
        <title>Welcome</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f0f0f0;
            }

            h1 {
                color: #00698f;
                text-align: center;
            }

            a {
                text-decoration: none;
                color: #00698f;
            }
        </style>
    </head>

    <body>
        <h1>Thank you for filling out the form, <?php echo $name; ?>!</h1>
        <h1>We will Contact you Soon!!!</h1>
        <p><a href="<?php echo $_SERVER['HTTP_REFERER']; ?>">&laquo; Back to the previous page</a></p>
    </body>

    </html>
    <?php
    } else {
        echo "ERROR: " . $stmt->error;
    }

?>