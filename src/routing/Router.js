import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect, useHistory, withRouter } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/firebase';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Nav from '../components/Nav';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';
import Account from '../components/Account';

const Router = (props) => {
    const [authState, setAuthState] = useState(localStorage.getItem('authState'));
    const [email, setEmail] = useState(null);
    console.log(authState, 'authstate');

    //localStorage.clear();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            console.log('authed, router.js');
            setAuthState(true);
            localStorage.setItem('authState', true);
            // ...
        } else {
            // User is signed out
            // ...
        }
    });

    async function submitHandSignIn(e) {
        e.preventDefault();
        console.log('prevented Submit');
    }

    function PrivateRoute({ children, ...rest }) {
        console.log('children:', children, 'rest:', rest, authState);
        console.log(localStorage.getItem('authState'));
        return (
            <Route {...rest} render={() => {
                return authState !== null
                    ? children
                    : <Redirect to='/' />
            }} />
        )
    }

    async function createUser(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user, 'user - createUser');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('error occured', errorCode, errorMessage);
            });
    }

    async function signInUser(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('sign in successful', userCredential.user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('sign in error', errorCode, errorMessage);
            });
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    {authState === null ?
                        (
                            <div>
                                <Nav setEmail={setEmail} showSignIn={true} />
                                <Home email={email} setEmail={setEmail} />
                            </div>
                        ) :
                        <Redirect to='/dashboard' />
                    }
                </Route>
                <PrivateRoute exact path='/dashboard'>
                    <Nav setEmail={setEmail} setAuthState={setAuthState} showProfile={true} />
                    <Dashboard />
                </PrivateRoute>
                <div>
                    <Nav setEmail={setEmail} />
                    <Route exact path='/signin'>
                        <SignIn signInUser={signInUser} />
                    </Route>
                    <Route exact path='/signup'>
                        <SignUp createUser={createUser} setAuthState={setAuthState} email={email} />
                    </Route>
                    <Route exact path='/account'>
                        <Account />
                    </Route>
                </div>
            </Switch>
        </BrowserRouter >
    );
};

export default withRouter(Router);

//render = {() => <Dashboard email={email}


                    // <Nav setEmail={setEmail} showSignIn={true} />
                    // <Home email={email} setEmail={setEmail} />

// async function setDB() {
//   await setDoc(doc(db, "hiscores", "0"), {
//     name: "Anonymous",
//     time: 90000,
//   });
//   await setDoc(doc(db, "hiscores", "1"), {
//     name: "Nyancat",
//     time: 95000,
//   });
//   await setDoc(doc(db, "hiscores", "2"), {
//     name: "Spike Spiegel",
//     time: 100000,
//   });
//   await setDoc(doc(db, "hiscores", "3"), {
//     name: "Monkey D. Luffy",
//     time: 120000,
//   });
//   await setDoc(doc(db, "hiscores", "4"), {
//     name: "Naruto Uzumaki",
//     time: 300000,
//   });
// }

// setDB();