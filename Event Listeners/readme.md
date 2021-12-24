## Event Listeners

 Event Listeners are javascript's ways of doing an action in response to users input to the system.
<ul>
 There are a lot of event listeners
    <li> click
    <li> mousedown
    <li> mouseover
    <li> mouseout
    <li> resize and some other
 </ul>

### Basics 
<p>
    Event listener can be applied to any html element like div, button etc, whenever we are interacting we need to import the script file and its important to use keywork <strong>defer</strong> so that it can be bounded to the elements properly.<br/>
    To bind an event listener to any element, we first need to fetch the element inside the script file using querySelector and then we need to bind it with the event listener.<br/>
    Event listener takes two arguments,
    <ol>
        <li> When will it invoke like click, mouseover, mousedown etc
        <li> The function that it needs to perform whenever it is invoked
    </ol>
    <code><pre>
        const parent = document.querySelector(".parent")
        parent.addEventListener(click, (ev) => {
            ev.target.style.backgroundColor ="red"; 
        })
    </pre></code>
<p>

### Whenever we interact with any event listener they work in two phenomina
<p>
    Suppose we have three boxes, which are inside one another, outermost box is grandparent, then parent and innermost is the child box. In this scenario clearly all the three boxes have some common region, this is when the concept of bubbling and capturing
</p>

### 1. Bubbling
<p>
    In the above scenario whenever we click the child the effect is propogated to its parents and grandparents by default this is called bubbling.<br/>
    So whenever we click the child, the child event listener is invoked, but the area of child is also the area of parent, so parent is invoked and that same area also belongs to the grandparent so it is also invoked<br/>
    <h4>We don't need any extra code to make it a bubbling event, by default all the event listeners are in bubble phase</h4>, i.e. it goes from child all the way to grandparent
    <br/>
    <h3> Remember this as : It invokes the event listener whenever we exit an element i.e. when we see "/div" or "/element" </h3>
    <br/>
    <br/>
    Suppose inside the event listener we only add a single line which console.log() which says grandparent / parent / child based on where it is invoked.<br/>
    if we keep the default code and just click the child the child listener invoked, followed by parent and grandparent so the output will be
    <pre>
        child
        parent
        grandparent
    </pre>
<p>

### 2. Capturing
<p>
    Capturing is opposite of bubbling, i.e. it goes from outermost element to innermost or it can be said that <h4>It invokes the event listener whenever the element starts i.e. div,h1 starts </h4>
    <br/>
    By default the event listener is a bubble but if we want to make it a capturing event, we want to pass in some parameters as shown
    <code><pre>
        const parent = document.querySelector(".parent")
        parent.addEventListener(click, (ev) => {
            ev.target.style.backgroundColor ="red"; 
        }, 
            { capture : true }
        )
    </pre></code>
    <br/>
    <br/>
    Now suppose we change the parent listener as shown above and the child and grandparent is as it is, then the output will be something like
    <pre>
        parent
        child
        grandparent
    </pre> 
    <br/>
    since out parser enters the grandparent, but grandparent is not invoked since by default it is on bubble mode, then it enters parent which is on capture, so it invokes parent listener and parent is output then it goes to child which is on bubble mode so nothing comes as output, but then child ends so output is child, then parent ends, but it is in capture mode so no output then grandparent ends so it outputs grandparent since it was on bubble mode.

</p>