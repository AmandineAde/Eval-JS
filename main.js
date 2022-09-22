function verifConnexion() {

    let emailPseudoConnex = document.getElementById('emailPseudoConnex')
    let mdpConnex = document.getElementById('MDPConnex')
    if (emailPseudoConnex.value.trim() == "") {
        alert('Veuillez entrer votre adresse mail ou votre pseudo');
        return false;
    }

    if (mdpConnex.value.trim() == "") {
        alert('Veuillez entrer votre mot de passe');
        return false;
    }
    var stockage = localStorage.getItem("ForumDeOuf");
    compte = JSON.parse(stockage);

    if (compte.Email != emailPseudoConnex.value.trim() && compte.Pseudo != emailPseudoConnex.value.trim()) {
        alert('Veuillez vous inscrire');
    } else if (compte.MotDePasse != mdpConnex.value.trim()) {
        alert('Mot de passe incorrect')
    } else {
        document.location.href="forum.html";
    }
}


function verifInscription() {

    let emailInscr = document.getElementById('EmailInscription');
    let pseudoInscr = document.getElementById('pseudoInscription');
    let mdpInscr = document.getElementById('mdpInscription');
    let confirmMdpInscr = document.getElementById('confirmMDP');
    let nomInscr = document.getElementById('nomInscription');
    let prenomInscr = document.getElementById('prenomInscription');
    let ageInscr = document.getElementById('ageInscription');
    let villeInscr = document.getElementById('villeInscr');
    let codePostInscr = document.getElementById('codePostal');
    let adresseInscr = document.getElementById('adresseInscr');

    if (emailInscr.value.trim() == "") {
        alert('Veuillez entrer votre adresse mail');
        return false;
    }
    if (pseudoInscr.value.trim() == "") {
        alert('Veuillez entrer votre pseudo');
        return false;
    }
    if (mdpInscr.value.trim() == "") {
        alert('Veuillez entrer votre mot de passe');
        return false;
    }
    if (mdpInscr.value.trim() != confirmMdpInscr.value.trim()) {
        alert('Veuillez entrer le même mot de passe');
        return false;
    }
    if (nomInscr.value.trim() == "") {
        alert('Veuillez entrer votre nom');
        return false;
    }

    if (prenomInscr.value.trim() == "") {
        alert('Veuillez entrer votre prénom');
        return false;
    }
    if (ageInscr.value.trim() < 1 || ageInscr.value.trim() > 135) {
        alert('Veuillez entrer un âge compris entre 1 et 135 ans');
        return false;
    }

    var compte = {
        Email: emailInscr.value.trim(),
        Pseudo: pseudoInscr.value.trim(),
        MotDePasse: mdpInscr.value.trim(),
        Nom: nomInscr.value.trim(),
        Prenom: prenomInscr.value.trim(),
        Age: ageInscr.value.trim(),
        Adresse: adresseInscr.value.trim(),
        Ville: villeInscr.value.trim(),
        CodePostal: codePostInscr.value.trim()
    }
    localStorage.setItem("ForumDeOuf", JSON.stringify(compte))
    console.log(compte);
}