'use strict';

console.log('app.js is running');

/*********************************************************************** */
/*********************************************************************** */
/*************** create system variables *****************/
/*********************************************************************** */
/*********************************************************************** */
var userMsg = false;
var myTimer = void 0;

var sysTimer = function sysTimer() {
  if (userMsg) {
    userMsg = false;
  } else {
    clearInterval(myTimer);
    messages.innerHTML = '';
  }
};

/*********************************************************************** */
/*********************************************************************** */
/*************** create "user" object for jsx processing *****************/
/*********************************************************************** */
/*********************************************************************** */
var user = {
  name: 'Jack',
  age: 22,
  location: 'Vancouver',
  gold: 100,
  silver: 375,
  health: 200,
  maxHealth: 375,
  stamina: 150,
  maxStamina: 450

  /*********************************************** */
  /*********************************************** */
  /*************** Hud Container Code **************/
  /*********************************************** */
  /*********************************************** */

};var renderHud = function renderHud() {
  var Hud = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'HUD'
    ),
    React.createElement(
      'h2',
      null,
      'User Status:'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        'Character Name: ',
        user.name ? user.name : 'Anonymous',
        ' '
      ),
      React.createElement(
        'li',
        null,
        'Age : ',
        user.age
      ),
      React.createElement(
        'li',
        null,
        'Location : ',
        user.location
      ),
      React.createElement(
        'li',
        null,
        'Remaining Health : ',
        user.health + '/' + user.maxHealth
      ),
      React.createElement(
        'li',
        null,
        'Remaining Stamina: ',
        user.stamina + '/' + user.maxStamina
      ),
      React.createElement(
        'li',
        null,
        'Account Balance : ',
        user.gold,
        ' Gold; ',
        user.silver,
        ' Silver'
      )
    )
  );
  ReactDOM.render(Hud, hudContainer);
};
renderHud();

var addHealth = function addHealth() {
  //alert('Health Button Clicked');
  //clearInterval(myTimer);
  if (user.gold >= 10 && user.health + 10 <= user.maxHealth) {
    user.health += 10;
    user.gold -= 10;
    renderHud();
    renderUpdateHealth();
    messages.innerHTML = 'Extra Helath Added - Account Charged 10 Gold';
    userMsg = true;
    myTimer = setInterval(sysTimer, 2000);
  }
};
var renderUpdateHealth = function renderUpdateHealth() {
  var UpdateHealth = React.createElement(
    'div',
    null,
    React.createElement(
      'h2',
      null,
      ' Purchase Additional Health'
    ),
    React.createElement(
      'p',
      null,
      'Add to Health (10 gold for 10 HP):',
      React.createElement(
        'button',
        { disabled: user.gold < 10, onClick: addHealth, className: 'button' },
        user.gold >= 10 ? 'Click to Add Health' : 'Insufficient Gold'
      )
    )
  );
  ReactDOM.render(UpdateHealth, healthContainer);
};

renderUpdateHealth();

/*********************************************************** */
/*********************************************************** */
/*************** ChangeLocation Container Code ************* */
/*********************************************************** */
/*********************************************************** */

var chgLocation = function chgLocation() {
  //alert('Location Button Clicked');
  if (user.silver >= 200) {
    user.silver -= 200;
    user.location = newLocation.value;
    renderHud();
    renderRelocate();
    messages.innerHTML = 'location updated - ' + user.location;
    newLocation.value = '';
    userMsg = true;
    myTimer = setInterval(sysTimer, 2000);
  }
};

var renderRelocate = function renderRelocate() {
  var relocate = React.createElement(
    'div',
    null,
    React.createElement(
      'h2',
      null,
      ' Change Locations'
    ),
    React.createElement('input', { type: 'text', id: 'newLocation' }),
    React.createElement(
      'div',
      null,
      'Teleport to new Location (200 silver)',
      React.createElement(
        'button',
        { disabled: user.silver < 200, onClick: chgLocation, className: 'button' },
        user.silver >= 200 ? 'Go' : 'Insufficient Gold'
      )
    )
  );
  ReactDOM.render(relocate, formContainer);
};

renderRelocate();

/*********************************************************** */
/*********************************************************** */
/*************** Game of Chance Container Code ************* */
/*********************************************************** */
/*********************************************************** */
var goldArray = [0, 1, 2, 3, 5, 10];

var playGold = function playGold() {
  //alert('Gold Button Clicked');
  clearInterval(myTimer);
  user.gold--;
  var tmpArr = [];
  var randomNum = 0;
  var prize = 0;
  for (var i = 0; i < goldArray.length; i++) {
    tmpArr.push(0);
  }
  for (var _i = 0; _i < 1000; _i++) {
    randomNum = Math.floor(Math.random() * goldArray.length);
    tmpArr[randomNum]++;
  }
  tmpArr[tmpArr.length - 1] *= .9;
  tmpArr[0] *= .95;
  prize = Math.max.apply(Math, tmpArr);
  prize = tmpArr.indexOf(prize);
  prize = goldArray[prize];
  if (prize > 0) {
    user.gold += prize;
    messages.innerHTML = 'Congratulation !!! you won ' + prize + ' Gold ';
  } else {
    messages.innerHTML = 'Sorry,Try Again';
  }
  renderHud();
  userMsg = true;
  myTimer = setInterval(sysTimer, 2000);
};

var silverArray = [0, 1, 2, 3, 5, 10];

var playSilver = function playSilver() {
  //alert('Silver Button Clicked');
  clearInterval(myTimer);
  user.silver--;
  var tmpArr = [];
  var randomNum = 0;
  var prize = 0;
  for (var i = 0; i < silverArray.length; i++) {
    tmpArr.push(0);
  }
  for (var _i2 = 0; _i2 < 1000; _i2++) {
    randomNum = Math.floor(Math.random() * silverArray.length);
    tmpArr[randomNum]++;
  }
  tmpArr[tmpArr.length - 1] *= .9;
  tmpArr[0] *= .95;
  prize = Math.max.apply(Math, tmpArr);
  prize = tmpArr.indexOf(prize);
  prize = silverArray[prize];
  if (prize > 0) {
    user.silver += prize;
    messages.innerHTML = 'Congratulation !!! you won ' + prize + ' Silver ';
  } else {
    messages.innerHTML = 'Sorry,Try Again';
  }
  renderHud();
  userMsg = true;
  myTimer = setInterval(sysTimer, 2000);
};

var renderGame = function renderGame() {
  var play = React.createElement(
    'div',
    null,
    React.createElement(
      'h2',
      null,
      ' Game of Chance'
    ),
    React.createElement(
      'h3',
      null,
      ' Gold play Prizes'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        '1st Prize: 10 Gold Coins'
      ),
      React.createElement(
        'li',
        null,
        '2nd Prize: 5 Gold Coins'
      ),
      React.createElement(
        'li',
        null,
        '3rd Prize: 3 Gold Coins'
      ),
      React.createElement(
        'li',
        null,
        '4th Prize: 2 Gold Coins'
      ),
      React.createElement(
        'li',
        null,
        'Draw : 1 Gold Coin'
      ),
      React.createElement(
        'li',
        null,
        'lose : 0 Gold Coin'
      )
    ),
    React.createElement(
      'button',
      { onClick: playGold, className: 'button' },
      'Click Me'
    ),
    React.createElement(
      'h3',
      null,
      ' Silver play Prizes'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        '1st Prize: 10 Silver Coins'
      ),
      React.createElement(
        'li',
        null,
        '2nd Prize: 5 Silver Coins'
      ),
      React.createElement(
        'li',
        null,
        '3rd Prize: 3 Silver Coins'
      ),
      React.createElement(
        'li',
        null,
        '4th Prize: 2 Silver Coins'
      ),
      React.createElement(
        'li',
        null,
        'Draw : 1 Silver Coin'
      ),
      React.createElement(
        'li',
        null,
        'lose : 0 Silver Coin'
      )
    ),
    React.createElement(
      'button',
      { onClick: playSilver, className: 'button' },
      'Click Me'
    )
  );
  ReactDOM.render(play, gameContainer);
};

renderGame();

/*
let numbers = [];
for (let i=2; i <= 20; i+=2) {
  numbers.push(i);
}

function makeList() {
  return numbers.map((number) => <li>Jack-{number}</li>)
}

let name = "jack Smith";
let element = <p>This is here via JSX<br/>Here is a generated list: <ul>{makeList()}</ul></p>;

ReactDOM.render(element, testReact);*/
