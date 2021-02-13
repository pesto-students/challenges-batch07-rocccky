function rot13(str) {
  var ans = "";
  var encode = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var decode = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  for(var i = 0; i < str.length; i++){
    var x = str.charCodeAt(i);
    if(x >= 65 && x <= 90){
      ans += decode.charAt(x - 65);
    }else{
      ans += str.charAt(i);
    }
  }
  //console.log(ans);
  return ans;
}

export {
  rot13,
};
