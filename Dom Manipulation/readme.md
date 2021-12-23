# Dom Manipulation

### In this repo I have saved almost all the ways I came across for doing dom manipulation

<p>
The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The <strong>DOM represents the document as nodes and objects</strong>; that way, programming languages can interact with the page. And dom manipulation is a technique which is used to do changes to the dom varibales.

</p>

### 1. append()
<p>
In this method we call the body inside a const variable and append different elements to it.


Now since we are calling the body and storing it inside a const variable, we first create a index.html and call the script with the keyword <code><a href="https://www.javatpoint.com/javascript-defer">defer</a></code>.<br/><br/>
Main use of calling defer is that it first parses the html and then scans the JS so that by the time it reaches to JS code we have a body to refer to.
<br/>
<ul>
    <li>If we dont use this defer keyword and call the script inside the head then we cant refer to a body since the body is not initialized yet.
    <li>This method can only be used if we are writing the JS in a different file and calling it inside this file.
</ul>

| append()  | appendchild() |
| ------------- | ------------- |
| It can append everything appendchild can do along with strings  | It can append divs or any other element but not strings  |
| It can append multiple things in a single call  | It can only append one child  |
|   |   |

<br/><p>
Whenever we create an element inside JS we need to fill it with some data, that data can be filled using 2 methods
</p>

| innerText()  | textContent() | innerHTML
| ------------- | ------------- | ------------- |
| For putting the data it is same as textContent  | For putting the data it is same as innerText | This renders the html tags like Strong  |
| If we do console.log of innertext of some element then it shows the text in console just the way it is displayed inside the html page in browser, that is it wont follow the indentation which is used inside .html file  | When we console.log this textContent, it will show the text in content in colsole, just like it was writting in html file, that is it will show the indentation and linebreak and everything.  | This can render all the HTML which no other methods can do that is we can write whole html code inside it.  |
| This is basically how it is shown in source code  | This is basically how it viewed in html page.  | InnerHTML is not safe to use |
|   |   |

<p>
Using inner html is not at all safe, so if we want to write a text in strong, then what we do is, we create an element of strong and change its innertext to whatever we want and append this strong element
check script1 for this.

</p>

<br/>
<br/>
<br/>

## Remove Elements from a DOM

<p>
To remove an element from a DOM, simply write a query selector to fetch that element and write elementName.remove()<br/>
we can also remove a child from a parent element.
Commands for both are shown in script.js
<br/>
</p>
We can do many more operations
<ul>
    <li> getAttributes()
    <li> setAttributes()
    <li> removeAttributes()
    <li> creating custom attributes : Condition for these attributes is, it should start with keyword data
    <li>If custom attributes are more than 1 word then they are automatically stored as camelCase
    <li> we can see classList
    <li> We can add classes to classList using .add
    <li> We can remove classes from classList using .remove
    <li> We can toggle classes from classList using .toggle
    <li> styling using DOM

