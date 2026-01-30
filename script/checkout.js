
let item_div = document.querySelector(".items_div");

//this line mean when dom is loaded run the fn name localcart
window.addEventListener("DOMContentLoaded", () => {
     loadCartFromLocalStorage(item_div)
})

// next goal is to make all item features work ?
item_features(item_div)

// all inputs
let allinputs = Array.from(document.querySelectorAll("form input"))
// hadling checkout btn
let form = document.querySelector("form")
let errors = document.querySelectorAll("form .error")

form.addEventListener("submit",(e)=>{
  // stops reload or go to another site
  e.preventDefault()

  // Get all the input values (name, email, address, city, province, card number, CVV).
 allinputs.forEach(input=>{
    if (input.value.trim() ==="") {
      input.nextElementSibling.textContent = `Please enter ${input.placeholder.toLowerCase()}`;
    }
 })
 

  // if all are full 
  if ( allinputs.every(input=> input.value.trim() !== "")) {
   
    window.location.href = "thankyou.html"
    // reset form
       form.reset();
  }
 

   
})




const card_data = JSON.parse(localStorage.getItem("cart")) || []
console.log(card_data)

