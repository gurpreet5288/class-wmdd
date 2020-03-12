//Variales
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);
const width =512;
const height = 480;  
const backImage= new Image(); 
backImage.src = "images/background.png";
const heroImage= new Image(); 
heroImage.src = "images/rat.png";
const monsterImage= new Image(); 
monsterImage.src = "images/cheese.png";
var monstersCaught = 0;
var keysDown = {};
var gameover=false; 
 
/*** Pass Parameters to Build Dynamic Objects **/
class Monster{
    constructor(){ 
    }
    reset(){
      this.x = 32 + (Math.random() * (canvas.width - 64));
      this.y = 32 + (Math.random() * (canvas.height - 64));    
    }
    drawMonster(){      
      if(!gameover){
        ctx.drawImage(monsterImage, this.x, this.y);
      }
      
    }

}



/*** Pass Parameters to Build Dynamic Objects **/
class Hero {
    constructor(speed){
      this.speed = speed;
      this.size = 32; 
    }
    reset(){
      this.x = canvas.width / 2;; 
      this.y = canvas.height / 2;
    }
    drawHero(){ 
      if(!gameover){       
         ctx.drawImage(heroImage, this.x, this.y);
      }
    }
    update (modifier){
      if (38 in keysDown){ // Player is holding up key
        if(this.y < 0 ){
          this.y = 0;
        }else{
          this.y -= this.speed * modifier;
        } 
      }
      if (40 in keysDown) { // Player is holding down key
        if(this.y >= canvas.height - this.size   ){  
          this.y = canvas.height - this.size ;  
        }else{
          this.y += this.speed * modifier;
        }
      }
      if (37 in keysDown) { // Player is holding left key
        if(this.x < 0 ){
          this.xPos = 0 ;
        }else{
          this.x -= this.speed * modifier;
        }
        
      }
      if (39 in keysDown) { // Player is holding right key
        
        if(this.x >= canvas.width - this.size ){ 
          this.x = canvas.width -  this.size;
        }else{
          this.x += this.speed * modifier;
        }
      }

    }
}


/*** Pass Parameters to Build Dynamic Objects **/
class keyboardcontrols{
  constructor(){
  }
  init(){
    addEventListener("keydown", function (key){
      keysDown[key.keyCode] = true;
    }, false);
    
    addEventListener("keyup", function (key){
      delete keysDown[key.keyCode];
    }, false); 
  }  
  crash(){  
    if (
      hero1.x <= (monster1.x + 32)
      && monster1.x <= (hero1.x + 32)
      && hero1.y <= (monster1.y + 32)
      && monster1.y <= (hero1.y + 32)
    ) {
      ++monstersCaught;
      monster1.reset();
      hero1.reset();
    }
  }

}
/*** Pass Parameters to Build Dynamic Objects **/
class Points {
  constructor( ){
      
  }

}


// Draw everything on the canvas
var render = function () {
  
  if(!gameover){ 
    ctx.drawImage(backImage, 0, 0);
  }
  // Display score and time 
  hero1.drawHero();
  monster1.drawMonster();
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "24px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Monsters caught: " + monstersCaught, 20, 20);
 
    ctx.fillText("Time: " + count, 20, 50);
  if(gameover){ 
    ctx.fillText("Game over!", 200, 220);
  }

  
};
var count = 30; // how many seconds the game lasts for - default 30
var counter =function(){
  count=count-1; // countown by 1 every second
  // when count reaches 0 clear the timer, hide monster and
  // hero and finish the game
  	if (count <= 0)
  	{
  		// stop the timer
     	clearInterval(counter);
     	// set game to finished
     	gameover = true;
     	count=0; 
  	}

}

// timer interval is every second (1000ms)
setInterval(counter, 1000);

// The main game loop
var main = function(){ 

   
    hero1.update(0.02);
    controls.crash(); 
     
    controls.init();



    // run the update function
   /* update(0.02); // do not change
    // run the render function*/
    render();
    // Request to do this again ASAP
    requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!

let monster1 = new Monster();
let hero1 = new Hero(256); 
let controls = new keyboardcontrols();

monster1.reset();    
hero1.reset();    
main(); 
 




 