//we are given a collection(array) of objects and one key(pre), we need to check if each object is in collection and it's value is not falsy.{falsy values include: NaN, 0,null,"",undefined,false}


function truthCheck(collection, pre){

//we use Array.prototype.every(function(){}) method to check if each element from collection has key (pre) and that key value is not falsy

return collection.every(function(obj){

return obj.hasOwnProperty(pre)&&Boolean(obj[pre]);

});

//or, var c=0;for(var i=0;i<collection.length;i++){if(collection[i].hasOwnProperty(pre)&&Boolean(collection[i][pre])) c++;}return c===collection.length;


}


//truthCheck([{"single": "double"}, {"single": undefined}], "single")  return false