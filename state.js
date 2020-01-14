window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 /60)

    };
})();


var updateTotals = function() {
  populationCounter.text(gameData.population);
  woodCounter.text(gameData.wood);
};

var loop = function() {
  gameData.count++;
  requestAnimFrame(loop);

  // Every second
  if (gameData.count / 60 >= gameData.intervalCheck) {
    console.log('increasing population');
    gameData.population += (gameData.popIncrease * (gameData.buildings - 1));
    console.log('gathering wood');
    gameData.wood += (gameData.woodIncrease * gameData.housedPopulation);
    gameData.count = 0;
    updateTotals();
  }
};

loop();
