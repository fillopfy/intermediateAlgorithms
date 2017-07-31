//check if the given numer is prime or not

function isPrime(n){

if(n<2)
return false;

var num=Math.floor(Math.sqrt(n));

for(var i=2;i<=num;i++)
{
  if(n%i===0)
    return false;
}

return true;


}

