<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Récupération et nettoyage des données
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // 2. Destinataire (Remplacez par votre adresse e-mail !)
    $recipient = "votre-adresse-email@gmail.com";

    // 3. Sujet de l'e-mail
    $subject = "Nouveau message de contact de $name";

    // 4. Contenu de l'e-mail
    $email_content = "Nom : $name\n";
    $email_content .= "Email : $email\n\n";
    $email_content .= "Message :\n$message\n";

    // 5. En-têtes de l'e-mail
    $email_headers = "From: $name <$email>";

    // 6. Envoi de l'e-mail
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Redirection vers une page de succès (ou de retour à l'accueil)
        echo "<script>alert('Merci ! Votre message a bien été envoyé.'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Oups ! Une erreur est survenue lors de l\'envoi.'); window.history.back();</script>";
    }
} else {
    header("Location: index.html");
    exit;
}
?>