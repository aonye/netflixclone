import { Link } from "react-router-dom";
import SignInBtn from './Nav_components/SignInBtn';
import SignOutBtn from './Nav_components/SignOutBtn';
import Profile from './Nav_components/Profile';
import NetflixLogo from '../images/Netflix-Logo.png'
import '../styles/Nav.css';

const Nav = (props) => {
    return (
        <nav>
            <div className='logoContainer'>
                <Link to='./'><img className='logoImg' onClick={() => props.setEmail(null)} src={NetflixLogo} alt='NetflixLogo' /></Link>
            </div>
            {props.showSignIn ? <SignInBtn /> : null}
            {props.showProfile ? <Profile setAuthState={props.setAuthState} /> : null}
        </nav>
    );
}

export default Nav;

//<Link to='./hiscores'><img className='hiscores' alt='SignInBtn' /></Link>
