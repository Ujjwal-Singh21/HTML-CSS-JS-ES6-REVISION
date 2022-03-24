// creating a simple object and seeing different ways to print them :-
//=======================================================================

// creating an alien object
let alien = {
  alienName: 'Ujjwal Singh',
  alienAge: 24,
  'work exp': '5 Years'
}

console.log(alien)
console.log(alien.alienName)
console.log(alien.alienAge)
console.log(alien['work exp'])

// when user gives input then also use [] to fetch data
//-------------------------------------------------------

let userInput = 'alienName'
console.log(alien.userInput) // error, says undefined, hence using []
console.log(alien[userInput])
