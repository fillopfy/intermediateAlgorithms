//spinal case is all lowercase words joined with dashes:https://www.freecodecamp.org/challenges/spinal-tap-case


function spinalCase(str){

//we are going to use replace method to replace all splaces and underscore with "-" and using ([a-z])([A-Z]) to find the place where lowercase and upprcase are together, then using $1 to for ([a-z]) matching and $2 for ([A-Z]) matching  then "$1-$2" to insert lowercase dash and uppercase letter by replacing lowercase and uppercase. And finally converting the string to lowercase


return str.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s|_/g,"-").toLowerCase();



}