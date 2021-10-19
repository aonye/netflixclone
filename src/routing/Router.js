import {
    updateProfile,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import AuthMsg from '../components/AuthMsg';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Nav from '../components/Nav';
import { NavMediaBar, Profile, SignInBtn } from '../components/Nav_components/index';
import films from '../assets/films/index';
import series from '../assets/series/index';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';
import Account from '../components/Account';
import Username from "../components/Username";
import Footer from '../components/Footer';
import { customMsg } from '../helper/helper';

const Router = (props) => {
    const [mediaType, setMediaType] = useState({ films }); //films default
    const [MTKey, setMTKey] = useState(Object.keys({ films }));

    const [authState, setAuthState] = useState(localStorage.getItem('authState')); //null if not found
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);

    const [signInMsg, setSIMsg] = useState(null);
    const [signUpMsg, setSUMsg] = useState(null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user, 'authed');
            localStorage.setItem('authState', JSON.stringify(user));
            setName(user.displayName);
            setEmail(user.email);
        } else {
            console.log(user, 'not authed');
            localStorage.removeItem('authState');
        }
    });

    function PrivateRoute({ children, ...rest }) {
        return (
            <Route {...rest} render={() => {
                return authState !== null
                    ? children
                    : <Redirect to='/' />
            }} />
        )
    }

    function RouteWrap({ children, ...rest }) {
        return (
            <Route {...rest} render={() => {
                return authState === null
                    ? children
                    : <Redirect to='/dashboard' />
            }} />
        );
    }

    async function createUser(email, password, name) {
        const x = await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                    .then(() => {
                        setAuthState(auth.currentUser);
                    })
                    .catch((error) => {
                        throw error;
                    });
                setSUMsg(<AuthMsg useClass={'auth-success'} msg={customMsg('auth/sign-up-success')} />);
            })
            .catch((error) => {
                const errorCode = error.code;
                //console.log('error occured', errorCode, errorMessage);
                setSUMsg(<AuthMsg useClass={`auth-error`} msg={customMsg(errorCode)} />)
            });
        console.log(x);
    }

    async function signInUser(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //console.log('sign in successful', userCredential.user);
                setAuthState(auth.currentUser);
                setSIMsg(<AuthMsg useClass={`auth-success`} msg={customMsg('auth/sign-in-success')} />);
            })
            .catch((error) => {
                const errorCode = error.code;
                //console.log('sign in error', error, errorCode, errorMessage);
                setSIMsg(<AuthMsg useClass={`auth-error`} msg={customMsg(errorCode)} />);
            });
    }

    return (
        <BrowserRouter basename='/netflixclone'>
            <Switch>
                <RouteWrap exact path='/'>
                    <Nav
                        SignInBtn={<SignInBtn />}
                    />
                    <Home setEmail={setEmail} />
                </RouteWrap>
                <RouteWrap exact path='/signin'>
                    <Nav />
                    <SignIn
                        signInUser={signInUser}
                        signInMsg={signInMsg}
                        setSIMsg={setSIMsg}
                        authState={authState}
                    />
                </RouteWrap >
                <RouteWrap exact path='/signup'>
                    <Nav />
                    <SignUp
                        email={email}
                        createUser={createUser}
                        signUpMsg={signUpMsg}
                        setSUMsg={setSUMsg}
                        authState={authState}
                    />
                </RouteWrap>
                <PrivateRoute exact path='/dashboard'>
                    <Nav
                        NavMediaBar={<NavMediaBar setMediaType={setMediaType} setMTKey={setMTKey} films={films} series={series} />}
                        Profile={<Profile setAuthState={setAuthState} name={name} email={email} />}
                    />
                    <Dashboard mediaType={mediaType} MTKey={MTKey} />
                </PrivateRoute>
                <PrivateRoute exact path='/account'>
                    <Nav />
                    <Account
                        setEmail={setEmail}
                    />
                </PrivateRoute>
                <PrivateRoute exact path='/username'>
                    <Nav />
                    <Username
                        name={name}
                        setName={setName}
                    />
                </PrivateRoute>
            </Switch>
            <Footer />
        </BrowserRouter >
    );
};

export default withRouter(Router);