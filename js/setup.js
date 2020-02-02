'use strict';

var WIZARD_NAMES = [' Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

// Функция генерирующая случайное число
var getRundomNumber = function (number) {
  return Math.floor(Math.random() * number);
};

var generateWizard = function (wizardsCount) {
  var result = [];
  for (var i = 0; i <= wizardsCount; i++) {
    var randomName = WIZARD_NAMES[getRundomNumber(WIZARD_NAMES.length)];
    var randomSurname = WIZARD_SURNAMES[getRundomNumber(WIZARD_SURNAMES.length)];
    var fullName = randomName + ' ' + randomSurname;
    var randomCoatColor = COAT[getRundomNumber(COAT.length)];
    var randomEyesColor = EYES[getRundomNumber(EYES.length)];
    result.push({
      name: fullName,
      coatColor: randomCoatColor,
      eyesColor: randomEyesColor
    });
  }
  return result;
};

var wizards = generateWizard(WIZARDS_COUNT);
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
