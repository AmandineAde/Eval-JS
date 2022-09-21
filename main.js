document.getElementById('connexion').addEventListener('submit', function(e){
    let erreur;
    let adresseMail = document.getElementById('exampleInputEmail1');
    let motDePasse = document.getElementById('exampleInputPassword1');

    if(!adresseMail.value){
        erreur = "Veuillez renseigner votre adresse mail ou votre pseudo"
    }
    if(!motDePasse.value){
        erreur = "Veuillez renseigner votre mot de passe"
    }

    if(erreur){
        document.getElementById('erreur').innerHTML = erreur;
    }else{
        alert('Envoyer')
    }
});