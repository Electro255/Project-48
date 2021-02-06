var polarBear,polarBearImg;
var bg;
var boy;
var p1, p1Img, p2, p2Img, p3, p3Img, p4, p4Img, p5, p5Img;
var level;
var game, player, form;
var gameState = 0;
var point; 
var answer;
var optionA, optionB, optionC; 
var optionA1, optionB1, optionC1; 
var optionA2, optionB2, optionC2;
var optionA3, optionB3, optionC3;
var  optionA4, optionB4, optionC4;
var optionA5, optionB5, optionC5;
var answerA, answerB, answerC;
var answerA1, answerB1, answerC1;
var answerA2, answerB2, answerC2;
var answerA3, answerB3, answerC3;
var answerA4, answerB4, answerC4;
var question1, question2, question3, question4, question5;
var score = 0;
var state;

function preload(){
polarBearImg = loadImage("images/PolarBear.png");

p1Img = loadImage("images/p1.png");
p2Img = loadImage("images/p2.png");
p3Img = loadImage("images/p3.png");
p4Img = loadImage("images/p4.png");
p5Img = loadImage("images/p5.png");
}

function setup(){
    createCanvas(displayWidth-15,displayHeight-120);

    state = "start";
   
    point = createSprite(200, 200, 10 , 10);
    point.visible = false ;
    gameState = 0;

    optionA = createSprite(300, 150, 10, 10);
    optionA.shapeColor = "red";

    optionB = createSprite(300, 170, 10, 10);
    optionB.shapeColor= "blue";
    
    optionC = createSprite(300, 190, 10, 10);
    optionC.shapeColor = "yellow";

    optionA1 = createSprite(300, 260, 10, 10);
    optionA1.shapeColor = "red";

    optionB1 = createSprite(300, 280, 10, 10);
    optionB1.shapeColor= "blue";
    
    optionC1 = createSprite(300, 300, 10, 10);
    optionC1.shapeColor = "yellow";

    optionA2 = createSprite(300, 360, 10, 10);
    optionA2.shapeColor = "red";

    optionB2 = createSprite(300, 380, 10, 10);
    optionB2.shapeColor= "blue";
    
    optionC2 = createSprite(300, 400, 10, 10);
    optionC2.shapeColor = "yellow";

    optionA3 = createSprite(300, 460, 10, 10);
    optionA3.shapeColor = "red";

    optionB3 = createSprite(300, 480, 10, 10);
    optionB3.shapeColor= "blue";
    
    optionC3 = createSprite(300, 500, 10, 10);
    optionC3.shapeColor = "yellow";

    optionA4 = createSprite(300, 560, 10, 10);
    optionA4.shapeColor = "red";

    optionB4 = createSprite(300, 580, 10, 10);
    optionB4.shapeColor= "blue";
    
    optionC4 = createSprite(300, 600, 10, 10);
    optionC4.shapeColor = "yellow";


    answerA = "New York and Texas";
    answerB = "Portugal and France";
    answerC = "India and Australia";

    answerA1 = "US Dollar";
    answerB1 = "Renminbi";
    answerC1 = "Pound";

    answerA2 = "2, 4, 6";
    answerB2 = "5, 7, 8";;
    answerC2 = "7, 11, 13";

    answerA3 = "King Richard I";
    answerB3 = "King Henry I";
    answerC3 = "Queen Elizabeth I";

    answerA4 = "450";
    answerB4 = "300";
    answerC4 = "200";


    question1 = "Name 2 states in America ";
    question2 = "What is the national currency of China? ";
    question3 = "List 3 Prime numbers ";
    question4 = "Who succeeded Henry II as King of England?";
    question5 = "What is fifteen percent of two thousand?";

    if(gameState === 0){
        //game = new Game();
        //game.start();
    }

    console.log("Hello");

}

function draw(){
    point.x = mouseX;
    point.y = mouseY;

    if(gameState === 1){
        //game.play();
    }

    text(question1, 100, 100);
    text(answerA, 100, 150);
    text(answerB, 100,170);
    text(answerC, 100, 190);

    text(question2, 100, 230);
    text(answerA1, 100, 270);
    text(answerB1, 100,290);
    text(answerC1, 100, 310);

    text(question3, 100, 340);
    text(answerA2, 100, 370);
    text(answerB2, 100,390);
    text(answerC2, 100, 410);

    text(question4, 100, 440);
    text(answerA3, 100, 470);
    text(answerB3, 100,490);
    text(answerC3, 100, 510);

    text(question5, 100, 540);
    text(answerA4, 100, 570);
    text(answerB4, 100,590);
    text(answerC4, 100, 610);

    console.log("Hi");

    textSize(28);
    text("Score: " + score, 50, 50);
    
    if(state === "start"){
        
        if(mousePressedOver(optionA)|| mousePressedOver(optionB1)|| mousePressedOver(optionC2)|| mousePressedOver(optionA3)|| mousePressedOver(optionB4)){
            score = score + 1;
            state = "updated";
     } 
  
    }

   
    console.log(score);


    drawSprites();
}

