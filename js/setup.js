'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Ирвинг', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго'];
var COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES = ['black', 'red', 'blue', 'yellow', 'green'];

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizards = [
  {
    name: WIZARD_NAMES[(Math.floor(Math.random() * (WIZARD_NAMES.length)))] + ' ' + WIZARD_SURNAMES[(Math.floor(Math.random() * (WIZARD_SURNAMES.length)))],
    coatColor: COAT[(Math.floor(Math.random() * (COAT.length)))],
    eyesColor: EYES[(Math.floor(Math.random() * (EYES.length)))]
  },
  {
    name: WIZARD_NAMES[(Math.floor(Math.random() * (WIZARD_NAMES.length)))] + ' ' + WIZARD_SURNAMES[(Math.floor(Math.random() * (WIZARD_SURNAMES.length)))],
    coatColor: COAT[(Math.floor(Math.random() * (COAT.length)))],
    eyesColor: EYES[(Math.floor(Math.random() * (EYES.length)))]
  },
  {
    name: WIZARD_NAMES[(Math.floor(Math.random() * (WIZARD_NAMES.length)))] + ' ' + WIZARD_SURNAMES[(Math.floor(Math.random() * (WIZARD_SURNAMES.length)))],
    coatColor: COAT[(Math.floor(Math.random() * (COAT.length)))],
    eyesColor: EYES[(Math.floor(Math.random() * (EYES.length)))]
  },
  {
    name: WIZARD_NAMES[(Math.floor(Math.random() * (WIZARD_NAMES.length)))] + ' ' + WIZARD_SURNAMES[(Math.floor(Math.random() * (WIZARD_SURNAMES.length)))],
    coatColor: COAT[(Math.floor(Math.random() * (COAT.length)))],
    eyesColor: EYES[(Math.floor(Math.random() * (EYES.length)))]
  }
];

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}
