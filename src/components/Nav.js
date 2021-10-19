import { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import NetflixLogo from '../images/Netflix-Logo.png';
import '../styles/Nav.css';

const Nav = ({ SignInBtn, NavMediaBar, Profile }) => {
    const navBar = useRef();

    useEffect(() => {
        document.addEventListener('scroll', transparentScroll);
        return () => document.removeEventListener('scroll', transparentScroll);
    });

    function transparentScroll() {
        if (window.scrollY === 0) {
            navBar.current.classList.add('transparent');
        } else if (window.scrollY !== 0) {
            navBar.current.classList.remove('transparent');
        }
    }
    return (
        <nav ref={navBar} className='navbar transparent'>
            <div className='nav-container'>
                <div className='left-align'>
                    <div className='logoContainer'>
                        <Link to='./'><img className='logoImg' src={NetflixLogo} alt='NetflixLogo' /></Link>
                    </div>
                    {NavMediaBar}
                </div>
                {SignInBtn}
                {Profile}
            </div>
        </nav>
    );
}

export default Nav;