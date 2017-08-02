//we are given and array and a function as arguments. We need to check if the elements starting from index 0 satisfies the condition of the func. If first element does not pass, just remove it and keep doing it unlees first ellmnet onwards passed the test. 


function dropElements(arr, func){

//using while loop to check if first elelment passes the test or not, if passed, no need to remove else, shift unless the first elelment pass the func

while(func(arr[0])===false)
{
  arr.shift();
}

return arr;


}

//dropElelments([1,2,3,4,5], function(n){return n>3}) - give output [4,5]