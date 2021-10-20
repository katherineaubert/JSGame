var clickX;
var clickY;
var hasClicked = 0;
var clickEnabled = true;
var click1 = "";
var click2 = "";
var matched = 0;
var strikes = 0;
const canvas = document.getElementById("gameBoard")
const ctx = canvas.getContext("2d")
var images = [];
var cardsClicked = [];
var cardsFound = [];
//image variables and array of images and array of image locations
const boulder = new Image();
const rover = new Image();
const co209 = new Image();
const csu = new Image();
const elm = new Image();
const football = new Image();
const bigM = new Image();
const mesa = new Image();
const metro = new Image();
const mines = new Image();
const rec_center = new Image();
const stratton = new Image();
const thomas = new Image();
const mcoverup = new Image();
mcoverup.src = "./cardImages/mcoverup.jpg";
mcoverup.id = "mcoverup";
boulder.src = "./cardImages/boulder.jpg";
boulder.id = "boulder";
rover.src = "./cardImages/rover.jpg";
rover.id = "rover";
co209.src = "./cardImages/CO209.jpg";
co209.id = "CO209";
csu.src = "./cardImages/csu_logo.jpg";
csu.id = "csu";
elm.src = "./cardImages/elm.jpg";
elm.id = "elm";
football.src = "./cardImages/football_field.jpg";
football.id = "football field";
bigM.src = "./cardImages/M.jpg";
bigM.id = "M";
mesa.src = "./cardImages/mesa.jpg";
mesa.id = "mesa";
metro.src = "./cardImages/metro.jpg";
metro.id = "metro";
mines.src = "./cardImages/mines_logo.jpg";
mines.id = "mines";
rec_center.src = "./cardImages/rec_center.jpg";
rec_center.id = "Rec Center";
stratton.src = "./cardImages/stratton.jpg";
stratton.id = "stratton";
thomas.src = "./cardImages/thomas.jpg";
thomas.id = "thomas";
//array of cards and of card locations on canvas
var array = [boulder,rover,thomas,stratton,mines,bigM,elm,co209,csu,mesa,rec_center,football,mines,metro,mines,boulder,rover,thomas,stratton,bigM,elm,co209,csu,mesa,rec_center,football,metro,mines];
var imageLocations =[25,0,25,100,25,200,25,300,168,0,168,100,168,200,168,300,311,0,311,100,311,200,311,300,454,0,454,100,454,200,454,300,597,0,597,100,597,200,597,300,740,0,740,100,740,200,740,300,883,0,883,100,883,200,883,300];
//randomize array
shuffle(array);
shuffle(array);


function cardLocation(name,x,y,image){
    this.name = name;
    this.x = x;
    this.y = y;
    this.image = image;
}

//on window load draw the images
window.addEventListener('load',function(){
    var count = 0;
    for(let i = 0; i < array.length; i++){
        ctx.drawImage(mcoverup,imageLocations[count],imageLocations[count+1],100,100);
        images.push(new cardLocation(array[i].id,imageLocations[count],imageLocations[count+1],array[i]));
        count += 2;
    }
});

function checkClicks(){
    if(cardsClicked.length == 2){ //check if user has clicked two cards
        clickEnabled = false; //diable clicked while comparing cards
        hasClicked = 0; //reset click counter to zero
        if(cardsClicked[0].name == cardsClicked[1].name && (cardsClicked[0].x != cardsClicked[1].x || cardsClicked[0].y != cardsClicked[1].y)){ //if both cards match
            // checks if they matched bad cards
            if(cardsClicked[0].name == "mesa" || cardsClicked[0].name == "csu" || cardsClicked[0].name == "metro" || cardsClicked[0].name == "boulder") {
              alert("You matched two bad cards and have lost the game!");
            }
            matched += 1;
            document.getElementById("pairsCount").innerText = matched;
            document.getElementById("strikeCount").innerText = strikes;
            // add cards to array of cards that have been matched
            cardsFound.push(cardsClicked[0]);
            cardsFound.push(cardsClicked[1]);
            cardsClicked = [];
            clickEnabled = true; // reenable clicking on cards
        } else {
          if(cardsClicked[0].name == "csu" || cardsClicked[0].name == "mesa" || cardsClicked[0].name == "metro" || cardsClicked[0].name == "boulder" || cardsClicked[1].name == "csu" || cardsClicked[1].name == "mesa" || cardsClicked[1].name == "metro" || cardsClicked[1].name == "boulder"){
            strikes = strikes + 1; //increments the amount of strikes
          }
            document.getElementById("strikeCount").innerText = strikes;
            if(strikes ==5) {
              alert("You have flipped over 3 rival cards in 3 different turns, and have lost the game.");
            }
            setTimeout(function(){ //after 2000 ms change the images back to background and reenable clicking
                ctx.drawImage(mcoverup,cardsClicked[0].x,cardsClicked[0].y,100,100);
                ctx.drawImage(mcoverup,cardsClicked[1].x,cardsClicked[1].y,100,100);
                cardsClicked = [];
                clickEnabled = true; // reenable clicking on cards
            },2000);

        }
    }
}
//checks what card is clicked based on x and y values of user mouse click
function findClickedCard(xClick,yClick){
    for(let i = 0; i < images.length; i++){
        if(xClick >= images[i].x && xClick <= (images[i].x+100) && yClick >= images[i].y && yClick <= (images[i].y+100)){
            if(!cardsFound.includes(images[i]) && !cardsClicked.includes(images[i])){ // check card has been clicked already or matched already
                if(hasClicked == 1){ // if this is first card clicked
                    ctx.drawImage(images[i].image,images[i].x,images[i].y,100,100);
                    cardsClicked.push(images[i]);
                }
                else{ // 2 cards have been clicked so checkClicks();
                    ctx.drawImage(images[i].image,images[i].x,images[i].y,100,100);
                    cardsClicked.push(images[i]);
                    checkClicks();
                }
            } else {
                hasClicked -= 1; // card has been matched or clicked already so dont include it
            }
        }
    }
}

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left; //subtract event x's position from bounding rectangle's x position
    let y = event.clientY - rect.top; //subtract event y's position from bounding rectangle's y position
    hasClicked += 1;
    findClickedCard(x,y);
    //console.log("Coordinate x: " + x + " Coordinate y: " + y);
}

let canvasElem = document.querySelector("canvas");

canvasElem.addEventListener("mousedown", function(e){
    if(clickEnabled){ // check if able to click on card
        getMousePosition(canvasElem, e); //on mouseclick down get x and y coordinates
    }
});

//randomize array of images
function shuffle(array){
    let index = array.length, random;
    while( index != 0) {
        random = Math.floor(Math.random()*index);
        index--;
        [array[index],array[random]] = [array[random],array[index]];
    }
    return array;
}
