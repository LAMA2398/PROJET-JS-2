// String Manipulation Functions:


// EXO 1 :
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("ALIOU"));


// EXO 2 : 
function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("FATOU"));


// EXO 3 :
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords("Bonjour, je suis un sofware developper"));





// *******************************************************************************************

// Array Functions:

// EXO 1 : 
function findMax(arr) {
    return Math.max(arr);
}  

function findMin(arr) {
    return Math.min(arr);
}


// EXO 2 :
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }


// EXO 3 : 
// function filterArray(arr, callback) {
//     return arr.filter(callback);
// }

// OU
const tableau = [
    { name: "ALIOU", age: 25 },
    { name: "MODOU", age: 30 },
    { name: "OUSMANE", age: 20 },
    { name: "Alice", age: 35 },
    { name: "ADAMA", age: 28 }
  ];
  
  const tableauFiltre = filtrerTableau(tableau, function(element) {
    return element.age > 28;
  });
  
  console.log(tableauFiltre);





// *******************************************************************************************
//   FONCTIONS MATHEMATIQUES

// EXO 1
function factorielle(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorielle(n - 1);
    }
  }


//   EXO 2
function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

//   EXO 3
function fibonacci(n) {
    let sequence = [0, 1];
    while (sequence.length < n) {
      sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    return sequence;
  }




