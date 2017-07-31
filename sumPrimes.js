//we need to find the sum of all primes from 0 to the argument

function sumPrimes(num){

//creating a func to check if the passed num is prime or not

function isPrime(n){

if(n<2) return false;

var m=Math.floor(Math.sqrt(n));

for(var i=2;i<=m;i++)
{
  if(n%i===0)
   return false;
}

return true;

}



var primes=[]; //to store prime numbers

for(var k=2;k<=num;k++)
{
  if(isPrime(k)===true)
   primes.push(k);
}


//using reduce method to suma all primes from the array primes

return primes.reduce(function(a,b){

return a+b;

});


}