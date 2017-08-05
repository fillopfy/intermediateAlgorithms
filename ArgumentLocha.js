//we are given one or 2 argument.. if both are numbers, simply return their sum. If any one of them is not numbr, return unefined. Also, if there is only one argument then we need to return a function that will take one argument and then rturn their sum (if both are strictly numbers), else, return undefined


function addTogether(){

//function for checking if the number passed is purely number of not

var check=function(num){
if(typeof num==='number')
return num;
else
return undefined;
};


//function for returning sum of two numbers if they pass the test
var add=function(a,b){

if(a===undefined || b===undefined)
return undefined;
else
return a+b;

};


//now cheking if arguments length is actually 2, if yes, just return their sum (if both are numbers)
if(arguments.length===2)
{

return add(check(arguments[0]),check(arguments[1]));

}

else

{
var c=arguments[0];
if(check(c))
{
 return function(arg){
  return add(check(c),check(arg));
  };
}
else
return undefined;

}

}