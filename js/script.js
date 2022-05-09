let amountNumberMeal4 = [
  600, 100, 2, 2, 1, 3, 2, 60, 1, 1, 1, 6, 1, 3, 1, 40, 1,
];
let ingredients4 = [
  'Hähnchenbrustfilet(s)',
  'Joghurt, am besten mit 10% Fett',
  'Knoblauch, gepresst',
  'Ingwer, frisch, gerieben',
  'Garam Masala',
  'Salz',
  'Kurkuma',
  'Kurkuma',
  'Butter',
  'Zwiebel(n)',
  'Kreuzkümmel',
  'Tomatenmark',
  'Kardamomkapsel(n)',
  'Nelkenpulver',
  'Chiliflocken',
  'Koriander',
  'Sahne',
  'Pfeffer',
];
let unit4 = [
  'g',
  'g',
  'TL',
  'EL',
  'STK',
  'TL',
  'EL',
  'g',
  'g',
  'TL',
  'EL',
  'STK',
  'TL',
  'TL',
  'TL',
  'ml',
  'TL',
];

let amountNumberMeal2 = [1, 200, 3, 200, 250, 1, 1, 1, 4, 2];
let ingredients2 = [
  'Orange',
  'Orangensaft',
  'Backpulver',
  'Mehl',
  'Milch',
  'Zitronensaft',
  'Vanillezucker',
  'Salz',
  'Eier',
  'Butterschmalz',
];
let unit2 = ['Stk', 'ml', 'Tl', 'g', 'ml', 'EL', 'Pk.', 'Prise', 'KL.M', 'EL'];

let amountNumberMeal1 = [
  '25',
  '1',
  '1',
  '4',
  '1',
  '3',
  '1',
  '1',
  '350',
  '1',
  '1',
  '150',
  '100',
  '3',
  '150',
  '2',
  '1600',
];
let ingredients1 = [
  'Chiliflocken',
  'Salz',
  'Pfeffer',
  'Tabasco',
  'Kleine Zwiebel',
  'Knoblauchzehen',
  'Limette',
  'Öl',
  'Rinderhackfleisch',
  'Kreuzkümmel',
  'Ingwerpulver',
  'Vollmilch Jogurt',
  'Mini Römersalar',
  'Tomaten',
  'Mais',
  'Grüne Paprika',
  'Tacoshell',
];
let unit1 = [
  'g',
  'TL',
  'TL',
  'EL',
  'STK',
  'STK',
  'STK',
  'EL',
  'g',
  'TL',
  'EL',
  'g',
  'g',
  'STK',
  'g',
  'STK',
  'g',
];

let amountNumberMeal0 = [1, 180, 1, 2, 1, 0.5, 0.5];
let ingredients0 = [
  'Burger Bun',
  'Rinderhacckfleisch mit 20-25% Fett',
  'Gemüsezwiebel',
  'Scheiben Kerrygold Burger Cheddar',
  'Butter',
  'Salz',
  'Pfeffer',
];
let unit0 = ['STK', 'g', 'STK', 'STK', 'EL', 'TL', 'TL'];

let languageIds = [
  'home-button-header',
  'recipe-of-the-day',
  'imprint-header',
  'contact-link-header',
  'mainpage-section1-h2-1',
  'mainpage-section1-p-1',
  'mainpage-section1-link-1',
  'mainpage-section2-h2-1',
  'mainpage-section2-h3-1',
  'mainpage-section2-h3-2',
  'mainpage-section2-h3-3',
  'mainpage-section3-title',
  'mainpage-section3-ol-1',
  'mainpage-section3-p-1',
  'mainpage-section3-ol-2',
  'mainpage-section3-p-2',
  'mainpage-section3-ol-3',
  'mainpage-section3-p-3',
  'mainpage-section3-ol-4',
  'mainpage-section3-p-4',
  'home-button-footer',
  'imprint-footer',
  'privacy-footer',
  'contact-link-footer',
];

let languageDE = [
  //mainpage
  'Start',
  'Rezept des Tages',
  'Impressum',
  'Kontakt',
  'Chicken Butter',
  'Das Murgh Makahni ist für den Einstieg in der Welt der Curries bestens geeignet, denn die Zutaten sind alle leicht aufzutreiben! Ein wahres Geschmackserlebnis!',
  'Rezept öffnen',
  'Lust auf was Neues?',
  'Onion Burger',
  'Tacos',
  'Pancakes',
  '4 Gründe, Warum du selber kochen solltest',
  'Die Zutaten sind bekannt',
  'Weißt du welche Zutaten in deinem Lieblingsimbiss genutzt werden? Wahrscheinlich nicht.',
  'Du achtest mehr auf die Nährwerte',
  'Kontrolliertes Kochen hilft dir den Überblick über Nährstoffe zu behalten.',
  'Spart Geld',
  'Eine effizient geführte Nahrungsmittelkammer hat potenzial.',
  'Kochen ist entspannend',
  'Leg deine Lieblingsmusik auf, die Zutaten und das Rezept zurecht und fang an.',
  'Start',
  'Impressum',
  'Datenschutz',
  'Kontakt',
  //meal1
];

let languageEN = [
  //mainpage
  'Home',
  'Recipe of the day',
  'Imprint',
  'Contact',
  'Chicken Butter',
  'The Murgh Makahni is perfect for beginners in the world of curries, because the ingredients are all easy to find! A true taste experience!',
  'Open recipe',
  'Want to try something new?',
  'Onion Burger',
  'Tacos',
  'Pancakes',
  '4 Reasons Why You Should Cook Yourself',
  'The ingredients are known',
  'Do you know what ingredients are used in your favorite snack? Probably not.',
  'You pay attention to the nutritional values',
  'Controlled cooking helps you keep track of nutrients.',
  'Saves money',
  'An efficiently managed food pantry has potential.',
  'Cooking is relaxing',
  'Put on your favorite music, the ingredients and the recipe and get started.',
  'Home',
  'Imprint',
  'Privacy',
  'Contact',
];

function de() {
  for (let i = 0; i < languageIds.length; i++) {
    document.getElementById(`${languageIds[i]}`).innerHTML = `${languageDE[i]}`;
  }
}

function en() {
  for (let i = 0; i < languageIds.length; i++) {
    document.getElementById(`${languageIds[i]}`).innerHTML = `${languageEN[i]}`;
  }
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName('*');
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute('w3-include-html');
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = 'Page not found.';
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute('w3-include-html');
          includeHTML();
        }
      };
      xhttp.open('GET', file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

let amountIdMeal = [];
let amountNumberMeal = [];

function calc(amountNumberMeal, ingredients, unit) {
  let amount = +document.getElementById('number').value;
  let row = 1;

  if (amount < 1) {
    amount = 1;
  } else {
    document.getElementById(`table-contain`).innerHTML = ' ';
  }

  for (let i = 0; i < amountNumberMeal.length; i++) {
    if (i % 2 == 0) {
      row = 1;
    } else {
      row = 2;
    }
    let id0 = 'amountMeal' + i;
    let id1 = 'amountIng' + i;
    let id2 = 'amountUni' + i;

    document.getElementById(`table-contain`).innerHTML += `
      <tr class="row-${row}">
        <td id="${id0}" class=" one">${amount * amountNumberMeal[i]}</td>
        <td id="${id2}" class=" two">${unit[i]}</td>
        <td id="${id1}" class=" three">${ingredients[i]}</td>  
      </tr>`;
  }
}

function mealOfTheDay() {
  let day = new Date().getDate();

  if (day % 3 == 0) {
    window.location.replace('meal1.html');
  }
  if (day % 3 == 1) {
    window.location.replace('meal2.html');
  }
  if (day % 3 == 2) {
    window.location.replace('meal3.html');
  }
  if (day % 3 == 3) {
    window.location.replace('meal4.html');
  }
}
