class BasicArray{
    sum(number=[]){
        let total = 0, counter = number.length-1;        //initialize total with 0 and counter with the 
                                                         //total number of elements of an array reduced by 1
        while(counter>=0){
             total = total + number[counter];                 //Calculate the total of the elements by looping through the array 
             counter--;
         }
         return total;                                   //display the total value accumulated from the total variable
                                                      //after the loop
     }
 }
 
 
 module.exports = BasicArray;
 