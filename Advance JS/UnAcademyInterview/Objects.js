// Q12: IIFE (Immediately Invoked Function Expression)
//----------------------------------------------------

// Ex-1
//-----
(function outer(x) {
  return function inner(y) {
    console.log(x, y)
  }
})(4)(5)

// Ex-2
//-----
// (function square(a) {
//   console.log(a * a)
// })(4)


//----------------------------------------------------------------------------------------------------------


// Q13: Create a function multiplyByTwo(obj) that takes an object as its parameter and multiply only all the numeric property values by 2
//--------------------------

let obj = {
  a: 100,
  b: 200,
  c: 300,
  title: 'my nums'
}

function multiplyNumeric(obj) {

  for(let key in obj) {

    if(typeof obj[key] === 'number') {

      obj[key] = obj[key] * 2;
    }
  }

  console.log('Modifed object: ', obj)
}

multiplyNumeric(obj)

//--------------------------------------------------------------------------------------------------------

// Q14: What will be the output of the code 
//-----------------------------------------

const checkObj = {}
console.log('Converting an obj as string:', checkObj.toString()) // -> [object Object]

const object1 = {} // -> { [object Object]: 123 rewritten as 456 }
const object2 = { key: 'b' }
const object3 = { key: 'c' }

object1[object2] = 123 // -> object1['[object Object]'] = 123
object1[object3] = 456 // -> object1['[object Object]'] = 456

console.log(object1) 
console.log(object1[object2])

//------------------------------------------------------------------------------------------------------- 

// Q15: JSON.stringify() vs JSON.parse()
//-------------------------------------- 

// JSON.stringify() is used to convert an object into string format so that we can store it in Local Storage, and JSON.parse() is used to convert back the object in string format back to actual object format.

const user = {
  fname: 'Clarke',
  lname: 'Kent',
  age: 1000
}

console.log('Actual Object:', user)
console.log('Converted to string format:', JSON.stringify(user))

const userObj = JSON.stringify(user)
console.log('Converted back to actual object format:', JSON.parse(userObj))


//---------------------------------------------------------------------------------------------------------- 

// Q16: What will be the output (Spread Operator, JSON.stringify(), Nested Destructuring )
//----------------------------------------------------------------------------------------

// Question-1
//-----------
const userObject = {
  name: 'Diana',
  age: 19
}

const admin = {
  isAdmin: true,
  ...userObject
}

console.log(admin) // -> {isAdmin: true, name: 'Diana', age: 19}

// Question-2 
//-----------
const settings = {
  name: 'Vishwas Gopinav',
  age: 20,
  health: 90
}

// ignores name, converts just name & health into string
const data = JSON.stringify(settings, ['age', 'health']) 

console.log(data) // -> {"age":20,"health":90}

// Question-3
//-----------
const person = {
  city: 'Kolkata',
  age: 27,
  fullName: {
    fname: 'Bruce',
    lname: 'Banner'
  }
}

const { city, age: PersonAge } = person
console.log(city, PersonAge)

const { fullName: {fname, lname} } = person 
console.log('Nested Destructing:', fname +' '+ lname ) 

//---------------------------------------------------------------------------------------------------------

// Q17: Object referencing
//------------------------

// Example-1
//----------
let x = { greeting: 'Hi' }
let y;

y = x; // -> here x has not been assigned to y, instead y is just referencing to x object 

x.greeting = 'Hello'
console.log(y.greeting) // -> Hello 

//----------------------------------------------------------------------

// Example-2 
//----------

//In both cases it returns false because both objects are stored at different memory locations
console.log({x: 1} == {x: 1})
console.log({x: 1} === {x: 1}) 

//-----------------------------------------------------------------------

// Example-3
//----------

let userobj = { name: 'Bruce' }
let userarr = [userobj]

// userobj = null
// console.log(userarr) // -> {name: 'Bruce'}

userobj.name = null
console.log(userarr) // -> // -> {name: null}

//-------------------------------------------------------------------------

// Example-4
//---------- 

const value = { number: 10 }

function multiply(x = {...value}) {

  console.log(x.number *= 2);
}

multiply() // 20
multiply() // 20
multiply(value) // 20
multiply(value) // 40

//----------------------------------------------------------------------------

// Example-5
//----------

function changeAgeAndReference(person) {

  person.age = 35;

  person = {
    name: 'Virat Kohli',
    age: 33
  }

  return person;

}

const personobj1 = {
  name: 'Rohit Sharma',
  age: 34
}

const personobj2 = changeAgeAndReference(personobj1)

console.log(personobj1) // -> { name: 'Rohit Sharma', age: 55 }
console.log(personobj2) // -> { name: 'Virat Kohli', age: 33 }





