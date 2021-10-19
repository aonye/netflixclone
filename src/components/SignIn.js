import { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignIn.css';

const SignIn = (props) => {
    const { signInUser, signInMsg } = props;
    const email = useRef();
    const password = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        signInUser(email.current.value, password.current.value);
    }

    return (
        <div className='signIn'>
            <div className='signIn-overlay'>
                <div className='signIn-container'>
                    <h1 id='signIn-title'>Sign In</h1>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        {signInMsg}
                        <input ref={email} placeholder='Email' required></input>
                        <input ref={password} type='password' minLength='6' placeholder='Password' required></input>
                        <input id='signIn-submit' type='submit' value='Sign In'></input>
                    </form>
                    <h2>
                        New to Netflix? <Link to='/signup'>Sign up now</Link>
                    </h2>
                    <h3>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </h3>
                </div>
            </div >
        </div>
    )
}

export default SignIn;