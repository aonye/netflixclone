import { Link } from 'react-router-dom';
import '../../styles/SignInBtn.css';

const SignInBtn = () => {
    return (
        <div className='SIBCont'>
            <Link to='/signin'><button className='SIB'>Sign In</button></Link>
        </div>
    );
}

export default SignInBtn;