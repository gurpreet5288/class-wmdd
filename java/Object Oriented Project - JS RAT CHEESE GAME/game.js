// Create a Canvas Object to draw 2D graphics
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
//Set Canvas Width
canvas.width = 550; 
//Set Canvas Height
canvas.height = 480;  
document.body.appendChild(canvas);

// *******************************************************
// ******** Global Variables ******************************
// *******************************************************
var CheesesCaught = 0;
var KeysPress = {};
var gameover=false; 
var count = 25; 
var ItemArr = [];
const stepMax = 8;
const stepMin = 3;  
var BulletCaught = 0; 
var TotalBulletsFire = 5; 


// *******************************************************
// ******** DrawImage (Parent Class) *********************
// *******************************************************
// This function will render child class objects on the canvas window.
class DrawImage{ 
  drawImage(objImagesrc,x,y){
    this.objImage = new Image(); 
    this.objImage.src = objImagesrc; 
    ctx.drawImage(this.objImage,x, y);
  }
}


// *******************************************************
// ******** Cheese (Child Class) *************************
// *******************************************************
class Cheese extends DrawImage{
    constructor(){ 
      super();      
    }
    // This function will render cheese at random locations within 
    // the given x coordinates and y coordinates of the canvas window.
    reset(){
        this.x = 32 + (Math.random() * (canvas.width - 64));
        this.y = 32 + (Math.random() * (canvas.height - 64));    
    }
    // This function will render cheese using parent class drawImage function.
    drawCheese(){
        this.drawImage("images/cheese.png", this.x, this.y);
    }

} 


// *******************************************************
// ******** Rat (Child Class) ****************************
// *******************************************************
class Rat extends DrawImage{ 
    constructor(speed){
      super();
      this.speed = speed;
      this.size = 32;   
    }
    // This function will update rat location within the 
    // given x coordinates and y coordinates.
    reset(){
      this.x = canvas.width / 2;; 
      this.y = canvas.height / 2;
    }
    // This function will render rat using parent class drawImage function.
    drawRat(){   
      this.drawImage("images/rat.png", this.x, this.y);     
    }
    // This function will detect up,down,left and right keystroke from the user 
    // and will move the rat location as per given keystroke input by the user.
    update (modifier){
      // Move up
      if (38 in KeysPress){  
        if(this.y < 0 ){
          this.y = 0;
        }else{
          this.y -= this.speed * modifier;
        } 
      }
      //Move down
      if (40 in KeysPress) { 
        if(this.y >= canvas.height - this.size   ){  
          this.y = canvas.height - this.size ;  
        }else{
          this.y += this.speed * modifier;
        }
      }
      // Move Left
      if (37 in KeysPress) { 
        if(this.x < 0 ){
          this.xPos = 0 ;
        }else{
          this.x -= this.speed * modifier;
        } 
      }
      // Move right
      if (39 in KeysPress) { 
        
        if(this.x >= canvas.width - this.size ){ 
          this.x = canvas.width -  this.size;
        }else{
          this.x += this.speed * modifier;
        }
      }

    }
}

// *******************************************************
// ******** Bullet (Child Class) *************************
// *******************************************************
class Bullet extends DrawImage{ 
      constructor(){   
            super(); 
            this.x = 32 + (Math.random() * (canvas.width - 64));
            this.y = 0;  
            this.stepSize = Math.floor(Math.random() * (stepMax - stepMin + 1)) + stepMin;
      }
      // This function will constantly move bullets location from upward to downward.
      // Also it will detect collision between bullet and rat.
      moveDown (){  
            if(this.y >= canvas.height){  
                  this.x = 32 + (Math.random() * (canvas.width - 64));
                  this.y = 0 ;   
            }else{
                    this.y += this.stepSize;  
                    if (
                      Rat_obj.x <= (this.x  + 25)
                      && this.x <= (Rat_obj.x  + 25)
                      && Rat_obj.y <= (this.y  + 25)
                      && this.y <= (Rat_obj.y  + 25)
                    ){ 
                        this.y += 50 ; 
                        ++BulletCaught; 
                        if(BulletCaught > 50){
                            gameover = true;  
                        }
                    }
            }
      }
      // This function will generate new bullets after every 2 seconds during the game.
      firebullet(){   
          this.drawImage("images/bullet.png", this.x, this.y);    
      } 
}  

// *******************************************************
// ******** Game (Child Class) ***************************
// *******************************************************
class Game extends DrawImage{  
  constructor( ){
      super(); 
  }  
  // This function will render cheeses, bullets, timer values on the canvas window 
  // during game and will constantly update these values on screen.
  render() {
         
        Rat_obj.drawRat();
        Cheese_obj.drawCheese();
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.font = "24px Helvetica";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        if(gameover){  
              ctx.fillText("Game over!", 200, 220);  
              ctx.drawImage(this.objImage, 20,80,100,25, 20,80,100,25); 
              if(count > 0){
                count=0;
              }
              ctx.fillText("Time: " + count, 20, 80); 
        }else{ 
          if (count >= 0) {
            ctx.fillText("Cheeses caught: " + CheesesCaught, 20, 20); 
            ctx.fillText("Bullets caught: " + BulletCaught, 20, 50);  
            ctx.fillText("Time: " + count, 20, 80); 
          } 
        } 
  }  
  // This function will render a background image using parent class drawImage function.
  drawbg(){   
    if(!gameover){ 
      this.drawImage("images/background.jpg",0,0);    
    }
  }  
      
  // This function will update all objects positions during the game.
  main(){   
        game.drawbg();  
        if(!gameover){
          Rat_obj.update(0.02);
        }
        game.collision();  
        controls.init();  
        game.render(); 

        requestAnimationFrame(game.main);
        if(!gameover){ 
          for ( let i=0;i < TotalBulletsFire; i++){ 
              ItemArr.push (new Bullet());   
              ItemArr[i].firebullet();
              ItemArr[i].moveDown();  
          }
        }else{
          ItemArr = [];
        } 
  } 
  //This function will detect collision between cheese and rat.
  collision(){  
      if (
        Rat_obj.x <= (Cheese_obj.x + 32)
        && Cheese_obj.x <= (Rat_obj.x + 32)
        && Rat_obj.y <= (Cheese_obj.y + 32)
        && Cheese_obj.y <= (Rat_obj.y + 32)
      ) {
        ++CheesesCaught;
        Cheese_obj.reset();
        Rat_obj.reset();
      }
  } 
} 


// *******************************************************
// ******** Keyboardcontrols (Child Class) ***************
// *******************************************************
class Keyboardcontrols extends Game{
  constructor( ){
      super(); 
  } 
  //This function will detect keystrokes from users and will store 
  //keydown and keyup keystrokes values in KeysPress array.
  init(){
        addEventListener("keydown", function (key){
          KeysPress[key.keyCode] = true;
        }, false);
        
        addEventListener("keyup", function (key){
          delete KeysPress[key.keyCode];
        }, false); 
  }   
} 
var counter =function(){
        // Set countown by 1 every second 
        count=count-1; 
        // When countown value set to zero then finish the game
        if (count <= 0) {
          // clear counter
          clearInterval(counter);
          // set counter=0 and gameover=true to finish the game
          gameover = true;
          count=0; 
        }   
        if(count % 2 == 0) {
            TotalBulletsFire +=2;
        }
}
setInterval(counter, 1000);


// Cross-browser support for requestAnimationFrame / webkit 
var win = window;
requestAnimationFrame = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.msRequestAnimationFrame || win.mozRequestAnimationFrame;


let Cheese_obj = new Cheese();
let Rat_obj = new Rat(256); 
let controls = new Keyboardcontrols();
let game = new Game();

Cheese_obj.reset();    
Rat_obj.reset();    
game.main();   