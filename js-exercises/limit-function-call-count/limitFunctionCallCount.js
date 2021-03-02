const limitFunctionCallCount = (func, nTimes) => {
  let count = nTimes;
  console.log(count);
  return function(...args){
    count--;
    if(count > 0){
      return func.apply(this, args);
    }else{
      return null;
    }    
  } 
};

export {
  limitFunctionCallCount,
};
