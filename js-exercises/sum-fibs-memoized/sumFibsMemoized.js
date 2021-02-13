function sumFibs(num) {
  if(num <= 0) return 0;
  if(num === 1)return 2;
  const fibonacciNumbers = [1,1];
  let nextFibonacciNumber = 
    fibonacciNumbers[fibonacciNumbers.length - 1] + 
    fibonacciNumbers[fibonacciNumbers.length - 2];
  
  while (nextFibonacciNumber <= num){
    fibonacciNumbers.push(nextFibonacciNumber);
    nextFibonacciNumber = 
      fibonacciNumbers[fibonacciNumbers.length - 1] + 
      fibonacciNumbers[fibonacciNumbers.length - 2];
  }

  const oddFibonacciNumbers = fibonacciNumbers.filter(function callback(
    fibonacciNumber
  ){
    return fibonacciNumber % 2 !==0;
  });
  
  const sum = oddFibonacciNumbers.reduce(function callback(
    acc, 
    fibonacciNumber
  ){
    return acc + fibonacciNumber;
  });

  return sum;
}


function cacheFunction(fn) {
  
  const cache = new Map();

  return function cachedFunction(...args){
    const key = JSON.stringify(args);
    if(cache.has(key)){
      return cache.get(key);
    }
    const ans = fn(...args);
    cache.set(key, ans);
    return ans;
  }
}

export { sumFibs, cacheFunction };
