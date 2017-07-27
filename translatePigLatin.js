//to convert given str to pigLatin format-https://en.wikipedia.org/wiki/Pig_Latin

function translatePigLatin(str){

var vow=/[aeiou]/gi; //rgular expression  containing all the vowels

//if first letter is a vowel, just add ""way" in the end of str and return it

if(str[0].match(vow))
return str+"way";

//first find index at which first vowel is found in the given str and then using slice method to get the desired output

else
 {
   //declaring a local var to get the index of first vowel in the given string

   var index=str.indexOf(str.match(vow)[0]);

   //slice str from index then add, all the coonsonents to the end and then add "ay"

    return str.slice(index)+str.slice(0,index)+"ay";

    }




}