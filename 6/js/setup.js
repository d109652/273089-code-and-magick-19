'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var WIZARD_NAMES = [' Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_COUNT = 4;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var coatColorInput = document.querySelector('input[name=coat-color]');
var eyesColorInput = document.querySelector('input[name=eyes-color]');
var fireballColorInput = document.querySelector('input[name=fireball-color]');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

// Функция генерирующая случайное число
var getRundomNumber = function (number) {
  return Math.floor(Math.random() * number);
};

// Открытие/закрытие окна
var onPopupCloseByEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupCloseByEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupCloseByEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

// Изменение цвета мантии персонажа по нажатию
var changeElementColor = function (elementColor, arrayColor, inputColor, styleProperty) {
  var newColor = arrayColor[getRundomNumber(arrayColor.length)];
  elementColor.style[styleProperty] = newColor;
  inputColor.value = newColor;
};

// Валидация формы
var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

// Фокус на инпуте с именем - отключаем закрыти по ESC
userNameInput.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupCloseByEscPress);
});

userNameInput.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupCloseByEscPress);
});

// Ловим клик и меняем цвет элементов
wizardCoat.addEventListener('click', function () {
  changeElementColor(wizardCoat, COAT, coatColorInput, 'fill');
});

wizardCoat.addEventListener('click', function () {
  changeElementColor(wizardEyes, EYES, eyesColorInput, 'fill');
});

wizardCoat.addEventListener('click', function () {
  changeElementColor(wizardFireball, FIREBALL, fireballColorInput, 'background');
});

// Поиск template
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

// Cоздание 4 подобных магов
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
setup.querySelector('.setup-similar').classList.remove('hidden');
