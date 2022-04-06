let hide = document.querySelectorAll(".title");
let text = document.querySelector(".texte");
let array = [hide, text];
/* const texte1 = document.getElementById("text1"); 
const texte2 = document.getElementById("text2"); 
const texte3 = document.getElementById("text3"); 
const texte4 = document.getElementById("text4"); 
const texte5 = document.getElementById("text5");  */

function fonctionClick () {
  if(getComputedStyle(text).display != "none"){
        text.style.display = "none";
      } else {
        text.style.display = "block";
      }
}

/* array.forEach(element => {
  element.addEventListener('click', fonctionClick)
});  */

hide.forEach(monNoeud => {
  monNoeud.addEventListener('click', fonctionClick)
});



                // CA FONCTIONNE SI JE CREE CETTE FONCTION POUR CHAQUE ELEMENT "TITLE" et "TEXTE" :
      // MAIS J'AIMERAIS CREER UNE BOUCLE QUI M'EVITE DE CREER UNE NOUVELLE FONCTION POUR CHAQUE NOUVEAU TITLE ET TEXTE

// $('#title1').click( () => {
//   if(getComputedStyle(texte1).display != "none"){
//     texte1.style.display = "none";
//   } else {
//     texte1.style.display = "block";
//   }
// });

// $('#title2').click( () => {
//   if(getComputedStyle(texte2).display != "none"){
//     texte2.style.display = "none";
//   } else {
//     texte2.style.display = "block";
//   }
// });

// $('#title3').click( () => {
//   if(getComputedStyle(texte3).display != "none"){
//     texte3.style.display = "none";
//   } else {
//     texte3.style.display = "block";
//   }
// });

// $('#title4').click( () => {
//   if(getComputedStyle(texte4).display != "none"){
//     texte4.style.display = "none";
//   } else {
//     texte4.style.display = "block";
//   }
// });

// $('#title5').click( () => {
//   if(getComputedStyle(texte5).display != "none"){
//     texte5.style.display = "none";
//   } else {
//     texte5.style.display = "block";
//   }
// });

                    // CA C'EST RIEN C'EST JUSTE DES ESSAIS QUI N'ONT PAS ABOUTIS 

/* const textes = ["text1", "text2", "text3", "text4", "text5"];
const hides = ["title1", "title2", "title3", "title4", "title5"] */


/* Parcourir le tableau et créer une boucle for :
for i = 1, i < tableau.length alors
faire la fonction de click 
*/ 

// const couple = [texte, hide];

// hides.forEach(function (hides) => {
// addEventListener('click', () => {
//   if(getComputedStyle(textes).display != "none") {
//     textes.style.display = "none";
//   } else {
//     textes.style.display = "block";
//  }
// });

// [textes].forEach(item => {
//   item.addEventListener('click', () => {
//     if(getComputedStyle(textes).display != "none"){
//       textes.style.display = "none";
//     } else {
//       textes.style.display = "block";
//     }
//   })
// })

/* for(let i = 1; i < hides.lenght; i++)
  $(hide(i)).click( () => {
    if(getComputedStyle(textes).display != "none"){
      textes.style.display = "none";
    } else {
      textes.style.display = "block";
    }
  }) */
  