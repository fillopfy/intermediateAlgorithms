//to find LCM of all the numebers between and including the max and min number provided in the array as argument


function smallestCommons(arr){

//to get all numebrs in the array between max and min
for(var i=Math.min.apply(null,arr);i<Math.max.apply(null,arr)-1;i++)
{

 arr.push(i+1);

}

//sorting in descending order
var sorted=arr.sort(function(a,b){return b-a;});


//to find lcm of two numbers

function lcm(a,b){

//to find GCD of two numbers and use it to find LCM

function gcd(m,n){

var temp=0;

if(m===0) return n;

else

if(n===0) return m;

else{

while(n!=0)

{
 temp=n;
 n=m%n;
 m=temp;

}
return m;

}


}

//using formula lcm=(a*b)/gcd(a,b)

return (a*b)/gcd(a,b);

}



//using reduce to find lcm of all the numebrs in the sorted array

return  sorted.reduce(function(p,q){

return lcm(p,q);

});


}