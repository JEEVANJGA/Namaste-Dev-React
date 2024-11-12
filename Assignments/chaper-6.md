# Chapter 06 | Exploring the World

### Question 1

**Q:** What is a Microservice?  
**A:**  
A microservice is an architectural style that structures an application as a collection of small, autonomous services modeled around a business domain. Each microservice is self-contained and implements a single business capability. They communicate with each other through well-defined APIs and are independently deployable. This approach allows for greater flexibility, scalability, and maintainability in software development.

Key characteristics of microservices include:
- **Decentralized Data Management:** Each microservice manages its own database.
- **Independent Deployment:** Microservices can be deployed independently without affecting other services.
- **Technology Diversity:** Different microservices can be built using different programming languages and technologies.
- **Fault Isolation:** Failures in one microservice do not necessarily impact others.
- **Scalability:** Individual microservices can be scaled independently based on demand.

Example:
```plaintext
+----------------+     +----------------+     +----------------+
|  User Service  |     |  Order Service |     |  Payment Service|
+----------------+     +----------------+     +----------------+
```
Each service can be developed, deployed, and scaled independently.

### Question 2

**Q:** What is the difference between Monolith and Microservice?  
**A:**  
The primary difference between monolith and microservice architectures lies in their structure and deployment. A monolith is a single, unified codebase where all components are interconnected and dependent on each other. In contrast, a microservice architecture breaks down the application into smaller, independent services that communicate through APIs. Microservices offer greater flexibility, scalability, and fault isolation compared to monoliths, which can become cumbersome to manage as they grow.

Key differences include:
- **Deployment:** Monoliths are deployed as a single unit, while microservices are deployed independently.
- **Scalability:** Microservices can be scaled independently, whereas monoliths require scaling the entire application.
- **Development:** Microservices allow for parallel development by different teams, while monoliths can lead to bottlenecks.
- **Fault Isolation:** Failures in one microservice do not affect others, unlike in a monolith where a failure can impact the entire application.

### Question 3

**Q:** Why do we need a useEffect Hook?  
**A:**  
The `useEffect` Hook in React allows you to perform side effects in function components. It is used for tasks such as data fetching, setting up subscriptions, and manually changing the DOM. `useEffect` runs after the render and can be configured to run only when certain dependencies change, making it a powerful tool for managing component lifecycle events.

Key points about `useEffect`:
- **Side Effects:** Perform actions like fetching data, updating the DOM, or setting up subscriptions.
- **Dependencies:** Control when the effect runs by specifying dependencies.
- **Cleanup:** Return a function to clean up after the effect, useful for removing subscriptions or timers.

Example:
```javascript
useEffect(() => {
  // Perform side effect
  const fetchData = async () => {
    const result = await fetch('https://api.example.com/data');
    const data = await result.json();
    setData(data);
  };
  fetchData();

  // Cleanup
  return () => {
    // Cleanup code here
  };
}, [dependencies]);
```

### Question 4

**Q:** What is Optional Chaining?  
**A:**  
Optional chaining is a feature in JavaScript that allows you to safely access deeply nested properties of an object without having to check if each reference in the chain is valid. It uses the `?.` operator to short-circuit and return `undefined` if any part of the chain is `null` or `undefined`.

Benefits of optional chaining:
- **Safety:** Prevents runtime errors when accessing nested properties.
- **Simplicity:** Reduces the need for multiple null checks.

Example:
```javascript
const user = { address: { street: '123 Main St' } };
const street = user?.address?.street; // '123 Main St'
const city = user?.address?.city; // undefined
```

### Question 5

**Q:** What is Shimmer UI?  
**A:**  
Shimmer UI is a loading placeholder that mimics the structure of the content that is being loaded. It provides a visual cue to users that content is being fetched and will be displayed soon. This improves the user experience by giving immediate feedback rather than showing a blank screen.

Benefits of Shimmer UI:
- **User Experience:** Keeps users engaged while content is loading.
- **Visual Feedback:** Indicates that data is being fetched.

Example:
```html
<div class="shimmer">
  <div class="shimmer-line"></div>
  <div class="shimmer-line"></div>
  <div class="shimmer-line"></div>
</div>
```

### Question 6

**Q:** What is the difference between JS expression and JS statement?  
**A:**  
A JavaScript expression is any valid unit of code that resolves to a value, such as `2 + 2` or `function() { return 5; }`. A JavaScript statement, on the other hand, performs an action and does not necessarily produce a value, such as `if (true) { console.log('Hello'); }` or `for (let i = 0; i < 5; i++) { console.log(i); }`.

Key differences:
- **Expression:** Produces a value.
- **Statement:** Performs an action.

Example:
```javascript
// Expression
const sum = 2 + 2; // 4

// Statement
if (true) {
  console.log('Hello'); // 'Hello'
}
```

### Question 7

**Q:** What is Conditional Rendering, explain with a code example?  
**A:**  
Conditional rendering in React allows you to render different components or elements based on a condition. This can be achieved using JavaScript conditional operators like `if`, `else`, and ternary operators.

Example:
```javascript
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}
```

### Question 8

**Q:** What is CORS?  
**A:**  
CORS (Cross-Origin Resource Sharing) is a security feature implemented by browsers to restrict web pages from making requests to a different domain than the one that served the web page. It is a way to allow or restrict requested resources on a web server depending on where the HTTP request was initiated.

Key points about CORS:
- **Security:** Prevents unauthorized access to resources.
- **Configuration:** Can be configured on the server to allow specific origins.

Example:
```http
Access-Control-Allow-Origin: https://example.com
```

### Question 9

**Q:** What is async and await?  
**A:**  
`async` and `await` are keywords in JavaScript that simplify working with promises. An `async` function returns a promise, and the `await` keyword can be used inside an `async` function to pause execution until the promise resolves, making asynchronous code look and behave more like synchronous code.

Benefits of async/await:
- **Readability:** Makes asynchronous code easier to read and write.
- **Error Handling:** Simplifies error handling with try/catch blocks.

Example:
```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
```

### Question 10

**Q:** What is the use of `const json = await data.json();` in getRestaurants()?  
**A:**  
The line `const json = await data.json();` is used to parse the response from a fetch request as JSON. The `await` keyword pauses the execution of the `async` function until the promise returned by `data.json()` resolves, allowing you to work with the parsed JSON data directly.

Key points:
- **Parsing:** Converts the response to a JavaScript object.
- **Asynchronous:** Waits for the promise to resolve before proceeding.

Example:
```javascript
async function getRestaurants() {
  const response = await fetch('https://api.example.com/restaurants');
  const json = await response.json();
  console.log(json);
}
```

## Section 2: Coding Assignment

- [x] Play with the useEffect Hook to see when it is called (before or after render)
- [x] Play with dependency array in useEffect Hook
- [x] Play with the developer console by putting a debugger in render and useEffect
- [x] Call an actual API to get data
- [x] Handle Error in your API call
- [x] Build Shimmer UI when data is not loaded
- [x] Render your UI with actual API data
- [x] Make Search functionality work
- [x] Make a Login Logout button which toggles with a state