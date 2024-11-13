import { Fruit, getRandomFruit } from "./fruit.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 700;


const fruits = [];

let oldTimeStamp = 0;

function gameLoop(timeStamp) {
    let secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (const fruit of fruits) {
        fruit.update(secondsPassed);
        fruit.draw();
    }

    requestAnimationFrame(gameLoop);
}


// EVENTS 
canvas.addEventListener('click', function(e){
    const fruit = new Fruit(context, e.offsetX, 0, 0, (9.8 * 100), getRandomFruit());
    fruits.push(fruit);
})

function detectCollisions(){
    let fruit1;
    let fruit2;

    for(let i = 0; i < fruits.length; i++){

    }
}

requestAnimationFrame(gameLoop);
