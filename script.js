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

var my_section = document.createElement('section');
my_section.innerHTML="<h1>This is a string</h1>";
my_section.style.marginInline="auto";
my_section.style.textAlign="center";
my_section.style.backgroundColor="skyblue";
my_section.style.padding="5rem";
my_section.style.color="white";
document.body.appendChild(my_section);


// {
//    const myElement="img"
// }
// console.log(myElement);

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW","Benz","Ford"];

//              0        1        2    3      4
// Arrays use indexes to identify the items or elements
cars[4]="Molue";
let howManyCars = cars.length;
let myCar = cars[4];
//index notation is to access the values in an array
document.write(howManyCars);

// You can change an element:
//cars[0] = "Toyota";

// You can add an element:
//cars.push("Audi");
var x = document.getElementById('demo');
var mycars = ['./assets/car1.jpg','./assets/car2.jpg','./assets/car3.jpeg','./assets/car4.jpg'];

setInterval(()=>{
 var random = Math.floor(Math.random()*4);
//  console.log(random);
 x.src=mycars[random];
}, 800)
