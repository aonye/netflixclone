import { useRef, useState } from 'react';
import { auth } from '../firebase/firebase';
import { useHistory } from 'react-router-dom';
import { customMsg } from '../helper/helper';
import {
    updateEmail,
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider,
} from "firebase/auth";
import AuthMsg from './AuthMsg';
import '../styles/Account.css';

const Account = ({ setEmail, email }) => {
    const emailField = useRef();
    const currentPw = useRef();
    const pw = useRef();
    const confirmPw = useRef();

    const [error, setError] = useState(null);
    const history = useHistory();

    function redirectSignUp() {
        history.push(`dashboard`);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const promiseArr = [];
        const cred = EmailAuthProvider.credential(auth.currentUser.email, currentPw.current.value);
        reauthenticateWithCredential(auth.currentUser, cred).then(() => {
            // User re-authed.
            checkPassword(promiseArr);
            checkEmail(promiseArr);
            Promise.all(promiseArr)
                .then(() => {
                    console.log('success');
                    setEmail(emailField.current.value);
                    redirectSignUp();
                })
                .catch((error) => {
                    setError(<AuthMsg useClass={`auth-error`} msg={customMsg(`${error}`)} />);
                })
        }).catch((error) => {
            // An error ocurred
            console.log(error.code);
            if (error.code) {
                setError(<AuthMsg useClass={`auth-error`} msg={customMsg(error.code)} />);
            }
            return;
        });

        function checkEmail(promiseArr) {
            if (auth.currentUser.email !== emailField.current.value) {
                promiseArr.push(updateEmail(auth.currentUser, emailField.current.value));
            }
        }

        function checkPassword(promiseArr) {
            if (pw.current.value !== confirmPw.current.value) {
                setError(<AuthMsg useClass={`auth-error`} msg={customMsg(`New passwords must match.`)} />);
                throw new Error();
            }
            if (pw.current.value === currentPw.current.value) {
                setError(<AuthMsg useClass={`auth-error`} msg={customMsg(`New password cannot be the same as current.`)} />);
                throw new Error();
            }
            promiseArr.push(updatePassword(auth.currentUser, pw.current.value));
        }
    }

    return (
        <div className='acct'>
            <div className='acct-container'>
                <div>
                    <h1>Update Account Info</h1>
                    <h2>Leave fields blank if not updating</h2>
                </div>
                {error}
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Current Password</label>
                    <input ref={currentPw} type='password' placeholder='Current Password' required></input>
                    <label>New Email</label>
                    <input ref={emailField} type='email' placeholder='Email'></input>
                    <label>New Password</label>
                    <input ref={pw} type='password' minLength='6' placeholder='Password'></input>
                    <label>Confirm New Password</label>
                    <input ref={confirmPw} type='password' minLength='6' placeholder='Confirm Password'></input>
                    <input id='acct-submit' type='submit' value='Submit'></input>
                    <a href='/dashboard'>Go back</a>
                </form>

            </div>
            <div className='overlay'></div>
        </div >
    );
};

export default Account;