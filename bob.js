class Bob{
    constructor(x,y,width,height){
 
     var options = {
     'density' :4,
    'friction' : 1.0,
     'restitution' : 0.5,
        }
      
    this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);

      }
 
       display(){
 
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,20,20);
       }
    
 }
 