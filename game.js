var clickX;
var clickY;
var hasClicked = 0;
var click1 = "";
var click2 = "";
var matched = 0;

function checkClicks(){
    if(hasClicked == 2){ //check if user has clicked two cards
        hasClicked = 0; //reset click counter to zero
        if(click1 == click2){ //if both cards match
            matched += 1;
            $("pairsCount").text(matched);
        }
    }
}
function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left; //subtract event x's position from bounding rectangle's x position
    let y = event.clientY - rect.top; //subtract event y's position from bounding rectangle's y position
    alert("Coordinate x: " + x + " Coordinate y: " + y);
}

let canvasElem = document.querySelector("canvas");

canvasElem.addEventListener("mousedown", function(e){
    getMousePosition(canvasElem, e); //on mouseclick down get x and y coordinates
    hasClicked += 1;
});