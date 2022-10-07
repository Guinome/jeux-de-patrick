const prompt = require("prompt");
prompt.start();

const nombreAleatoire = Math.round(Math.random() * 10);
const option = {
  name: "choix",
  description: "entrer un chiffre entre 1 et 10",
  type: "integer", // Specify the type of input to expect.
  message: "essaye avec des chiffres entiers", // Warning message to display if validation fails.
  required: true, // If true, value entered must be non-empty.
};

const plusOuMoins = async () => {
  for (let index = 0; index < 100; index++) {
    // demander un nombre
    const { choix } = await prompt.get(option);

    // tester le nombre
    if (nombreAleatoire < choix) {
      console.log("tu es trop haut");
    }
    if (nombreAleatoire > choix) {
      console.log("tu es trop bas");
    }
    if (nombreAleatoire === choix) {
      console.log("you win");
      break;
    }
  }
};

// plusOuMoins();

const pendu = async () => {
  const motaTrouver = "apprendre";

  let resultat = new Array(motaTrouver.length + 1).join("_").split("");
  let nombreDeCoupsRestant = 5;

  for (let index = 0; index < 100; index++) {
    // demande d'une lettre
    const { lettre } = await prompt.get({
      name: "lettre",
      description: "entrer une lettre pour trouver le mot",
      type: "string",
      pattern: "^[a-z]$",
      message: "Attention une seule lettre, en minuscule",
      required: true,
    });

    // Si la lettre n'existe pas dans le motaTrouver
    if (!motaTrouver.includes(lettre)) {
      nombreDeCoupsRestant--;
      console.log("il te reste " + nombreDeCoupsRestant + " coups");
    }

    // Remplacement de la lettre
    for (let index = 0; index < motaTrouver.length; index++) {
      if (motaTrouver[index] === lettre) {
        resultat[index] = lettre;
      }
    }

    // Si perdu
    if (nombreDeCoupsRestant === 0) {
      console.log("tu as perdu");
      break;
    }

    // Ecrire le resultat
    console.log(resultat.join(""));
  }
};

pendu();
