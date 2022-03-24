// 1) Sometimes, a function may accept an indefinite number of arguments. 
//    Filling arguments from an array is not convenient.

// 2) For example, the push() method of an array object allows you to add one or more 
//    elements to an array. 

// 3) If you want to pass an array to the push() method, you need to use apply() method 
//    as follows:


let rivers = ['Ganga', 'Yamuna', 'Godavari'];
let morerivers = ['Amazon', 'Niles'];

// now if we want to add morerivers to rivers array
// we can use push method of array along with spread operator
rivers.push(...morerivers);
console.log(rivers);

//JavaScript spread operator and strings
let chars = ['A', ...'BC', ...'DEF', 'G', 'H']
console.log(chars);

// In this example, we constructed the chars array from individual strings. 
// When we applied the spread operator to the 'BC' & 'DEF' Strings, 
// It spreads out each individual character of the string 'BC', 'DEF', into individual 
// characters.
