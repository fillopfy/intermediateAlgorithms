//to find the missing letter from the given alphabet series, e.g. "abcdf" misses "e"

function findMissingLetter(str){

for(var i=0;i<str.length-1;i++)
{

//we will check if next letter is one more than it's previous by using their ascii values

   if(str[i+1].charCodeAt()!==str[i].charCodeAt()+1)
	return String.fromCharCode(str[i].charCodeAt()+1);

 }

//if all the letters are present, we return undefined

return undefined;


}