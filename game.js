var clickX;
var clickY;
var hasClicked = 0;
var click1 = "";
var click2 = "";
var matched = 0;

const canvas = document.getElementById("gameBoard")
const ctx = canvas.getContext("2d")
//image variables and array of images and array of image locations
var cu = document.getElementById("cu");
var rover = document.getElementById("rover");
var thomas = document.getElementById("thomas");
var stratton = document.getElementById("stratton");
var M = document.getElementById("M");
var elm = document.getElementById("elm");
var CO209 = document.getElementById("CO209");
var csu = document.getElementById("csu");
var mesa = document.getElementById("mesa");
var rec = document.getElementById("rec");
var array = [cu,rover,thomas,stratton,M,elm,CO209,csu,mesa,rec,cu,rover,thomas,stratton,M,elm,CO209,csu,mesa,rec];
var imageLocations = [50,0,50,100,50,200,50,300,250,0,250,100,250,200,250,300,450,0,450,100,450,200,450,300,650,0,650,100,650,200,650,300,850,0,850,100,850,200,850,300];
shuffle(array);
shuffle(array);
var images = [];

function cardLocation(name,x,y){
    this.name = name;
    this.x = x;
    this.y = y;
}

//on window load draw the images
window.addEventListener('load',function(){
    var count = 0;
    for(let i = 0; i < array.length; i++){
        ctx.drawImage(array[i],imageLocations[count],imageLocations[count+1],100,100);
        images.push(new cardLocation(array[i].id,imageLocations[count],imageLocations[count+1]));
        count += 2;
    }
});

function checkClicks(){
    if(hasClicked == 2){ //check if user has clicked two cards
        hasClicked = 0; //reset click counter to zero
        if(click1 == click2){ //if both cards match
            matched += 1;
            $("pairsCount").text(matched);
        }
    }
}
//checks what card is clicked based on x and y values of user mouse click
function findClickedCard(xClick,yClick){
    for(let i = 0; i < images.length; i++){
        if(xClick >= images[i].x && xClick <= (images[i].x+100) && yClick >= images[i].y && yClick <= (images[i].y+100)){
            console.log(images[i].name + " Clicked");
        }
    }
}

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left; //subtract event x's position from bounding rectangle's x position
    let y = event.clientY - rect.top; //subtract event y's position from bounding rectangle's y position
    findClickedCard(x,y);
    //console.log("Coordinate x: " + x + " Coordinate y: " + y);
}

let canvasElem = document.querySelector("canvas");

canvasElem.addEventListener("mousedown", function(e){
    getMousePosition(canvasElem, e); //on mouseclick down get x and y coordinates
    hasClicked += 1;
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