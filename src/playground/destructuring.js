// Object Destructuring
// const person = {
//  name: 'Brian',
//  age: '20',
//  location: {
//    city: 'Seattle',
//    temperature: '70'
//  }
// };

// const {name = 'Anonymous', age} = person;

// console.log(`${name} is ${age}`);

// const {temperature: temp, city} = person.location;
// if (city && temp) {
//  console.log(`It's ${temp} in ${city}`);
// }

// const book = {
//  title: 'Ego is the enemy',
//  author: 'Ryan Holiday',
//  publisher: {
//   // name: 'penguin'
//  }
// };

// const {name:publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

// Array Destructuring
// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [,city = 'Seattle', state = 'Washington'] = address;
// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , mediumCost, ] = item;
console.log(`A medium ${coffee} costs ${mediumCost}`);
