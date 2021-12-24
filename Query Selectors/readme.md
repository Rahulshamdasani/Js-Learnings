## Query Selectors

We can use css selectors inside JS to fetch the elements which can be used for DOM manipulation or any other manipulation
<br/>
<br/>

<ul>
    <li> 
        <h3> 
            <code>document.getElementById(grandParent)</code> 
        </h3>
        <p> 
            This can be used when we have a grandParent id and we need to fetch that inside the JS and do dom manipulation
        </p>
    </li>
    <li> 
        <h3> 
            <code>document.querySelector("#grandParent)</code>
        </h3>
        <p> 
            Although to make it more generic we can use our generic queryselector and pass the id but starting with "#" it does the exact same thing
        </p>
    </li>
    <li> 
        <h3> 
            <code>const parentsByClass = document.getElementsByClassName("parent")</code>
        </h3>
        <p>
            We can get all elements having the className passed in double quotes, although this method returns a Node array so we need to get the array from <code>Array.from(returnedThing)</code>
        </p>
    </li>
    <li> 
        <h3> 
            <code>const parents = document.querySelectorAll(".parent")</code>
        </h3>
        <p>
            Alternatively to keep it generic we can pass it in a query selector with a dot in front, this can fetch all the elements. This is better way as it returns a normal array and we dont need to do Array.from to apply for each operator on these.</p>
    </li>
    <li> 
        <h4> Searching inside a fetched element </h3>
        <p>
            Normally while writing a query selector we write document.querySelector but it is not always necessary to write it that way, once we have fetched something from document and suppose we stored it inside a variable parent, then we can do <code>parent.querySelector("something")</code>, this will go inside parent and fetch the element passed as argument.
        </p>
    </li>
    <li> 
        <h3> To go from parent to child
            <code>parent.children</code>
        </h3>
        <p>
            parent is a variable and .children is a JS method, what it does is, it goes in the parent and returns a Node list of all the elements present inside the parent.
        </p>    
    </li>
    <li> 
        <h3> To go from child to parent 
            <code>child.closest(".parentClassName")</code>
        </h3>
        <p>
            When we have children stored in a variable and we need to go to its parent we use the JS method .closest and it takes an argument which is the class of parent, so it goes to the closes outer element which has a matching className
        </p>
    </li>
    <li> 
        <h3> To go from an element to sibling we can use: 
            <code>child.nextElementSibling</code>
        </h3>
        <p>
            In this the child is a variable and nextElementSibling is the JS default method which is used to access next sibling. It returns only one next sibling and not a list.
        </p>
    </li>
    <li> 
        <h3> To go from sibling to prev sibling we can do
            <code> child.previousElementSibling </code>
        </h3>
        <p>
            We can go from current element to its prev sibling element, it returns only a single element
        </p>
    </li>
    <a href="https://www.youtube.com/watch?v=v7rSSy8CaYE">Reference Video</a>