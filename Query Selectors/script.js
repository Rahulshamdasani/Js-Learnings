// we can select using for fetching with id
const grandParent = document.getElementById("grandParent")
// we can keep it generic but use a #symbol to get it
const grandParentQuery = document.querySelector("#grandparentID")

// Both give the same output
// changeColor(grandParentQuery)
// changeColor(grandParentQuery)


// Get multiple parents and change their color
const parents = document.querySelectorAll(".parent")
//parents.forEach(changeColor)

const parentsByClass = document.getElementsByClassName("parent")
const parentsByClassArray = Array.from(parentsByClass)
// parentsByClassArray.forEach(changeColor)



// fetching children from parents
const children = parents[0].querySelectorAll(".child") // this will go inside first parent and fetch all children with class child
//children.forEach(changeColor) // this will only change color of all children in first row and not all the rows


// we can even select children from .children
const childrenSame = parents[0].children
childrenSameArray = Array.from(childrenSame)
//childrenSameArray.forEach(changeColor)


// going from child to parent
const firstChild = childrenSameArray[0]
const firstParentFromChild = firstChild.closest(".parent")
//changeColor(firstParentFromChild) // This changes the color of first row which is accessed from col

// going to siblings
const secondChild = firstChild.nextElementSibling
changeColor(secondChild) // this changes the color of second col of first row

// we can even go to prev sibling
const firstSiblingFromSecond = secondChild.previousElementSibling
changeColor(firstSiblingFromSecond) // this changes first row first col accessed from second





function changeColor(element){
    element.style.backgroundColor = "grey"
}