import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Nav from '../components/Nav';
import Home from '../components/Home';

const Router = () => {

    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/' component={Home} />
            </Switch>
        </BrowserRouter >
    );
};

export default Router;

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