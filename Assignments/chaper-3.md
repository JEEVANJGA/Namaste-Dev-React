# Chapter 03 - Laying the Foundation

## Section 1: Theory | Questions and Answers

### Question 1

**Q:** What is JSX?  
**A:** JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It is commonly used in React to define the structure and appearance of components.

#### Benefits of JSX:

- **Familiar Syntax**: JSX resembles HTML, making it easier for developers to understand and write code.
- **Component Reusability**: JSX allows you to create reusable components, making it easier to build complex user interfaces.
- **Static Type Checking**: JSX can be statically analyzed by tools like TypeScript and Babel, providing type checking and error detection.

#### Example:

```jsx
// JSX code
const element = <h1>Hello, world!</h1>;

// Transpiled JavaScript code
const element = React.createElement("h1", null, "Hello, world!");
```

JSX is a powerful tool that simplifies the process of building user interfaces in React, providing a more intuitive and expressive way to define components.

### Question 2

**Q:** What is the difference between React.createElement and JSX?  
**A:** React.createElement is a method provided by React that allows you to create React elements programmatically. JSX, on the other hand, is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. JSX is often preferred by developers as it provides a more intuitive and readable way to define the structure and appearance of components.

### Question 3

**Q:** What are the benefits of using JSX?  
**A:** There are several benefits of using JSX in React:

- **Familiar Syntax**: JSX resembles HTML, making it easier for developers to understand and write code.
- **Component Reusability**: JSX allows you to create reusable components, making it easier to build complex user interfaces.
- **Static Type Checking**: JSX can be statically analyzed by tools like TypeScript and Babel, providing type checking and error detection.

## Section 1: Theory | Questions and Answers

### Question 1

**Q:** What is JSX?  
**A:** JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It is commonly used in React to define the structure and appearance of components.

#### Benefits of JSX:

- **Familiar Syntax**: JSX resembles HTML, making it easier for developers to understand and write code.
- **Component Reusability**: JSX allows you to create reusable components, making it easier to build complex user interfaces.
- **Static Type Checking**: JSX can be statically analyzed by tools like TypeScript and Babel, providing type checking and error detection.

#### Example:

```jsx
// JSX code
const element = <h1>Hello, world!</h1>;

// Transpiled JavaScript code
const element = React.createElement("h1", null, "Hello, world!");
```

JSX is a powerful tool that simplifies the process of building user interfaces in React, providing a more intuitive and expressive way to define components.

### Question 2

**Q:** What is the difference between React.createElement and JSX?  
**A:** React.createElement is a method provided by React that allows you to create React elements programmatically. JSX, on the other hand, is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. JSX is often preferred by developers as it provides a more intuitive and readable way to define the structure and appearance of components.

#### Example:

```jsx
// Using React.createElement
const element = React.createElement("h1", null, "Hello, world!");

// Using JSX
const element = <h1>Hello, world!</h1>;
```

When using React.createElement, you need to pass the element type, props, and children as arguments. JSX simplifies this process by allowing you to write HTML-like code directly in your JavaScript files, making it easier to understand and maintain your code.

### Question 3

**Q:** What are the benefits of using JSX?  
**A:** There are several benefits of using JSX in React:

- **Familiar Syntax**: JSX resembles HTML, making it easier for developers to understand and write code.
- **Component Reusability**: JSX allows you to create reusable components, making it easier to build complex user interfaces.
- **Static Type Checking**: JSX can be statically analyzed by tools like TypeScript and Babel, providing type checking and error detection.

#### Example:

```jsx
// JSX code
const element = <h1>Hello, world!</h1>;

// Transpiled JavaScript code
const element = React.createElement("h1", null, "Hello, world!");
```

Using JSX in React provides a more intuitive and expressive way to define components, while still leveraging the power of JavaScript. It simplifies the process of building user interfaces and promotes code reusability and maintainability.

### Question 4

**Q:** What happens behind the scenes when JSX is used in React?  
**A:** When JSX is used in React, it is transpiled into regular JavaScript code using tools like Babel. The transpiled code creates React elements using the `React.createElement` method, which are then rendered to the DOM.

#### Example:

```jsx
// JSX code
const element = <h1>Hello, world!</h1>;

// Transpiled JavaScript code
const element = React.createElement("h1", null, "Hello, world!");
```

When JSX is used, it provides a more intuitive and expressive way to define components in React, while still being able to leverage the power of JavaScript.

### Question 5

**Q:** What is the role of Babel and Parcel in JSX?  
**A:** Babel is a JavaScript compiler that is used to transpile JSX code into regular JavaScript code that can be understood by browsers. Parcel is a bundler that helps in packaging and optimizing the JavaScript code, including the transpiled JSX code, for deployment.

#### Example:

```jsx
// JSX code
const element = <h1>Hello, world!</h1>;

// Transpiled JavaScript code
const element = React.createElement("h1", null, "Hello, world!");
```

Babel and Parcel play a crucial role in the development and deployment of JSX code in React applications, ensuring compatibility and performance optimization.

### Question 6

**Q:** What are components in React?  
**A:** Components are the building blocks of a React application. They are reusable and independent units of code that encapsulate the logic and UI of a specific part of the user interface. Components can be either class components or functional components.

#### Example:

```jsx
// Class component
class Button extends React.Component {
    render() {
        return <button>{this.props.label}</button>;
    }
}

// Functional component
const Card = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
};
```

Components allow for modular and reusable code, making it easier to manage and maintain complex user interfaces in React applications.


### Question 7

**Q:** What are functional components in React?  
**A:** Functional components, also known as stateless components, are a type of React component that are defined as JavaScript functions. They receive props as input and return JSX elements as output. Functional components are simpler and easier to test compared to class components.

#### Example:

```jsx
// Functional component
const Greeting = (props) => {
    return <h1>Hello, {props.name}!</h1>;
};

// Usage
<Greeting name="John" />
```

Functional components are widely used in React applications due to their simplicity and reusability.

### Question 8

**Q:** What is component composition in React?  
**A:** Component composition in React refers to the practice of combining multiple components together to create more complex user interfaces. This allows for reusability and modularity in building UIs, as smaller components can be composed together to form larger components.

#### Example:

```jsx
// Parent component
const App = () => {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
};

// Child components
const Header = () => {
    return <h1>This is the header</h1>;
};

const MainContent = () => {
    return <p>This is the main content</p>;
};

const Footer = () => {
    return <footer>This is the footer</footer>;
};
```

Component composition allows for better organization and maintainability of code, as well as promoting the concept of separation of concerns in building React applications.


### Question 9

**Q:** What is the difference between `{TitleComponent}`, `{<TitleComponent/>}`, and `{<TitleComponent></TitleComponent>}` in JSX?  
**A:** In JSX, `{TitleComponent}`, `{<TitleComponent/>}`, and `{<TitleComponent></TitleComponent>}` are different ways of rendering a React component.

- `{TitleComponent}`: This syntax is used to render a component without passing any props. It is equivalent to calling the component as a function and returning its result.

- `{<TitleComponent/>}`: This syntax is used to render a component as a self-closing tag. It is equivalent to calling the component as a function and returning its result.

- `{<TitleComponent></TitleComponent>}`: This syntax is used to render a component as an opening and closing tag. It is equivalent to calling the component as a function and returning its result.

In general, the choice between these syntaxes depends on the specific use case and personal preference. The self-closing tag syntax (`{<TitleComponent/>}`) is commonly used when the component does not have any children or props to pass. The opening and closing tag syntax (`{<TitleComponent></TitleComponent>}`) is used when the component has children or props to pass. The shorthand syntax (`{TitleComponent}`) is used when the component does not have any children or props to pass and is preferred for simplicity and brevity.

#### Example:

```jsx
// TitleComponent.js
const TitleComponent = () => {
    return <h1>Title</h1>;
};

// Usage
const App = () => {
    return (
        <div>
            {TitleComponent} {/* Renders the component without passing any props */}
            {<TitleComponent/>} {/* Renders the component as a self-closing tag */}
            {<TitleComponent></TitleComponent>} {/* Renders the component as an opening and closing tag */}
        </div>
    );
};
```



## Section 2: Coding Tasks

Coding Assignment:
- [x] Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
    - [x] Create the same element using JSX
    - [x] Create a functional component of the same with JSX
    - [x] Pass attributes into the tag in JSX
    - [x] Composition of Component (Add a component inside another)
    - [x] {TitleComponent} vs {`<TitleComponent/>`} vs {`<TitleComponent></TitleComponent>`} in JSX
- [x] Create a Header Component from scratch using Functional Components with JSX
    - [x] Add a Logo on left
    - [x] Add a search bar in middle
    - [x] Add User icon on right
    - [x] Add CSS to make it look nice


## Section 3: References

- [Babel](https://babeljs.io/)
- [Attribute Type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type)
- [JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Babel Playground](https://babeljs.io/repl#)
- [React without JSX](https://reactjs.org/docs/react-without-jsx.html)






