const myProfile = {
    firstName : "Nitesh",
    lastName : "Mishra",
    Age : 23,
    cgpa : 7.5,
    isgood : true,
    branch : "CSE",
    course : "Bachelor in computer science"
}

const product = {
    name : "Parker Pen",
    type : "ball pen",
    color : "black",
    rating : 4.5,
    isDiscount : true,
    MRP : "540$",
    discount : "55%",

}

// second class 

// conditional class

// let age = 23
// if(age >= 18){
//     console.log("eligible for vote");
    
// }
// else {
//     console.log("not eligible");
// }

// ek real life practice hai
// let mode = "light";
// let color;
// if(mode === "dark"){
//     color = "black";
// }
// else{
//     color = "white";
// }
// console.log(color);

// how to use ternary operator
// let umar = 29;
// let ans = age > 21 ? "eligible for vote ": "not eligible for vote";
// console.log(ans);

// input using prompt :

// let number = prompt("enter the number: ");

// if(number % 5 == 0){
//     console.log("multiple of 5");
// }

// else{
//     console.log("not a multiple of 5");
    
// }

// problem


// let score = prompt("enter the score: ");

// if(score >90 && score <100){
//     console.log("excellent");
// }

// else if( score >80 && score <= 89){
//     console.log("very good");
// }

// else if(score > 70 && score <= 79){
//     console.log("good");
// }

// else if (score > 60 && score <= 69){
//     console.log("fair");
// }

// else if(score > 33 && score <= 60){
//     console.log("pass");
// }

// else{
//     console.log("fail");
// }


// how to use for-of loop 
// for-of loop is used for array and string not used for object


// let name = "Nitesh Mishra";
// let size = 0;

// for(let i of name){
//     console.log(i);
//     size++;
    
// }

// console.log(size);


// for-in loop
// it is used for the object 

// let mobile = {
//     brand: "Samsung",
//     model: "s23 plus",
//     displaySize : 6.7,
//     color : "black",
//     camera: "50mp",
//     charger: "25v"
// }

// for(let key in mobile){
//     console.log("key: ", key, "value: ", mobile[key]);
    
// }



// print all the even number between 1 to 100;
//  let size = 0;
// for(let i=0; i<=100; i++){
//     if(i%2==0){
//         console.log(i);
//         size++;
//     }
    
// }

// console.log("total number:", size);



// make a game for the user 

// let correctNumber = 6;
// let userNumber = prompt("enter random number as you want: ");

// while (userNumber != correctNumber) {
//     userNumber = prompt("enter again you are closer:");
    
// }

// console.log("congratulation you won the game..");




// know we start the string in the javascript 

// let str = "Nitesh Mishra:";
// let ans = str.length;
// console.log(ans);

// for(let i=0; i<str.length;i++){
//     console.log(str[i]);
    
// }





// template literal kya hota hai

// let laptop = {
//     company : "HP",
//     model : "victus",
//     ram : "16GB",
//     rom : "1TB",
//     screenSize : 16+"inch"
// }

// let outputString = `my laptop company is ${laptop.company}. Its model is ${laptop.model}, ram size is ${laptop.ram} and rom size is ${laptop.rom}`
// console.log(outputString);


// aab apun loog padhenge string method koo

// means inbuilt function of the string...

// toUpperCase ka use 

// let meranaam = "nitesh mishra";
// console.log(meranaam.toUpperCase());
// console.log(meranaam.toLowerCase());



// aab trim dekhte hai 

// let mausam = "                      aaj ka mausam      bahut achha hai ek dum rainy season hai.                               ";
// console.log(mausam.trim());
// trim aage aur pichhe k space ko kaat deta hai lekin bich k space ko effect nahi karta hai...


// string m slice ko dekhte hai 
// slice m start inclusive hota hai aur end exclusive hota hai...

// let today = "aaj ka din kaffi achha tha.";
// console.log(today.slice(0, 9)); // yaha indexing 0 se 8 tak ho rahi hai
// console.log(today.slice(5)); // aur yaha 5 se end tak ho rahi hai...




// aab hum concatenation 

// let str1 = "nitesh";
// let str2 = " mishra";
// let ans = str1.concat(str2)
// console.log(ans);


// similarly
// str.replace(searchVal, newValue);
// str.replaceAll(searchVal, newVAlue);
// str,charAt(indx);



// question 1 generate username

// let username = prompt("enter your name");
// let letter = username.length;
// let generate = "@"+username.concat(letter);

// console.log(generate);





// Array in javascript....
// let array = [1,5,9,7,5,3,4,5,6,2,5,8,6,5,4];

// let size = array.length;

// for(let i=0; i<size; i++){
//     console.log(`array index ${i} = `,array[i]);
// }

// console.log("total number of element contain is: ", size);



// // using for of loop
// for(let j of array){
//     console.log(`array index ${j} = `,array[j]);
    
// }

// question : find the average mark

// let marks = [85,97,44,37,76,60];
// let sum = 0;
// let length = marks.length;
// let avg = 0;

// for(let i of marks){
//     sum += i;
//     avg = sum/length;

// }
// console.log("total sum is: ",sum);
// console.log("average: ", avg);


// question 2: price after offer

// let originalPrice = [250,645,300,900,50];
// console.log("before discount price: ",originalPrice);
// let offer = 0;
// for(let i=0; i<originalPrice.length; i++){
//     offer = originalPrice[i]/10;
//     originalPrice[i] = originalPrice[i] - offer;
// }
// console.log("after discount price: ",originalPrice);



// method in array means inbuilt function:
// concatenation in array:

// let district = ["thane", "shahpur","new Mumbai","nasik"];
// let area = ["charai", "wagle","heeranandani", "rahejha", "rustom"]

// let allInOne = district.concat(area);
// console.log(allInOne);


// aab apun dekhte hai shift aur unshift kaise use karte hai

// ye joo shift aur unshift hote ye similer kaam karte hai push or pop ki tarah baas fark itna hota hai push pop back se kaam karte the aur ye front se kaam karte hai...

// let schoolKFriend = ["prabhat", "ayush", "prateek", "ankit", "harsh", "rupal", "vishakha"];
// schoolKFriend.unshift("karan"); // aab hum karan ko front m add kar denge
// console.log(schoolKFriend);
// schoolKFriend.shift();//  aab jo karan hai woo front se haat jaiga...
// console.log(schoolKFriend);



// know we use the slice in the array 

// let collage = ["prabhat", "ayush", "prateek", "ankit", "harsh", "rupal", "vishakha"];
// console.log(collage.slice(2,6));





// aab splice dekh lete hai...
// let number = [1,5,9,8,7,4,1,2,3,6,5];
// console.log(number);

// number.splice(2,2,101,102)
// console.log(number);


// practice question 

// let company = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
//console.log(company.shift());
// console.log(company.splice(2,1,"ola"));
// company.push("amazon");
// console.log(company);






// aab hum loog function ko dekhenge 

// make function which add two number 

// function sum(n1,n2){
//     res = n1+n2;
//     console.log(res);
// }



// multiplication using arrow function 

// const multiplication = (num1 , num2)=>{
//     console.log("res = ", num1*num2);
    
// }


//question return vowel from the given string

// function vowelreturn(str){
//     let count = 0;
//     for(let char of str){
//        if(char==='a' || char==='e' || char==='i' || char==='o' || char === 'u'){
//             count++;
//         }    
//     }
//    return count;
// }



// aab hum dekhenge for-each loop 

// let MyNum = [1,2,3,6,5,4,7,8,9,8,5,2,1,4,7,9,6,3];

// MyNum.forEach((val) =>{
//     console.log(val);
    
// })



// Question : print the square of the given number 

// let givenNumber  = [11,12,13,14,15,16,17,18,19,20];

// givenNumber.forEach((val,index)=>{
//     console.log("square of the number is:",val**2, "index of the number is", index);
    
// })



// Map in the array :
// map is work similer to the for-each but there is hack that map return the new array but for-each return same array 

// let various = [1,4,9,16,25,36,49,64,81,100];

// let newArray = various.map((val)=>{
//     console.log(val**0.5);
    
// })
// console.log(various);
// console.log(newArray);


// aab hum filter ko dekhenge ki filter kaise kaam karta hai

// filter kaam karta hai kuchh selected element par jo ki uss condition ko full fill karte hai 

// let variousNumber = [50,51,52,53,54,55,56,57,58,59,60,66,88,55,44,77,11,33,889];

// let ans =  variousNumber.filter((val) =>{
//    return val%2 === 0;
    
// })
// console.log("Before filter Array: ",variousNumber);
// console.log("After filter Array:",ans);



// aab apun loog dekhenge reduce kaise kaam karta hai...
// reduce m hum loog complete array pe operation kar ke single output nikalte  hai jaise ki sum of all element, average, maximum element in array

// let ekArray = [55,66,32,25,68,95,51,24];
// let store = ekArray.reduce((prev, curr)=>{
//     return prev>curr ? prev : curr;
// })
// console.log(store);


// Question : given an array of marks od the student and filter out the marks is grater than the 90:

// let marks = [45,48,47,49,46,95,98,97,94,92,+0,+3,91,55,66,88,11,22,33,99];

// let res = marks.filter((val)=>{
//     return val>85;
// })
// console.log(res);


// Question: aab hame user se ek input lena hai jaise man loo user ne input diya 5 too hame 1 se 5 tak ka ek array banana hai

// let user = prompt("enter the number:");
// let newArray = 0;
// for(let i=0;i<user;i++){
    
// }




