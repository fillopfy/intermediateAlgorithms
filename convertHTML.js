//we are going to convert some characters into their HTML entities, particularly for &, <,>,",'

function convertHTML(str){

//creating a regular expression to match from given  string

var re=/[&<>"']/gi;

//creating an object so that we can replace char with the key's value by matching from this obj

var obj={"&":"&amp;",
	"<":"&lt;",
	">":"&gt;",
	"\"":"&quot;",
	"\'":"&apos;"};

//using replace method to replace those char with their HTML wntitities, w need a callback function so that it can replace multiple characters 

return str.replace(re,function(r){
return obj[r];
});


}