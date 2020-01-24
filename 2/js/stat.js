'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100; // Начало координат слева
var CLOUD_Y = 10; // Начало координат сверху
var GAP = 10; // Отступ
var TEXT_HEIGHT = 20; // Высота текста
var FONT_GAP = 20; // Отступ от текста
var ВАR_GAP = 50; // Расстояние между колонками
var BAR_WIDTH = 40; // Ширина столбца гистограммы
var BAR_HEIGHT = 150; // Максимальная высота столбца гистограммы

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// var getMaxElement = function(arr) {
//   var MaxElement = arr[0];

//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i] > maxElement) {
//       maxElement = arr[i];
//     }
//   }

//   return maxElement;
// };

window.renderStatistics = function (ctx, names) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + FONT_GAP + TEXT_HEIGHT);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';

  // var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    //   maxTime     times[I]
    // ----------- = --------
    //  BAR_HEIGHT       X

    ctx.fillText(names[i], CLOUD_X + ВАR_GAP + (BAR_WIDTH + ВАR_GAP) * i, CLOUD_HEIGHT - GAP);
    ctx.fillRect(CLOUD_X + ВАR_GAP + (BAR_WIDTH + ВАR_GAP) * i, 90, BAR_WIDTH, BAR_HEIGHT);
  }
};
