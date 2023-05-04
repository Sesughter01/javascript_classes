
import mySterling from "./js_obj.js"
import {addnum, mul} from "./test.js"

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
 var strgacct = JSON.stringify(mySterling ,null, 2);
 console.log(strgacct);
// Generating Account details

document.getElementById('account_name').innerHTML = mySterling.name;
document.getElementById('account_num').innerHTML = mySterling.number;

 //You can create a constant array:
const cars = ["Saab", "Volvo", "BMW","Benz","Ford","Beetle"];

var x = document.getElementById('demo');
var mycars = ['./assets/car1.jpg','./assets/car2.jpg','./assets/car3.jpeg','./assets/car4.jpg'];
// debugger;
setInterval(()=>{
    debugger;
var random = Math.floor(Math.random()*4);
 console.log(random);
 x.src=mycars[random];
}, 800)


// DEBUGGING JavaScript

let firstVal = addnum(2,4);
let secondVal  = mul();

document.getElementById('test').innerHTML= "This are the values" +" " + firstVal + " " + secondVal;