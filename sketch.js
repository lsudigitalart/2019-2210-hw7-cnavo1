


var fade = 337
var fadeAmount = 2

var fade2 = 337
var fadeAmount2 = 2

var fade3 = 337
var fadeAmount3 = 2

var fade4 = 337
var fadeAmount4 = 2

var fade5 = 337
var fadeAmount5 = 2

var fade6 = 337
var fadeAmount6 = 2

var theme
var time1 = 9000
var time2 = 15000
var x3 = -45
var playTime
var amplitude
var fft
var font

var x = 20;
var x2 = 2;
var rot = 5;

var person1
var person2
var person3
var person4


// can start song by p5.amplitude (when the song reaches a certain sound level)
function preload() {
 theme = loadSound('music/Forget.mp3')
 font = loadFont('music/vanilla-extract.regular.ttf')
 flower = loadImage('music/blossom-flower-png-transparent-picture-3.png')
 crasyPer = loadImage('music/crazy-faceejfnaiugjkarngow2.png')
 crasyPer2 = loadImage('music/crazy-facefejrgniuagoiw3.png')
 crazyPer3 = loadImage('music/crazy-facegjnsurgaegsuiehg4.png')
 crasyPer4 = loadImage('music/crazy-facejnsfjhw1.png')

}



 
function setup( ) {
   createCanvas(1100, 600)
   //theme.play()
if (theme.isLoaded()) {
    loadTime = millis()
      theme.play()
     }


amplitude = new p5.Amplitude()
//fft = new p5.FFT

{
    //rectMode(CENTER);
}

}

function draw( ) {
    playTime = millis() - loadTime;
    var currentTime = millis(); 
    
    let level = amplitude.getLevel()

     //change the x below to a fixed int and see what happens
     strokeWeight(5);
     stroke("blue");
     noFill();
     //background(200, 35, level);
     let lerping = lerpColor (color(18, 27, 86), color(184, 35, 91), level)
     background(lerping)
 
     for (i = -100; i < 1100; i += 100)
     {
         for (j = -100; j < 1100; j += 100) 
         {
             translate(i + 50, j + 50);
             rotate(rot);
             let size = map (level, 0, 2, 0, 600)
             ellipse(0, 0, size, size);
             resetMatrix();
         }
     }
     
     x = level;
     rot = level;
   
     
     //stroke width flip
     if (x > 30 || x <3)
     {
         x2 *= -1;
     }
 
// push()
// if (playTime > 6000 && playTime < 9000)
// let crasy = [person1, person2, person3, person4]
// let freakOut = random(crasy)
// image(freakOut, 500, 300)
// pop()
push()
image(crasyPer, 0, 0)
pop()

push()
if(playTime > 15900) {
    textFont(font);
    fill(255, 255, 255, fade);
    stroke(0, 0, 255, fade);
    textSize(300);
    textAlign(CENTER);
    text('DREAM', 570, 400);
    if(fade > 337) fadeAmount = -17;
    fade += fadeAmount;
}

if(playTime > 18150) {
    textFont(font);
    fill(255, 255, 255, fade2);
    stroke(0, 0, 255, fade2);
    textSize(300);
    textAlign(CENTER);
    text('DREAM', 570, 400);
    if(fade2 > 337) fadeAmount2 = -17;
    fade2 += fadeAmount2;
}

if(playTime > 24850) {
    textFont(font);
    fill(255, 255, 255, fade3);
    stroke(0, 0, 255, fade3);
    textSize(300);
    textAlign(CENTER);
    text('DREAM', 570, 400);
    if(fade3 > 337) fadeAmount3 = -17;
    fade3 += fadeAmount3;
}

if(playTime > 33650) {
    textFont(font);
    fill(255, 255, 255, fade4);
    stroke(0, 0, 255, fade4);
    textSize(300);
    textAlign(CENTER);
    text('DREAM', 570, 400);
    if(fade4 > 337) fadeAmount4 = -17;
    fade4 += fadeAmount4;
}

if(playTime > 35900) {
    textFont(font);
    fill(255, 255, 255, fade5);
    stroke(0, 0, 255, fade5);
    textSize(300);
    textAlign(CENTER);
    text('DREAM', 570, 400);
    if(fade5 > 337) fadeAmount5 = -17;
    fade5 += fadeAmount5;
}
pop()
    
 
push()
if (currentTime > time1) {
       x3 += 9
   }
fill(255);
ellipse(x3, 60, 90, 90);
pop()



if (playTime > 40000) {
    theme.stop();
}


// let spectrum = fft.analyze();
// var trebs = fft.getEnergy("treble");

// let backCo = lerpColor (color(249, 145, 33), color(249, 33, 33), trebs)
// background(backCo)

}
