class Stack {
    constructor(data) {
        this.stack = [];
    }

    get length() {
        return this.stack.length;
    }


    push(val){
        return this.stack.push(val);
    }
    pop(){
        return this.stack.pop();       
    }
    peek(index = this.length-1){
        return this.stack[index];
    }
    reverse(){
        return this.stack.reverse();
    }
    isEmpty(){
        if(this.stack.length > 0) {
            return false;
        } else {
            return true;
        }
    }
    displayStack(){

        let str = "";
        this.stack.forEach((elm)=> str = str + " " + elm);
        return str;
    }
}

let myStack = new Stack();
myStack.push('One');
myStack.push('Two');
console.log(myStack.length); // 2
console.log(myStack.peek()); // "Two"
console.log(myStack.peek(0)); // "One"
console.log(myStack.reverse()); // ['Two', 'One']
console.log(myStack.displayStack()); // 'Two One'
myStack.pop();
console.log(myStack.length); // 1
console.log(myStack.peek()); // 'Two'
console.log(myStack.isEmpty()); // false
myStack.pop();
console.log(myStack.isEmpty()); // true


class Queue {
    constructor () {
        this.queue = [];
    }

    get length() {
        return this.queue.length;
    }

    enqueue(item) {
        return this.queue.push(item);
    }
    dequeue() {
        return this.queue.shift();
    }
    peek(index = 0) {
        return this.queue[index];
    }
    isEmpty() {
        if(this.queue.length > 0) {
            return false;
        } else {
            return true;
        }
    }
    displayQueue() {
        let str = "";
        this.queue.forEach((elm)=> str = str + " " + elm);
        return str;
    }
}

let atmQueue = new Queue();
atmQueue.enqueue('Aman');
atmQueue.enqueue('John');
atmQueue.enqueue('Rohan');
console.log(atmQueue.displayQueue()); // "Aman John Rohan"
console.log(atmQueue.length); // 3
console.log(atmQueue.peek()); // "Aman"
console.log(atmQueue.peek(1)); // "John"
atmQueue.dequeue();
console.log(atmQueue.length); // 2
console.log(atmQueue.peek()); // 'John'
console.log(atmQueue.isEmpty()); // false
atmQueue.dequeue();
atmQueue.dequeue();
console.log(atmQueue.isEmpty()); // true