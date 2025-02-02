import { useEffect, useState } from 'react';
import { Link } from 'react-router';
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
                <Link to={'/'}>
                    <img className='logo' src={LOGO_URL} alt='logo' />
                </Link>
            </div>
            <div className='navItems'>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/contacts'}>Contact</Link></li>
                    <li><Link to={'/'}>Cart</Link></li>
                    <button className='login'
                        onClick={() => setBtnName(btnName === 'Login' ? 'Logout' : 'Login')}
                    >{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;