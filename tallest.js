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
