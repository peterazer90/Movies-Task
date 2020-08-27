import {Route, Redirect} from "react-router-dom";
import Movies from "../Sections/Movies";
import SignIn from "../Sections/Sign-In";
import SignUp from "../Sections/Sign-Up";
import Profile from "../Sections/Profile";
import Favorites from "../Sections/Favorites";
import React, {useContext} from "react";
import {LoggedInUserContext} from "../Hooks/Contexts";

export const Routes = () => {
    const {loggedInUser} = useContext(LoggedInUserContext)
    return (
        <>
            <Route exact path={'/'} component={Movies}/>
            <Route path={'/sign-in'}>
                {(!loggedInUser) ? <SignIn/> : <Redirect to={'/'}/>}
            </Route>
            <Route path={'/sign-up'}>
                {(!loggedInUser) ? <SignUp/> : <Redirect to={'/'}/>}
            </Route>
            <Route path={'/profile'}>
                {(loggedInUser) ? <Profile/> : <Redirect to={'/sign-in'}/>}
            </Route>
            <Route path={'/favorites'} component={Favorites}/>
        </>
    );
};