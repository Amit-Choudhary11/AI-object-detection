status="";
value="";
objects=[];
detector="";
video="";

function preload(){

}


function setup(){
canvas = createCanvas(400,300);
canvas.position(550,300);
video = createCapture(VIDEO);
video.hide();

synth= window.speechSynthesis;
}


function draw(){
image(video,0,0,400,300);


if(status != ""){
    detector.detect(video, gotResult);

    for( i=0; i < objects.length; i++){

        percent = floor(objects[i].confidence * 100);
        fill("#FF0000");
        text(objects[i].label + " " + percent +"%", objects[i].x + 15, objects[i].y + 15);

        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

        if(objects[i].label == value){
            video.stop();
            detector.detect(gotResult);

            utterThis = new SpeechSynthesisUtterance(objects[i].label);
            synth.speak(utterThis);


        }
    
    }


}
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

function gotResult(error, results){
    if(error){
        console.error(error);
    } else{
    console.log(results);
    objects = results;


    }
}