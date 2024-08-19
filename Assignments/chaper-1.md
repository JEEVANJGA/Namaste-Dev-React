# Chapter 01 - Inception


## Section 1: Theory | Questions and Answers

### Question 1
**Q:** What is Emmet?  
**A:** Emmet is a plugin for many popular text editors which greatly improves HTML and CSS workflow. It allows you to write large amounts of code, particularly HTML, extremely quickly and efficiently by using abbreviations and shortcuts.

#### Key Features of Emmet:
- **Abbreviation Expansion**: Quickly expand simple abbreviations into complex HTML structures.
- **CSS Property Autocompletion**: Autocomplete CSS properties and values.
- **HTML Tag Wrapping**: Easily wrap selected text with HTML tags.
- **Dynamic Snippets**: Create dynamic snippets with custom variables.
- **Multi-Caret Editing**: Simultaneously edit multiple lines of code.

#### Example:
```html
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>

Emmet is available for many popular text editors, including Visual Studio Code, Sublime Text, Atom, and more. It significantly speeds up the coding process, making it a valuable tool for web developers.
```



### Question 2
**Q:** Difference between a Library and Framework?  
**A:** A library is a collection of pre-written code that developers can use to optimize tasks. It offers specific functionality that can be called upon when needed. A framework, on the other hand, provides a structure and set of rules for building applications. It dictates the architecture and flow of the application, and the developer's code is integrated into this structure.

### Question 3
**Q:** What is CDN? Why do we use it?  
**A:** A Content Delivery Network (CDN) is a network of servers distributed across various locations to deliver content to users more efficiently. CDNs are used to reduce latency, improve load times, and enhance the overall performance of websites by serving content from the server closest to the user.

### Question 4
**Q:** Why is React known as React?  
**A:** React is known as React because it is designed to react to changes in data. It efficiently updates and renders components when the data changes, providing a responsive and dynamic user interface.

### Question 5
**Q:** What is crossorigin in script tag?  
**A:** The `crossorigin` attribute in a script tag is used to handle the CORS (Cross-Origin Resource Sharing) requests for the script. It allows the script to be fetched from a different origin while ensuring that the correct CORS headers are present. This is useful for loading scripts from CDNs or other external sources.

### Question 6
**Q:** What is the difference between React and ReactDOM?  
**A:** React is a JavaScript library for building user interfaces, primarily focusing on the view layer. ReactDOM, on the other hand, is a package that provides DOM-specific methods to manage the DOM elements. ReactDOM is used to render React components to the DOM and manage their lifecycle.

### Question 7
**Q:** What is the difference between react.development.js and react.production.js files via CDN?  
**A:** The `react.development.js` file is the development version of React, which includes helpful warnings, error messages, and debugging tools. It is not optimized for performance. The `react.production.js` file is the production version, which is optimized for performance and minified to reduce file size. It does not include the extra warnings and debugging tools.

### Question 8
**Q:** What is async and defer?  
**A:** The `async` and `defer` attributes are used in script tags to control the loading and execution of external scripts. 
- `async`: The script is downloaded asynchronously and executed as soon as it is available, without blocking the HTML parsing.
- `defer`: The script is downloaded asynchronously but executed only after the HTML parsing is complete. This ensures that the script does not block the HTML parsing and is executed in the order they appear in the document.
- 


## Section 2: Coding Tasks

- [X] Task 1: Set up all the tools on your laptop
  - [X] Install VS Code
  - [X] Install Chrome
  - [X] Install Chrome Extensions

- [X] Task 2: Create a new Git repo

- [X] Task 3: Build your first Hello World program
  - [X] Using just HTML
  - [X] Using JS to manipulate the DOM
  - [X] Using React
    - [X] Use CDN Links
    - [X] Create an Element
    - [X] Create nested React Elements
    - [X] Use root.render

- [X] Task 4: Push code to GitHub (Theory as well as code)

- [X] Task 5: Learn about Arrow Functions before the next class.
  - [X]  Arrow Functions

    **Q:** What is an Arrow Function in JavaScript?  
    **A:** An Arrow Function in JavaScript is a concise way to write function expressions. Introduced in ES6, arrow functions provide a shorter syntax compared to traditional function expressions and do not have their own `this` context.

    #### Example:
    ```javascript
    // Traditional function expression
    var add = function(a, b) {
    return a + b;
    };

    // Arrow function expression
    var add = (a, b) => a + b;

    Arrow functions are commonly used for simple operations and callbacks due to their concise syntax. 

    const numbers = [1, 2, 3, 4, 5];

    // Using arrow function with map
    const squares = numbers.map(x => x * x);

    console.log(squares); // Output: [1, 4, 9, 16, 25]
    ```

## Section 3 : References:
- https://beta.reactjs.org/apis/react/createElement
- https://www.youtube.com/watch?v=IrHmpdORLu8