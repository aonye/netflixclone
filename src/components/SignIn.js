import { Link } from 'react-router-dom';
import '../styles/SignIn.css';

const SignIn = (props) => {

    return (
        <div>
            <div className='signin'>
                <form>
                    Sign In
                    <input placeholder='Email or Phone Number'></input>
                    <input type='password' minLength='8' placeholder='Password'></input>
                    <input type='submit' value='Sign In'></input>
                </form>
                <div>
                    New to Netflix? <Link to='/signup'>Sign up now</Link>
                </div>
            </div >
        </div>
    )
}

export default SignIn;