// function prime (number) {
//   let nextStep = number;
//   let maxPrime = 0;
//   for (let i = 2 ; i < number/2 ; i++ ) {
//     if ( nextStep%i === 0 ) {
//       nextStep = nextStep/i;
//       maxPrime = i;
//       console.log(maxPrime);
//     }
//   }
//   return maxPrime;
// }
//
// console.log(prime(600851475143));

// function palindrome() {
//   let maxNum = 0;
//   for ( let i = 900 ; i < 1000 ; i++ ) {
//     for ( let k = 900 ; k < 1000 ; k++ ) {
//       const newValue = (i * k)+"" ;
//       const reverseValue = newValue.split('').reverse().join('')
//       if (newValue == reverseValue && i*k > maxNum) {
//         maxNum = i*k;
//       }
//     }
//   }
//   return maxNum;
// }
// console.log(palindrome());

// function devidable( maxDevider ) {
//   for ( let i = maxDevider ; i ; i += maxDevider ) {
//     let counter = 0 ;
//     for (let devider = maxDevider ; devider > 0 ; devider -= 1 ) {
//       if ( i % devider === 0 ) {
//         counter++;
//       }
//     }
//     if ( counter === maxDevider ) {
//       return i;
//     }
//   }
// }
// console.log(devidable(20));

function squareSum() {
  let squareSums = 0;
  let sum = 0;
  for ( let i = 1 ; i <= 100 ; i++ ) {
    squareSums += ( i * i ) ;
    sum += i;
  }
  const totalSquare = sum*sum;
  return (totalSquare - squareSums);
}

console.log(squareSum());
