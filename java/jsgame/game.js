var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 550;
canvas.height = 480;
document.body.appendChild(canvas);

var CheesesCaught = 0;
var KeysPress = {};
var gameover=false; 
var count = 25; 
var ItemArr = [];
const stepMax = 8;
const stepMin = 3;  
var BulletCaught = 0; 
var TotalBulletsFire = 5; 

class DrawImage{ 
  drawImage(objImagesrc,x,y){
    this.objImage = new Image(); 
    this.objImage.src = objImagesrc; 
    ctx.drawImage(this.objImage,x, y);
  }
}

class Cheese extends DrawImage{
    constructor(){ 
      super();  
      this.cheeseImage = new Image(); 
      this.cheeseImage.src = "images/cheese.png";      
    }
    reset(){
        this.x = 32 + (Math.random() * (canvas.width - 64));
        this.y = 32 + (Math.random() * (canvas.height - 64));    
    }
    drawCheese(){
        this.drawImage("images/cheese.png", this.x, this.y);
    }

} 
 
class Rat extends DrawImage{ 
    constructor(speed){
      super();
      this.speed = speed;
      this.size = 32;   
    }

    reset(){
      this.x = canvas.width / 2;; 
      this.y = canvas.height / 2;
    }

    drawRat(){   
      this.drawImage("images/rat.png", this.x, this.y);     
    }

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
 


class keyboardcontrols{
    constructor(){ 
    } 
    init(){
          addEventListener("keydown", function (key){
            KeysPress[key.keyCode] = true;
          }, false);
          
          addEventListener("keyup", function (key){
            delete KeysPress[key.keyCode];
          }, false); 
    }  
    crash(){  
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

class Bullet extends DrawImage{ 
      constructor(){   
            super(); 
            this.x = 32 + (Math.random() * (canvas.width - 64));
            this.y = 0;  
            this.stepSize = Math.floor(Math.random() * (stepMax - stepMin + 1)) + stepMin;
      }
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
                        if(BulletCaught > 10){
                            gameover = true;  
                        }
                    }
            }
      }
      drawItem(){   
          this.drawImage("images/bullet.png", this.x, this.y);    
      } 
}  

class Game extends DrawImage{  
  constructor( ){
      super(); 
  } 
  // Draw everything on the canvas
  render() {
        // Display score and time 
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
            ctx.fillText("Bullet caught: " + BulletCaught, 20, 50);  
            ctx.fillText("Time: " + count, 20, 80); 
          } 
        } 
  }  
  drawbg(){   
    if(!gameover){ 
      this.drawImage("images/background.jpg",0,0);    
    }
  }  
      
  // The main game loop
  main(){   
        game.drawbg();  
        if(!gameover){
          Rat_obj.update(0.02);
        }
        controls.crash();  
        controls.init();  
        game.render(); 

        requestAnimationFrame(game.main);
        if(!gameover){ 
          for ( let i=0;i < TotalBulletsFire; i++){ 
              ItemArr.push (new Bullet());   
              ItemArr[i].drawItem();
              ItemArr[i].moveDown();  
          }
        }else{
          ItemArr = [];
        } 
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
        if(count % 2 == 0) {
            TotalBulletsFire +=2;
        } 
}
setInterval(counter, 1000);


// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;


let Cheese_obj = new Cheese();
let Rat_obj = new Rat(256); 
let controls = new keyboardcontrols();
let game = new Game();

Cheese_obj.reset();    
Rat_obj.reset();    
game.main();  
 // timer interval is every second (1000ms)




 