
function duplicateLetters(str) {
  var map = new Map();
  var count = 1;
  for(var i = 0; i < str.length; i++){
    if(map.has(str.charAt(i))){
      var temp = map.get(str.charAt(i)) + 1;
      map.set(str.charAt(i), temp);
      if(temp > count){
        count = temp;
      }
    }else{
      map.set(str.charAt(i), 1);
    }
  }
  if(count > 1){
    return count;
  }
  return false;
}

export {
  duplicateLetters,
};
