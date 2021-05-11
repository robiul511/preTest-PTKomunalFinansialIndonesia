// Pre Test Number 6


function fizzBuzzDetector(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log('FizzBuzz')
  } else if (number % 3 === 0) {
    console.log('Fizz')
  } else if (number % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(number)
  }
}

for (let i = 1; i <= 100; i++) {
  fizzBuzzDetector(i)
}