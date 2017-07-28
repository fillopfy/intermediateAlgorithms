//DNA pairing algorithm:AT,TA,CG,GC

function pairElement(str){

//creating an obj to match dna

var obj={"A":"T",
	"T":"A",
	"C":"G",
	"G":"C"};

var res=[];//to return 2d array(one sub-array for each dna pair)

for(var i=0;i<str.length;i++)
{
   res.push([str[i],obj[str[i]]]);

 }

return res;


}