<?php
// Check if the form has been submitted

    // Retrieve the user's name from the form
    $name = $_POST['name'];
    // Display a welcome message with the user's name
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

?>