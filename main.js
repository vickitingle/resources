var main = $('#main');
var game = $('#game');
var ui = $('#ui');

var buildHouseButton = $('#build-house');

var gameData = {};

gameData.count = 0;
gameData.tick = 5;
gameData.intervalCheck = 30;
gameData.popIncrease = 4;
gameData.woodIncrease = 10;
gameData.houseCapacity = 2;
gameData.housedPopulation = 0;

gameData.population = 10; // start with 10 people
var populationCounter = $('.population');
var housedPopCounter = $('.housed-pop');

gameData.buildings = 1; // start with town hall
var buildingsCounter = $('.buildings');

gameData.wood = 200; // start with 200 wood
gameData.houseCost = 100;
var woodCounter = $('.wood');

/* first objective: build homes for people:

To build a home:
- what is the cost?
  - 100 wood
- what is the benefit?
  - houses 2
- what is the outcome?
  - people can only gather resources when they have a home to live in
  - resources can now be gathered
  - more people will be attracted to the town, another 4 every 30 seconds to start with


Gathering wood:
- 1 person = 10 wood per 20 seconds

 */

function buildHouse()
{
  if (gameData.wood >= gameData.houseCost) {
    gameData.buildings += 1;
    buildingsCounter.text(gameData.buildings);
    gameData.wood -= gameData.houseCost;
    woodCounter.text(gameData.wood);
    gameData.housedPopulation += gameData.houseCapacity;
    housedPopCounter.text(gameData.housedPopulation);
  }
}

buildHouseButton.on('click', function() {
  buildHouse();
});
