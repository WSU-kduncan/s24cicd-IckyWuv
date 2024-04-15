//Variables for Hamburger Button 
const hamburger = document.getElementsByClassName('hamburger')[0]
const menubar = document.getElementsByClassName('menu-bar')[0]

//Adding Event Listener for my button and menubar for a tablet and Phone view
hamburger.addEventListener('click', () => {
  menubar.classList.toggle('active')
})

//The functions will run for the button when click 
function getRecipeDetails(){
  document.querySelector(".meal-detail").style.display ="block"
}

function goSearch(){
 window.location.href = "login.html" 
}

function goSearch2(){
  window.location.href = "search.html" 
 }
 

// The 'x' icon in search bar will clear the input
function clearInput() {
let clearSearch = document.getElementById('search').value =""
}

// variables for the contact form of the page 
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const success = document.querySelector("#success")
const error = document.querySelectorAll(".error")

/* The function will validate the form if there is a name and email and messages have a input and 
Follow the requirement if its valid
*/

function validateForm(){

  clearMessage()
  let errorMessage = false;

  if(nameInput.value.length < 1){
    error[0].innerText = "\u0021 Name cannot be blank";
    nameInput.classList.add("error")
    errorMessage = true;
  }

  if(!validEmail(emailInput.value)){
    error[1].innerText = "\u0021 Invalid Email Address";
    emailInput.classList.add("error")
    errorMessage = true;
  }

  if(messageInput.value.length < 1){
    error[2].innerText = "\u0021 Please Enter a Message";
    messageInput.classList.add("error")
    errorMessage = true;
  } 

  if (!errorMessage){
    success.innerText = "Message Sent"
    window.history.back()
  }
}

// call the function for validateForm and wil clear the input if its reload
function clearMessage(){
  for(let i = 0; i < error.length; i++){
    error[i].innerText = "";
  }
  success.innerText = "";
  nameInput.classList.remove("error")
  emailInput.classList.remove("error")
  messageInput.classList.remove("error")
}

//this will check the email if its an valid email
function validEmail(emailInput){
  let symbol = /\S+@\S+\.\S+/;
  return symbol.test(emailInput);
}


//This variable will be responsible for the get Recipe Button and display the output
const getRecipeBtn = document.querySelectorAll(".card-footer button");
const mealDetails = document.querySelector(".meal-detail");
const mealCloseBtn = document.getElementById("recipe-close-btn");


//The functions will run for the button when click 
function getRecipeDetails(){
  document.querySelector(".meal-detail").style.display = "block"
}
function get2ndRecipe(){
  document.querySelector(".second-meal-detail").style.display = "block"
}
function get3rdRecipe(){
  document.querySelector(".third-meal-detail").style.display = "block"
}
function get4thRecipe(){
  document.querySelector(".four-meal-detail").style.display = "block"
}
function get5thRecipe(){
  document.querySelector(".five-meal-detail").style.display = "block"
}
function get6thRecipe(){
  document.querySelector(".six-meal-detail").style.display = "block"
}
function get7thRecipe(){
  document.querySelector(".seven-meal-detail").style.display = "block"
}
function get8thRecipe(){
  document.querySelector(".eight-meal-detail").style.display = "block"
}
function get9thRecipe(){
  document.querySelector(".nine-meal-detail").style.display = "block"
}
function get10thRecipe(){
  document.querySelector(".ten-meal-detail").style.display = "block"
}
function get11thRecipe(){
  document.querySelector(".eleven-meal-detail").style.display = "block"
}




//the function will close the above functions when the closeBtn is clicked
function closeBtn(){
  document.querySelector(".meal-detail").style.display = "none"
  document.querySelector(".second-meal-detail").style.display = "none"
  document.querySelector(".third-meal-detail").style.display ="none"
  document.querySelector(".four-meal-detail").style.display ="none"
  document.querySelector(".five-meal-detail").style.display ="none"
  document.querySelector(".six-meal-detail").style.display ="none"
  document.querySelector(".seven-meal-detail").style.display ="none"
  document.querySelector(".eight-meal-detail").style.display ="none"
  document.querySelector(".nine-meal-detail").style.display ="none"
  document.querySelector(".ten-meal-detail").style.display ="none"
  document.querySelector(".eleven-meal-detail").style.display ="none"
}

