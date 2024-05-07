// TASK #01: Install Node.js, TypeScript and VS Code on your computer.
// Completed !!!
// TASK #02: Personal Message
// var personName = "Rizwan";
// console.log("\"Hello", `${personName},`, "would you like to learn some Python today?\"");
// TASK #03: Name Cases
// var nameCase = "rizwan nasir";
// console.log(nameCase.toLowerCase());
// console.log(nameCase.toUpperCase());
// console.log(nameCase.replace(/\b\w/g, (character) => character.toUpperCase()));
//                             Regular expression or Rigix
// TASK #04: Famous Quote
// console.log("Ratan Tata once said, \"Slow success builds character, fast success builds ego.\"")
//  OR we can do with this method;
// let ratanTata: string = "Ratan Tata once said, \"Slow success builds character, fast success builds ego.\"";
// console.log(ratanTata);
// TASK #05: Famous Quote 2
// let famous_person = "Ratan Tata";
// let message =  "once said, \"A person who never made a mistake never tried anything new.\"";
// console.log(famous_person, message)
// console.log(`${famous_person}`, message) - Also, we can write with this $ sign, etc....
// TASK #06: Stripping Names
// var whiteSpaceName = "\tRizwan Nasir \t";  // t for space 
// var whiteSpaceName = "\nRizwan Nasir \n";  //n for new line gap 
// var whiteSpaceName = "\n\tRizwan Nasir\t\n";
// console.log(whiteSpaceName);
// let withoutWhiteSpaceName = whiteSpaceName.trim();
// console.log(withoutWhiteSpaceName);
// TASK #07 and 08: Number Eight
// console.log(4+4);
// console.log(12-4);
// console.log(2*4);
// console.log(32/4);
// OR with this method
// let a=4;
// let b=4;
// console.log(a+b);
// let c=12;
// console.log(c-b);
// let d=2;
// console.log(d*b);
// let e=32;
// console.log(e/b);
// TASK #09: Favorite Number
// let favNumber : Number = 8;
// let message : string = "My Fav Number is:"
// console.log(message, favNumber);
// TASK #10: Adding Comments 
// // Addition 
// console.log(4+4);
// // Subtraction
// console.log(12-4);
// // Multiplication
// console.log(2*4);
// // Division
// console.log(32/4);
// TASK #11: Names
// var friendsName = ["Ali", "Farhan", "Furqan", "Fahad", "Areeb"];
// console.log(friendsName);
// friendsName.forEach(name => console.log(name));
// TASK #12: Greetings
// var friendName = ["Ali", "Farhan", "Furqan", "Fahad", "Areeb"];
// friendName.forEach(name => console.log(`Hello, My Friend ${name}, how are you?`));
// TASK #13: Your Own Array
// var transportationNames = ["CAR", "Hi-Roof", "BIKE", "TESLA", "CYCLE"];
// transportationNames.forEach(mode => console.log(`\"I would like to own a ${mode}\"`));
// transportationNames.forEach(mode => console.log(`"I would like to own a ${mode}."`));
// TASK #14: Guest List
// var guestList = ["Ali", "Farhan", "Furqan", "Fahad", "Areeb"];
// guestList.forEach(guest => console.log(`Hi ${guest},`, "I hope you are doing well, I invite you for the dinner"));
// TASK #15: Changing Guest List
// var changingGuestList = ["Ali", "Farhan", "Furqan", "Fahad", "Areeb"]; 
// var doNotComing = changingGuestList[0];
// console.log(doNotComing, "Sorry guys, I don't come today."); 
// changingGuestList.splice(0, 1, "Hamza");
// //  values ko add krwata ha. e.g; 0 ki jaga (ali) pr Hamza ko add krega then 1 pr Ali ayega usko remove krky farhan sy run krega, 
// // agr 0, 2, hota toh Ali or Farhan ko remove krta Hamza k saath Furqan sy run krtaa 
// changingGuestList.forEach( comingGuest => console.log(`Hi ${comingGuest}, would you like to dinner with me?`));
// TASK #16: More Guests
// var guestList = ["Farhan", "Furqan", "Areeb", "Rizwan"];
// let dontCome = guestList[0];
// console.log(dontCome, "Sorry Boys, I'm very busy today");
// console.log("Congrats Everyone, now we have Big Table for the Dinner !!");
// guestList.unshift("Hamza");
// guestList.push("Talal");
// var middleGuest : number = Math.floor(guestList.length / 2);
// guestList.splice(middleGuest, 0, "Saif"); 
// console.log("Updated List of our Guest"); 
// guestList.forEach(comingGuest => console.log(`Hi ${comingGuest}, Would you like to Dinner with me?`));
// TASK #17: Shrinking Guest List
// var guestList = ["Farhan", "Furqan", "Areeb", "Rizwan"];
// let dontCome = guestList[0];
// console.log(dontCome, "Sorry Boys, I'm very busy today");
// console.log("Congrats Everyone, now we have Big Table for the Dinner !!");
// guestList.unshift("Hamza");
// guestList.push("Talal");
// var middleGuest : number = Math.floor(guestList.length / 2);
// guestList.splice(middleGuest, 0, "Saif"); 
// console.log("Updated List of our Guest"); 
// guestList.forEach(comingGuest => console.log(`Hi ${comingGuest}, Would you like to Dinner with me?`));
// console.log("Unfortunately, the table won't arrived, so now I'll invite 2 guest for the Dinner")
// while(guestList.length > 2){
//     let removedGuest = guestList.pop();
//     console.log(`Hello ${removedGuest}, Sorry I can't invite you today`);
// }
// console.log("Invitation to the Last two Guest");
// guestList.forEach(invitedGuest => console.log(`Luckily ${invitedGuest}, you Guys are invited to the Dinner`));
// guestList.pop();
// guestList.pop();
// console.log("Empty List", guestList);
// TASK #18: Seeing the World
// // • Store the locations in a array. Make sure the array is not in alphabetical order.
// let worldVisit = ["Turkey", "Dubai", "Malaysia", "UK", "Canada"];
// // • Print your array in its original order.
// console.log("Original Order", worldVisit);
// // • Print your array in alphabetical order without modifying the actual list.
// console.log("Alphabetical Order", [...worldVisit].sort());
// // ... 3 dot means copy banadega worldVist ka 
// // • Show that your array is still in its original order by printing it.
// console.log("still in original order", worldVisit);
// // • Print your array in reverse alphabetical order without changing the order of the original list.
// console.log("Reverse Alphabetical Order", [...worldVisit].sort().reverse()); 
// // ye reverse krdegaa sort waly print ko
// // • Show that your array is still in its original order by printing it again.
// console.log("still in original order", worldVisit);
// // • Reverse the order of your list. Print the array to show that its order has changed.
// console.log("Reverse Order", worldVisit.reverse());
// // • Reverse the order of your list again. Print the list to show it’s back to its original order.
// console.log("its back to its original order.", worldVisit.reverse());
// // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// console.log("Sorted in Alphabetical Order", worldVisit.sort());
// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// console.log("Sorted in Reverse Alphabetical Order", worldVisit.sort().reverse());
// // TASK #19: Dinner Guests
// var guestList = ["Ali", "Farhan", "Furqan", "Fahad", "Areeb"];
// // console.log(guestList.length) ;
// let noOfGuests : number = guestList.length;
// console.log(`No. of Guests are Invited for the Dinner: ${noOfGuests} guests`);
// TASK #20: Think of something you could store in a array
// var someThing = ["Mountains", "Rivers", "Countries", "Flags", "Languages"];
// // console.log("List of All Things")
// someThing.forEach(things => console.log(`List of All Things: ${things} !!`));
// // TASK #21: Think of something you could store in a array
// interface sMIT{
//     course1: string;
//     course2: string;
//     location: string;
//     totalCourses: number;
//     totalStudents: number;
// }
// let smitDetails = {
//     course1 : "Web and App Development",
//     course2 : "Graphic designing",
//     location: "Gulshan Campus",
//     totalCourses : 9,
//     totalStudents : 1500,
// }
// console.log(smitDetails);
// // TASK #22: Intentional Error
// var errorArray : string[] = ["Hi", "Hello", "Hey", "Greetings", "Bye"];
// // producing error by adding wrong index of aaray, coz we have 0-4 Arrays
// // console.log(errorArray[7]);
// // Removing error 
// console.log(errorArray[3]);
// // TASK #23: Conditional Tests
// // let car = 'subaru';
// // console.log("Is car == 'subaru'? I predict True.")
// // console.log(car == 'subaru')
// var seven = 7;
// var eleven = 11;
// console.log("Test 1; is seven eqaul to 7?")
// console.log(seven == 7);
// // Boolean type ==
// console.log("\nTest 2; is seven not eqaul to 11?")
// console.log(seven != 11);
// console.log("\nTest 3; is eleven eqaul to 11?")
// console.log(eleven==11);
// console.log("\nTest 4; is elevn not eqaul to 7?")
// console.log(eleven != 7);
// console.log("\nTest 5; is 7 not eqaul to 10?")
// console.log(seven != 10)
// console.log("\nTest 6; is 7 greater to 11?")
// console.log(seven > 11);
// console.log("\nTest 7; is eleven lesser than 7?")
// console.log(eleven < 7);
// console.log("\nTest 8; is elevn lesser than  eqaul to 7?")
// console.log(eleven <= 7);
// console.log("\nTest 9; is 7 equal to 11??")
// console.log(seven == 11);
// console.log("\nTest 10; is 5 equal to 7?")
// console.log(seven == 5);
// // TASK #24: More Conditional Test
// // • Tests for equality and inequality with strings
// var mango = "mango";
// var banana = "banana";
// console.log("\nis mango equal to mango?");
// console.log(mango == "mango");
// console.log("\nis mango equal to banana?");
// console.log(mango == "banana");
// // • Tests using the lower case function
// var lowercaseApple = "APPLE";
// console.log("\nis apple equal to APPLE after converting to lower Case?");
// console.log(lowercaseApple.toLowerCase() == "APPLE");
// console.log("\nis apple not equal to APPLE after converting to lower Case?");
// console.log(lowercaseApple.toLowerCase() != "APPLE");
// // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// let ten = 10;
// let nine = 9;
// console.log("\n is 9 equal to 10")
// console.log(nine == 10);
// console.log("\n is 9 not equal to 10")
// console.log(nine != 10);
// console.log("\n is 10 greater than 9")
// console.log(ten > 9);
// console.log("\n is 10 less than 9")
// console.log(ten < 9);
// console.log("\n is 10 greater than or equal to 9")
// console.log(ten >= 9);
// console.log("\n is 10 less than or equal to 9")
// console.log(ten <= 9);
// // • Tests using "and" and "or" operators
// let twenty = 20;
// let fifty = 50;
// console.log("\nis 50 equal to 50 AND 50 is greater than 20?");
// console.log(fifty == 50 && fifty > 20);
// console.log("\nis 50 not equal to 50 AND 50 is greater than 20?");
// console.log(fifty != 50 && fifty > 20);
// console.log("\nis 50 not equal to 50 OR 50 is greater than 20?");
// console.log(fifty != 50 || fifty > 20);
// console.log("\nis 50 equal to 20 OR 50 is greater than 60?");
// console.log(fifty == twenty || fifty > 60);
// // • Test whether an item is in a array
// let uni = ["NED", "KU", "IQRA", "FAST", "NUST"];
// console.log("is NED Univeristy include in this array?")
// console.log(uni.includes("NED"));
// // include fn. k liye hamn tsconfig ki file create ki HashChangeEvent, cmd pr tsc --init krky then usky module ko esNext kia ha
// // • Test whether an item is not in a array
// console.log("is NED Univeristy not include in this array?")
// console.log(!uni.includes("NED"));
// // TASK #25: Alien Colors #1
// let alien_color = "black";
// // • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// if(alien_color==="black"){
//     console.log("Alien color is Black, you just earned 5 points");
// }
// // • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// if(alien_color === "blue"){
//     console.log("Alien Color is Blue");
// }
// // TASK #26: Alien Colors #2
// var aliencolor = "Red";
// if(aliencolor === "Red"){
//     console.log("you just earned 5 points");
// }else{
//     console.log("YOU EARNED 10 Points");
// }
// if(aliencolor === "Blue"){
//     console.log("Alien color is Black, you just earned 5 points");
// }else{
//     console.log("YOU EARNED 10 Points, come from else statement");
// }
// // TASK #27: Alien Colors #3
// // • If the alien is green, print a message that the player earned 5 points.
// var alienColor = "green"
// if(alienColor === "green"){
//     console.log("you earned 5 points");
// }else if(alienColor === "yellow") {
//     console.log("you earned 10 points");
// }else if(alienColor === "red") {
//     console.log("you earned 15 points");
// }
// // • If the alien is yellow, print a message that the player earned 10 points.
// var alienColor = "yellow"
// if(alienColor === "green"){
//     console.log("you earned 5 points");
// }else if(alienColor === "yellow") {
//     console.log("you earned 10 points");
// }else if(alienColor === "red") {
//     console.log("you earned 15 points");
// }
// // • If the alien is red, print a message that the player earned 15 points.
// var alienColor = "red"
// if(alienColor === "green"){
//     console.log("you earned 5 points");
// }else if(alienColor === "yellow") {
//     console.log("you earned 10 points");
// }else if(alienColor === "red") {
//     console.log("you earned 15 points");
// }
// // TASK #28: Stages of Life
// var age = 100
// if(age < 2){
//     console.log("the person is baby");
// }
// else if(age >= 2 && age < 4){
//     // 2 or 3 saal walon k liye not 4 years 
//     console.log("the person is toddler");
// }
// else if(age >= 4 && age < 13){
//     console.log("the person is kid");
// }
// else if(age >= 13 && age < 20){
//     console.log("the person is teenager");
// }
// else if(age >= 20 && age < 65){
//     console.log("the person is adult");
// }
// else if(age >= 65){
//     console.log("the person is an elder");
// }
// // TASK #29: Favorite Fruit
// var favourite_fruits = ["Apple", "Mango", "Banana"];
// // using 5 independed if statements!!
// if (favourite_fruits.includes("Apple"))[
//     console.log("I really like Apple;"),
// ]
// if (favourite_fruits.includes("Orange"))[
//     console.log("I really like Orange;"),
// ]
// if (favourite_fruits.includes("Mango"))[
//     console.log("I really like Mango;"),
// ]
// if (favourite_fruits.includes("Grape"))[
//     console.log("I really like Grape;"),
// ]
// if (favourite_fruits.includes("Banana"))[
//     console.log("I really like Banana;"),
// ]
// // TASK #30: Hello Admin
// let userNames = ["Fahad", "Areeb", "Ali", "Admin", "Farhan"];
// // using foreach Loop on array
// userNames.forEach(user =>{
//     if(user === "Admin"){
//         console.log(`Hi ${user}, would you like to see a status report?`)
//     }
//     else{console.log(`Hi ${user}, Thank you for logging in again. `)}
// });
// // TASK #31: No Users
// var usernames = ["Fahad", "Areeb", "Ali", "Admin", "Farhan"];
// usernames=[];
// // agr above empty array ko comment krdeingy toh else wala Print hoga, otherwise if wala...
// if(usernames.length === 0){
//     console.log("your Array is Empty, you need to find some users");
// }
// else{
//     usernames.forEach(user =>{
//         if(user === "Admin"){
//             console.log(`Hi ${user}, would you like to see a status report?`)
//         }
//         else{console.log(`Hi ${user}, Thank you for logging in again. `)}
//     });
// }
// // TASK #32: Changing Usernames
// let currentUsers = ["Fahad", "areeb", "Ali", "maarij", "Farhan"];
// let newUsers = ["Fahad", "Hur", "ali", "saeed", "Farhan"];
// newUsers.forEach(new_users =>{
//     // or we can write like this;
//     // let ourCondtion = currentUsers.some(current_users => current_users.toLowerCase()=== new_users.toLocaleLowerCase())
//     // if(ourCondtion){
//     //     console.log(`Hey Sorry ${new_users} is alreay taken`);
//     // } else{
//     //     console.log(`the ${new_users} is available`);
//     // }
//     if(currentUsers.some(current_users => current_users.toLowerCase()=== new_users.toLocaleLowerCase())){
//         console.log(`Hey Sorry ${new_users} is alreay taken`);
//     } else{
//         console.log(`the ${new_users} is available`);
//     }
// }
// )
// // TASK #33: Ordinal Numbers
// // creating array
// let numbers =[1,2,3,4,5,6,7,8,9];
// // using for Loop
// for(var oneNumbers of numbers) {
//     let ordinalNumbers: string;
//     if(oneNumbers === 1){
//         ordinalNumbers = "st"
//     }
//     else if(oneNumbers === 2){
//         ordinalNumbers = "nd"
//     }
//     else if(oneNumbers === 3){
//         ordinalNumbers = "rd"
//     }
//     else{ordinalNumbers = "th"}
//     console.log(`${oneNumbers}${ordinalNumbers}`);
// }
// // TASK #34: Pizzas
// let pizza =["Pepperoni","Chesse","Chicken","Meat"];
// for(let onePizza of pizza){
//     console.log(`I like ${onePizza} pizza.`)
// }
// console.log("\n\tI can't write three or more lines, because I don't eat Pizza, but I really love pizza!\t\n")
// // TASK #35: Animals
// // creating array 
// let petAnimals = ["cat", "dog","tiger"];
// // using for loop
// for(let pet of petAnimals){
//     console.log(`A ${pet} would make a great pet`);
//     // console.log("Any of these animals would make a great pet!");
// }
// console.log("Any of these animals would make a great pet!");
// // TASK #36: T-shirt
// function make_shirt (size: string, textMessage: string){
//     console.log(`The size of your T-shirt is ${size} with the Text Message of ${textMessage}`);
// }
// make_shirt("Small", "Rizwan");
// make_shirt("Large", "Rizwan GPT");
// // TASK #37: Large Shirts
// function makeShirt (size: string = "Large", Textmessage: string = "I Love Typescript" ){
//     console.log(`Making ${size} T-shirt with the Print message of ${Textmessage}`);
// }
// // calling q fn. with by-default values (fn. = function)
// makeShirt()
// // calling a fn. with medium size & default msg
// makeShirt("Medium");
// // calling a fn. with small size & different print message
// makeShirt("Small", "I Love Javascript");
// // TASK #38: Cities
// // describe function
// function describe_city(city: string , country: string = "Pakistan"){
//     console.log(`${city} is in ${country}`);
// }
// // calling q fn.
// describe_city("Karachi");
// describe_city("Lahore");
// describe_city("Texas", "USA")
// // TASK #39: City Names
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`
// }
// // city_country("Karachi", "Pakistan");
// console.log(city_country("Karachi", "Pakistan"));
// // city_country("Multan", "Pakistan");
// console.log(city_country("Multan", "Pakistan"));
// // city_country("Texas", "USA");
// console.log(city_country("Texas", "USA"));
// // TASK #40: Album
// function make_album(artistName: string, albumTitle: string, tracks?: number){
//     let album: {artist: string, title: string, tracks?: number} = {
//         artist: artistName,
//         title: albumTitle,
//     }
//     if(tracks !== undefined){
//        album.tracks = tracks;
//     }
//      return album;
//     }
// // calling fn. & creating 3 variables with different values
// var album1 = make_album("Rizwan", "Album Title 1", 4);
// var album2 = make_album("Saeed", "Album Title 2");
// var album3 = make_album("Hamza", "Album Title 3", 8);
// // print var here;
// console.log(album1);
// console.log(album2);
// console.log(album3);
// TASK #41: Magicians
// function show_magicians(magicians: string[]) {
//     magicians.forEach(names=> console.log(names))
// }
// let magician_names = ["Saeed", "Hamza", "Swaleh", "Saad", "Naish", "Faiz"];
// show_magicians(magician_names);
// ?PRACTISE!!
// function showMagician(Magicians: string[]){
//     Magicians.forEach(namesss=> console.log(namesss));
// }
// let Mnames =["Bheem", "Kalia"];
// showMagician(Mnames);
// TASK #42: Great Magicians
// function show_magicians(magicians: string[]) {
//     magicians.forEach(name=> console.log(name));
// }
// //  fn. to make magician The Great through .map() it willl modify aaray
// function make_great(magicians: string[]){
//     return magicians.map(name => `The Great ${name}`)
// }
// let magician_names = ["Saeed", "Hamza", "Swaleh", "Saad", "Naish", "Faiz"];
// // call make_great fn. to modify magician names
// let great_magicians = make_great(magician_names);
// // console.log(great_magicians)
// // call show_magicians that show modified list of magicians
// show_magicians(great_magicians);
// // TASK #43: Unchanged Magicians
// function show_magicians(magicians: string[]) {
//     magicians.forEach(name=> console.log(name));
// }
// //  fn. to make magician The Great through .map() it willl modify aaray
// function make_great(magicians: string[]){
//     return magicians.map(name => `The Great ${name}`)
// }
// let magician_names = ["Saeed", "Hamza", "Swaleh", "Saad", "Naish", "Faiz"];
// // making a copy of Original Array through .slice fn. 
// let copy_magician_names = magician_names.slice()
// // Modify the Copied array to include "The Gret" with their names
// // make_great(copy_magician_names)
// let copy_great_magicians = make_great(copy_magician_names);
// // Show both Arrays & Copied 
// // Original
// console.log("\nOriginal Array");
// show_magicians(magician_names);
// // Copied 
// console.log("\nCopied Array");
// show_magicians(copy_great_magicians);
// // TASK #44: Sandwiches
// // ... means ham jtny item chahein, is m add add kr skty hain, it's called rest parameters 
// //  Define a fn. with rest parameters that accept items argument representing our Sandwich
// function make_snadwich(...items : string[]){
//     console.log("\nMaking Sandwich with following items: \n")
//     items.forEach(item => console.log(item));
//     console.log("\nNow Enjoy Sandwich")
// }
// make_snadwich("Chicked", "Cheese", "Egg", 'Mayo');
// make_snadwich("Bread", "Butter");
// // ye dono seperate time print hongyyy
// // it's happening bcoz of Rest parameters (...)
// TASK #45: Cars
// Note: 45th task getting error, because of tsconfig file, but Print whole code perfectly !!!
// define a fn. to create a car object with optional options 
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add adtitional options to the car object 
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//  call fn. to create Car object
var myCar = createCar("Toyota", "Corrolla", "Color: Black", "Sunroof: True", "Year: 2023");
console.log(myCar);
// 45 EXCERCISES DONE  !!!
