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
  if(string[0] === ')' || string[string.length - 1] === '(') {
    return 'Cannot start with a closing or end with an opening parentheses'
  }
  let openPosition = 0;
  let closedPosition = 0;
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

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }
  enqueue(item){
    let node = new _Node(item,null);
    if(this.last === null){
      this.first = node;
      this.last = node;
      return;
    }
    this.last.next = node;
    this.last = node;
  }

  dequeue(){
    if(this.first === null){
      return;
    }
    let node = this.first;
    if(this.first === this.last){
      this.first === null;
      this.last === null;
      return node;
    }
    this.first = this.first.next;
    return node.data;
  }
}

let Q = new Queue;
Q.enqueue('a');
Q.enqueue('b');
console.log(Q);
console.log(Q.dequeue());
console.log(Q);

// console.log(matchingParentheses('()()()'));
