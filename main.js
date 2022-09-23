//Verifie la connexion
function verifConnexion() {

    let emailPseudoConnex = document.getElementById('emailPseudoConnex')
    let mdpConnex = document.getElementById('MDPConnex')
    //Si l'email est vide affiche un message
    if (emailPseudoConnex.value.trim() == "") {
        alert('Veuillez entrer votre adresse mail ou votre pseudo');
        return false;
    }
    // Si le mot de passe est vide affiche un message
    if (mdpConnex.value.trim() == "") {
        alert('Veuillez entrer votre mot de passe');
        return false;
    }
    //stock dans le local storage la connexion
    var stockage = localStorage.getItem("ForumDeOuf");
    compte = JSON.parse(stockage);
    //Si l'e-mail rentrer est différent de l'email stocker, ça affiche un message
    if (compte.Email != emailPseudoConnex.value.trim() && compte.Pseudo != emailPseudoConnex.value.trim()) {
        alert('Veuillez vous inscrire');
        //Si le mot de passe rentrer est différent du mot de passe stocker, ça affiche un message
    } else if (compte.MotDePasse != mdpConnex.value.trim()) {
        alert('Mot de passe incorrect')
    } else {
        //sinon c'est que tout est bon et je suis rediriger vers la page forum
        location.replace('forum.html')
    }
}
//Quand on clique sur deconnection on retourne sur index 
function deconnecting() {
    location.replace('index.html')
}

function verifInscription() {
    //Je récupère toutes les données d'insciption par leur ID 
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

    //Si l'email est vide affiche un message
    if (emailInscr.value.trim() == "") {
        alert('Veuillez entrer votre adresse mail');
        return false;
    }
    //Si le pseudo est vide affiche un message
    if (pseudoInscr.value.trim() == "") {
        alert('Veuillez entrer votre pseudo');
        return false;
    }
    //Si le mot de passe est vide affiche un message
    if (mdpInscr.value.trim() == "") {
        alert('Veuillez entrer votre mot de passe');
        return false;
    }
    //Si le mot de passe est différent de la vérification mot de passe affiche un message
    if (mdpInscr.value.trim() != confirmMdpInscr.value.trim()) {
        alert('Veuillez entrer le même mot de passe');
        return false;
    }
    //Si le nom est vide affiche un message
    if (nomInscr.value.trim() == "") {
        alert('Veuillez entrer votre nom');
        return false;
    }
    //Si le prénom est vide affiche un message
    if (prenomInscr.value.trim() == "") {
        alert('Veuillez entrer votre prénom');
        return false;
    }
    //Si l'âge n'est pas compris entre 1 et 135 ans affiche un message
    if (ageInscr.value.trim() < 1 || ageInscr.value.trim() > 135) {
        alert('Veuillez entrer un âge compris entre 1 et 135 ans');
        return false;
    };

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
    };
    //Je stocke l'inscritpion dans le local storage
    localStorage.setItem("ForumDeOuf", JSON.stringify(compte));
    console.log(compte);

}


if (localStorage.getItem('Objet') != null) {
    titreObjet.textContent = `${localStorage.getItem('Objet')}`;
}
if (localStorage.getItem('Contenu') != null) {
    titreContenu.textContent = `${localStorage.getItem('Contenu')}`;
}

envoyerContenu.onclick = () => {
    var sujets = []
    if (localStorage.sujets != null) {
        sujets = JSON.parse(localStorage.sujets);
    } else {
        localStorage.sujets = JSON.stringify(sujets)
    };


    let sujetForum = document.getElementById('objetForum')
    let contenuForum = document.getElementById('contenuForum')

    var sujet = {
        Sujet: sujetForum.value.trim(),
        Contenu: contenuForum.value.trim(),

    };
    sujets.push(sujet);
    localStorage.sujets = JSON.stringify(sujets)
    window.location.reload();
}


