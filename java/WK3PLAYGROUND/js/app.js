//Variales
const ctx = myCanvas.getContext("2d");
const stepMax = 8;
const stepMin = 3; 
const ItemArr = [];
const myRewards = [];

//functions
const clearScreen  = ()  => {
    ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
    redraw();
}

const redraw = () => {
    player1.drawPlayer();
    const px = player1.xPos;
    const py = player1.yPos;
    const psize = player1.size;
    for(let i=0;i<ItemArr.length;i++){
        let iX = ItemArr[i].xPos;
        let iY = ItemArr[i].yPos;
        let isize = ItemArr[i].size;


        //Detect collision
        if(px < iX +isize && px + psize > iX && py < iY + isize && py + psize > iY){          
            if(typeof(ItemArr[i].reward) !== 'undefined'){
                if(ItemArr[i].reward === 'Life'){
                    player1.lives +=1; //console.log('Life');
                }else if(ItemArr[i].reward === 'Ghost'){
                    myRewards.push(ItemArr[i].reward); //console.log('Ghost');
                }else{
                    player1.points += ItemArr[i].reward; console.log(player1.points);
                }
            }else{
                if(myRewards.length > 0){
                    console.log('you were saved by a Ghost');
                    player1.points -= 100;
                    myRewards.pop();
                }else{
                    player1.lives--;
                    console.log('you were blown up you have ' + player1.lives + ' lives');
                }
            }
            ItemArr.splice(i,1);           
        }else{ 
            // garbage cleanup
            if(iY >= myCanvas.height ){
                ItemArr.splice(i,1); 
            }else{
                ItemArr[i].drawItem();
            }  
        }
        //console.log(ItemArr);
        
    }

}
// Basic 2D Element Creation
//ctx.fillStyle = "orangered";
//ctx.fillRect(20,700,20,20);

// *** Convert Basic Element to Object
// class Player {
//     constructor(){
//         this.xPos = 50;
//         this.yPos = 700;
//         this.size = 20;
//         this.color = "orangered";
//     }

//     drawPlayer(){        
//         ctx.fillStyle = this.color;
//         ctx.fillRect(this.xPos,this.yPos,this.size,this.size);

//     }
// }



// let player1 = new Player();
// player1.drawPlayer();



/*** Pass Parameters to Build Dynamic Objects **/
class Player {
    constructor(x,y,size,step,color){
        this.xPos = x;
        this.yPos = y;
        this.size = size;
        this.color = color;
        this.stepSize = step;
        this.lives  = 5;
        this.points = 0;
    }

    drawPlayer(){        
        ctx.fillStyle = this.color;
        ctx.fillRect(this.xPos,this.yPos,this.size,this.size);

    }

    moveLeft(){
        if(this.xPos - this.stepSize < 0 ){
            this.xPos = 0 ;
        }else{
            this.xPos -= this.stepSize ;
        }
        clearScreen();
    }

    
    moveRight(){
        if(this.xPos + this.stepSize  + this.size  >  myCanvas.width){
            this.xPos = myCanvas.width - this.size;
        }else{
            this.xPos += this.stepSize ; 
        }
        clearScreen();
    }
    
    init(){
        this.drawPlayer();
        window.addEventListener('keydown', function (e)  {
            if(e.keyCode === 37){
                this.moveLeft();
            }else if(e.keyCode === 39){
                this.moveRight();
            }
        }.bind(this))
    }


}



let player1 = new Player(20,700,20,5,"orangered");
player1.init();


//****************************** */

// *** Create and control Drop Objects
class Item{
    constructor(color){
        this.size = 20 ;
        this.xPos = Math.floor(Math.random() * (myCanvas.width- this.size));
        this.yPos  = 0 ;
        this.color = color;
        this.stepSize = Math.floor(Math.random() * (stepMax - stepMin + 1)) + stepMin;
    }
    moveDown (){
        this.yPos += this.stepSize;
    }
    drawItem(){
        ctx.fillStyle  = this.color;
        ctx.fillRect(this.xPos ,this.yPos,this.size,this.size);
    }


}

class Bonus extends Item{
    constructor(){
        super("green"); 
        this.reward = this.pickReward();
    }
    pickReward(){
        const rewards = ["Life" , "Ghost", 200, 50, 20, 10, 5];
        const prob = Math.floor(Math.random() * rewards.length);

        return rewards[prob];
    }
    drawItem(){
        ctx.fillStyle  = this.color;
        ctx.fillRect(this.xPos ,this.yPos,this.size,this.size);
    }
}

class Bomb extends Item{
    constructor(){
        super("red"); 
        this.big = true;
    }

    drawItem(){
        if(this.big){
            this.size = 24;
            this.big = false;
        }else{
            this.size=20;
            this.big = true;
        }
       super.drawItem();
    }
}

// Making the Items Move
setInterval(() =>{
    const prob = Math.floor(Math.random() * 10);

    if(prob < 2){
        ItemArr.push (new Bonus());
    }else{
        ItemArr.push(new Bomb());
    }
},300);

setInterval(() => {
    for ( let i=0;i < ItemArr.length; i++){
        ItemArr[i].moveDown();
    }
    clearScreen();
},40);