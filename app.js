import React from 'react';
import { createRoot } from 'react-dom/client';

/******* */
/** Chapter-4 */
/**
 * Component List
   1. Header
      1. Logo
      2. nav bar
   2. Body
      1. Search
      2. RestaurantContainer
         1. RestaurantCard
   3. Footer
      1. CopyRight
      2. Links
      3. Address
      4. Contact
 */

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://logowik.com/content/uploads/images/free-food-delivery6258.logowik.com.webp' alt='logo' />
            </div>
            <div className='navItems'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
        </div>
    );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);

/******* */
/** Chapter-3 */
// import Header from './components/header/header';

// //  React.createElement ==> ReactElement-JS Object ==> HTMLElement(render)
// // * React Element
// // const heading = React.createElement(
// //     "h1", // tag
// //     {
// //         id: 'heading',
// //         xyz: 'abc'
// //     }, // props
// //     "Hello World from React!" // children
// // );

// // JSX - HTML-like or XML-like syntax
// //  JSX ==> Babel transpiles to React.createElement ==> ReactElement-JS Object ==> HTMLElement(render)
// const jsXHeading = (
//     <h1 id="heading" className="abc" tabIndex={1}>
//         React - element | using JSX!
//     </h1>
// );

// // * React Component
// // * React Functional Component
// // const HeadingComponent = () => {
// //     return <h1 id="heading" className="abc" tabIndex={1}>Hello World from React - using JSX!</h1>;
// // }

// const Title = () => (
//     <h1 id="title">I'm a title</h1>
// );

// // * React Component Composition
// const HeadingComponent = () => (
//     <div id='container'>
//         <Header />
//         {Title()}
//         <Title />
//         <Title></Title>
//         {jsXHeading}
//         <h1 id="heading" className="abc" tabIndex={1}>
//             Hello World from React - using functional component
//         </h1>
//     </div>
// );



// const root = createRoot(document.getElementById("root"));

// // root.render(heading);
// root.render(<HeadingComponent />);

/******* */
/** Chapter-2 */
// /**
//  *
//  * <div id="parent">
//  *      <div id="child">
//  *         <h1>I'm  H1 tag  </h1>
//  *         <h2>I'm  H2 tag  </h2>
//  *      </div>
//  *      <div id="child2">
//  *         <h1>I'm  H1 tag  </h1>
//  *         <h2>I'm  H2 tag  </h2>
//  *      </div>
//  * </div>
//  */

// const parent = React.createElement(
//     "div",
//     {
//         id: 'parent'
//     },
//     [
//         React.createElement(
//             "div",
//             {
//                 id: 'child'
//             },
//             [
//                 React.createElement(
//                     "h1",
//                     {},
//                     "I'm  H1 tag"
//                 ),
//                 React.createElement(
//                     "h2",
//                     {},
//                     "I'm  H2 tag"
//                 )
//             ]
//         ),
//         React.createElement(
//             "div",
//             {
//                 id: 'child2'
//             },
//             [
//                 React.createElement(
//                     "h1",
//                     {},
//                     "I'm  H1 tag"
//                 ),
//                 React.createElement(
//                     "h2",
//                     {},
//                     "I'm  H2 tag"
//                 )
//             ]
//         )
//     ]
// );

// console.log(parent); // object

// const root = createRoot(document.getElementById("root"));

// root.render(parent);

/******* */
/** Chapter-1 */
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