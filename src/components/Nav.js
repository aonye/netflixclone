import { Link } from "react-router-dom";
import NetflixLogo from '../images/Netflix-Logo.png'
import '../styles/Nav.css';

const Nav = () => {
    return (
        <nav>
            <div className='logoContainer'>
                <Link to='./'><img className='logoImg' src={NetflixLogo} alt='NetflixLogo' /></Link>
            </div>
            <a href='/login'>Sign In</a>
        </nav>
    );
}

export default Nav;

//<Link to='./hiscores'><img className='hiscores' alt='SignInBtn' /></Link>
