const divs = document.querySelectorAll("div")


// divs.forEach(div=> {
//     div.addEventListener("click",()=>{
//         console.log("div from script 2");
//     })
// })

const newDiv = document.createElement("div")
newDiv.style.height = "200px";
newDiv.style.width = "200px";
newDiv.style.backgroundColor = "purple";
document.body.append(newDiv)


// comment out the above code for adding the event listener
// and write this

document.addEventListener("click",(e)=>{
    if(e.target.matches("div")){
        console.log("div")
    }
})