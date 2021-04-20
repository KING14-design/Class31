class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trj=[]
    this.smokeImage=loadImage("sprites/smoke.png")
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    var pos=[this.body.position.x,this.body.position.y]
    if(this.body.velocity.x>10&&this.body.position.x>200){
      this.trj.push(pos)
    }
    for(var i=0;i<this.trj.length;i++){
image(this.smokeImage,this.trj[i][0],this.trj[i][1])
    }
  }
}
