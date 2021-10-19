import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { customMsg, checkPwMatch } from '../helper/helper';
import AuthMsg from './AuthMsg';
import '../styles/SignUp.css';

const SignUp = (props) => {
    const { createUser, signUpMsg, setSUMsg, email } = props;
    const name = useRef();
    const password = useRef();
    const confirmpw = useRef();
    const mail = useRef();

    function handleSubmit() { //manual field check, since <form> does not work with fb auth
        if (name.current.value === '') {
            setSUMsg(<AuthMsg useClass={`auth-error`} msg={customMsg(`auth/no-name`)} />);
            return;
        }
        else if (password.current.value === '') {
            setSUMsg(<AuthMsg useClass={`auth-error`} msg={customMsg(`auth/no-password`)} />);
            return;
        }
        else if (!confirmpw.current.value === '') {
            setSUMsg(<AuthMsg useClass={`auth-error`} msg={customMsg(`auth/no-confirmpw`)} />);
            return;
        }
        else if (checkPwMatch(password.current.value, confirmpw.current.value) === false) {
            //console.log('passwords do not match');
            setSUMsg(<AuthMsg useClass={`auth-error`} msg={customMsg(`auth/confirm-pw-error`)} />);
            return;
        }
        createUser(mail.current.value, password.current.value, name.current.value);
    }

    return (
        <div className='signUp'>
            <div className='signUp-overlay'>
                <div className='signUp-container'>
                    <h1>Sign Up</h1>
                    <div className='signUp-form'>
                        {signUpMsg}
                        <input ref={name} placeholder='First Name' required />
                        <input ref={mail} type='email' placeholder='Email Address' defaultValue={email} required />
                        <input ref={password} type='password' placeholder='Password' required />
                        <input ref={confirmpw} type='password' placeholder='Confirm Password' required />
                        <input id='signUp-submit' type='button' value='Sign Up' onClick={() => handleSubmit()} />
                    </div>
                    <h2>
                        Already a user? <Link to='/signin'>Sign in now</Link>
                    </h2>
                    <h3>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </h3>
                </div>
            </div>
        </div>
    )
};

export default SignUp;