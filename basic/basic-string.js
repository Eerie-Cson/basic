class BasicString{
    repeat(str){
      return [...Array(5)].map(e => e = str).join("");
    }
}

module.exports = BasicString;
