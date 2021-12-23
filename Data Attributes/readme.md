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
