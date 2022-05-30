class Road{
    constructor(x, width) {
        this.x = x;
        this.width = width;
        this.laneCount = 4;

        this.left = x - width / 2;
        this.right = x + width / 2;

        const infinity = 1000000;
        this.top = -infinity;
        this.bottom = infinity;
    }
    getLaneCenter(index) {
        const laneWidth = this.width / this.laneCount;
        return this.left + this.laneWidth / 2 + index * laneWidth;
    }   
    draw(ctx) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";
        for (let i = 0; i <=this.laneCount; i++) {
            const x = lerp(this.left, this.right, i / this.laneCount);
            if (i > 0 && i < this.laneCount) {
                ctx.setLineDash([20, 20]);
            } else {
                ctx.setLineDash([]);
            }
            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }   
    }


}

