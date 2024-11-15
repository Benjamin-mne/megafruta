export class GameObject {
    constructor(
            context, 
            position = { x: 0, y: 0 }, 
            velocity = { vx: 0, vy: 0}, 
            mass = 100
    ) {
        this.context = context;
        this.position = position;
        this.mass = mass;
        this.velocity = velocity;

        // Collision
        this.isColliding = false;
    }
}
