const grandParent = document.querySelector(".grandParent")
const parent = document.querySelector(".Parent")
const child = document.querySelector(".child")

grandParent.addEventListener("click", (ev) => {
    console.log("grandParent")
})

// capture event
parent.addEventListener("click", (ev) => {
    console.log("Parent Capture")
},{capture:true})

child.addEventListener("click", (ev) => {
    console.log("child")
})

// Stop propagation
child.addEventListener("click", (ev) => {
    // ev.stopPropagation();
    console.log("child stopping")
})

// Once event listener
child.addEventListener("click", (ev) => {
    console.log("child once")
},{once:true})


// Timeout and Remove event listener
function rahul(){
    console.log("This is timeout event")
}
parent.addEventListener("click", rahul)
setTimeout(()=>{
    parent.removeEventListener("click",rahul);
},2000)