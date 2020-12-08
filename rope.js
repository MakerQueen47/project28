class rope{

constructor(bodyA, pointB){

    var options = {

        'bodyA': bodyA,
        'pointB':pointB,
        'stiffness': 0.004,
        'length': 75
    }

    this.rope1 = Constraint.create(options);

    this.pointB = pointB;

    World.add(world, this.rope1);




}

fly(){

    this.rope1.bodyA = null;
}


attach(body){

    this.rope1.bodyA = body;

}
display(){

    if(this.rope1.bodyA){

    var pointA = this.rope1.bodyA.position;
    var pointB = this.pointB;
    push();
    stroke("red");
    line(pointA.x+25, pointA.y+40, pointB.x, pointB.y);

    pop();

    }
}


}