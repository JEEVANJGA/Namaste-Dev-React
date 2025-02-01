import { useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/constants';

const Header = () => {

    const [btnName, setBtnName] = useState('Login');

    useEffect(() => {
        console.log('Header component mounted');
        return () => {
            console.log('Header component unmounted');
        };
    }, []);
    
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} alt='logo' />
            </div>
            <div className='navItems'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className='login'
                        onClick={() => setBtnName(btnName === 'Login' ? 'Logout' : 'Login')}
                    >{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;