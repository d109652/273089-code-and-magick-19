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
var USER_NAME = 'Вы';

var renderCloud = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color || '#000000';
  ctx.fillRect(x, y, width, height);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP + FONT_GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP + FONT_GAP, CLOUD_Y + GAP + FONT_GAP + TEXT_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    var barHeight = (BAR_HEIGHT * times[i]) / maxTime;
    var barX = CLOUD_X + ВАR_GAP + (BAR_WIDTH + ВАR_GAP) * i;
    var barY = CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HEIGHT - GAP - barHeight;
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], barX, CLOUD_HEIGHT - GAP);

    ctx.fillStyle = names[i] === USER_NAME ? 'rgba(255, 0, 0, 1)' : 'hsl(240,' + Math.random() * 100 + '%, 50%)';
    ctx.fillRect(barX, barY, BAR_WIDTH, barHeight);

    var textHeight = (BAR_HEIGHT * Math.floor(times[i])) / maxTime;
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), barX, CLOUD_Y + CLOUD_HEIGHT - GAP * 3 - textHeight - FONT_GAP);
  }
};
