
var theme

var x3 = 45
var x4 = 45
var x5 = 45
var x6 = 45

var playTime
var amplitude
var fft
var font

var x = 20;
var x2 = 2;
var rot = 5;


// can start song by p5.amplitude (when the song reaches a certain sound level)
function preload() {
 theme = loadSound('music/Forget.mp3')
 font = loadFont('music/vanilla-extract.regular.ttf')
 crasyPer = loadImage('music/crazy-faceejfnaiugjkarngow2.png')
 crasyPer2 = loadImage('music/crazy-facefejrgniuagoiw3.png')
 crasyPer3 = loadImage('music/crazy-facegjnsurgaegsuiehg4.png')
 crasyPer4 = loadImage('music/crazy-facejnsfjhw1.png')
 perPer1 = loadImage('music/crybabe.png')
 perPer4 = loadImage('music/iogueig.png')
 perPer2 = loadImage('music/sifjoefu.png')
 perPer3 = loadImage('music/softbayru.png')
 perPer5 = loadImage('music/krjgoeg.png')
 perPer6 = loadImage('music/oerguhg.png')
 perPer7 = loadImage('music/oiewjgiugb.png')
 dreamPer3 = loadImage('music/iurjgu.png')
 dreamPer1 = loadImage('music/pojihg.png')
 dreamPer2 = loadImage('music/rugjo.png')
}



 
function setup( ) {
   createCanvas(1100, 600)
amplitude = new p5.Amplitude()

}

function mousePressed() {
  if (theme.isLoaded()) {
    loadTime = millis()
      theme.play()
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
   
 
push()
if(playTime > 500 && playTime < 5000) {
    textFont(font);
    fill(255, 255, 255);
    stroke(0, 0, 255);
    textSize(250);
    textAlign(CENTER);
    text('FORGET', 558, 400);
}
if (playTime > 10000 && playTime < 10250) {
image(crasyPer, 160, -50, 850, 1000)
}

if(playTime > 10250 && playTime < 10500) {
image(crasyPer2, 160, -80, 850, 1000)
}

if(playTime > 10500 && playTime < 10750) {
image(crasyPer3, 160, -120, 850, 1000)
}

if(playTime > 10750 && playTime < 11000) {
image(crasyPer4, 160, -120, 850, 1000)
}

if(playTime > 11000 && playTime < 11800){
image(dreamPer1, 190, 50, 800, 800)
}

        if (playTime > 12000 && playTime < 12250) {
        image(crasyPer, 160, -50, 850, 1000)
        }
        
        if(playTime > 12250 && playTime < 12500) {
        image(crasyPer2, 160, -80, 850, 1000)
        }
        
        if(playTime > 12500 && playTime < 12750) {
        image(crasyPer3, 160, -120, 850, 1000)
        }
        
        if(playTime > 12750 && playTime < 13000) {
        image(crasyPer4, 160, -120, 850, 1000)
        }

        if(playTime > 13250 && playTime < 13900){
            image(perPer1, 200, 50, 500, 800)
        }

if(playTime > 15900 && playTime < 16200) {
    textFont(font);
    fill(255, 255, 255);
    stroke(0, 0, 255);
    textSize(300);
    textAlign(CENTER);
    text('DREAM', 570, 400);
}

if(playTime > 18150 && playTime < 18450) {
    textFont(font);
    fill(255, 255, 255);
    stroke(0, 0, 255);
    textSize(300);
    textAlign(CENTER);
    text('DREAM', 570, 400);
}

        if (playTime > 18550 && playTime < 18800) {
        image(perPer6, 300, 150, 550, 550)
        }
        
        if(playTime > 18800 && playTime < 19050) { 
        image(perPer5, 250, 150, 650, 550)
        }
        
        if(playTime > 19150 && playTime < 19600) { 
        image(perPer4, 300, 150, 450, 600)
        }

        if(playTime > 19600 && playTime < 19800){ 
            image(perPer3, 330, 125, 450, 650)
        }
        
        if(playTime > 19800 && playTime < 20600) { 
        image(dreamPer2, 0, 20, 1150, 700)
        }

        

if(playTime > 20600 && playTime < 21800) {
    x6 -= 5
    image(dreamPer3, 130, 400 + x6, 830, 900)

}
pop()
    
push()
if (currentTime > 1000) 
       x3 += 10

image(perPer7, -285 + x3, 200);
pop()

push()
if (currentTime > 16500) {
       x4 += 10

image(perPer7, -585 + x4, 200)
}
pop()

if(playTime > 22000 && playTime < 23000) {
    x5 += 2.5
    textFont(font);
    fill(255, 20, 252);
    noStroke()
    textSize(300)
    textAlign(CENTER)
    text('THE', 550 - x5, 350)
    text('END', 550 + x5, 570)
}

if (playTime > 23000) {
    theme.stop();
}



}
