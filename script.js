alert('This code was executed using JavaScript');
//   Dangerous part starts from  here please dont run under this or it may hang your pc 
let i = 5;
let a = 2;
do {
  console.log(`infinite loop ${a} and ${i}`)
  i++
  a++
} while (i > a);
