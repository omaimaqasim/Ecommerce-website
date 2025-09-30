console.log("lets write js")

// add lister for hamburger

let hamburger = document.querySelector(".heading img")
let cross = document.querySelector(".sidebar img")
let sidebar = document.querySelector(".sidebar")
let info = document.querySelector(".info")


 hamburger.addEventListener("click",(e)=>{
      document.querySelector(".info").style.display = "none"
      document.querySelector(".sidebar").style.left = "0px"
       
 })

 cross.addEventListener("click" ,(e)=>{
  document.querySelector(".sidebar").style.left = "-400px" 
 })


