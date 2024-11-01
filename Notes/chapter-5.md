# Chapter-5 | Let's get hooked

## Best Coding Practices

- Create a proper file directory structure, even though there is no standard direction provided by the React library.
- Place components separately in individual files and not everything in a single file.

## Two Types of Export/Import

### Default Export/Import

```js
export default Component;

import Component from "file-path";
```

### Named Export/Import

```js
export const Component;

import { Component } from "file-path";
```

Use Named Export/Import when multiple components need to be exported.

## React Hooks

React hooks are utility JS functions that allow you to use state and other React features in functional components.

- **useState()**: A hook that lets you add state variables to functional components.
    - **Usage**: `const [state, setState] = useState(initialState);`
    - **Behavior**: Whenever a state variable gets updated, the UI gets re-rendered for that component.
    - **Reference**: [React useState Hook](https://reactjs.org/docs/hooks-state.html)

- **useEffect()**: A hook that lets you perform side effects in functional components.
    - **Usage**: `useEffect(() => { /* side effect code */ }, [dependencies]);`
    - **Behavior**: Runs after the first render and after every update, depending on the dependencies array.
    - **Reference**: [React useEffect Hook](https://reactjs.org/docs/hooks-effect.html)

## Reconciliation Algorithm / React Fiber

React Fiber is the new reconciliation algorithm in React 16 and above. It is a complete rewrite of the React core algorithm, aimed at improving its ability to handle asynchronous rendering and to make the rendering process more efficient.

- **Virtual DOM**: A lightweight representation of the actual DOM. React uses the virtual DOM to optimize updates and rendering.
    - **Behavior**: When the state of an object changes, React updates the virtual DOM first, then it compares the virtual DOM with a snapshot of the previous virtual DOM (a process called "diffing"). Finally, it updates the actual DOM with only the changes.
    - **Reference**: [React Virtual DOM](https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom)

### Additional References:
- [React Hooks Overview](https://reactjs.org/docs/hooks-overview.html)
- [React Fiber Architecture](https://reactjs.org/docs/faq-internals.html#what-is-react-fiber)
- [React Reconciliation](https://reactjs.org/docs/reconciliation.html)
- [React Official Documentation](https://reactjs.org/docs/getting-started.html)
- [React Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
- [React Context API](https://reactjs.org/docs/context.html)
- [React Performance Optimization](https://reactjs.org/docs/optimizing-performance.html)
- [React Testing](https://reactjs.org/docs/testing.html)
- [React Router](https://reactrouter.com/)
- [React Redux](https://react-redux.js.org/)
- [React TypeScript](https://react-typescript-cheatsheet.netlify.app/)

