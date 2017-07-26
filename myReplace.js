//to replace a word by doing search and replace and changing the case

function myReplace(str, before,after){

return str.replace(before,function(){

//we check if the first letter of the word to be replaced is uppercase then convert the first letter of the  word(with which to be replace) in uppercase

if(before[0]===before[0].toUpperCase())
return after[0].toUpperCase()+after.slice(1,after.length);

else
return after;

});



}