
// all inputs
let allinputs = Array.from(document.querySelectorAll("form input"))
// hadling checkout btn
let form = document.querySelector("form")
let errors = document.querySelectorAll("form .error")

form.addEventListener("submit",(e)=>{
  // stops reload or go to another site
  e.preventDefault()

  // Get all the input values (name, email, address, city, province, card number, CVV).
  
  let name = document.querySelector(".name input")
  let email =document.querySelector(".email input")
  
  let address =document.querySelector(".address input")
  let city =document.querySelector(".city input")
  
  let province =document.querySelector(".province input")
  let cardno =document.querySelector(".card_no input")
  
  let CVV =document.querySelector(".cvv input")

    if (name.value === "") {
    name.nextElementSibling.innerHTML = "please enter name"
  }
  if (email.value === "") {
    email.nextElementSibling.innerHTML = "please enter email"
  }
  if (address.value === "") {
    address.nextElementSibling.innerHTML = "please enter address"
  }
  if (city.value === "") {
    city.nextElementSibling.innerHTML = "please enter city"
  }
  if (province.value === "") {
    province.nextElementSibling.innerHTML = "please enter province"
  }
  if (cardno.value === "") {
    cardno.nextElementSibling.innerHTML = "please enter card number"
  }
  if (CVV.value === "") {
    CVV.nextElementSibling.innerHTML = "please enter CVV"
  }

  // if all are full 
  if ( allinputs.every(input=> input.value.trim() !== "")) {
    alert("Order placed successfully!") 
  }
 

   
})


