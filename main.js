status="";
value="";

function preload(){

}


function setup(){
canvas = createCanvas(400,300);
canvas.position(550,300);
video = createCapture(VIDEO);
video.hide();
}


function draw(){
image(video,0,0,400,300);
}


function start(){
detector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML = "Status: Objects Detecting";
value =  document.getElementById("input").value;  
}

function modelLoaded(){
    console.log("model loaded");
    status = "true";
}