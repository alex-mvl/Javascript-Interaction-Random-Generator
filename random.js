let headingElement = document.getElementById("title");
let executeButton = document.getElementById("button-submit");
let outputParagraph = document.getElementById("outputText");
let inputElement = document.getElementById("input-name");
let dessertOneElement = document.getElementById("dessertOne");
let dessertTwoElement = document.getElementById("dessertTwo");
let dessertThreeElement = document.getElementById("dessertThree");
let dessertFourElement = document.getElementById("dessertFour");
let dessertFiveElement = document.getElementById("dessertFive");
let dessertSixElement = document.getElementById("dessertSix");
let dessertSevenElement = document.getElementById("dessertSeven");

let descriptor = ["yummy", "old", "bitter", "moldy", "delicious", "fun", "boring", " interesting", "complicated", "pretty"];
let dessert = ["pancake", "lava cake", "apple pie", "pumpkin pie", "strawberry shortcake", "chocolate chip cookie", "sugar cookie", "blueberry muffin", "corn muffin"]

executeButton.addEventListener("click", function(){
  let currentInputText = inputElement.value;

  restyle();
  generate(currentInputText);

});


function generate(incUserInput){
  let randomDescriptor = Math.floor(Math.random() * descriptor.length);
  let randomDessert = Math.floor(Math.random() * dessert.length);

  let selectedRandomDescriptor = descriptor[randomDescriptor];
  let selectedRandomDessert = dessert[randomDessert];

  outputParagraph.innerText = "You are a " + selectedRandomDescriptor + " " + selectedRandomDessert + "!";



}


function restyle(){

  let randomRed = Math.random() * 255;
  let randomGreen = Math.random() * 255;
  let randomBlue = Math.random() * 255;

  var colorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue +")";

  headingElement.style.color = colorString;
  outputParagraph.style.backgroundColor = colorString
  
  let randomDeg = Math.random() * 360;

  var degString = "rotate("+randomDeg+"deg)";

  dessertOneElement.style.transform = degString;
  dessertTwoElement.style.transform = degString;
  dessertThreeElement.style.transform = degString;
  dessertFourElement.style.transform = degString;
  dessertFiveElement.style.transform = degString;
  dessertSixElement.style.transform = degString;
  dessertSevenElement.style.transform = degString;


}
