// You can change the `args`
function bind(...args) {
  return function callBack(...args) {
    return fn.apply(obj, args);
  };
}

module.exports = { bind };
