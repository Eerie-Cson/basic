class Shape{
  constructor (shape){
    this.shape = shape;
  }

  area(arg)
  {
    if(this.shape == 'Circle'){
      if(("radius" in arg) && Object.keys(arg).length==1)
        return Math.pow(arg.radius,2)*Math.PI;  
      throw new Error(`Wrong parameters for the given shape: ${this.shape}`);     
               
    }

    if(this.shape == 'Rectangle'){
      if(("width", "height" in arg)&& Object.keys(arg).length==2)
        return arg.width*arg.height;
      throw new Error(`Wrong parameters for the given shape: ${this.shape}`);  
    }
    
    if (this.shape == 'Triangle'){
      if(("base", "height" in arg) && Object.keys(arg).length==2)
        return 0.5*arg.base*arg.height;
      throw new Error(`Wrong parameters for the given shape: ${this.shape}`);  
    }
      
    throw new Error("Shape is not available!")
  }
}


module.exports = Shape;

