function perimeter(width, height){
  if(width<1||height<1){
    throw new Error("Should be greater than zero");
  }
  return 2*(width + height);
}
module.exports=perimeter
