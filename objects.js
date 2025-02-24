const person = { name: "John", age: 30, country: "USA" };
//Access and log the name and age properties from the person object
console.log(person.name);
console.log(person.age);

//Add a city property to the person object and log it
person.city = "California";
console.log(person.city);

//Update the age property of the person object and log it
person.age = 35;
console.log(person.age);

//Delete the country property of the person object and log it
delete person.country;
console.log(person);

//Desctructure the name and country properties from the person object and log them
//const person = { name: "John", age: 30, country: "USA" };
delete person.city;
Object.assign(person, { country: "USA", age: 30 });
const { name, country } = person;
console.log(name);
console.log(country);

//Get the all keys with Object.keys() method and all values with Object.values() method from the person object and log them
const personKeys = Object.keys(person);
const personValues = Object.values(person);
console.log(personKeys);
console.log(personValues);

// Merge the person object with the address object and log the object
delete person.country;
const address = { city: "New York", country: "USA" };
const personWithAddressProperty = {...person, ...address};
console.log(personWithAddressProperty);


//When the nested object given below is used, log the city property
const user = { name: "John", address: { city: "New York", country: "USA" } };
console.log(user.address.city);

//log the properties of the person object using for in loop
for(let key in person) {
    console.log(key + '-' + person[key]);
}

//Check the city property in the person object.
if(person.city){
    console.log(person.city);
}else{
    console.log("City not found");
}