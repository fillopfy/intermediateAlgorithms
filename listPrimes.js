//to list out all the prime numbers in the form an array till the given number(passed as argument)

function listPrimes(num){

//first creating a func to check if the number passd is prime or not

function isPrime(n){

if(n<2) return false;

var a=Math.floor(Math.sqrt(n));

for(var i=2;i<=a;i++)
{
 if(n%i===0)
  return false;
}

return true;

}


var primes=[]; // to store prime numbers


//we will check each number starting from 2 if it is prime with the help of isPrime funciton and push it in the primes array

for(var k=2;k<=num;k++)
{
  if(isPrime(k)===true)
    primes.push(k);ss
}

return primes;


}