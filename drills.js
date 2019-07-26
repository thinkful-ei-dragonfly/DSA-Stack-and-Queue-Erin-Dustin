class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop(data) {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

const emptyStack = new Stack();

// console.log(starTrek);

function peek(stack) {
  console.log(stack.top.data);
}

// peek(starTrek);

function isEmpty(stack) {
  if(stack.top) {
    return false
  }
  return true;
}

// console.log(isEmpty(emptyStack));
// console.log(isEmpty(starTrek));

function display(stack) {
  let currNode = stack.top;
  while(currNode.next !== null) {
    console.log(currNode.data)
    currNode = currNode.next;
  }
  console.log(currNode.data);
}

// display(starTrek);

// starTrek.pop();
// starTrek.pop();
// display(starTrek);

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let firstStack = new Stack();
  let secondStack = new Stack();

  while(s.length > 1) {
    firstStack.push(s[0]);
    secondStack.push(s[s.length-1]);
    s = s.substring(1,s.length-1)
  }

  let currNode1 = firstStack.top;
  let currNode2 = secondStack.top;

  while(currNode1.next !== null) {
    if(currNode1.data !== currNode2.data) {
      return false
    }
    currNode2 = currNode2.next;
    currNode1 = currNode1.next;
  }

  return true;
}

// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('maddam'));


function matchingParentheses(string) {
  // if(string[0] === ')' || string[string.length - 1] === '(') {
  //   return 'Cannot start with a closing or end with an opening parentheses'
  // }
  let openPosition = 0;
  // let closedPosition = 0;
  let moves = 0;
  let parenCount = 0;
  let parenthesesStack = new Stack();

  while(string.length > 0) {
    parenthesesStack.push(string[0])
    moves++;
    if(parenthesesStack.top.data === '(') {
      parenCount++;
    } else {
      parenCount--;
    }
    if (parenCount === 0) {
      openPosition = moves;
    }
    if (parenCount < 0) {
      return `Closed parentheses at position ${moves - 1}`
    }
    // console.log(`Open count: ${openCount}, Closed count: ${closeCount}`)
    string = string.substring(1, string.length)
  }
  if(parenCount === 0) {
    return true;
  }
  if(parenCount > 0) {
  return `Open parentheses at position ${openPosition}`;
  }
}
// console.log(matchingParentheses('()()())'));

function sortStack(stack){
  //[3,4,1,5] [] t[]
  //[4,1,5] [] t[3]
  //[1,5] [] t[4,3]
  //[1,5] [4] t[3]
  //[1,5] [3,4] t[]
  //[5] [1,3,4] t[]
  //[5] [] [4,3,1]
  //[][5][4,3,1]
  // [1,3,4,5]
}

// console.log(matchingParentheses('()()()'));

// input:  [1,5,3,4]
// output: [1,3,4,5]


// temp: 1

function sortStack(stack) {
  let temp;
  let secondStack = new Stack;

  while(stack.top){
    // console.log(temp);
    temp = stack.pop();
    while(secondStack.top && temp > secondStack.top.data) {
      stack.push(secondStack.pop());
    }
      secondStack.push(temp);
    }
  
    // display(stack);
    return secondStack;
  }
 

// const newStack = new Stack();
// newStack.push(1);
// newStack.push(2);
// newStack.push(3);
// newStack.push(4);
// newStack.push(6);
// console.log(display(sortStack(newStack)));

// []
// [4,6]
// temp = 3



class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }
  enqueue(item){
    let node = new _Node(item,null);
    if(this.first === null){
      this.first = node;
    }
    if(this.last) {
      this.last.next = node
    }
    this.last = node;
  }

  dequeue(){
    if(this.first === null){
      return;
    }
    let node = this.first;
    this.first = this.first.next;
    if(node === this.last){
      this.last = null;
    }
    return node.data;
  }
}

let starTrekQ = new Queue;
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');
starTrekQ.dequeue();


function peekQ(queue){
  console.log(queue.first.data);
}

// peekQ(starTrekQ);

function isEmptyQ(queue){
  if(queue.first === null){
    return true;
  }
  return false;
}

const emptyQ = new Queue();
// console.log(isEmptyQ(starTrekQ));

function displayQ(queue){
  let currNode = queue.first;
  while(currNode !== null){
    console.log(currNode.data);
    currNode = currNode.next;
  }
  // console.log(currNode.data);
}

// displayQ(starTrekQ);

// starTrekQ.dequeue();
// starTrekQ.dequeue();
// displayQ(starTrekQ);

class _DNode {
  constructor(data, next, prev){
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DubQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(item){
    let node = new _DNode(item, null, this.last);
    if (this.first === null){
      this.first = node;
      this.last = node;
      return;
    }
    this.last.next = node;
    this.last = node;
  }

  dequeue(){
    let node = this.first;

    if(this.first === this.last){
      this.first = null;
      this.last = null;
      return node;
  }
    this.first = this.first.next;
    this.first.prev = null;
    return node;
  }
}

// let DQ = new DubQueue();
// DQ.enqueue('a');
// DQ.enqueue('b');
// DQ.enqueue('c');
// DQ.dequeue();
// DQ.dequeue();
// DQ.dequeue();

// displayQ(DQ);

class StackQueue{
  constructor(){
    this.stackFirst = new Stack();
    this.stackLast = new Stack();
  }

  enqueue(item){
    if(this.stackFirst.top || !this.stackLast.top){
      this.stackFirst.push(item);
    }
    if(!this.stackFirst.top && this.stackLast.top){
      while(this.stackLast.top) {
        this.stackFirst.push(this.stackLast.pop());
      }
      this.stackFirst.push(item);
    }
  }
  dequeue(){
    while(this.stackFirst.top){
      this.stackLast.push(this.stackFirst.pop());
    }
    let node = this.stackLast.pop();
    while(this.stackLast.top){
      this.stackFirst.push(this.stackLast.pop());
    }
    return node.data;
  }
}

// let SQ = new StackQueue();
// SQ.enqueue('a');
// SQ.enqueue('bb');
// SQ.enqueue('b');

// SQ.dequeue();
// console.log(SQ);

function squareDance(queue){
  let mQ = new Queue();
  let fQ = new Queue();
  let pairQ = new Queue();

  while(queue.first){
    let curr = queue.dequeue();
    if(curr.gender === 'M'){
      mQ.enqueue(curr);
    }else{
      fQ.enqueue(curr);
    }
    if(fQ.first && mQ.first){
      let man = mQ.dequeue();
      let woman = fQ.dequeue();
      let pair = {man,woman};
      pairQ.enqueue(pair);
    }
  }
  return pairQ;
}

// let SDQ = new Queue();

// SDQ.enqueue({name: 'Dustin', gender:'M'})
// SDQ.enqueue({name: 'Erin', gender:'F'})
// SDQ.enqueue({name: 'Lucas', gender:'M'})
// SDQ.enqueue({name: 'Emily', gender:'F'})
// SDQ.enqueue({name: 'Chris', gender:'M'})

// squareDance(SDQ);

function bank(queue){
  while(queue.first){
    let person = queue.dequeue();
    let random = Math.random();
    if(random < .25){
      queue.enqueue(person);
      console.log(`${person} moved to back of line`)
    } else{
    console.log(`${person} served`);
    }
  }
  console.log('everyone served')
}

// const BQ = new Queue();

// BQ.enqueue('person a');
// BQ.enqueue('person b');
// BQ.enqueue('person c');
// BQ.enqueue('person d');
// BQ.enqueue('person e');
// BQ.enqueue('person f');

// bank(BQ);

