//ARRAY AS STACK, FILO
let arrStack = [];

arrStack.push(3);
arrStack.push(5);
arrStack.push(10);

console.log(arrStack.pop()); //10
console.log(arrStack.pop()); //5
console.log(arrStack.pop()); //3

//ARRAY AS QUEUE, FIFO

let arrQueue = [];

arrQueue.push(10); 
arrQueue.push(50);
arrQueue.push(2);

console.log(arrQueue.shift()); //10
console.log(arrQueue.shift()); //50
console.log(arrQueue.shift()); //2