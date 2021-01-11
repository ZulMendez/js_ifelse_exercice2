// Exo 1

// let nombre1 = prompt('entrez un nombre1');
// let nombre2 = prompt('entrez un nombre2');

// if (nombre1 == nombre2) {
//     alert(`Le ${nombre1} et le ${nombre2} sont-ils égaux ? : oui`);
// }
// else {
//     alert(`Le ${nombre1} et le ${nombre2} sont-ils égaux ? : non`)
// }

// // Exo 2

// let nomb1 = prompt('entrez un nombre1');
// let nomb2 = prompt('entrez un nombre2');

// if (nomb1 < nomb2) {
//     alert(`Le ${nomb1} est plus petit que le ${nomb2} ? : oui`);
// }
// else {
//     alert(`Le ${nomb1} est plus petit que le ${nomb2} ? : non`)
// }

// Exo 3

// let num1 = parseInt(prompt('Entrez un numéro1'));
// let num2 = parseInt(prompt('Entrez un numéro2'));
// let num3 = parseInt(prompt('Entrez un numéro3'));

// if ((num1 + num2) > num3) {
//     alert(`La somme du ${num1}
//     + le ${num2} est-elle plus grande que le ${num3} ? : true`)
// }
// else {
//     alert(`La somme du ${num1}
//     + le ${num2} est-elle plus grande que le ${num3} ? : false`)
// }

// Exo 4

// let phrase = prompt('Entrez votre phrase')
// let estim = prompt("Entrez votre estimation")

// if (phrase.length == estim) {
//     alert(`votre estimation est correct`)
// }
// else {
//     alert(`Incorrect tu étais à ${phrase.length - estim} unités de la bonne réponse !`)
// }


// Exo 5

// let prenom = prompt('Votre prénom?')

// if (prenom == "") {
//     prompt(`Attention vous devez remplir le
//     champs ci-dessous, Quel est votre prénom ?`)
// }
// else {
//     alert(`Bonjour ${prenom}`)
// } 

// Exo 6

// let abo = confirm('voulez vous vous abonner?')

// if (abo == true) {
//     let preg1 = prompt('quelle formule voulez-vous prendre: Luxe ou Normal')
//         if (preg1 == 'Luxe') {
//             alert('Félicitation vous avez choisis la formule Luxe')
//         }
//         else if (preg1 == 'Normal') {
//             alert('Merci pour votre abonnement.')
//         }
//         else if (preg1 == "") {
//             let preg2 = confirm('êtes vous certain?') 
//             if (preg2 == true)
//                 alert(`c'est dommage, bonne journée`)
//             else {
//                 alert(`quelle formule voulez-vous prendre: Luxe ou Normal`)
//             }
//         }
// }
// else {
//     alert(`merci pour votre réponse`)
// }

// Exo 7

// let quizz1 = prompt(`quelle est la capital du Paraguay?`);
// let quizz2 = prompt(`quelle est la capital du Pérou?`);

// let rep1 = 'asuncion';
// let rep2 = 'lima';

// if (quizz1 != rep1 && quizz2 != rep2) {
//     alert(`tu as échoué`)
// }
// else if (quizz1 != rep1 && quizz2 == rep2 || quizz1 == rep1 && quizz2 != rep2) {
//     if (quizz1 != rep1 && quizz2 == rep2) {
//         alert(`tu y est presque, la réponse pour "${rep1}" de la question 1 est incorrecte`)
//     }
//     else if (quizz1 == rep1 && quizz2 != rep2) {
//         alert(`tu y est presque, la question pour "${rep2}" de la question 2 est incorrecte`)
//     }
// }
// else {
//     alert(`félicitations, tu as réussi!`)
// } 

// Exo 8

// let age = prompt('Entrez votre âge')

// if (age > 100) {
//     alert (`vous êtes encore vivant ? Évitez de voir ce film pour le
//     rester`)
// }
// else if (age < 0) {
//     alert(`vous n’êtes même pas nés, n’essayez pas de tricher`)
// }
// else if (age < 18) {
//     alert(`vous êtes mineur, l’accès est réservé aux grands`)
// }
// else if (age > 18) {
//     alert(`vous êtes majeur, vous pouvez réserver`)
// }
// else {
//     alert(`vous pouvez rentrer mais c’est tout juste`)
// }    

// Exo 9

let ask1 = prompt(`est-ce que vous êtes riche ?`);
let ask2 = prompt(`voulez-vous partir en vacances ?`);
let ask3 = prompt(`est-ce que vous avez un chat ?`);

if (ask2 == non) {
    alert(`pas de problème, ne partez pas en vacance`)
}
else if (ask1 == non || ask3 == oui) {
    alert(`Même si vous le voulez, vous ne pouvez pas partir`)
}
else if (ask1 == oui && ask3 == non) {
    alert(`Vous pourriez partir en vacance si vous le voulez`)
}
else if (ask1 == oui && ask3 == non && ask2 == oui) {
    alert(`Tout est parfait, partez en
    vacance !`)
}

// if (ask1 == non || ask3 == oui || ask2 == non)

// partie à vérifier

// if (vacances == "oui" ) {

//     if (riche == "non" || chat == "oui") {
//         alert("Meme si vous voulez, vous ne pouvez pas partir");

//     } else if (riche == "oui" && chat == "non") {
//         alert("Tout est parfait, partez en vacances");

//     } else if (riche == "oui" || chat == "non") {
//         alert("InchAllah, t'es riche sinon tu reste a la dar a fou")
//     }

// } else {
//     alert("Pas de problème, ne partez pas en vacances");
// }

