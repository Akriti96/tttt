class Boat{
  constructor(x,y,w,h,boatPosition){
      this.x=x
      this.y=y
      this.w=w
      this.h=h
      this.boatPosition=boatPosition

      var options={
          restitution:0.9,
          friction:1.0,
          density:1.0
      }

      this.body= Bodies.rectangle(this.x,this.y,this.w,this.h,options)
      World.add(world,this.body)

      this.image=loadImage("./assets/boat.png")
  }
   display(){
       var pos= this.body.position
       var angle= this.body.angle
       push()
       translate(pos.x, pos.y)
       imageMode(CENTER)
       image(this.image, 0, this.boatPosition,this.w, this.h)
       pop()

 }

}