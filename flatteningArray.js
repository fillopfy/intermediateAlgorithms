//we are given a multi-dimensional array of variable orders, and we need to merge all of them into a single array

function steamrollArray(arr){

//to concat all elements into this
var res=[];

//using a for loop to check each element, if it is an array, use concat and recursion else, just push the element
 
for(var i=0;i<arr.length;i++)
{

 if(Array.isArray(arr[i]))
 res=res.concat(steamrollArray(arr[i]));

 else
 res.push(arr[i]);
}

return res;

}


//steamrollArray([1,[2,3,[4],[[[6]]]]]) will return [1,2,3,4,6]