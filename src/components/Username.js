import { useRef, useState } from 'react';
import { auth } from '../firebase/firebase';
import { useHistory } from 'react-router-dom';
import { customMsg } from '../helper/helper';
import {
    updateProfile,
    reauthenticateWithCredential,
    EmailAuthProvider,
} from "firebase/auth";
import AuthMsg from './AuthMsg';
import '../styles/Username.css';

const Username = ({ displayName, setDN }) => {
    const name = useRef();
    const currentPw = useRef();
    const [error, setError] = useState(null);
    const history = useHistory();

    function redirectDash() {
        history.push(`dashboard`);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const cred = EmailAuthProvider.credential(auth.currentUser.email, currentPw.current.value);
        reauthenticateWithCredential(auth.currentUser, cred).then(() => {
            // User re-authed.
            updateProfile(auth.currentUser, { displayName: name.current.value })
                .then(() => {
                    console.log('success');
                    setDN(name.current.value);
                    redirectDash();
                })
                .catch((error) => {
                    setError(<AuthMsg useClass={`auth-error`} msg={customMsg(`${error}`)} />);
                })
        }).catch((error) => {
            // An error ocurred
            if (error.code) {
                setError(<AuthMsg useClass={`auth-error`} msg={customMsg(error.code)} />);
            }
            return;
        });
    }

    return (
        <div className='username'>
            <div className='username-container'>
                <div>
                    <h1>Update Username</h1>
                    <h2>Leave 'new' field blank if not updating</h2>
                </div>
                {error}
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Current Password</label>
                    <input ref={currentPw} type='password' placeholder='Current Password' required></input>
                    <label>New Name</label>
                    <input ref={name} type='text' placeholder='First Name' defaultValue={displayName}></input>
                    <input id='username-submit' type='submit' value='Submit'></input>
                    <a href='/dashboard'>Go back</a>
                </form>
            </div>
            <div className='overlay'></div>
        </div >
    );
};

export default Username;