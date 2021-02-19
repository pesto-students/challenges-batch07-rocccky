const deepCopyObject = objToCopy => {
    if(objToCopy === null || typeof objToCopy !== 'object'){
        return objToCopy;
    }

    const objToReturn = objToCopy.constructor();
    for(let key in objToCopy){
        objToReturn[key] = deepCopyObject(objToCopy[key]);
    }
    return objToReturn;
};

export { deepCopyObject };
