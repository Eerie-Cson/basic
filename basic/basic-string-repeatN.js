class BasicString{
  repeatWithN(str, count){
    return [...Array(count)].map(e => e = str).join("");
}
}
module.exports = BasicString;
