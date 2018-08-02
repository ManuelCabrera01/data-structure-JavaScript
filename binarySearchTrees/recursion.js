//  what is recursion?
// recursion is when a funtion call it self

// function func(){
// if(/*base case*/){
// return somthing
// }else{//recursive case

//     func()
// }

// };

// example
// factorial of a number is that number times every number from itself down to one

// 4! = 4 * 3 * 2 * 1 = 24
function factorial(num) {
  //
  if (num === 1) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
}
factorial(4);
//  callStack
// it represent what order are function  been call  in and what variable they been call with
