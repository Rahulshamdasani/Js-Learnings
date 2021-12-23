
const body = document.body
const lineBreak = document.createElement("br")
body.append("Hello World",lineBreak,"Bye")

// Console logging to show how the two are different
const divEle = document.querySelector("div")
console.log(divEle.textContent)
console.log(divEle.innerText)



// Creating our own div and making it bold
const divEle2 = document.createElement("div")
divEle2.innerText="<strong> this cannot render html</strong>"
body.append(divEle2)


// innerText cannot render HTML so we can use
const divEle3 = document.createElement("div")
divEle3.innerHTML = "<strong> This is unsafe</strong>"
body.append(divEle3)

// Although this does the work but this should not be done
// Using innerhtml is very unsafe,
// we should do this as shown below
const strongEle = document.createElement("strong")
strongEle.innerText = "This will work"
const divEle4 = document.createElement("div")
divEle4.append(strongEle)
body.append(divEle4)


// Removing elements from dom Uncomment these lines to see how line1 disappers

// divEle.remove()

// body.removeChild(divEle2)


// Getting attributes for elements
const line1Span = document.querySelector("#line1")
console.log("Access ID for line1 so id:",line1Span.getAttribute("id"))