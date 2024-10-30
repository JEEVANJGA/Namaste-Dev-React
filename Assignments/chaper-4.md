# Chapter 04 - Talk is cheap, show me the code!

## Section 1: Assignment

### Question 1

**Q:** Is JSX mandatory for React?  
**A:** No, JSX is not mandatory for React. It is simply a syntax extension that makes it easier to write React components. You can use plain JavaScript to create components using `React.createElement()`, but JSX provides a more readable, HTML-like syntax.

### Question 2

**Q:** Is ES6 mandatory for React?  
**A:** No, ES6 is not mandatory for React. However, many React features and examples utilize ES6 syntax, like classes and arrow functions, which can improve code readability and structure.

### Question 3

**Q:** `{TitleComponent}` vs `{<TitleComponent />}` vs `{<TitleComponent></TitleComponent>}` in JSX  
**A:**

- **`{TitleComponent}`**: Refers to the component itself, often used when passing it as a prop.
- **`{<TitleComponent />}`**: Renders the component as a self-closing tag.
- **`{<TitleComponent></TitleComponent>}`**: Renders the component with explicit opening and closing tags, allowing for children content inside the component.

**Example:**

```jsx
// Usage examples
const Header = <TitleComponent />; // Renders the component
const ComponentReference = TitleComponent; // Refers to the component itself
const NestedContent = <TitleComponent>Content inside</TitleComponent>; // Allows nested content
```

### Question 4

**Q:** How can I write comments in JSX?
**A:** In JSX, comments are written inside curly braces with JavaScript syntax, like `{/* This is a comment */}`. Outside JSX tags, regular JavaScript comments (`//` or `/* */`) can be used.

**Example:**

```jsx
// Regular JavaScript comment outside JSX
const element = (
  <div>
    {/* JSX Comment */}
    <h1>Hello, world!</h1>
  </div>
);
```

### Question 5

**Q:** What is `<React.Fragment></React.Fragment>` and `<> </>`?

**A:** Both are used to wrap multiple JSX elements without adding extra nodes to the DOM. `<React.Fragment>` is the full syntax, while `<> </>` is the shorthand, providing a cleaner way to group elements without additional HTML tags.

**Example:**

```jsx
// Full React.Fragment syntax
<React.Fragment>
  <h1>Hello</h1>
  <p>Welcome to React</p>
</React.Fragment>

// Shorthand syntax
<>
  <h1>Hello</h1>
  <p>Welcome to React</p>
</>
```

### Question 6

**Q:** What is the Virtual DOM?  
**A:** The Virtual DOM is a lightweight, in-memory representation of the actual DOM. React uses it to efficiently update and render changes by calculating the difference between the current and previous DOM states, reducing direct manipulation of the real DOM.

### Question 7

**Q:** What is Reconciliation in React?  
**A:** Reconciliation is React’s process of updating the Virtual DOM and applying changes to the actual DOM. It compares Virtual DOM snapshots (diffing) and efficiently updates only the changed parts in the real DOM.

### Question 8

**Q:** What is React Fiber?  
**A:** React Fiber is a reimplementation of the React reconciliation algorithm, designed to improve performance, prioritize tasks, and handle complex UI updates more smoothly, especially during animations and user interactions.

### Question 9

**Q:** Why do we need keys in React? When should we use keys?  
**A:** Keys help React identify elements in a list to optimize rendering by tracking item changes, additions, or removals. Use keys when rendering lists or dynamically generated components to ensure React updates only what’s necessary.

### Question 10

**Q:** Can we use index as keys in React?  
**A:** While it’s technically possible, using indexes as keys is discouraged, as it can lead to issues with UI updates and rendering. Instead, use unique identifiers whenever possible to maintain consistent element identity.

### Question 11

**Q:** What are props in React?  
**A:** Props (short for “properties”) are arguments passed to components, allowing data and functions to be shared between components. Props are immutable within the receiving component, supporting a unidirectional data flow.

**Example:**

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Usage
<Welcome name="Alice" />;
```

### Question 12

**Q:** What is a Config-Driven UI?  
**A:** A Config-Driven UI is a UI design where the layout and behavior are controlled through configuration files rather than hardcoding. This approach makes it easier to create flexible, customizable interfaces that can be updated without changing core code.

**Example Config (JSON):**

```json
{
  "title": "Welcome",
  "showImage": true,
  "buttons": ["Save", "Cancel"]
}
```

**Usage in Component:**

```jsx
function ConfigDrivenComponent(config) {
  return (
    <div>
      <h1>{config.title}</h1>
      {config.showImage && <img src="welcome.png" alt="Welcome" />}
      {config.buttons.map((button, index) => (
        <button key={index}>{button}</button>
      ))}
    </div>
  );
}
```

## Section 2: Coding Assignment

### Build a Food Ordering App

- [x] Think of a cool name for your app
- [x] Build an AppLayout
- [x] Build a Header Component with Logo & Nav Items & Cart
- [x] Build a Body Component
- [x] Build RestaurantList Component
- [x] Build RestaurantCard Component
- [x] Use static data initially
- [x] Make your card dynamic (pass in props)
- [x] Props - passing arguments to a function - Use Destructuring & Spread operator
- [x] Render your cards with dynamic data of restaurants
- [x] Use Array.map to render all the restaurants
