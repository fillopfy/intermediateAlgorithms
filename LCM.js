//to find the LCM of two or more numbers using LCM(a,b)=(a*b)/gcd(a,b)

function LCM(a,b){


//creating a function to find gcd of a and b

function gcd(m,n){

var temp=0;

if(a===0) return b;

else
if(b===0) return a;

else
{

while(b!=0)
{
 temp=b;
 b=a%b;
 a=temp;
}
return a;

}

}


//using the formula for lcm

return (a*b)/gcd(a,b);



}



//Note: to find LCM for more than 2 numbers use, LCM(a,b.c)=LCM(LCM(a,b),c) and so on