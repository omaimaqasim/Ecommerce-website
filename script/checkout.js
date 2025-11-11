
// all inputs
let allinputs = Array.from(document.querySelectorAll("form input"))
// hadling checkout btn
let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{

  e.preventDefault()
//   validate the form
// continue later
   
})

// Get all the input values (name, email, address, city, province, card number, CVV).

let name = document.querySelector(".name input").value
let email =document.querySelector(".email input").value

let address =document.querySelector(".address input").value
let city =document.querySelector(".city input").value

let province =document.querySelector(".province input").value
let cardno =document.querySelector(".card_no input").value

let CVV =document.querySelector(".cvv input").value

