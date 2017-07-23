//to return an array of elements that is not is not present in both simulatneously

function diffArray(arr1,arr2){

var newArray=arr2.concat(arr1);

return newArray.filter(function(val){
if(arr1.indexOf(val)===-1 || arr2.indexOf(val)===-1)
return val;
});


}