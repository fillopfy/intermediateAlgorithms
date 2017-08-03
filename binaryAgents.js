//we are given a string of binary numbers which is to be converted into human readable sentences

function binaryAgents(str){

//first split it so that each set of binary code is individual in the array

var arr=str.split(" ");

//to store decimal of binary and then convert it into their ascii values
var res=[];

//we use a for loop to go to each binary set, convert it into decimal and then convert it to it's ascii valu and finally push it into the array res

for(var i=0;i<arr.length;i++)
{
//parseInt(binaryset,2) converts binary set to it's equivalence decimal value

 res.push(String.fromCharCode(parseInt(arr[i],2)));

}

return res.join("");


}

//binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") returns "Aren't bonfires fun!?"