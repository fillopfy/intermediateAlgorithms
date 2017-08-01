//to find the LCM of two or more numbers using LCM(a,b)=(a*b)/gcd(a,b)

function LCM(a,b){


//creating a function to find gcd of a and b

function gcd(m,n){

var temp=0;

if(m===0) return n ;

else
if(n===0) return m;

else
{

while(n!=0)
{
 temp=n;
 n=m%n;
 m=temp;
}
return m;

}

}


//using the formula for lcm

return (a*b)/gcd(a,b);



}



//Note: to find LCM for more than 2 numbers use, LCM(a,b.c)=LCM(LCM(a,b),c) and so on