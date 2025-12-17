
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
    alert("Order placed successfully!") 
    window.location.href = "thankyou.html"
    // reset form
       form.reset();
  }
 

   
})


