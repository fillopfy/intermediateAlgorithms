//to find the GCD of two numbers using Euclidean geometry

function gcd(a,b){

var temp=0;
if(a===0) return b;

else
if(b===0) return a;

else

while(b!==0)
{  
   temp=b;
   b=a%b;
   a=temp;
    
  }
return a;

}


//Note: To find gcd of more than 2 numbers use, gcd(a,b,c)=gcd(gcd(a,b),c) and so on..