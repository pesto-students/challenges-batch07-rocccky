
function removeFalsyValues(array) {
  const ans = [];
  for(const ele of array){
    if(ele){
      ans.push(ele);
    }else{
      continue;
    }
  }
  return ans;
}

export {
  removeFalsyValues,
};
