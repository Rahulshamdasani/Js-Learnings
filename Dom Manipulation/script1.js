
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

// Changing attributes of above line1
line1Span.setAttribute("title","this is dom title")
console.log("check title for line1 :",line1Span.getAttribute("title"))

// We can even do removeattributes
line1Span.removeAttribute("title")
console.log("check title after removing :",line1Span.getAttribute("title"))


// we can create custom attributes
line1Span.setAttribute("data-rahul","This is first custom attribute")
console.log(line1Span.dataset)
line1Span.setAttribute("data-naveksha","This is second custom attribute")
console.log(line1Span.dataset)

// if custom attributes are more than 1 word then they are automatically stored as camelCase
line1Span.setAttribute("data-naveksha-rahul","This is Longer custom attribute")
console.log("value should be 'This is Longer custom attribute' is it this value:",line1Span.dataset.navekshaRahul)
line1Span.dataset.navekshaRahul ="This is changed to camel case"
console.log("Now changes:",line1Span.dataset.navekshaRahul)

// classList
console.log("Before setting anything",line1Span.classList)
line1Span.classList.add("class1")
line1Span.classList.add("class2")
console.log("After adding 1 and 2",line1Span.classList)
line1Span.classList.remove("class1")
console.log("After removing 1",line1Span.classList)
line1Span.classList.toggle("class1")
console.log("After Toggle 1",line1Span.classList)
line1Span.classList.toggle("class1")
console.log("After Toggle 1",line1Span.classList)


// styling
line1Span.style.color = "red"
line1Span.style.backgroundColor = "grey"