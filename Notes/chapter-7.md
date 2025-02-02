# Chapter-7 | Finding the Path

## useEffect

`useEffect` is a hook in React that allows you to perform side effects in function components. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React class components.

- `useEffect` is called after every render of the component.
- If no dependency array is provided, `useEffect` is called on every render.
- If the dependency array is empty (`[]`), `useEffect` is called on the initial render (just once).
- If the dependency array is not empty, `useEffect` will be called every time the dependency gets updated.

### Basic Usage

```jsx
import React, { useEffect } from "react";

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
import React, { useState, useEffect } from "react";

function ExampleComponent({ prop }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Prop or count changed");

    return () => {
      console.log("Cleanup on prop or count change");
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
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### Using Multiple State Variables

```jsx
import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

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
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### Lazy Initial State

You can also initialize the state lazily by passing a function to `useState`.

```jsx
import React, { useState } from "react";

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

## React Router

- Previously known as React Router DOM.
- Starting from version 7, "React Router DOM" has been integrated into "React Router".
- `npm i react-router`.

### Key Features in React Router v7

- Simplified API with nested routes and layouts.
- Data APIs for `loader`, `action`, and `errorElement`.
- Enhanced support for lazy loading components.
- Improved performance with dynamic route matching.
- Built-in `<Routes>` replaces `<Switch>` from previous versions.

### Basic Example

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Nested Routes Example

```jsx
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function Profile() {
  return <h3>Profile Section</h3>;
}

function Settings() {
  return <h3>Settings Section</h3>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

### Using createBrowserRouter

In React Router v7, you can use `createBrowserRouter` to define your routes and `RouterProvider` to provide the router to your application.

```jsx
import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: "/",
                element: <>landing page</>,

            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/settings",
                element: <Settings />,
            },
        ],
        
        errorElement: <> Error Fallback page</>
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
```

In this example, `Dashboard` is the parent component with nested routes for `Profile` and `Settings`. The `RouterProvider` component is used to pass the router configuration to your application.

#### Example Components

Here are the simple React components for `Dashboard`, `Profile`, and `Settings`:

```jsx
// Dashboard.jsx
import React from "react";
import { Outlet, Link } from "react-router";

export default function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
            <nav>
                <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
            </nav>
            <Outlet />
        </div>
    );
}
```

```jsx
// Profile.jsx
import React from "react";

export default function Profile() {
    return <h3>Profile Section</h3>;
}
```

```jsx
// Settings.jsx
import React from "react";

export default function Settings() {
    return <h3>Settings Section</h3>;
}
```

### Notes

- `<Routes>` replaces `<Switch>` for route matching.
- The element prop is used instead of component to render components.
- Nested routes are handled with the `<Outlet>` component.
- Use Link or NavLink for client-side navigation.
- New data APIs like loader and action are available for advanced routing.

### Notes - 2

- 2 types of routing in web apps
    1. Client Side Routing
        - Client Side Routing is handled by the browser using JavaScript. It allows for faster navigation and a smoother user experience as it doesn't require a full page reload. React Router is a popular library for implementing client-side routing in React applications.
    2. Server Side Routing
        - Server Side Routing is handled by the server. Each navigation request is sent to the server, which responds with a new HTML page. This approach is more traditional and can be beneficial for SEO and initial load performance.
