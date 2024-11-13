export class GameObject {
    constructor(context, x, y, vx, vy) {
        this.context = context;

        // Position
        this.x = x;
        this.y = y;

        // Velocity
        this.vx = vx;
        this.vy = vy;

        // Collision
        this.isColliding = false;
    }
}
