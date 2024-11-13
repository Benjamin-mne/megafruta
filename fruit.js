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

export class Fruit extends GameObject {
    constructor(context, x, y, vx, vy, type) {
        super(context, x, y, vx, vy);
        
        this.type = type;
        this.isColliding = false;

        switch (type) {
            case fruitsList.apple:
                this.radius = 100;
                this.color = 'red';
                break;
            case fruitsList.orange:
                this.radius = 80;
                this.color = 'orange';
                break;
            case fruitsList.watermelon:
                this.radius = 120;
                this.color = 'green';
                break;
            case fruitsList.blueberry:
                this.radius = 50;
                this.color = 'violet';
            break;
            default:
                this.radius = 100;
                this.color = 'violet';
        }
    }

    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.context.fillStyle = this.color;
        this.context.fill();
    }

    update(secondsPassed) {
        const canvasWidth = this.context.canvas.clientWidth;

        if(this.x - this.radius < 0){
            this.x += (this.x + this.radius) * secondsPassed;
        } else if (this.x + this.radius > canvasWidth){
            this.x += -this.radius * secondsPassed * 4;
        } else {
            this.x += this.vx * secondsPassed;
        }

        const canvasHeight = this.context.canvas.clientHeight;
        
        if (this.y + this.radius < canvasHeight) {
            this.y += this.vy * secondsPassed;
        } else {
            this.y = canvasHeight - this.radius;
            this.vy = 0;
        }
    }
}
