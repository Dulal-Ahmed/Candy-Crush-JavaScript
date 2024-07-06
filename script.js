let allCandles = ["Blue", "Green", "Yellow", "Orange", "Purple","Red"];
let rows = 9;
let columns =9;
let currImage = null;
let targetImage = null;
let score =0;
let board =[];
window.onload = function() {
    gameStart();

    window.setInterval(()=>{
        fiveCrush();
         fourCrush();
        threeCrush();
        slideCandy();
        candyGenerate();
   document.getElementById("score").innerText = score;
    },100);
}
function randomCandy(){
    return allCandles[Math.floor(Math.random() * allCandles.length) ]; // 0-5 
}
function gameStart(){
   for(let r =0; r< rows; r++){
    let row = [];
     for(let c=0; c< columns;c++){
         let imgE = document.createElement("img");
         imgE.id = r.toString() + "-" + c;

         imgE.src = "./" + randomCandy() + ".png";
         imgE.addEventListener("dragstart", dragStart);
         imgE.addEventListener("dragover", dragOver);
         imgE.addEventListener("dragenter", dragEnter);
         imgE.addEventListener("dragleave", dragLeave);
         imgE.addEventListener("drop", dragDrop);
         imgE.addEventListener("dragend", dragEnd);
         document.getElementById("board").append(imgE);
         row.push(imgE);
     }
     board.push(row);
   }
   console.log(board);
}

function dragStart(e){
    currImage = this;
}
function dragOver(e){
     e.preventDefault();
} 
function dragEnter(e){
    e.preventDefault();
}
function dragLeave(){}
function dragDrop(e){
    targetImage = this;
}
function dragEnd(){
     let currimageId =  currImage.id.split("-");
     let currImgR =parseInt( currimageId[0]);
     let currImgC = parseInt( currimageId[1]);

     let targetImageId =  targetImage.id.split("-");
     let targetImgR =parseInt( targetImageId[0]);
     let targetImgC = parseInt( targetImageId[1]);

     let moveLeft = currImgR == targetImgR && currImgC == targetImgC +1;
     let moveRight = currImgR == targetImgR && currImgC == targetImgC -1;
     let moveUp = currImgR == targetImgR +1 && currImgC == targetImgC;
     let moveDown = currImgR == targetImgR -1 && currImgC == targetImgC;
     if(moveLeft || moveRight || moveUp || moveDown){

    let currImageStore = currImage.src;  
    let targetImageStore = targetImage.src;
    currImage.src = targetImageStore;
    targetImage.src = currImageStore; 

    let isMovevalid = validMove();
     if(!isMovevalid){
        let currImageStore = currImage.src;  
    let targetImageStore = targetImage.src;
    currImage.src = targetImageStore;
    targetImage.src = currImageStore; 

     }

     }

}

function threeCrush(){

    for(let r=0; r<rows; r++){
         for(let c=0; c<columns -2; c++){
           let candy1 = board[r][c];
           let candy2 = board[r][c+1];
           let candy3 = board[r][c+2];
           if(candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")){
            candy1.src = "./blank.png";
            candy2.src = "./blank.png";
            candy3.src = "./blank.png";
            score += 30;
           }
         }
    }

    for(let c=0; c< columns; c++){
         for(let r=0; r<rows -2; r++){
           let candy1 = board[r][c];
           let candy2 = board[r+1][c];
           let candy3 = board[r+2][c];
           if(candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")){
            candy1.src = "./blank.png";
            candy2.src = "./blank.png";
            candy3.src = "./blank.png";
            score += 30;
           }
        }

    }
}

function fourCrush(){

    for(let r=0; r<rows; r++){
         for(let c=0; c<columns -3; c++){
           let candy1 = board[r][c];
           let candy2 = board[r][c+1];
           let candy3 = board[r][c+2];
           let candy4 = board[r][c+3];
           if(candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && !candy1.src.includes("blank")){
            candy1.src = "./blank.png";
            candy2.src = "./blank.png";
            candy3.src = "./blank.png";
            candy4.src = "./blank.png";
            score += 40;
           }
         }
    }

    for(let c=0; c< columns; c++){
         for(let r=0; r<rows -3; r++){
           let candy1 = board[r][c];
           let candy2 = board[r+1][c];
           let candy3 = board[r+2][c];
           let candy4 = board[r+3][c];
           if(candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && !candy1.src.includes("blank")){
            candy1.src = "./blank.png";
            candy2.src = "./blank.png";
            candy3.src = "./blank.png";
            candy4.src = "./blank.png";
            score += 40;
           }
        }

    }
}

function fiveCrush(){

    for(let r=0; r<rows; r++){
         for(let c=0; c<columns -4; c++){
           let candy1 = board[r][c];
           let candy2 = board[r][c+1];
           let candy3 = board[r][c+2];
           let candy4 = board[r][c+3];
           let candy5 = board[r][c+4];
           if(candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && !candy1.src.includes("blank")){
            candy1.src = "./blank.png";
            candy2.src = "./blank.png";
            candy3.src = "./blank.png";
            candy4.src = "./blank.png";
            candy5.src = "./blank.png";
            score += 50;
           }
         }
    }

    for(let c=0; c< columns; c++){
         for(let r=0; r<rows -4; r++){
           let candy1 = board[r][c];
           let candy2 = board[r+1][c];
           let candy3 = board[r+2][c];
           let candy4 = board[r+3][c];
           let candy5 = board[r+4][c];
           if(candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && !candy1.src.includes("blank")){
            candy1.src = "./blank.png";
            candy2.src = "./blank.png";
            candy3.src = "./blank.png";
            candy4.src = "./blank.png";
            candy5.src = "./blank.png";
            score += 50;
           }
        }

    }
}

function slideCandy(){
    for(let c=0; c< columns; c++){
        let blandIndx = rows - 1;
        for(let r = columns-1; r>=0; r--){
           if(!board[r][c].src.includes("blank")){
             board[blandIndx][c].src = board[r][c].src;
            blandIndx -=1;
           }
        }
        for(let r =blandIndx; r>=0; r-- ){
            board[r][c].src = "./blank.png";
        }
    }
}

function candyGenerate(){
     for(let c=0;c< columns; c++){
         if(board[0][c].src.includes("blank")){
             board[0][c].src ="./"+ randomCandy() + ".png";
         }

     }
}

function validMove(){
 
    for(let r=0; r<rows; r++){
         for(let c=0; c<columns -2; c++){
           let candy1 = board[r][c];
           let candy2 = board[r][c+1];
           let candy3 = board[r][c+2];
           if(candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")){
            return true;
           }
         }
    }

    for(let c=0; c< columns; c++){
         for(let r=0; r<rows -2; r++){
           let candy1 = board[r][c];
           let candy2 = board[r+1][c];
           let candy3 = board[r+2][c];
           if(candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")){
            return true;
           }
        }

    }
    return false;

}