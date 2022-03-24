//Practise of Prototype with Constructor Function

function Customer (id, name, pName) {
  this.customerId = id
  this.customerName = name
  this.productName = pName
}

let customer1 = new Customer(101, 'Steve', 'Books')
let customer2 = new Customer(102, 'Bruce', 'Cold Drinks')

//adding a new property which will a function to customer1 instance only
// customer1.getDetails = function () {
//   return this.customerId + ' ' + this.customerName
// }

// now this getDetails will be available only to customer1 instance,
// this will not be available & acccessible to customer2 instance.
// console.log(customer1.getDetails()) // -> runs successfully
// console.log(customer2.getDetails()) // -> ERROR

// so making that accessible to all instance of Customer
Customer.prototype.getDetails = function () {
  return this.customerId + ' ' + this.customerName
}

// now this getDetails will be available to all instances of Customer.
console.log(customer1.getDetails()) // -> runs successfully
console.log(customer2.getDetails()) // -> runs successfully
