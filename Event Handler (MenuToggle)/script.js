const menuBtn = document.querySelector(".menu-btn")
const menu = document.querySelector(".menu")
let displayMenu = false
menu.style.marginLeft = "-310px"

menuBtn.addEventListener("click",()=>{
    if(displayMenu == true){
        // this means menu is visible and we need to hide it
        menu.style.marginLeft = "0px";
        displayMenu = false;
    }
    else{
        menu.style.marginLeft = "-310px";
        displayMenu = true;
    }
})