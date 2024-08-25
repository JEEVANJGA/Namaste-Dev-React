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
                <img src="logo.png" alt="Logo" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search" />
            </div>
            <div className="user-icon">
                <img src="user-icon.png" alt="User Icon" />
            </div>
        </div>
    );
}

export default Header;

// .header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 10px;
//     background-color: #f2f2f2;
// }

// .logo img {
//     width: 50px;
//     height: 50px;
// }

// .search-bar input {
//     padding: 5px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
// }

// .user-icon img {
//     width: 30px;
//     height: 30px;
// }