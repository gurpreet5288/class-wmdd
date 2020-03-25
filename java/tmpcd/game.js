//Variales
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

var CheesesCaught = 0;
var keysDown = {};
var gameover=false; 
var count = 50; 
var ItemArr = [];
const stepMax = 8;
const stepMin = 3;  
var BulletCaught = 0; 
var TotalBulletsFire = 1;

class Cheese{
    constructor(){  
        this.cheeseImage = new Image(); 
        this.cheeseImage.src = "images/cheese.png";      
    }
    reset(){
        this.x = 32 + (Math.random() * (canvas.width - 64));
        this.y = 32 + (Math.random() * (canvas.height - 64));    
    }
    drawCheese(){
        ctx.drawImage(this.cheeseImage, this.x, this.y); 
    }

}

 
class Rat {

    constructor(speed){
      this.speed = speed;
      this.size = 32;  
      this.ratImage= new Image(); 
      this.ratImage.src = "images/rat.png";
    }

    reset(){
      this.x = canvas.width / 2;; 
      this.y = canvas.height / 2;
    }

    drawRat(){  
      ctx.drawImage(this.ratImage, this.x, this.y);      
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


class Item{
  constructor(){   
      this.bulletImage = new Image(); 
      this.bulletImage.src = "images/bullet.png"; 
      this.x = 32 + (Math.random() * (canvas.width - 64));
      this.y = 0;  
      this.stepSize = Math.floor(Math.random() * (stepMax - stepMin + 1)) + stepMin;
       
  }
  moveDown (){  
      if(this.y >= canvas.height   ){  
        this.x = 32 + (Math.random() * (canvas.width - 64));
        this.y = 0 ;   
      }else{
        this.y += this.stepSize; 
        

            let iX =  this.x;
            let iY =  this.y;
          //  alert(iX +'----'+iY); 
            if (
              Rat_obj.x <= (iX  + 15)
              && iX <= (Rat_obj.x  + 15)
              && Rat_obj.y <= (iY  + 15)
              && iY <= (Rat_obj.y  + 15)
            ) { 
              this.y += 50 ; 
              ++BulletCaught;
              Cheese_obj.reset();
              Rat_obj.reset();
              if(BulletCaught >= 10){
                  gameover = true;
                  alert(BulletCaught);
              } 
            }
      }
  }
  drawItem(){ 
      //ctx.fillRect(this.xPos ,this.yPos,this.size,this.size);
      ctx.drawImage(this.bulletImage, this.x, this.y); 
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

class Bullet extends Item{
    constructor(){
      super("green"); 
      /*this.backImage= new Image(); 
      this.backImage.src = "images/bullet.png";*/
    }
    /*
    drawItem(){
        ctx.fillStyle  = this.color;
        ctx.fillRect(this.xPos ,this.yPos,this.size,this.size);
    }*/
}


class Game {  

    constructor( ){
        this.backImage= new Image(); 
        this.backImage.src =    "images/background.png";
    }

    // Draw everything on the canvas
    render() {

          // Display score and time 
          Rat_obj.drawRat();
          Cheese_obj.drawCheese();
          ctx.fillStyle = "rgb(250, 250, 250)";
          ctx.font = "24px Helvetica";
          ctx.textAlign = "left";
          ctx.textBaseline = "top";
          ctx.fillText("Cheeses caught: " + CheesesCaught, 20, 20); 
          ctx.fillText("Time: " + count, 20, 50);
          ctx.fillText("Bullet caught: " + BulletCaught, 20, 70); 
          if(gameover){ 
            ctx.fillText("Game over!", 200, 220);
          }
    }

    drawbg(){      
          if(!gameover){ 
            ctx.drawImage(this.backImage, 0, 0);
          }
    } 
        
    // The main game loop
    main(){ 
        

          game.drawbg(); 
        
          Rat_obj.update(0.02);
          controls.crash();  
          controls.init(); 
          
           
              
         
            // clearScreen();
         
          // run the update function
          /* update(0.02); // do not change
          // run the render function*/
          game.render();
          
          // Request to do this again ASAP
          requestAnimationFrame(game.main);
          if(!gameover){
            requestAnimationFrame(game.rmain);
          }else{
            ItemArr ='';
          }
            
    }
    rmain(){
       // setInterval(() => { 
          for ( let i=0;i < TotalBulletsFire; i++){ 
              ItemArr.push (new Bullet());   
              ItemArr[i].drawItem();
              ItemArr[i].moveDown();  
              

          } 
            controls.crash(); 
       // },1000); 
    }

}
const clearScreen  = ()  => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  
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
        if(count % 5 == 0) {
          TotalBulletsFire +=1;
        }else{
         // alert(count);
        }
}
setInterval(counter, 1000);






// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game! 
let Cheese_obj = new Cheese();
let Rat_obj = new Rat(256); 
let controls = new keyboardcontrols();
let game = new Game();

Cheese_obj.reset();    
Rat_obj.reset();    
game.main();  
 // timer interval is every second (1000ms)




 