# Chapter-7 | Finding the Path

## useEffect

`useEffect` is a hook in React that allows you to perform side effects in function components. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React class components.

- `useEffect` is called after every render of the component.
- If no dependency array is provided, `useEffect` is called on every render.
- If the dependency array is empty (`[]`), `useEffect` is called on the initial render (just once).
- If the dependency array is not empty, `useEffect` will be called every time the dependency gets updated.

### Basic Usage

```jsx
import React, { useEffect } from 'react';

function ExampleComponent() {
    useEffect(() => {
        // Code to run on component mount

        return () => {
            // Code to run on component unmount
        };
    }, []);

    return <div>Example</div>;
}
```

### Dependencies

The second argument to `useEffect` is an array of dependencies. The effect will only run if one of the dependencies has changed.

```jsx
useEffect(() => {
    // Code to run when `prop` changes
}, [prop]);
```

### Cleanup

To avoid memory leaks, you can return a cleanup function from the effect.

```jsx
useEffect(() => {
    const subscription = someAPI.subscribe();

    return () => {
        subscription.unsubscribe();
    };
}, []);
```

### Example with Dependencies

```jsx
import React, { useState, useEffect } from 'react';

function ExampleComponent({ prop }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Prop or count changed');

        return () => {
            console.log('Cleanup on prop or count change');
        };
    }, [prop, count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
```

## useState

`useState` is a Hook that lets you add React state to function components. It returns an array with two elements: the current state value and a function that lets you update it.

It is used to create local state variables inside functional components. Never initialize state variables inside an if block condition or for loops. Initialize variables at the top of functional components to avoid inconsistencies.

### Basic Usage

```jsx
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
```

### Using Multiple State Variables

```jsx
import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    return (
        <form>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                Age:
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </label>
        </form>
    );
}
```

### Functional Updates

When updating state based on the previous state, you can pass a function to the state setter function.

```jsx
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                Click me
            </button>
        </div>
    );
}
```

### Lazy Initial State

You can also initialize the state lazily by passing a function to `useState`.

```jsx
import React, { useState } from 'react';

function ExpensiveComponent() {
    const [value, setValue] = useState(() => {
        // Expensive computation
        return computeExpensiveValue();
    });

    return <div>{value}</div>;
}

function computeExpensiveValue() {
    // Some expensive computation
    return 42;
}
```
