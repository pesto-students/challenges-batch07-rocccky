function chunkArrayInGroups(array, chunkSize) {
  const newArray = [];
  while(array.length){
    newArray.push(array.splice(0,chunkSize));
  }
  return newArray;
}

export {
  chunkArrayInGroups,
};
