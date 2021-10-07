import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignIn.css';

const SignIn = (props) => {
    const { signInUser } = props;
    const email = useRef();
    const password = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        signInUser(email.current.value, password.current.value);
    }

    return (
        <div>
            <div className='signin'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    Sign In
                    <input ref={email} placeholder='Email'></input>
                    <input ref={password} type='password' minLength='6' placeholder='Password'></input>
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