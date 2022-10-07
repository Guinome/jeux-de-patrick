const prompt = require("prompt");
prompt.start();

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
