// Création d'un quizz en JS
// D'abord créé un tableau d'objets contenant les questions, les réponses vraies et les réponses fausses
const questions = [
  {
    question: "Quel est l'âge du Capitaine ?", // Question posée
    reponseVraie: "42 ans", // Réponse correcte
    reponsesFausses: ["101 ans", "18 ans"], // Réponses incorrectes
  },
  {
    question: "Quelle est la différence entre 2 pigeons ?", // Question posée
    reponseVraie: "La longueur des pattes", // Réponse correcte
    reponsesFausses: ["Glu", "Waff"], // Réponses incorrectes
  },
  {
    question: "Qu'est-ce qui est jaune et qui attend ?", // Question posée
    reponseVraie: "Jonathan", // Réponse correcte
    reponsesFausses: ["Homer Simpson", "un citron préssé"], // Réponses incorrectes
  },
  {
    question:
      "Quel est le contraire de l'opposé de l'inverse de la négation de la somme de 2 et de 3 ?", // Question posée
    reponseVraie: "5", // Réponse correcte
    reponsesFausses: ["-5", "0"], // Réponses incorrectes
  },
];

// Création d'une fonction quizz qui va afficher les questions et les réponses possibles
const quizz = () => {
  alert(`Bienvenue sur ce quizz !`); // Message de bienvenue
  alert(
    `Vous allez répondre \n à ${questions.length} questions,  \n bonne chance !`
  ); // Indique le nombre de questions
  let bonnesReponses = 0; // Compteur pour les bonnes réponses

  // Boucle à travers chaque question
  for (let i = 0; i < questions.length; i++) {
    const { question, reponseVraie, reponsesFausses } = questions[i]; // Récupère la question et les réponses
    const reponsesMelangees = [reponseVraie, ...reponsesFausses].sort(
      () => Math.random() - 0.5
    ); // Mélange les réponses
    let reponseUtilisateur; // Variable pour stocker la réponse de l'utilisateur
    let reponseValide = false; // Indicateur pour vérifier la validité de la réponse

    // Boucle pour s'assurer que l'utilisateur entre une réponse valide
    while (!reponseValide) {
      reponseUtilisateur = prompt(
        `Question ${i + 1} sur ${questions.length}:\n${question}\n1: ${
          reponsesMelangees[0]
        }\n2: ${reponsesMelangees[1]}\n3: ${reponsesMelangees[2]}`
      ); // Demande à l'utilisateur de choisir une réponse
      // Vérification si l'utilisateur a cliqué sur "Annuler"
      if (reponseUtilisateur === null) {
        alert("Quizz annulé."); // Message d'annulation
        return; // Sort de la fonction quizz pour annuler le quizz
      }

      // Vérification si la réponse est valide
      if (["1", "2", "3"].includes(reponseUtilisateur)) {
        reponseValide = true; // Si valide, sort de la boucle
      } else {
        alert("Non, petit malin, Ce n'est pas possible"); // Message d'erreur si la réponse n'est pas valide
      }
    }
    // Vérification si la réponse est correcte
    if (reponsesMelangees[parseInt(reponseUtilisateur) - 1] === reponseVraie) {
      bonnesReponses++; // Incrémente le compteur si la réponse est correcte
    }
  }
  // Vérifie si le nombre de bonnes réponses est inférieur à 2
  if (bonnesReponses < 2) {
    // Affiche un message indiquant le nombre de bonnes réponses (singulier)
    alert(
      `Vous avez ${bonnesReponses} bonne réponse sur ${questions.length} questions.`
    );
  } else {
    // Affiche un message indiquant le nombre de bonnes réponses (pluriel)
    alert(
      `Vous avez ${bonnesReponses} bonnes réponses sur ${questions.length} questions.`
    );
  }
}; // Ajout de la parenthèse fermante manquante pour la fonction quizz
quizz();
