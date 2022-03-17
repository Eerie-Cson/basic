class BasicString{
    repeat(string){

        let stringHolder = "", stringCount = 0;        //initialize string holder and string counter
        while(stringCount<5){                           
            stringHolder = stringHolder + string;       //fill the string holder with string 'a' || 'ab'
            stringCount++;                              //increment the string counter until 5
        }
        return stringHolder;                            //display all the string accumulated by stringholder after 
                                                        //the loop
    }
}

module.exports = BasicString;