

let item_sec = document.querySelector(".items")

window.addEventListener("DOMContentLoaded",()=>{
    loadCartFromLocalStorage(item_sec)
})

item_features(item_sec)


const card_data = JSON.parse(localStorage.getItem("cart")) || []
console.log(card_data)