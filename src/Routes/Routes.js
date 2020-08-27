import {Route} from "react-router-dom";
import Movies from "../Sections/Movies";
import SignIn from "../Sections/Sign-In";
import SignUp from "../Sections/Sign-Up";
import Profile from "../Sections/Profile";
import Favorites from "../Sections/Favorites";
import React from "react";

export const Routes = () => {
    return (
        <>
            <Route exact path={'/'} component={Movies}/>
            <Route path={'/sign-in'} component={SignIn}/>
            <Route path={'/sign-up'} component={SignUp}/>
            <Route path={'/profile'} component={Profile}/>
            <Route path={'/favorites'} component={Favorites}/>
        </>
    );
};