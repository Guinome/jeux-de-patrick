const prompt = require("prompt");
prompt.start();

const plusOuMoins = async () => {
  const nombreAleatoire = Math.round(Math.random() * 10);
  const option = {
    name: "choix",
    description: "entrer un chiffre entre 1 et 10",
    type: "integer", // Specify the type of input to expect.
    message: "essaye avec des chiffres entiers", // Warning message to display if validation fails.
    required: true, // If true, value entered must be non-empty.
  };
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

plusOuMoins();
