import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect, useHistory, withRouter } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/firebase';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Nav from '../components/Nav';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';

const Router = (props) => {
    const [signedIn, setSignedIn] = useState(null);
    const [email, setEmail] = useState(null);
    //console.log(props.location.pathname, 'routerprops');

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            console.log(auth.currentUser, 'currentUser');
            setSignedIn(auth.currentUser);
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

    const HomeNav = () => {
        return <Route exact path='/' render={() => {
            return <div><Nav setEmail={setEmail} showSignIn={true} /><Home email={email} setEmail={setEmail} /></div>
        }}></Route>
    };

    const DashboardNav = () => {
        return <Route exact path='/' render={() => {
            return <div><Nav setEmail={setEmail} showSignIn={true} /><Dashboard /></div>
        }}></Route>
    }

    console.log(auth.currentUser, 'router');

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    {auth.currentUser === null ?
                        HomeNav() :
                        <Redirect to='dashboard' />
                    }
                </Route>
                <div>
                    <Nav setEmail={setEmail} />
                    <Route exact path='/signin' render={() => <SignIn />} />
                    <Route exact path='/signup' render={() => <SignUp signedIn={signedIn} setSignedIn={setSignedIn} email={email} />} />
                    <Route exact path='/dashboard'>
                        {auth.currentUser === null ?
                            <Redirect to='/' /> :
                            <Dashboard />
                        }
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