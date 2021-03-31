function rangeIter(lb, ub) {
    if (arguments.length === 0) {
        throw new TypeError('undefined is not a number');
    }
    
    if (typeof lb !== 'number') {
        throw new TypeError(`${lb} is not a number`);
    }
    
    if (typeof ub !== 'number') {
        throw new TypeError(`${ub} is not a number`);
    }
    return {
        start: lb,
        end: ub,
        [Symbol.iterator](){
            return {
                start: this.start,
                end: this.end,
                next(){
                    if(this.start <= this.end){
                        return {done: false, value: this.start++}
                    }
                    return {done: true}
                },
                [Symbol.iterator](){
                    return {
                        start: this.start,
                        end: this.end,
                        next(){
                            if(this.start <= this.end){
                                return {done: false, value: this.start++}
                            }
                            return {done: true}
                        }
                    }
                }
            }
        },
    }
}

export { rangeIter };
