
img = "";
status = "";
x = "";
y = "";
width = "";
height = "";
objects = [];

function preload(){
    //img = loadImage("dog_cat.jpg");
    //img = loadImage("image_1.jpg");
    //img = loadImage("image_2.jpg");
    beep = loadSound("beep_beep_sms.mp3");
}

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded :)");
    status = true;
    
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
    
    
}

/*function call_draw(){
    setTimeout(function(){draw()}, 5);
}*/

function draw(){
    image(video, 0, 0, 380, 380);


     if(status != ""){
            r = random(255);
            g = random(255);
            b = random(255);
            objectDetector.detect(video, gotResults);
             
            setTimeout(function(){
                for(i=0;i < objects.length; i++){
                document.getElementById("status").innerHTML = "Status: Objects Detected";
                
                if(objects[i].label=="person"){
                    document.getElementById("number_of_objects").innerHTML = "Baby Detected";
                    beep.stop();
                }
                else{
                    document.getElementById("number_of_objects").innerHTML = "Baby NOT Detected!!";
                    beep.play();
                }
                
            } 
        }, 5000);
        setTimeout(function(){
            if(objects.length==0){
                beep.play();
            }
    }, 5000);
    }

   // fill("#FF0000");
   // text("Dog", 45, 75);
    //text("Cheetah", 160, 25);
    //text("Dog", 330, 65);
    //noFill();
    //stroke("#FF0000");
    //rect(30, 60, 450, 350);
    //rect(150, 10, 170, 400);
    //rect(300, 40, 230, 375);

    //fill("#FF0000");
    //text("Cat", 320, 120);
    //noFill();
    //stroke("#FF0000");
    //rect(300, 90, 270, 320)
}
