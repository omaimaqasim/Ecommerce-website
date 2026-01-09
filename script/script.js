console.log("lets write js")

// add lister for hamburger

let hamburger = document.querySelector(".heading img")
let cross = document.querySelector(".sidebar img")
let sidebar = document.querySelector(".sidebar")
let info = document.querySelector(".info")
let item_section = document.querySelector(".item_section");

//this line mean when dom is loaded run the fn name localcart
window.addEventListener("DOMContentLoaded",loadCartFromLocalStorage)

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
          // disable card btn
          cart_btn.disabled = true;

          let product_card = cart_btn.closest(".product-card")
          let product_info = {
               price: product_card.querySelector(".product-price").textContent,
               img: product_card.querySelector("img").src,
               quantity: 1,
               name: product_card.querySelector(".product-name").textContent
          }

          // now adding item to shooping card

          item_section.insertAdjacentHTML("afterbegin", create_item_card(product_info))

          // logic for total amount
          updateTotal()
          // now updating itemcount
          let selected_items = Array.from(document.querySelectorAll(".item_section .item"))
          itemcount.innerHTML = selected_items.length

          // calling fn for storing data
          saveCartToLocalStorage()



     })


})





function updateTotal() {
     let total_amount = document.querySelector(".total_sec .total");
     let items_price = document.querySelectorAll(".item .item_price");
     let sum_prices = 0;

     items_price.forEach(price => {
          let ind_price = parseFloat(price.textContent.replace("$", ""));
          sum_prices += ind_price;
     });

     total_amount.textContent = "$" + sum_prices.toFixed(2);
}


// add listener to inc and dec btn



item_section.addEventListener("click", (e) => {
     let section = e.target.closest(".inc_dec_section");
     let dec_btn = section.querySelector(".decrease");
     let quantityDiv = section.querySelector(".item_quantity");
     let delete_icon = section.querySelector(".delete_icon");
     // price logic 
     let item_price = e.target.closest(".item").querySelector(".item_price")
     // Convert to number each time
     let item_quantity = Number(quantityDiv.innerHTML);

     // price logic : baseprice
     if (!item_price.dataset.basePrice) {
          item_price.dataset.basePrice = item_price.textContent.replace("$", "");
     }

     let base_price = parseFloat(item_price.dataset.basePrice);

     // Increase
     if (e.target.closest(".increase")) {
          item_quantity++;
          quantityDiv.innerHTML = item_quantity;
          // first update individual price 
          item_price.textContent = "$" + (base_price * item_quantity).toFixed(2);
          // updating total price after increasing item
          updateTotal()

          // calling fn for storing data
          saveCartToLocalStorage()
     }

     // Decrease
     if (e.target.closest(".decrease")) {
          if (item_quantity > 1) {
               item_quantity--;
               quantityDiv.innerHTML = item_quantity;
               // first update individual price 
               item_price.textContent = "$" + (base_price * item_quantity).toFixed(2);
               // then updating total price after decreasing item
               updateTotal()

               // calling fn for storing data
               saveCartToLocalStorage()

          }
     }

     // ✅ Update visibility after updating quantity
     if (item_quantity > 1) {
          dec_btn.classList.remove("hidden");      // show "-"
          delete_icon.classList.add("hidden");     // hide trash
     } else {
          dec_btn.classList.add("hidden");         // hide "-"
          delete_icon.classList.remove("hidden");  // show trash
     }




     // delete item if click on delete_icon
     if (e.target.classList.contains("delete_icon")) {
          // first enable card btn of that item
          let item_name = e.target.closest(".item").querySelector(".item_name")
          Array.from(shop_carts).forEach(btn => {
               let btn_pro_name = btn.closest(".product-card").querySelector(".product-name")
               if (btn_pro_name.textContent === item_name.textContent) {
                    btn.disabled = false
               }
          })
          //    then remove that item from shooping card
          e.target.closest(".item").remove()
          //   update total 
          updateTotal()

          // calling fn for storing data
          saveCartToLocalStorage()

          // now updating itemcount
          let selected_items = Array.from(document.querySelectorAll(".item_section .item"))
          itemcount.innerHTML = selected_items.length
     }


});


// function for storing items data

function saveCartToLocalStorage() {
     let items = []
     document.querySelectorAll(".item_section .item").forEach(item => {

          items.push({
               name: item.querySelector(".item_name").textContent,
               price: item.querySelector(".item_price").textContent,
               quantity: item.querySelector(".item_quantity").textContent,
               img: item.querySelector(".item_pic img").src
          })

     })

     localStorage.setItem("cart", JSON.stringify(items))
}

// function for loading card from local storage

function loadCartFromLocalStorage() {
     const cart_data = JSON.parse(localStorage.getItem("cart")) || []

     cart_data.forEach(cart => {
          let new_items = {
               img: cart.img,
               name: cart.name,
               price: cart.price,
               quantity: cart.quantity
          }
          item_section.insertAdjacentHTML("afterbegin", create_item_card(new_items));
      
         
     })


     itemcount.textContent = cart_data.length;
     updateTotal();


}







