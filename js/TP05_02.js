/*
    Mark Borca
    Doryan Malempré
    Loic Pouplier
    Emilien Dubois
    Léo Drieskens
*/


//programme pour trouver combinaison faite par ordi

let random = []
let votreNombre = 0
let votreNombreArray = []

//generer un nombre entre 1 et 9 inclus

function genererNombreAleatoire(){
for (let i = 0; i<4 ; i++){
  random.push(Math.floor(Math.random() * 10))
  }
  console.log(random);
  console.log(String(random[0]) + String(random[1]) + String(random[2]) + String(random[3]))
}

// demande d'introduire un nombre de 4 chiffres et verifie sa valeur

function introduireVotreNombre(){
  votreNombre = prompt("Introduisez le nombre auquel vous pensez : ");
  console.log(votreNombre);
  votreNombreArray = votreNombre.split("");
  // Nombre à - de 4 chiffres ?
  if (votreNombreArray.length < 4 ){
    votreNombre = prompt("Veuillez introduire un nombre de 4 chiffres uniquement");
    votreNombreArray = votreNombre.split("");
  }
  // nombre à + de 4 chffres ?
  if (votreNombreArray.length > 4 ) {
    votreNombre = prompt("Veuillez introduire un nombre de 4 chiffres uniquement");
    votreNombreArray = votreNombre.split("");
  }
  // isNaN ?
  else if (isNaN(votreNombre) == true){
    votreNombre = prompt("Veuillez introduire une valeur numérique uniquement");
    votreNombreArray = votreNombre.split("");
  }
console.log(votreNombreArray);
}

// fonction pour afficher les resultats calculer entre l'ordinateur et l'utilisateur

function calculResultats(){
  for (let i = 0; i < random.length; i++){
    if (votreNombreArray[i] == random[i]){
      console.log("Le chiffre numéro " + (i+1) + " est correct !");
    }
    else if (votreNombreArray[i] > random[i]){
      console.log("Votre chiffre numéro " + (i+1) + " est plus grand que celui de l'ordinateur ! ");
    }
    else if (votreNombreArray[i] < random[i]){
      console.log("Votre chiffre " + (i+1) + " est plus petit que celui de l'ordinateur !");
    }
  }
}

// fonction pour reinitialiser l'ordinateur et la valeur entrée par l'utilisateur

function reinitialiserRandom(){
  random = []
  votreNombreArray = []
  votreNombre = 0
}
