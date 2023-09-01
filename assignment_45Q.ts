export { };
import inquirer from "inquirer";

let name = "Muhammad Shahzad, would you like to learn some Python today?"
console.log(name);
// COnverting the string from lower to upper case
let personName = 'Muhammad Shahzad';
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
console.log(personName.toLocaleLowerCase());

//Quotes
console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`);

let famousPerson = 'Muhammad Ali Jinnah';
let message = `“Think 100 times before you take a decision, But once that decision is taken, stand by it as one man.”`;
console.log(`${famousPerson} once said, ${message}`);

let nameWithWhiteSpace = '\t\n   Muhammad Shahzad   \n\t';
console.log(`Original Name ${nameWithWhiteSpace}`);

let strippedName = nameWithWhiteSpace.trim();
console.log(`Stripped name ${strippedName}`);
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(64 / 8);
// Favorite Number: Store your favorite number in a variable. Then, using that variable, 
// create a message that reveals your favorite number. Print that message.
let favoriteNumber = 10;
let showNumber = `My Favorite number is ${favoriteNumber}`;
console.log(showNumber);

// Names: Store the names of a few of your friends in a array called names. Print 
// each person’s name by accessing each element in the list, one at a time.
let friendsName = ["Kareem", "Zahid", "Jamil", "Amjad", "Kamal"];
console.log(`Here is the list of my Friend Name`);
console.log(friendsName);
console.log(friendsName[0]);
// 12
friendsName.forEach(name => { console.log(`Aslam-o-Alikum Dear ${name}`) });
// Second Method
for (let myName of friendsName) {
    console.log(`Second Time Aslam-o-Aliku ${myName}`);
}

// 13
let vehicleList = ["Moter Cycle", "Hunda Civic", "Kia Picanto", "Mehran"];

vehicleList.forEach(vehicle => { console.log(`I would like to own a ${vehicle}`) });

//14

let invitationList = ["Abrahim", 'Gull Zaman', 'Sulman', 'Kareem', 'Aslim', 'Munir']
invitationList.forEach(invite => { console.log(`Dear ${invite}: I would like to invite you for dinner today `) });
//15 
console.log(`${invitationList[0]} not available for dinner`);
// 16
invitationList.splice(0, 1, "Usman");
console.log(invitationList);

// 16 

invitationList.forEach(newInvitation => { console.log(`Dear ${newInvitation} please come on dinner`) });
console.log(`I would like to expend the people for dinner`);
invitationList.unshift("Shahzad");
invitationList.splice(2, 0, "Jameel");
invitationList.forEach(newInvitation => { `Dear ${newInvitation}, please come on dinner` });
// 17 Start with your program from Exercise 16. Add a new line that prints 
// a message saying that you can invite only two people for dinner.
console.log(`Due to problem, i would like to invite only two people`);
// 17 Remove guests from your list one at a time until only two names 
// remain in your list. Each time you pop a name from your list,
// print a message to that person letting them know you’re 
// sorry you can’t invite them to dinner.
while (invitationList.length > 2) {
    let removeFriend = invitationList.pop()

    if (removeFriend) {
        console.log(`Sorry ${removeFriend}, i am not able to invite you`);

    }
}
//17 b
console.log(`The final list is :`, invitationList);

// 17  Print a message to each of the two people still on your list, 
//letting them know they’re still invited.

invitationList.forEach(invite => { console.log(`Dear ${invite}: You are still invited`) })

for (let myInvitaion of invitationList) {
    console.log(`Dear ${myInvitaion}: You are still invited by secodn method of for loop`)
}

// 17  Remove the last two names from your list, so you have an empty list. 
// Print your list to make  
// sure you actually have an empty list at the end of your program.
while (invitationList.length > 0) {
    let emptyList = invitationList.pop();
}

console.log(`Now the list become Empty: `, invitationList);
///////////////////////////////////18///////////////
// 18 Seeing the World: Think of at least five places in the world you’d 
// like to visit.  Store the locations in a array. Make sure the array 
// is not in alphabetical order.
let myCities = ["Makka", "Madina", "Islamabad", "Peshawar", "Haripur"];
// Print your array in its original order.
console.log('Here is in original order before sorting')
console.log(myCities);


// Print your array in alphabetical order without modifying the actual list.
console.log('Here is in Sorted array ')
let sortedCities = [...myCities];
console.log(sortedCities.sort());
//• Show that your array is still in its original order by printing it.
console.log('Here is in original order after sorting ')
console.log(myCities);

//• Print your array in reverse alphabetical order 
//without changing the order of the original list.
let reverseCities = [...myCities];
console.log(`Here is reverse order list`)
console.log(reverseCities.reverse())
// • Show that your array is still in its original order by printing it again.
console.log(`Here is Original order list`)
console.log(myCities);

//• Reverse the order of your list. 
//Print the array to show that its order has changed.
let permanentReverse = myCities.reverse();
console.log(permanentReverse);

console.log(`Permanent reverse list`)
console.log(myCities);
// • Reverse the order of your list again.
// Print the list to show it’s back to its original order.
console.log(`reverse back to original list`)
console.log(myCities.reverse());

// • Sort your array so it’s stored in alphabetical order. 
//Print the array to show that its order has been changed.

console.log(`Sorting again`)
console.log(myCities.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. 
//Print the list to show that its order has changed.

console.log(myCities);

////////////////////         19         ///////////////////////


// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.
console.log(`I have invited total of ${friendsName.length} friends`);


///////////////////       20     ////////////////
// Think of something you could store in a array. For example, 
// you could make a list of mountains, rivers, countries, cities, 
// languages, or anything else you’d like. 
// Write a program that creates a list containing these items.

let allItemArray = ["Pakistan", 'K2 Mountains', 2344, 'Islamabad', 'Indus River']
console.log(allItemArray.includes("Pakistan"))
/////////////////// 21 //////////////////
// They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.
let students = {
    name: "Muhammad Shahzad",
    fName: "Muhammad Asghar",
    cnic: "13302-4773929-9",
    age: 35,
    address: "Peshawar"
};
console.log(students)
//////////   22  ////////////////////
// Intentional Error: If you haven’t received an array index 
// error in one of your programs yet, try to make one happen. 
// Change an index in one of your programs to produce an index error. 
// Make sure you correct the error before closing the program.


////////////////       23   ///////////////////////
// Conditional Tests: Write a series of conditional tests. 
// Print a statement describing each test and your prediction 
// for the results of each test. Your code should look something 
// like this:

let car = "Toyota";
let carName = await inquirer.prompt([{
    name: "model",
    type: "string",
    message: "Enter Your Car Name: "

}]);

if (carName.model === car) {
    console.log(true);
} else {
    console.log(false);
}

let luckyNumber = 10;
let luckyDraw = await inquirer.prompt([{
    name: "num",
    type: "number",
    message: "Please Enter your Lucky Number: "

}]);

if (luckyDraw.num > luckyNumber) {
    console.log(`Your guess number ${luckyDraw.num} is too high`)
}
else if (luckyDraw.num < luckyNumber) {
    console.log(`Your guess number ${luckyDraw.num} is too Low`)
}
else {
    console.log(`Conregulation!!! You win, You guess ${luckyDraw.num}, whihc is lucky number`)
}
////////////     24 //////////////////// 
// More Conditional Tests: You don’t have to limit the number 
// of tests you create to 10. If you want to try more comparisons, 
// write more tests. Have at least one True and one False result for
//  each of the following:

let newCar = 'parado';
// Test 1: 
console.log(`If Car == 'parado'?  , I pridict True`)
console.log(newCar == 'parado')
// Test 2: 
console.log(newCar != "parado")
// Test 3: 
console.log(`If Car == 'Mehran'?  , I pridict false`)
console.log(newCar == 'Mehran')
// Test 4: 
console.log(`If Car == 'Pejaro'?  , I pridict false`)
console.log(newCar == 'Pejaro')
// Test 5: 
console.log(`If Car == 'Alto'?  , I pridict false`)
console.log(newCar == 'Alto')
// Test 6: 
console.log(`If Car == 'cultex'?  , I pridict false`)
console.log(newCar == 'cultes')


// Test 7
console.log("Is car != 'ford'? I predict True.");
console.log(newCar != 'ford');  // Should print True

// Test 8
console.log("Is car == 'subaru' || car == 'parado'? I predict True.");
console.log(newCar == 'subaru' || newCar == 'parado');  // Should print True

// Test 9
console.log("Is car.length == 6? I predict True.");
console.log(newCar.length == 6);  // Should print True

// Test 10
console.log("Does car start with 'p'? I predict True.");
console.log(newCar.charAt(0) == 'p');  // Should print True

/////////     24        //////////////
// More Conditional Tests: You don’t have to limit the number 
// of tests you create to 10. If you want to try more comparisons,
//  write more tests. Have at least one True and one False result 
//  for each of the following:


//• Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings, with false");
console.log(newCar == 'Pakistan');  // Should print False
console.log("Tests using the lower case function");
console.log(newCar.toLowerCase() == 'parado');  // Should print True

let carArray = ["toyota", "Pejaro", "Alto"]
console.log("Test whether an item is in a array");
console.log(carArray.includes("toyota"));  // Should print True

console.log("Test whether an item is not in a array");
console.log(carArray.includes("Mehran"));  // Should print True


///////////////     25      ////////////
// Alien Colors #1: Imagine an alien was just shot down in 
// a game. Create a variable called alien_color and assign 
// it a value of 'green', 'yellow', or 'red'.
let alien_color = 'red';

if (alien_color == 'green') {
    console.log(`the player just earned 5 points.`);
}

///////////////      26       ///////////////

// Alien Colors #2: Choose a color for an alien as 
// you did in Exercise 25, and write an if-else chain.

if (alien_color == 'green') {
    console.log(`the player just earned 5 points for shooting the alien..`);
}
else {
    console.log(`The player just earned 10 points.`);
}

///////////////      27       ///////////////
// Alien Colors #3: Turn your if-else chain from Exercise 
// 5-4 into an if-else chain.

if (alien_color == 'green') {
    console.log(`the player earned 5 points.`);
}
else if (alien_color == 'yellow') {
    console.log(`he player earned 10 points.`);
}
else if (alien_color == 'red') {
    console.log(`The player earned 15 points.`);
}

///////////////      28       ///////////////
// Stages of Life: Write an if-else chain that determines
// a person’s stage of life. Set a value for the variable age,
// and then:

let personAge = 40;

if (personAge < 2) {
    console.log(`The Person is baby`);
}
else if (personAge >= 2 && personAge < 4) {
    console.log(`he person is a toddler.`);
}
else if (personAge >= 4 && personAge < 13) {
    console.log(`the person is a kid.`);
}
else if (personAge >= 13 && personAge < 20) {
    console.log(`the person is a teenager.`);
}
else if (personAge >= 20 && personAge < 65) {
    console.log(`the person is a adult.`);
}
else if (personAge > 65) {
    console.log(`the person is a elder.`);
}

///////////// 29   ///////////////

// Favorite Fruit: Make a array of your favorite fruits, 
// and then write a series of independent if statements 
// that check for certain fruits in your array.

let favorite_fruits = ['Mango', 'Orange', 'Graps'];

if (favorite_fruits.includes('apple')) {
    console.log(`The fruit is not avilable`);
}
else if (favorite_fruits.includes('Mango1')) {
    console.log(`The fruit is not avilable`);
}
else if (favorite_fruits.includes('banana')) {
    console.log(`The fruit is not avilable`);
}
else if (favorite_fruits.includes('Dates')) {
    console.log(`The fruit is not avilable`);
}
else if (favorite_fruits.includes('Mango')) {
    console.log(`You really like Mango!`);
}

///////////   30 /////////////
// Hello Admin: Make a array of five or more usernames, 
// including the name 'admin'. Imagine you are writing 
// code that will print a greeting to each user after they 
// log in to a website. Loop through the array, and print 
// a greeting to each user:

let userName = ['shahzad', 'admin', 'jamil', 'noman', 'faiz'];

for (let i = 0; i < userName.length; i++) {
    if (userName[i] === 'admin') {
        console.log(`Hello ${userName[i]} would you like to see a status report?`)
    }
    else {
        console.log(`Hello ${userName[i]} thank you for logging in again.`)
    }
}

////////////////     31   ///////////
// No Users: Add an if test to Exercise 28 to make sure 
// the list of users is not empty.


while (userName.length > 0) { userName.pop(); }
if (userName.length === 0) {
    console.log(`We need to find some users!`)
}


////////////// 32   //////////
// Checking Usernames: Do the following to create a program
// that simulates how websites ensure that everyone has a
// unique username.

let current_users = ['Assad', 'admin', 'Adeel', 'Azam', 'noman'];

let new_users = ['Assad', 'amjad', 'Kabir', 'Sohail', 'admin'];

// for case insensitive compararason, we need to convert it t
// lowercase

let current_users_lower = current_users.map(user => user.toLowerCase());


// Loop through new user list

for (let i = 0; i < new_users.length; i++) {
    // Convert new username to lowercase for case-insensitive comparison
    let new_users_lower = new_users[i].toLowerCase();

    // Check if the new username has already been used

    if (current_users_lower.includes(new_users_lower)) {
        console.log(`The username ${new_users[i]} is already in use. Please enter a new username.`)
    }
    else {
        console.log(`The username ${new_users[i]} is available.`);
    }

}


////////////// 33   //////////

// Ordinal Numbers: Ordinal numbers indicate their position 
// in a array, such as 1st or 2nd. Most ordinal numbers end in th,
//  except 1, 2, and 3.

let checkOrdinal = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < checkOrdinal.length; i++) {
    if (checkOrdinal[i] === 1) {
        console.log(`${checkOrdinal[i]}st`)
    }
    else if (checkOrdinal[i] === 2) {
        console.log(`${checkOrdinal[i]}nd`)
    }
    else if (checkOrdinal[i] === 3) {
        console.log(`${checkOrdinal[i]}rd`)
    }
    else {
        console.log(`${checkOrdinal[i]}th`)
    }
}

///////////////    34      /////////////
// Pizzas: Think of at least three kinds of 
// your favorite pizza. Store these pizza names in a array, 
// and then use a for loop to print the name of each pizza.


let pizzaList = ['Pepperoni Piza', 'Large Pizza', 'Small Pizza']

for (let i = 0; i < pizzaList.length; i++) {
    console.log(pizzaList[i])
}

for (let i = 0; i < pizzaList.length; i++) {
    console.log(`I like ${pizzaList[i]}`)
}

console.log('I really love pizza!');

///////////////////////    35  ///////////////

let animal = ['Dog', 'Horse', 'Goat']

for (let i = 0; i < animal.length; i++) {
    console.log(animal[i])
}

for (let i = 0; i < animal.length; i++) {
    console.log(`A ${animal[i]} would make a great pet.`)
}

console.log('Any of these animals would make a great pet!');



/////////////////////  36   ///////////////

function make_shirt(size: string, message: string): void {
    console.log(`The size = ${size}, and Message = ${message}`);
}

make_shirt("Large", "hellow Word")

///////////////// 37 ///////////

function make_shirt_new(size = 'Large', message = 'I love TypeScript') {
    console.log(`Size: ${size}, and message: ${message}`);
}

make_shirt_new()
make_shirt_new('Medium')

///////////////////    38    //////////////////
function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}`);
}

describe_city("Karachi",)
describe_city("Lahore",)
describe_city("Peshawar", "Pakistan")


////////////////////    39    ////////////


function city__country(city: string, country: string) {
    return `${city}, ${country}`
}
let result = city__country("Lahore", "Pakistan")
let result2 = city__country("Peshawar", "Pakistan")
let result3 = city__country("Karachi", "Pakistan")
console.log(result);
console.log(result2);
console.log(result3);


////////////////////////    40    ///////////

function make_album(name: string, title: string): { name: string, title: string } {
    // Making Object
    const albumObj: { name: string, title: string } = {
        name: name,
        title: title,
    }

    return albumObj;
}
let album1 = make_album("Artist1", "Album One");
let album2 = make_album("Artist2", "Album Two");
let album3 = make_album("Artist3", "Album Three");



console.log(album1);
console.log(album2);
console.log(album3);

////////// 41 //////////

let magicianName = ["magician1", "magician2", "magician3", "magician4"]

function show_magicians(magicianName: string[]) {
    for (let magician of magicianName) {
        console.log(magician);
    }
}
show_magicians(magicianName)

//////////////  42 ////////

//let magicianName = ["magician1", "magician2", "magician3", "magician4"]

function make_great(magicianName: string[]) {
    // Create a new array with modified magician names
    const greatMagicians: string[] = [];
    for (const magician of magicianName) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}
const greatMagiciansArray: string[] = make_great(magicianName);
show_magicians(greatMagiciansArray);

//////////////// 44   ///////////

function orderSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please add some items.");
    } else {
        console.log("Items in the sandwich:");
        for (const item of items) {
            console.log(`- ${item}`);
        }
    }
    console.log("Enjoy your sandwich!");
}

// Call the function with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Peanut Butter", "Jelly");
orderSandwich();

////////////////   45   ////////

interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow arbitrary keyword arguments
}

function createCar(manufacturer: string, model: string, ...args: any[]): Car {
    const car: Car = {
        manufacturer: manufacturer,
        model: model,
    };

    // Process keyword arguments and add them to the car object
    for (let i = 0; i < args.length; i += 2) {
        const key = args[i];
        const value = args[i + 1];
        car[key] = value;
    }

    return car;
}

// Call the function with required information and additional properties
const myCar = createCar("Toyota", "Camry", "color", "Blue", "year", 2023);

// Print the car object to verify the information
console.log(myCar);