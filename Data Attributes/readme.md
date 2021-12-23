## Data Attributes

<strong>Why to use this</strong> 
<ul>
    <li> It is a way of storing some extra data inside html elements
    <li> It always starts with keyword <code>data-</code>
    <li> JS makes it very simple to access the properties of a data-element
        <ol>
            <li> Simply select the element using query selector <code> const dataEle = document.querySelector("div")</code>
            <li> Suppose this dataEle has a property of <code>data-rahul</code>
            <li> we can access it from a JS file using <code>dataEle.dataset.rahul</code>
        </ol>
</ul>
<br/>
<br/>
<br/>

### Now we will see how to use these data attributes to manipulate the data on the viewport
<p>
    suppose we want to change the data of li on click
    then we can store the new data and whether to change it or not inside its data-elements
</p>





### Some important Points
<ul>
    <li> When ever we use <code>querySelectorAll</code>, it returns a Node List.
    <li> To access it we first need to convert it to normal list array using <code>Array.from(NodeArrayName)</code>
    <li> Then we iterate over all elements using for each loop
    <li> Inside the for each we can add an event listener
    <li> Event listener is a higher order function so we add a different function as in how to change the value