import React from 'react';
import './header.css';

// const headerElement = React.createElement(
//     'div',
//     { className: 'title' },
//     React.createElement('h1', null, 'Title'),
//     React.createElement('h2', null, 'Subtitle'),
//     React.createElement('h3', null, 'Subsubtitle')
// );

// const headerElement = (
//     <div className="title">
//         <h1>Title</h1>
//         <h2>Subtitle</h2>
//         <h3>Subsubtitle</h3>
//     </div>
// );

// const Header = () => {
//     return (
//         <div className="title">
//             <h1>Title</h1>
//             <h2>Subtitle</h2>
//             <h3>Subsubtitle</h3>
//             <ChildComponent /> {/* Add your component here */}
//         </div>
//     );
// }

/** */

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://vectorwiki.com/images/HPXhG__react.svg" alt="Logo" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search" />
            </div>
            <div className="user-icon">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png" alt="User Icon" />
            </div>
        </div>
    );
}

export default Header;

