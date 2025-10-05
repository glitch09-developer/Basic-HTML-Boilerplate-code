alert('This code was executed using JavaScript');
//   Dangerous part starts from  here please dont run under this or it may hang your pc 
let i = '5';
if (i > 4) {
  // The 'if' condition (5 > 4) is met, so this block executes.
  while (true) {
    // This is an infinite loop that will run forever.
    console.log("DONT REPEAT, but I will!"); 
  }
} else {
  // This block will never be reached in this code.
  console.log('Infinite loop');
}
