//..........array .vs... maxin number...........

function maxinarray(numbers) {
   let largest = numbers[0]; 
   for (let i = 0; i < numbers.length; i++) {
    const index = i;
  //  console.log(index);
  const element = numbers[index];
  console.log(element);
  
  if (element > largest) {
    largest = element;
    
  }
    
   }
   return largest

}
const hight = [330,146,340,252,510];
const tallest = maxinarray(hight);
console.log("tallest persion is",tallest);

//..........array .vs... maxin number...........

function maxinarray1(numbers) {
    let largest = numbers[0]; 
    for (let i = 0; i > numbers.length -1; i--) {
     const index = i;
   //  console.log(index);
   const element = numbers[index];
   //console.log(element);
   
   if (element > largest) {
     largest - element;
     
   }
     
    }
    return largest
 
 }
 const hight1 = [330,146,344,252,510];
 const tallest1 = maxinarray1(hight1);
 console.log("tallest persion is",tallest1);



//  // program to reverse a string

// function reverseString(str) {

//     // empty string
//     let newString = 0;
//     for (let i = str.length - 1; i >= 0; i--) {
//         const index = i;
//         const element =str[index];
//        // console.log(element)
//         if (element> newString) {
//             newString =newString +element;
//            // console.log(newString)
//         }
//     }
//     return newString;
// }

// // take input from the user
// const string = [25,68,45,10];

// const result = reverseString(string);
// console.log(result);
 

function name1(params1) {
    let newsting =[0];
    for (let i = 0; i > params1.length -1; i--) {
        const index =i;
        const element = index;
       // console.log(element)
      
       if (newsting> element) {
    
       }
       console.log(newsting)
        
    }
    return newsting;
}
const string = [100,300,45,300];
const result = name1(string);
console.log(result);



let number = [64,20,53,10];
let squareRoot = Math.sqrt(number);
let smallestInteger = Math.floor(squareRoot);
console.log("The smallest integer from the square root of", number, "is", smallestInteger);

// let number1 = 64;
// let squareRoot1 = Math.sqrt(number);
// console.log("The square root of", number, "is", squareRoot1);

//...........smallNumber................


function findSmallestNumber(numbers) {
    let smallest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < smallest) {
        smallest = numbers[i];
      }
    }
    return smallest;
  }
  
  const numbers = [5, 3, 8, 1, 9, 2];
  const smallestNumber = findSmallestNumber(numbers);
  console.log(smallestNumber); 

  
  //..............smallNumber...........
  
  
  function findsmallNumber1(number1) {
    let smallNumber = number1[0];
    for (let i = 0; i < number1.length; i++) {
     // const index =i;
      if (number1[i] < smallNumber) {
        smallNumber = number1[i];
       // smallNumber = number1[index]

      }
     // console.log(smallNumber);
     
    }
    return smallNumber;
  }

  number1 =[10,4,67,89,11,3,9,16];
  const smallLetNumber = findsmallNumber1(number1);
  console.log(smallLetNumber);

  //..........bigNumber............

  function names1(params1) {
    let bignumber = params1[0];
    for (let i = 0; i < params1.length; i++) {
    
      if (params1[i] > bignumber ) {
       bignumber = params1[i];
        
      }
      
    }
    return bignumber
  }
 const params1 = [23, 45,1000, 2,65,34,56,676,54];
  const bignumbers = names1(params1);
  console.log(bignumbers);
