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

### 3. We can add 2 event listeners on capture and bubble
<p>
    We can add 2 event listeners for capturing and bubbling for all the elements so it will give the output as follows
    <pre>
        grandparent Capture
        parent capture
        child capture
        child bubble
        parent bubble
        grandparent bubble
    </pre>
</p>

### 4. Stop Propogation
<p>
    As we saw that nomatter where we invoke it it propogates all the way down and then up but we can stop the propogation of the event using the below code
    <br/>
    <br/>
    suppose our output was
    <br/>
    <pre>
        grandparent Capture
        parent capture
        child capture
        child bubble
        parent bubble
        grandparent bubble
    </pre>
    <br/>
    After adding the below code the output will be
    <code><pre>
        const parent = document.querySelector(".parent")
        parent.addEventListener(click, (ev) => {
            ev.stopPropagation()
            console.log("Parent capture)
        }, 
            { capture : true }
        )
    </pre></code>
    <pre>
        grandparent Capture
        parent capture
    </pre>
    <br/>
    This is the output since we stopped the porpagation of event after the parent capture event listener.
</p>


### 5. Once event listener
<p>
    We can add an event listener and then pass a property of once, so that it is invoked only once the way to do that is :
    <code><pre>
        const parent = document.querySelector(".parent")
        parent.addEventListener(click, (ev) => {
            ev.stopPropagation()
            console.log("Parent capture)
        }, 
            { once : true }
        )
    </pre></code>
</p>

### 6. Remove event listener
<p>
    We can remove an event listener after a certain time or on some action using the following code
    <code><pre>
        function rahul(){
            console.log("rahul");
        }
        const parent = document.querySelector(".parent")
        parent.addEventListener(click, rahul)
        setTimeout(()=>{
            parent.removeEventListener(click,rahul);
        },2000)
    </pre></code>
    That timeout code is set to execute after 2000 milliseconds so it executes after 2 secs and remove the event listener for parent which is on click and invokes function rahul
</p>


### 6. Dynamic listeners (Inside file script2.js)
<p>
    Suppose we want to add an event listeners to all the div elements of the page, we imported the script in which we fetch all the divs and we loop through all divs and add an event listener to them.
    <code><pre>
        const divs = document.querySelectorAll("div")
        divs.forEach(div=> {
            div.addEventListener("click",()=>{
                console.log("div from script 2");
            })
        })
    </pre></code>
    It gives output of div whenever we click on any div, it also follows all the bubbling and capturing protocols, i.e. if we click the child div then div is printed out thrice.... once for child once for parent and one for grandparent.
    <br/>
    <br/>
    Now if we add a new div using dom manipulation then the above code will not work on it, since it fetches the divs before the new div is declared
    <code><pre>
        const newDiv = document.createElement("div")
        newDiv.style.height = "200px";
        newDiv.style.width = "200px";
        newDiv.style.backgroundColor = "purple";
        document.body.append(newDiv)
    </pre></code>
    If we click on this div then it doesnot console logs the div. There is a work around for this case, when we know we have to give some output on all the divs
    <br/>
    <br/>
    <br/>
    <ul>
        <li> We know that all the divs are on the document
        <li> so we can add an event listener on the document itself
        <li><code><pre>
    document.addEventListener("click",()=>{
    console.log("div")
    })
            </pre></code>
        <li> But it doesnt work as we want, it gives output for all the regions of document irrespective of whether it is a div or not so we can do
        <li><code><pre>
    document.addEventListener("click",(e)=>{
    if(e.target.matches("div")){
        console.log("div")
        }
    })
            </pre></code>
</p>

<a href="https://www.youtube.com/watch?v=XF1_MlZ5l6M">Reference Video</a>