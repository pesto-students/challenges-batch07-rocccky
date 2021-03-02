import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const newNode = new LinkListNode(value, this.head);
    this.head = newNode;   
  }

  append(value) {
    let itrNode = this.head;
    
    while(itrNode != null && itrNode.next != null){
      itrNode = itrNode.next;
    }
    if(itrNode == null){
      this.head = new LinkListNode(value);
    }else{
      itrNode.next = new LinkListNode(value);
    } 
  }

  delete(value) {
    let itrNode = this.head;
    let prevNode = null;
    while(itrNode !== null && itrNode.value !== value){
      prevNode = itrNode;
      itrNode = itrNode.next;
    }
    if(itrNode === null){
      console.log("Value doesn't exists");
    }else{
      prevNode.next = itrNode.next;
    }
  }

  traverse() {
    let itrNode = this.head;
    let arr = [];
    while(itrNode !== null){
      arr.push(itrNode.value);
      itrNode = itrNode.next;
    }
    console.log(arr);
  }

  contains(value) {
    let itrNode = this.head;
    while(itrNode !== null){
      if(itrNode.value === value){
        return true;
      }
      itrNode = itrNode.next;
    }
    return false;
  }

  length() {
    let itrNode = this.head;
    let count = 0;
    while(itrNode !== null){
      count++;
      itrNode = itrNode.next;
    }
    return count;
  }
}
