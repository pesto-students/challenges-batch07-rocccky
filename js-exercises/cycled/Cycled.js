class Cycled{
    constructor(arr){
        this.arr = arr;
        this.currentIdx = 0; 
        this.len = arr.length;
        this.stepUp = this.up();
        this.stepDown = this.down();
    }
    set index(x){
        const m = this.len;
        this.currentIdx = (x%m + m)%m;
    }
    get index(){
        return this.currentIdx;
    }
    *  up(){
        while(true){
            this.currentIdx++;
            if(this.currentIdx === this.arr.length){
                this.currentIdx = 0;
            }           
            yield this.arr[this.currentIdx];
        }
    }
    * down(){
        while(true){
            this.currentIdx--;
            if(this.currentIdx === -1){
                this.currentIdx = this.arr.length-1;
            }           
            yield this.arr[this.currentIdx];
        }
    }
    next(){
        return this.stepUp.next().value;
    }
    current(){
        return this.arr[this.currentIdx];
    }
    previous(){
        return this.stepDown.next().value;
    }
    step(x){
        this.currentIdx += (x % this.len + this.len)% this.len;
        this.currentIdx = (this.currentIdx % this.len + this.len) % this.len;
        return this.arr[this.currentIdx];
    }
    reversed(){
        this.currentIdx = (this.currentIdx % this.len + this.len) % this.len;
        return this.stepDown;
    }
    indexOf(x){
        for(let i = 0; i < this.len; i++){
            if(x === this.arr[i]){
                return i;
            }
        }
        return -1;
    }
    [Symbol.iterator](){
        
        return{
            index: this.currentIdx,
            arr: this.arr,
            len: this.len,
            idx: 0,
            currentIdx: 0,
            next(){
                while(this.idx++ < this.len){
                    this.index = (this.index % this.len + this.len) % this.len;
                    return {done: false, value: this.arr[this.index++]}
                }
                return {done: true}
            }
            
        }
    }
}

export { Cycled };