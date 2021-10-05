import { Link } from "react-router-dom";
import SignUpBtn from './Nav_components/SignUpBtn';
import NetflixLogo from '../images/Netflix-Logo.png'
import '../styles/Nav.css';

const Nav = (props) => {
    return (
        <nav>
            <div className='logoContainer'>
                <Link to='./'><img className='logoImg' onClick={() => props.setEmail(null)} src={NetflixLogo} alt='NetflixLogo' /></Link>
            </div>
            {props.showSignIn ? <SignUpBtn /> : null}
        </nav>
    );
}

export default Nav;

//<Link to='./hiscores'><img className='hiscores' alt='SignInBtn' /></Link>
