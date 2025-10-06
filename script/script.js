console.log("lets write js")

// add lister for hamburger

let hamburger = document.querySelector(".heading img")
let cross = document.querySelector(".sidebar img")
let sidebar = document.querySelector(".sidebar")
let info = document.querySelector(".info")


hamburger.addEventListener("click", (e) => {
     document.querySelector(".info").style.display = "none"
     document.querySelector(".sidebar").style.left = "0px"

})

cross.addEventListener("click", (e) => {
     document.querySelector(".sidebar").style.left = "-400px"

})

//  add a listener to shopping card
let shopping_icon = document.querySelector(".shopping_icon")
let card_cross = document.querySelector(".my_card_section .cross")
let my_card_section = document.querySelector(".my_card_section")

shopping_icon.addEventListener("click", () => {
     my_card_section.style.right = "0px"
})

card_cross.addEventListener("click", () => {
     my_card_section.style.right = "-550px"
})

//  add listener for shop_card icon in products sec

let shop_carts = document.querySelectorAll(".shop-cart")
let itemcount = document.querySelector(".itemcount")

Array.from(shop_carts).forEach(cart_btn => {
     cart_btn.addEventListener("click", () => {

          
          itemcount.innerHTML = parseInt(itemcount.innerHTML) + 1
          
          cart_btn.disabled = true;
          if (cart_btn.disabled) return
         
     })
})






