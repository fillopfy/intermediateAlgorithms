//we are given an array and a function as argumnts, we have to rturn the first lement of the array that will pass the test given in the function


function findElement(arr,func){

for(var i=0;i<arr.length;i++)
{
  if(func(arr[i])===true)
   return arr[i];
 
}


}