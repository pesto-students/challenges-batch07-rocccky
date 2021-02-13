 
const sumEvenArgs = (...args) => {
  if(args.length === 0) return 0;
  
  const evenArgs = args.filter(function onlyEven(arg){
    return arg % 2 === 0;
  });

  const ans = evenArgs.reduce(function callack(sum, evenArg){
    return sum + evenArg;
  }, 0
  );

  return ans;
};
export { sumEvenArgs };
