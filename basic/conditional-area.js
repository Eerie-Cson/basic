class Shape{
  constructor (shape){
    this.shape = shape;
  }
  area(arg)
  {
    
    if(this.shape == 'circle'){
      if(Object.keys(arg).length>1){
        throw new Error("Wrong parameters for the given shape: Circle");
      }
      return Math.pow(arg.radius,2)*Math.PI;
    }
    else if(this.shape == 'rectangle'){
      return arg.width*arg.height;
    }
    else if (this.shape == 'triangle'){
      return 0.5*arg.base*arg.height;
    }
    throw new Error("Shape is not available!")

  }

}


module.exports = Shape;

