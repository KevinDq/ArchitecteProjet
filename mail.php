<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les valeurs des champs du formulaire
    $nom = $_POST["name"];
    $email = $_POST["email"];
    $sujet = $_POST["subject"];
    $message = $_POST["message"];

    // Valider les données 
    if (empty($nom) || empty($email) || empty($sujet) || empty($message)) {
        // Au moins un champ obligatoire est vide
        echo "Veuillez remplir tous les champs obligatoires.";
        exit;
    }
  
    // Construire le corps du message
    $corpsMessage = "Nom: $nom\n";
    $corpsMessage .= "Email: $email\n\n";
    $corpsMessage .= "Message:\n$message";

    // Envoyer l'e-mail
    $destinataire = "ducrocq.kevin.85@gmail.com"; // 
    $headers = "From: $nom <$email>";

    if (mail($destinataire, $sujet, $corpsMessage, $headers)) {
        // L'e-mail a été envoyé avec succès
        echo "Votre message a été envoyé.";
    } else {
        // Une erreur s'est produite lors de l'envoi de l'e-mail
        echo "Une erreur s'est produite. Veuillez réessayer plus tard.";
    }
}
?>
