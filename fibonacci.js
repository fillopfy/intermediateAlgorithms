function generateFibonacci(num){

var arr=[1];

//a for loop needed, in which initialisation is important. We initialise i with the next fibonacci number rather than i++ because in later case, it will generate an infinite loop for num=bigNumbers

for(var i=1;i<=num;i=arr[arr.length-1]+arr[arr.length-2])

 {
   arr.push(i);

  }



}