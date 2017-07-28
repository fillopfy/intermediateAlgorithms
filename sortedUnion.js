//we are given multiple array as arguments, we have to convert all those arrays into single array and then remove all the duplicates without sorting out the original series


function sortedUnion(arr){

var list=[];   //to store all the elements from multiple arrays given as arguments

var check=[];  //to insert unique elements from list to this array


//nested for loop to insert all the elements from arrays(given in arguments) to list

for(var i=0;i<arguments.length;i++)
{
  for(var j=0;j<arguments[i].length;j++)
   {
	list.push(arguments[i][j]);	

     }

 }


//first check if [](check) contains elements from [](list)  and then insert unique elements

for(var k=0;k<list.length;k++)
{
  if(check.indexOf(list[k])===-1)
    check.push(list[k]);
}

return check;

}