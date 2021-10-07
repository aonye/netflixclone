import { Link, Redirect, Switch } from 'react-router-dom';
import { useRef, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db, auth } from '../firebase/firebase';
import '../styles/SignUp.css';

const SignUp = (props) => {
    const { createUser, setAuthState, email } = props;
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         // User is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/firebase.User
    //         const uid = user.uid;
    //         //console.log(auth.currentUser, 'currentUser');
    //         setSignedIn(auth.currentUser);
    //         // ...
    //     } else {
    //         // User is signed out
    //         // ...
    //     }
    // });

    const pw1 = useRef();
    const pw2 = useRef();
    const mail = useRef();

    console.log(auth.currentUser, 'currentUser1');

    async function handleSubmit() {
        //console.log(pw1.current.value, pw2.current.value, mail.current.value);
        //const [firstName, email, pw1, pw2] = e.target.childNodes;
        // if (checkPw(pw1, pw2) === false) {
        //     console.log('passwords do not match');
        //     return;
        // }
        createUser(mail.current.value, pw1.current.value);
        //check if email in database already
        // setCursor('wait');
        // console.log('pw match');
        // await addToDoc(firstName.value, email.value, pw1.value);
        // console.log('uploaded');
        // setTimeout(() => {
        //     setCursor('default');
        // }, 2000);

    }

    // function checkPw(pw1, pw2) {
    //     return pw1.value === pw2.value ? true : false;
    // }

    // function setCursor(val) {
    //     document.querySelectorAll('*').forEach((elem) => {
    //         elem.style.cursor = val;
    //     });
    // }

    // async function addToDoc(firstName, email, password) {
    //     await addDoc(collection(db, 'users'), {
    //         firstName,
    //         email,
    //         password,
    //     });
    // }



    return (
        <div>
            <div className='signUp' style={{ cursor: 'default' }}>
                <input placeholder='First Name' />
                <input ref={mail} type='email' placeholder='Email Address' defaultValue={email} />
                <input ref={pw1} type='password' placeholder='Password' />
                <input ref={pw2} type='password' placeholder='Confirm Password' />
                <input type='button' value='Sign Up' onClick={() => handleSubmit()} />
                <div>
                    Already a user? <Link to='/signin'>Sign in now</Link>
                </div>
            </div>
        </div>
    )
};

export default SignUp;