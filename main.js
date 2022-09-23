//btnClick ou Entrer
document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        let connexion = document.getElementById("modalConnexion").style.display;
        let inscription = document.getElementById("modalInscription").style.display;
        let btnConnexion = document.getElementById('btnConnex')
        let btnInscription = document.getElementById('btnInscription')

        if (connexion != "" && connexion != "none") {
            btnConnexion.click();
        } else if (inscription != "" && inscription != "none") {
            btnInscription.click();
        }
    }
});


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
    };
    //déclaration de la variable user
    let user = retrouveUser(emailPseudoConnex.value.trim());

    //Si le type d'user est object alors le sessionStorage.user prend la valeur du JSON et la page se refresh
    if (typeof user == "object") {
        if (user.MotDePasse == mdpConnex.value.trim()) {
            sessionStorage.user = JSON.stringify(user);
            window.location.reload();
        }
    } else {
        //Si pas affiche un messag d'erreur 
        alert('Pseudo ou email incorrect')
    };
}

//Renvoie soit true si il est != de null soit false si il est égal à null pour creer le bouton de déconnexion
function userConnecter() {
    return sessionStorage.user != null;
}

//Cherche si l'user existe dans le local storage
function retrouveUser(identifiant) {
    let users = JSON.parse(localStorage.users)
    let resultFind = users.find(user => (user.Email === identifiant || user.Pseudo === identifiant));
    return resultFind;
}


//Creer le bouton de déconnexion quand on est connecter
function creerDeconnexionBtn() {
    let text = "";
    let signIn = document.getElementById('signlog-in');
    let forum = document.getElementById('forumConnex');
    let para = document.getElementById('paraConnex')
    //Enlève la classe disabled sur le forum
    forum.classList.toggle('disabled');
    //Ajoute la class "display: none sur la paragraphe que annonce que l'on doit se connecter pour accèder au forum"
    if (para != null){
        para.classList.add('d-none')
    }
    //Le bouton deconnexion s'affiche 
    text += "<button type='submit' class='btn fs-3 text-white' onclick='deconnecting()'><i class='fa-solid fa-user-minus text-white me-2'></i>Déconnexion</button>"
    signIn.innerHTML = text;
}



//Quand on clique sur deconnection on retourne sur index en vidant le session storage
function deconnecting() {
    sessionStorage.removeItem("user");
    location.replace('index.html')
}

// La fonction qui vérifie l'inscription
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

    let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!mailRegex.test(emailInscr.value.trim())){
        alert('Veuillez entrer une adresse mail valide')
        return false;
    }

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
    if (ageInscr.value.trim() != "") {
        if (ageInscr.value.trim() < 1 || ageInscr.value.trim() > 135) {
            alert('Veuillez entrer un âge compris entre 1 et 135 ans');
            return false;
        }
    };

    var users = JSON.parse(localStorage.users)

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

    users.push(compte)
    localStorage.users = JSON.stringify(users)

    //Affiche la modal de connexion lorqu'on se connecte
    $("#modalInscription").modal("hide");
    $("#modalConnexion").modal("show");
}

let carteCreer = document.getElementById('carteCreer')


let envoyerContenu = document.getElementById('envoyerContenu')

//Envoie du sujet qui est stocké en tableau dans le locale storage
if (envoyerContenu != undefined) {
    envoyerContenu.onclick = () => {

        var sujets = JSON.parse(localStorage.sujets)

        let sujetForum = document.getElementById('objetForum')
        let contenuForum = document.getElementById('contenuForum')

        var sujet = {
            Id: sujets.length,
            Sujet: sujetForum.value.trim(),
            Contenu: contenuForum.value.trim(),
            Likes: [],
            Dislikes: []
        };
        sujets.push(sujet);
        localStorage.sujets = JSON.stringify(sujets)
        window.location.reload();
    }
}

//Fonction qui ajoute les likes
function addLike(id) {
    var sujets = JSON.parse(localStorage.sujets)
    var sessionUser = JSON.parse(sessionStorage.user)
    let like = {
        auteur: sessionUser.Pseudo,
    }


    sujets[id].Likes.push(like);
    localStorage.sujets = JSON.stringify(sujets)
    window.location.reload();
}
//Fonction qui ajoute les dislikes
function addDislike(id) {
    var sujets = JSON.parse(localStorage.sujets)
    var sessionUser = JSON.parse(sessionStorage.user)
    let dislike = {
        auteur: sessionUser.Pseudo,
    }
    sujets[id].Dislikes.push(dislike);
    localStorage.sujets = JSON.stringify(sujets)
    window.location.reload();
}


//Fonction qui creer la carte des objet du forum
function creerCarte(data) {
    let row = document.createElement("div");
    row.classList.add("row");

    let card = document.createElement('div');
    card.classList.add('card', 'p-0');
    row.appendChild(card);

    let cardHeader = document.createElement('h4');
    cardHeader.classList.add('card-header', "fw-bold");
    cardHeader.textContent = data.Sujet
    card.appendChild(cardHeader);

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);

    let cardText = document.createElement('p');
    cardText.classList.add('card-text')
    cardText.setAttribute('id', 'titreContenu')
    cardText.textContent = data.Contenu
    cardBody.appendChild(cardText);

    let likeDiv = document.createElement('div');
    likeDiv.classList.add('float-end')
    cardBody.appendChild(likeDiv);

    let buttonLike = document.createElement('a');
    buttonLike.classList.add('me-3', 'text-success', "fw-bold", "fs-5")
    //buttonLike.setAttribute('data-id', data.Id)
    buttonLike.onclick = function (event) {
        addLike(data.Id)
    }
    buttonLike.textContent = data.Likes.length
    likeDiv.appendChild(buttonLike)

    let buttonDislike = document.createElement('a');
    buttonDislike.classList.add('text-danger', "fw-bold", "fs-5");
    buttonDislike.textContent = data.Dislikes.length;
    buttonDislike.onclick = function (event) {
        addDislike(data.Id)
    }
    likeDiv.appendChild(buttonDislike);


    let iconeLike = document.createElement('i');
    iconeLike.classList.add('fa-solid', 'fa-thumbs-up', "ms-1", "fs-5")
    buttonLike.appendChild(iconeLike)


    let iconeDislike = document.createElement('i');
    iconeDislike.classList.add('fa-solid', 'fa-thumbs-down', "ms-1", "fs-5")
    buttonDislike.appendChild(iconeDislike)

    carteCreer.appendChild(row);
}



window.addEventListener('load', (event) => {
    var sujets = []
    var users = []
    if (localStorage.users != null) {
        users = JSON.parse(localStorage.users);
    } else {
        localStorage.users = JSON.stringify(users)
    };

    if (localStorage.sujets != null) {
        sujets = JSON.parse(localStorage.sujets);
    } else {
        localStorage.sujets = JSON.stringify(sujets)
    };
    //creer le nombre de carte selon le nombre de sujet
    if (envoyerContenu != null) {
        for (let index = 0; index < sujets.length; index++) {
            creerCarte(sujets[index])
        }
        if(!userConnecter()){
            window.location.replace("index.html")
        }
    } //si l'user est connecter, creer le bouton deconnexion
    if (userConnecter()) {
        creerDeconnexionBtn()
    }
});