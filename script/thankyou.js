

let item_sec = document.querySelector(".items")
const card_data = JSON.parse(localStorage.getItem("cart")) || []

window.addEventListener("DOMContentLoaded",()=>{
    loadCartFromLocalStorage(item_sec)
})




