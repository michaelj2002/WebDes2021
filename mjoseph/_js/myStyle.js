//test code

// let myNum = 6;
// const myName = "Chris";
// alert(myName);
// alert(myNum);
// myNum = 25;
// alert(myNum);

// add a canvas to the page


// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 150, 100);

// let's write a program that creates rock paper scissors logic using circle, square, triangle

//initializing variables to create a canvas 
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

if(myNumber = 10);

if (true) {
    alert("hello world...");
    if(myNumber > 6);
}
if (true) {
    drawTriangle = true 
    let drawCircle = false
}

let player ="rock";
let cpu = "paper"
function RPS(){
    if (player == "rock" && cpu == "paper") {
        console.log("you lose....");
    }
}

//init a function to draw a triangle on the canvas
function drawTriangle() {
      ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.fill();
      
    }

//init a function to draw a square on the canvas
  function drawSquare(){
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
  //init a function to draw a circle on the canvas
  function drawCircle(){
    //ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
  }
d = new Date();

function main(){
    if (d.getday() < 3){
        drawTriangle();
    }
    else if (d.getDay() < 6){
drawSquare();
    }
}
  function main(){
    drawTriangle();
    drawSquare();
    drawCircle();
  }

main();