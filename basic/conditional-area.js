class Shape{
  constructor (shape){
    this.shape = shape;
  }

  area(arg)
  {
    if(this.shape == 'circle'){
      if(("radius" in arg) && Object.keys(arg).length==1)
        return Math.pow(arg.radius,2)*Math.PI;
      throw new Error("Wrong parameters for the given shape: Circle");            
    }
    
    if(this.shape == 'rectangle')
      return arg.width*arg.height;
    
    if (this.shape == 'triangle')
      return 0.5*arg.base*arg.height;
      
    throw new Error("Shape is not available!")
  }
}


module.exports = Shape;

