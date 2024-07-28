// question 1
// function reverseArrayInPlace(arr) {
//     let left = 0;
//     let right = arr.length - 1;
    
//     while (left < right) {
//         // Swap elements at left and right indices
//         [arr[left], arr[right]] = [arr[right], arr[left]];
//         left++;
//         right--;
//     }
// }

// // Test with an array of 5 numbers
// const smallArrayInPlace = [1, 2, 3, 4, 5];
// reverseArrayInPlace(smallArrayInPlace);
// console.log("Reversed small array in place:", smallArrayInPlace);

// // Test with a larger array
// const largeArrayInPlace = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// reverseArrayInPlace(largeArrayInPlace);
// console.log("Reversed large array in place:", largeArrayInPlace);
// question2


var X = [1, -6, -7, 8, 9];

for (var i = 0; i < X.length; i++) {
    if (X[i] < 0) {
        X.splice(i, 1);
        i--; // Adjust the index after removal
    }
}

console.log(X);

let numbers_array = [1, 2, 3, 4, 5];

console.log("Original Array: ");
console.log(numbers_array);

numbers_array.reverse();

console.log("Reversed Array: ");
console.log(numbers_array);


//  question 5
function check_numbers(x, y) {
      
        if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
        
          return true;
        } else {
         
          return false;
        }
      }
      
      console.log(check_numbers(12, 101));
      
   
      console.log(check_numbers(52, 80));
      
   
      console.log(check_numbers(15, 99));
// question#6


const minBy = (arr, fn) =>
 
  Math.min(
    
    ...arr.map(typeof fn === 'function' ? fn : val => val[fn])
  );


console.log(minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n));

console.log(minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'));
// question#7

// function newstring(str) {
//     0-
//     if (str.length >= 3) {
        
//         result_str = str.substring(str.length - 3);
       
//         return result_str + result_str + result_str + result_str;
//     } else {
       
//         return false;
//     }
// }

// console.log(newstring("str"

// ));
// question#10

function* eachFromTo(start, end) { for (let i = start; i <= end; i++) yield i }


function eachToArray(iterable) {
    const result = []
    for (const val of iterable) result.push(val)
    return result
}

function* eachWithIndex(iterable) {
    const shared = new Array(2)
    shared[1] = 0
    for (shared[0] of iterable) {
        yield shared
        shared[1]++
    }
}

console.log('iterate values and indexes from a generator')
for (const [val, i] of eachWithIndex(eachFromTo(10, 13))) console.log(val, i)

console.log('create an array')
const anArray = eachToArray(eachFromTo(10, 13))
console.log(anArray)

console.log('iterate values and indexes from an array')
for (const [val, i] of eachWithIndex(anArray)) console.log(val, i)
// question#9


function nearest_round_number(num) {
    
    while (num % 10) {
       
        num++;
    }
    
}


console.log(nearest_round_number(56)); 
console.log(nearest_round_number(592)); 
// question#8

 function angle_Type(angle) {
    if(angle < 90) {
      return "Acute angle."; 
    }
    if(angle === 90) {
      return "Right angle."; 
    }
    if(angle < 180) {
      return "Obtuse angle."; 
    }
    return "Straight angle.";  
  }
  

  console.log(angle_Type(47));   
  console.log(angle_Type(90));  
  console.log(angle_Type(145));  
  console.log(angle_Type(180)); 
   



//task 4
function  pal (string){
    string=string.toLowerCase()
    string=string.replace((/[w_]/g,''))
    let revstr= string.split('').reverse().join('')

}
