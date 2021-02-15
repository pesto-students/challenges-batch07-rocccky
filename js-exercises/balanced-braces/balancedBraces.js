
function balancedBraces(...args) {
  
  let asciiOpen = [40, 91, 123];
  let asciiClosed = [41, 93, 125];
  let map = {};
  asciiClosed.forEach((key, i) => map[key] = asciiOpen[i]);
  
  let stack = [];

  for(const str of args){
    for(let i = 0; i < str.length; i++){
      const code = str.charCodeAt(i);
      if(asciiOpen.includes(code)){
        stack.push(code);
      }else if(asciiClosed.includes(code)){
        if(stack.length === 0)return false;

        const peek = stack.pop();
        if(map[code] !== peek)return false;
      }
    }
  }
  if(stack.length === 0)return true;
  return false;
}

export {
  balancedBraces,
};
