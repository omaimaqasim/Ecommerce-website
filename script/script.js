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


// add event for saving items to shopping card
Array.from(shop_carts).forEach(cart_btn => {
     cart_btn.addEventListener("click", () => {
          let product_card = cart_btn.closest(".product-card")
          let product_price = product_card.querySelector(".product-price").textContent
          let product_pic = product_card.querySelector("img").src
          let product_name = product_card.querySelector(".product-name").textContent

          // now adding item to shooping card
          let item_section = document.querySelector(".item_section")
          item_section.insertAdjacentHTML("afterbegin", `  <div class="item">
      <div class="item_pic">
        <img src="${product_pic}" alt="">
      </div>
      <div class="item_name">${product_name}</div>
      <div class="item_price">${product_price}</div>
      <div class="inc_dec_section">
        <span class="increase">+</span>
        <span class="item_quantity">1</span>
        <span class="decrease hidden" >-</span>
        <svg  class="delete_icon " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000"
        fill="none">
        <path
        d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
        stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
        <path
        d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
        stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
      </svg>
    </div>
  </div>
  `)
     })
})


// add listener to inc and dec btn

let item_section = document.querySelector(".item_section")

item_section.addEventListener("click", (e) => {
     let section = e.target.closest(".inc_dec_section");
     let dec_btn = section.querySelector(".decrease");
     let quantityDiv = section.querySelector(".item_quantity");
     let delete_icon = section.querySelector(".delete_icon");
     // price logic 
     let item_price = e.target.closest(".item").querySelector(".item_price")
     // Convert to number each time
     let item_quantity = Number(quantityDiv.innerHTML);


     // Increase
     if (e.target.closest(".increase")) {
          item_quantity++;
          quantityDiv.innerHTML = item_quantity;
     }

     // Decrease
     if (e.target.closest(".decrease")) {
          if (item_quantity > 1) {
               item_quantity--;
               quantityDiv.innerHTML = item_quantity;

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

     // price logic
     if (!item_price.dataset.basePrice) {
          item_price.dataset.basePrice = item_price.textContent.replace("$", "");
     }

     let base_price = parseFloat(item_price.dataset.basePrice);

     // now change the price 
     item_price.textContent = "$" + (base_price * item_quantity);



     // delete item if click on delete_icon
     if (e.target.classList.contains("delete_icon")) {
          e.target.closest(".item").remove()
     }
});







