
function countLetters(string){
  string = string.split(" ").join("");
  var object = {};
for (var i = 0; i < string.length; i++){
  var element = string.charAt(i);
  if(object[element] == undefined){
    object[element] = [i];
  }else{
    object[element].push(i);
  }

}
return object;
}


console.log(countLetters("lighthouse in the house"));