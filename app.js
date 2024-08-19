const heading = React.createElement(
    "h1", // tag
    {
        id: 'heading',
        xyz: 'abc'
    }, // props
    "Hello World from React!" // children
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);