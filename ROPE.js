class rope {
    constructor(body1, body2, offsetX, offsetY){
      this.offsetX = offsetX
      this.offsetY = offsetY
      var opt = { bodyA: body1, 
            bodyB: body2, 
            stiffness: 1,
            lenght: 10,
            pointB: {x:this.offsetX, y:this.offsetY} 
          }
    this.rope = Constraint.create(opt);
    World.add(world, this.rope);
    }
    display() {
        var posa = this.rope.bodyA.position;
        var posb = this.rope.bodyB.position;

        strokeWeight(5);
        line(posa.x, posa.y, posb.x, posb.y);
      }
}