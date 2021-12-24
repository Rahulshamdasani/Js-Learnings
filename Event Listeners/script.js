const grandParent = document.querySelector(".grandParent")
const parent = document.querySelector(".Parent")
const child = document.querySelector(".child")

grandParent.addEventListener("click", (ev) => {
    console.log("grandParent")
})

parent.addEventListener("click", (ev) => {
    console.log("Parent")
})

child.addEventListener("click", (ev) => {
    console.log("child")
})
