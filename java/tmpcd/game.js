//Variales
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);
 
const backImage= new Image(); 
backImage.src = "images/background.png";
const ratImage= new Image(); 
ratImage.src = "images/rat.png";
/*const cheeseImage= new Image();  
cheeseImage.onload = function () { 
  cheeseImage = true;
};
*/


cheeseImage.src = "images/cheese.png";
var CheesesCaught = 0;
var keysDown = {};
var gameover=false; 
var count =2;



  
class Cheese{
    constructor(){ 
      this.cheeseImage = new Image();
    }
    reset(){
      this.x = 32 + (Math.random() * (canvas.width - 64));
      this.y = 32 + (Math.random() * (canvas.height - 64));    
    }
    drawCheese(){      
      if(!gameover){
        ctx.drawImage(cheeseImage, this.x, this.y);
      }
      
    }

}


 
class Rat {
    constructor(speed){
      this.speed = speed;
      this.size = 32;  
    }
    reset(){
      this.x = canvas.width / 2;; 
      this.y = canvas.height / 2;
    }
    drawRat(){ 
      if(!gameover){       
         ctx.drawImage(ratImage, this.x, this.y);
      }
    }
    update (modifier){
      if (38 in keysDown){ //   up key
        if(this.y < 0 ){
          this.y = 0;
        }else{
          this.y -= this.speed * modifier;
        } 
      }
      if (40 in keysDown) { //   down key
        if(this.y >= canvas.height - this.size   ){  
          this.y = canvas.height - this.size ;  
        }else{
          this.y += this.speed * modifier;
        }
      }
      if (37 in keysDown) { //   left key
        if(this.x < 0 ){
          this.xPos = 0 ;
        }else{
          this.x -= this.speed * modifier;
        } 
      }
      if (39 in keysDown) { //  right key
        
        if(this.x >= canvas.width - this.size ){ 
          this.x = canvas.width -  this.size;
        }else{
          this.x += this.speed * modifier;
        }
      }

    }
}
 


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
      Rat1.x <= (Cheese1.x + 32)
      && Cheese1.x <= (Rat1.x + 32)
      && Rat1.y <= (Cheese1.y + 32)
      && Cheese1.y <= (Rat1.y + 32)
    ) {
      ++CheesesCaught;
      Cheese1.reset();
      Rat1.reset();
    }
  }

}



class Game {
    constructor( ){
      
    }
    // Draw everything on the canvas
    render() {
          
        if(!gameover){ 
          ctx.drawImage(backImage, 0, 0);
        }
        // Display score and time 
        Rat1.drawRat();
        Cheese1.drawCheese();
        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "24px Helvetica";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText("Cheeses caught: " + CheesesCaught, 20, 20); 
        ctx.fillText("Time: " + count, 20, 50);
        if(gameover){ 
          ctx.fillText("Game over!", 200, 220);
        } 
    }

        
    

        
    // The main game loop
    main(){   
      Rat1.update(0.02);
      controls.crash();  
      controls.init(); 
      // run the update function
      /* update(0.02); // do not change
      // run the render function*/
      game.render();
      // Request to do this again ASAP
      requestAnimationFrame(game.main);
    }

}

var counter =function(){
        count=count-1; // countown by 1 every second
        // when count reaches 0 clear the timer, hide Cheese and
        // Rat and finish the game
        if (count <= 0) {
          // stop the timer
          clearInterval(counter);
          // set game to finished
          gameover = true;
          count=0; 
        }
    }

setInterval(counter, 1000);






// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game! 
let Cheese1 = new Cheese();
let Rat1 = new Rat(256); 
let controls = new keyboardcontrols();
let game = new Game();



Cheese1.reset();    
Rat1.reset();    
game.main();
 // timer interval is every second (1000ms)




 