let menuButton  = document.querySelector(".menuButtonContainer");

let navLinks = document.querySelectorAll(".navlinks");
// var classes = document.body.classList;

menuButton.addEventListener('click',()=>{
   document.body.classList.toggle('nav_open');

});
// console.log(classes);

navLinks.forEach(mylink=>{

    mylink.addEventListener('click',()=>{
        document.body.classList.remove("nav_open");
    });
});

/*
   ALGORITHMS : A procedure solving problems in terms of 
   1. Actions to be taken
   2. Order in which the actions.

   Concepts :

   Program control:
       This refers to specifying the order in which statements executed

       Javascript has sequential promgram control i.e it executes code statements in the order in which they written.

       1. Procedural programming : step by step
       2. Object oriented programming: actions(methods) that need to be taken and resources/properties/attributes required.

   Transfer control: This refers to changing the default or normal flow program control
  
   Control Structure : This refers to javascript structures that determine program control

   There are 3 major control structures :
   1. Sequence structure : this normal line by line program flow
   2. Selection structure : this flow is determined by conditions or choice i.e if , if else , switch
   3. Repetition structure : this flow is determined by the number of times a code line is to be executed i.e loops ; for loop, while loop , Do while .

   Pseudocode : This is like a version of your code written in plain english


*/
// This program below increments every inputted number by 1



//var any = window.prompt('Enter any number'); first line to run 1. collect the user inputted number

// any = parseInt(any);  second line to run 2. Convert the inputted number string from string to number

// var anyincrement = any + 1;  third to run 3. Add one to the converted number
  
// window.alert(anyincrement); fourth to run 4. Display the result on screen

// Selection structures : if statement <!--  html comment-->
// 1. collect the user inputted number
// 2. if student's grade is greater than or equal 60
//      print 'passed'
// var studentGrade= window.prompt('Enter Student grade');
// if (studentGrade>= 60)
//    document.writeln('Passed');

// JavaScript : Official EmcaScript ES, The lastest version of Javascript is ES6
/* VARIABLE */
// JAVASCRIPT DATATYPES : NUMBER; int, float, BOOLEAN,OBJECT,ARRAY,NaN,Null,String
/* Using an escape character  \ to convert key symbols to ordinary string */
// var myname = undefined ;  // A variable declaration without definition

/* A variable with key word var and let can be declaraed before definition
    but a variable with keyword const cannot be declared without definiton
*/

// let age = undefined;  //// A variable declaration without definition

// const doB = "30-10-2002";

// console.log() is Javascripts display interface used to display outputs from javascript variables or commands
// myname = "Peter";
// age = 22;
// console.log(myname); //// This line of code is saying display what is in variable myname
// console.log(age); // This line of code is saying display what is in variable age

// const dob = "21-09-1978";

// console.log(doB);

/*  Scope 
  Global scope function scope and Block Scope
   1.Global scope simply means a variable can be accessed anywhere in the program
   2. Function scope simply means a variable can only be accessed within the function
   3. Block scope means a variable can only be accessed within its block
*/

 // This Javascript for creating a date 

// console.log(now);
// The code below is an example of creating a simple function in Javascript

/* A function is a series of commands or code lines that are grouped and designed to
  perform a specific task
*/
// function show(){
//     var myname = "Charles"; 
//     // console.log(now);
//     return myname;
//     document.writeln('<h1> This is a Heading </h1> ' + myname);
//     // document.writeln('<h1> This is a Heading </h1> ' + myname);
// }
/* ES6 Introduced the arrow function :
traditional functions 
   function show(){
     // code goes here
   }

   Arrow function: This is used to create anonymous functions 
     var myfunct =  ()=>{} 

*/
/* Pseudocode :
  1. Get the control button for opening and closing the hidden navbar
  2. Get all the links that navigate to other pages.
  3. Make the button a toggle switch i.e on and off
  4. Also make the links replicate the off action of the toggle.

*/
