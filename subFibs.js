//to find the sum of odd numbers from fibonacci list

function sumFibs(num){

var arr=[1];

for(var i=1;i<=num;i=arr[arr.length-1]+arr[arr.length-2])
{
  arr.push(i);
}

var odd=[];//to store odd fibonacci numbers

for(var j=0;j<arr.length;j++)
{

  if(arr[j]%2!==0)
  odd.push(arr[j]);
  
}

return odd.reduce(function(a,b){

return a+b;
});


}