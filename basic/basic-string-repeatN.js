class BasicString{
    repeatWithN(string,count){
        let stringHolder = "";
        while(count>0){
            stringHolder = stringHolder + string;
            count--;
        }
        return stringHolder;
    }
}

module.exports = BasicString;