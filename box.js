class Box extends Parent {
    constructor(x, y, width, height) {
    super(x,y,width,height);
    this.Bisiblity = 255;
    }
    display()
    {
      if (this.body.speed<2) {
        super.display();
      } else {
        World.remove(world,this.body)
        push()
        this.Visiblity = this.Visiblity-5
        tint(255,this.Visiblity);
        pop();
      }
    }
  };