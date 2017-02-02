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

// function squareSum() {
//   let squareSums = 0;
//   let sum = 0;
//   for ( let i = 1 ; i <= 100 ; i++ ) {
//     squareSums += ( i * i ) ;
//     sum += i;
//   }
//   const totalSquare = sum*sum;
//   return (totalSquare - squareSums);
// }
//
// console.log(squareSum());

// function prime() {
//   let biggestPrime = 0;
//   let end = 0;
//   for (let i = 2 ; end < 10001 ; i++ ) {
//     let isPrime = true;
//     for ( let k = 2 ; k <= i/2 ; k++ ) {
//       if ( i%k == 0 ) {
//         isPrime = false;
//       }
//     }
//     if (isPrime) {
//       biggestPrime = i;
//       end++;
//     }
//   }
//   return biggestPrime;
// }
// console.log(prime());

// const greatNumber = "731671765313306249192251196744265747423553491949349698352031277450632623957831801698480186947885184385861560789112949495459501737958331952853208805511125406987471585238630507156932909632952274430435576689664895044524452316173185640309871112172238311362229893423380308135336276614282806444486645238749303589072962904915604407723907138105158593079608667017242712188399879790879227492190169972088809377665727333001053367881220235421809751254540594752243525849077116705560136048395864467063244157221553975369781797784617406495514929086256932197846862248283972241375657056057490261407972968652414535100474821663704844031998900088952434506585412275886668811642717147992444292823086346567481391912316282458617866458359124566529476545682848912883142607690042242190226710556263211111093705442175069416589604080719840385096245544436298123098787992724428490918884580156166097919133875499200524063689912560717606058861164671094050775410022569831552000559357297257163626956188267042825248360082325753042075296345";
//
// function thirteenInARow(number) {
//   let biggestValue = 0;
//   number = number.split("");
//   number.map((num, index) => {
//     const sampleArray = number.slice(index, index+13);
//     const sampleSum = sampleArray.reduce((a,b) => { return a*b }, 1 );
//     if (sampleSum > biggestValue) {
//       biggestValue = sampleSum;
//     }
//   });
//   return biggestValue;
// }
// console.log(thirteenInARow(greatNumber));

function pythagorean(number) {
  for (let a = 1 ; a < 1000 ; a++ ){
    for (let b = 1 ; b < 1000 ; b++ ){
      for (let c = 1 ; c < 1000 ; c++ ){
        if ((a*a)+(b*b) === (c*c)) {
          if (a + b + c === 1000) {
            console.log(a, b, c);
          }
        }
      }
    }
  }
}
console.log(pythagorean(1000));
