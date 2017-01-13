
function countLetters(string){
  string = string.split(" ").join("");
  var object = {};
for (var i = 0; i < string.length; i++){
  var element = string.charAt(i);
  if(object[element] == undefined){
    object[element] = 1;
  }else{
    object[element] += 1;
  }

}

  return object;
}




console.log(countLetters("lighthouse in the house"));

