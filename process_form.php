<?php
if(isset($_POST['submit'])) {
  $to = "aronrenstrom@outlook.com"; // E-postadressen du vill skicka till
  $subject = "Nytt meddelande från kontaktformuläret";
  $name = $_POST['user_name'];
  $company = $_POST['user_Co'];
  $email = $_POST['user_email'];
  $message = $_POST['user_project'];

  // Sammanställ e-postmeddelandet
  $email_body = "Namn: $name\nFöretag: $company\nE-post: $email\n\nMeddelande:\n$message";

  // Skicka e-postmeddelandet
  mail($to, $subject, $email_body);

  // Skriv ut ett bekräftelsemeddelande
  echo "<p>Tack för ditt meddelande!</p>";
}
?>