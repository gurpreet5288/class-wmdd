console.log('app.js is running');



/*********************************************************************** */  
/*********************************************************************** */
/*************** create system variables *****************/
/*********************************************************************** */
/*********************************************************************** */
let userMsg = false;
let myTimer;

let sysTimer = () =>{
  if(userMsg){
    userMsg = false;
  }else{
    clearInterval(myTimer);
    messages.innerHTML = '';
  }
} 


/*********************************************************************** */  
/*********************************************************************** */
/*************** create "user" object for jsx processing *****************/
/*********************************************************************** */
/*********************************************************************** */
let user = {
    name: 'Jack', 
    age: 22,
    location : 'Vancouver',
    gold : 100,
    silver : 375,
    health : 200,
    maxHealth : 375,
    stamina : 150,
    maxStamina : 450
}


/*********************************************** */  
/*********************************************** */
/*************** Hud Container Code **************/
/*********************************************** */
/*********************************************** */

let renderHud = () => {
    let Hud  = (
        <div>
            <h1>HUD</h1> 
            <h2>User Status:</h2>
            <ul>
                <li>Character Name: {user.name?user.name : 'Anonymous'} </li>
                <li>Age : {user.age}</li> 
                <li>Location : {user.location}</li> 
                <li>Remaining Health : {user.health + '/' + user.maxHealth}</li> 
                <li>Remaining Stamina: {user.stamina  + '/' + user.maxStamina}</li>  
                <li>Account Balance : {user.gold} Gold; {user.silver} Silver</li> 
            </ul>
        </div>
    );
    ReactDOM.render(Hud,hudContainer);  
}
renderHud();



let addHealth = () => {
    //alert('Health Button Clicked');
    //clearInterval(myTimer);
    if(user.gold >= 10 && user.health + 10 <= user.maxHealth){
        user.health += 10;
        user.gold -=10; 
        renderHud(); 
        renderUpdateHealth();
        messages.innerHTML = 'Extra Helath Added - Account Charged 10 Gold';
        userMsg = true;
        myTimer = setInterval(sysTimer,2000);
    }
}
const renderUpdateHealth = () => {
  let UpdateHealth = (
      <div>
        <h2> Purchase Additional Health</h2>
        <p>Add to Health (10 gold for 10 HP):
        <button disabled={user.gold <10} onClick={addHealth} className="button">{user.gold >=10?'Click to Add Health': 'Insufficient Gold'}</button></p>
      </div>
  );
  ReactDOM.render(UpdateHealth,healthContainer); 

}

renderUpdateHealth();



/*********************************************************** */  
/*********************************************************** */
/*************** ChangeLocation Container Code ************* */
/*********************************************************** */
/*********************************************************** */


let chgLocation = () => {
    //alert('Location Button Clicked');
    if(user.silver >= 200){  
      user.silver -=200; 
      user.location = newLocation.value;
      renderHud();  
      renderRelocate();  
      messages.innerHTML = 'location updated - '+user.location;
      newLocation.value='';
      userMsg = true;
      myTimer = setInterval(sysTimer,2000);
    }
}

const renderRelocate = () => {
  let relocate = (
      <div>
        <h2> Change Locations</h2> 
        <input type="text" id="newLocation"></input>
        <div>
          Teleport to new Location (200 silver)
          <button disabled={user.silver <200} onClick={chgLocation} className="button">{user.silver >=200?'Go' : 'Insufficient Gold'}</button>
         </div>
      </div>
  );
  ReactDOM.render(relocate,formContainer); 

}

renderRelocate();






/*********************************************************** */  
/*********************************************************** */
/*************** Game of Chance Container Code ************* */
/*********************************************************** */
/*********************************************************** */
let goldArray = [0,1,2,3,5,10];


let playGold = () => {
  //alert('Gold Button Clicked');
  clearInterval(myTimer);
  user.gold--;
  let tmpArr = [];
  let randomNum = 0;
  let prize =0;
  for(let i=0;i<goldArray.length;i++){
    tmpArr.push(0);
  }
  for(let i=0;i<1000;i++){
      randomNum = Math.floor(Math.random()*goldArray.length);
      tmpArr[randomNum]++;
  }
  tmpArr[tmpArr.length -1] *= .9;
  tmpArr[0] *= .95;
  prize = Math.max(...tmpArr);
  prize = tmpArr.indexOf(prize)
  prize = goldArray[prize];
  if(prize >0 ){
    user.gold += prize;
    messages.innerHTML = `Congratulation !!! you won ${prize} Gold `;
  }else{
    messages.innerHTML = `Sorry,Try Again`;
  }
  renderHud();
  userMsg = true;
  myTimer = setInterval(sysTimer,2000);
}


let silverArray = [0,1,2,3,5,10];

let playSilver = () => {
  //alert('Silver Button Clicked');
  clearInterval(myTimer);
  user.silver--;
  let tmpArr = [];
  let randomNum = 0;
  let prize =0;
  for(let i=0;i<silverArray.length;i++){
    tmpArr.push(0);
  }
  for(let i=0;i<1000;i++){
      randomNum = Math.floor(Math.random()*silverArray.length);
      tmpArr[randomNum]++;
  }
  tmpArr[tmpArr.length -1] *= .9;
  tmpArr[0] *= .95;
  prize = Math.max(...tmpArr);
  prize = tmpArr.indexOf(prize);
  prize = silverArray[prize];
  if(prize >0 ){
    user.silver += prize;
    messages.innerHTML = `Congratulation !!! you won ${prize} Silver `;
  }else{
    messages.innerHTML = `Sorry,Try Again`;
  }
  renderHud();
  userMsg = true;
  myTimer = setInterval(sysTimer,2000);



}

const renderGame = () => {
  let play = (
      <div>
        <h2> Game of Chance</h2> 
        <h3> Gold play Prizes</h3> 
        <ul>
            <li>1st Prize: 10 Gold Coins</li>
            <li>2nd Prize: 5 Gold Coins</li>
            <li>3rd Prize: 3 Gold Coins</li>
            <li>4th Prize: 2 Gold Coins</li>
            <li>Draw : 1 Gold Coin</li>
            <li>lose : 0 Gold Coin</li>
        </ul> 
        <button onClick={playGold} className="button">Click Me</button>
        <h3> Silver play Prizes</h3> 
        <ul>
            <li>1st Prize: 10 Silver Coins</li>
            <li>2nd Prize: 5 Silver Coins</li>
            <li>3rd Prize: 3 Silver Coins</li>
            <li>4th Prize: 2 Silver Coins</li>
            <li>Draw : 1 Silver Coin</li>
            <li>lose : 0 Silver Coin</li>
        </ul>
        
        
          <button onClick={playSilver} className="button">Click Me</button>
         
      </div>
  );
  ReactDOM.render(play,gameContainer); 

}

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
  
  