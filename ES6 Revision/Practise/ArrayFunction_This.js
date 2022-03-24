// NOTE:- EVERY STEP HERE SHOULD BE RAN ALONE WITH OTHER STEPS BEEN COMMENTED
//=============================================================================

// (Step-1) A normal object execution using this :-
//-------------------------------------------------
// const person = {
//   talk () {
//     console.log(this)
//   }
// }
// person.talk()

// (Step-2) using setTimeOut callback function :-
//-----------------------------------------------
// 1) so here, it returns window object in output because since we are using setTimeOut 
//    callback function,

// 2) talk() function is an standAlone function now, and also here the strict mode is  
//    not able to override,

// 3) hence as we know earlier, calling a standalone function returns a window object.

// const person = {
//   talk () {
//     setTimeout(function () {
//       console.log(this)
//     }, 1000)
//   }
// }

// person.talk()

// (Step-3) using an outer variable and assinging this to that variable to get Object 
//          reference in output :-
//------------------------------------------------------------------------------------------------------
// const person = {
//     talk () {
//         const self = this;
//       setTimeout(function () {
//         console.log(self)
//       }, 1000)
//     }
//   }

//   person.talk()

// (Step-4) using arrow function inside the callback function setTimeOut :-
//----------------------------------------------------------------------------
// 1) with arrow functions , we no need to go through above older days approach because,
//    arrow function don't rebind 'this'.

// 2) In other words, if we use arrow function inside above setTimeout callback function, 
//    then arrow function will automatically inherit that 'this' keyword.

// 3) So summary is, since in above callback function , we have used an arrow function 
//    syntax, so 'this, is not reset, instead it inherits 'this' in the context in 
//    which this code is defined.

const person = {
  talk () {
    setTimeout(() => {
      console.log(this)
    }, 1000)
  }
}
person.talk()
