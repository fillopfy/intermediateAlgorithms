//to return matching object (both key and property) from collection in an array

function whatIsInAName(collection,source){

var sourceKeys=Object.keys(source); //to store all keys from source object in an array


//using filter to filter out objects from collection whose property or property value does not match with that of source

return collection.filter(function(obj){

for(var i=0;i<sourceKeys.length;i++)
{
  //we check if each obj from collection has key from sourceKeys and then check if that key has same property as that given in the source obeject

 if(!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]]!==source[sourceKeys[i]])
   return false;
}
return true;

});



}