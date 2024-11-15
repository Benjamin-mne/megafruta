import { GameObject } from './def.js';

export const fruitsList = {
    apple: "apple",
    blueberry: "blueberry",
    orange: "orange",
    watermelon: "watermelon",
}

export function getRandomFruit(){
    let fruits = [];

    for (const fruit in fruitsList) {
        fruits.push(fruit)
    }    

    const randomNumber = Math.floor(Math.random() * fruits.length);
    
    return fruits[randomNumber]; 
} 

function checkType(type){
    let radius;
    let color; 
    
    switch (type) {
        case fruitsList.apple:
            radius = 100;
            color = 'red';
            break;
        case fruitsList.orange:
            radius = 80;
            color = 'orange';
            break;
        case fruitsList.watermelon:
            radius = 120;
            color = 'green';
            break;
        case fruitsList.blueberry:
            radius = 50;
            color = 'violet';
        break;
        default:
            radius = 100;
            color = 'violet';
    }

    return {
        radius, color
    }
}

export class Fruit extends GameObject {
    constructor(context, position, velocity, type) {
        super(context, position, velocity);

        this.direction = {x: 0, y: 0};
        this.type = type;
        this.isColliding = false;
        this.velocity.vy = 9.8 * 100;

        const { radius, color } = checkType(type);

        this.radius = radius; 
        this.color = color; 
    }

    draw() {
        // Fruit 
        this.context.beginPath();
        this.context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        this.context.fillStyle = this.color;
        this.context.fill();

        // Direction Vector 
        const vectorScale = 10; 

        this.context.beginPath();
        this.context.moveTo(this.position.x, this.position.y);
        this.context.lineTo(
            this.position.x + this.direction.x * vectorScale,
            this.position.y + this.direction.y * vectorScale
        );
        this.context.strokeStyle = "black";
        this.context.stroke();
    }

    update(secondsPassed){
        const canvasWidth = this.context.canvas.clientWidth;

        if (this.position.x - this.radius < 0){
            this.position.x = 0 + this.radius;
            this.velocity.vx = this.velocity.vx * -1;
        }

        if (this.position.x + this.radius > canvasWidth){
            this.position.x = canvasWidth - this.radius;
            this.velocity.vx = this.velocity.vx * -1;
        }

        const dx = this.velocity.vx * secondsPassed;
        const dy = this.velocity.vy * secondsPassed;

        this.direction.x = dx;
        this.direction.y = dy;

        const canvasHeight = this.context.canvas.clientHeight;

        if (this.position.y + this.radius < canvasHeight) {
            this.position.y += this.velocity.vy * secondsPassed;
        } else {
            this.position.y = canvasHeight - this.radius;
        }

        this.position.x += this.velocity.vx * secondsPassed;
        let velocityX = Math.abs(this.velocity.vx); 

        if(this.velocity.vx > 0){
            this.velocity.vx -= velocityX * 0.1;
        }
        if(this.velocity.vx < 0){
            this.velocity.vx += velocityX * 0.1;
        }
    }
}
