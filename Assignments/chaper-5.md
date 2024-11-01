# Chapter 05 | Let's get hooked

## Section 1: Assignment

### Question 1

**Q:** What is the difference between Named Export, Default export and * as export?  
**A:** 
- **Named Export:** Allows you to export multiple values. You can import these values using the same names.
  ```javascript
  // myModule.js
  export const myFunction = () => {};
  export const myVariable = 42;

  // anotherFile.js
  import { myFunction, myVariable } from './myModule';
  ```
- **Default Export:** Allows you to export a single value. You can import this value with any name.
  ```javascript
  // myModule.js
  const myFunction = () => {};
  export default myFunction;

  // anotherFile.js
  import myFunc from './myModule'; // You can use any name for myFunc
  ```
- **`* as` Export:** Allows you to import all named exports from a module as an object.
  ```javascript
  // myModule.js
  export const myFunction = () => {};
  export const myVariable = 42;

  // anotherFile.js
  import * as myModule from './myModule';
  console.log(myModule.myFunction);
  console.log(myModule.myVariable);
  ```

### Question 2

**Q:** What is the importance of config.js file?  
**A:** A `config.js` file is used to store configuration settings for your application. This can include API endpoints, environment variables, and other settings that you might need to change depending on the environment (development, production, etc.). It helps in centralizing the configuration and makes the code more maintainable.
  ```javascript
  // config.js
  export const API_ENDPOINT = 'https://api.example.com';
  export const TIMEOUT = 5000;

  // anotherFile.js
  import { API_ENDPOINT, TIMEOUT } from './config';
  console.log(API_ENDPOINT);
  console.log(TIMEOUT);
  ```

### Question 3

**Q:** What are React Hooks?  
**A:** React Hooks are functions that let you use state and other React features in functional components. They allow you to manage state, perform side effects, and use context without writing class components. Examples include `useState`, `useEffect`, and `useContext`.
  ```javascript
  // Example of useState
  import React, { useState } from 'react';

  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

  // Example of useEffect
  import React, { useEffect } from 'react';

  function Example() {
    useEffect(() => {
      document.title = 'Hello, World!';
    }, []);

    return <div>Hello, World!</div>;
  }
  ```

### Question 4

**Q:** What is the use of useEffect Hook?  
**A:** The `useEffect` Hook lets you perform side effects in functional components. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React class components. You can use it to fetch data, set up subscriptions, and manually change the DOM in React components.
  ```javascript
  import React, { useEffect, useState } from 'react';

  function DataFetcher() {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => setData(data));
    }, []); // Empty array ensures this effect runs only once (like componentDidMount)

    return (
      <div>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
      </div>
    );
  }
  ```

**Q:** Why do we need a useState Hook?  
**A:** The `useState` Hook allows you to add state to functional components. It returns a state variable and a function to update that variable. This is essential for managing dynamic data in your components and making them interactive.


## Section 2: Coding Assignment

### Build a Food Ordering App

- [x] Clean up your code
- [x] Create a Folder Structure for your app
- [x] Make different files for each Component
- [x] Create a config file
- [x] Use all types of import and export
- [x] Create a Search Box in your App
- [x] Use useState to create a variable and bind it to the input box
- [x] Try to make your search bar work
