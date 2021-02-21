class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':0,
        'friction':0,
        'density':0.85, 
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius; 
      this.image = loadImage("pics/paper.jpg");
      



      //circle(this.body.position.x, this.body.position.y, this.radius);
        
      World.add(world, this.body);
      }
    
      display(){
        //ellipseMode(RADIUS);
        var paperpos=this.body.position; 
        push() 
        translate(paperpos.x, paperpos.y);
        strokeWeight(3); 
        fill("blue"); 
        imageMode(CENTER) 
        image(this.image,0,0,this.radius, this.radius); 
        pop() 
      }
  
    }
    ;

   