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
        // detectFruitsCollisions();
        fruit.draw();
    }

    requestAnimationFrame(gameLoop);
}


// EVENTS 
canvas.addEventListener('click', function(e){
    const position = {x: e.offsetX, y: 0}
    const velocity = {vx: -1000, vy: 0}

    const fruit = new Fruit(context, position, velocity, getRandomFruit());
    fruits.push(fruit);
})

function distanceBetweenFruits(fruit1, fruit2){
    let deltaX = fruit2.position.x - fruit1.position.x;
    let deltaY = fruit2.position.y - fruit1.position.y;
    let distance = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));

    return distance;
}

function fruitIntersect(fruit1, fruit2) {
    const distance = distanceBetweenFruits(fruit1, fruit2);
    let minDistance = fruit1.radius + fruit2.radius;
    return distance <= minDistance;
}

function detectFruitsCollisions(){
    if(fruits.length < 2){
        return;
    }

    for(let i = 0; i < fruits.length - 1; i++){

        for(let j = i + 1; j < fruits.length; j++){

            if(fruitIntersect(fruits[i], fruits[j])){
                // tarea para la kasa xd
            } 
        }
    }
}

requestAnimationFrame(gameLoop);
