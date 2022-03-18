function Area(width, height ){
  if(typeof width == "string"||typeof height == "string"){
    throw new Error("Invalid type!");
  }
    return width*height;
}
module.exports = Area;
