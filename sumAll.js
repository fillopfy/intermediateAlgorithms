//to get sum  of all numbers btween and including the numbers given in thee array

function sumAll(arr){

//Math.min.apply(null,arr) and Math.max.apply(null,arr) will give the minimum and maximum values from the array

  for(var i=Math.min.apply(null,arr);i<Math.max.apply(null,arr)-1;i++)
   {
     arr.push(i+1);
    }

  return arr.reduce(function(a,b){

   return a+b;

});


}