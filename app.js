/**
 * 
 * <div id="parent">
 *      <div id="child">
 *         <h1>I'm  H1 tag  </h1>
 *      </div>
 * </div>
 */

const parent = React.createElement(
    "div",
    {
        id: 'parent'
    },
    React.createElement(
        "div",
        {
            id: 'child'
        },
        React.createElement(
            "h1",
            null,
            "I'm  H1 tag"
        )
    )
);

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

/******* */
// const heading = React.createElement(
//     "h1", // tag
//     {
//         id: 'heading',
//         xyz: 'abc'
//     }, // props
//     "Hello World from React!" // children
// );

// console.log(heading); // object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);