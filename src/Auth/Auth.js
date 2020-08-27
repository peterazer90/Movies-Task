import React, {useState} from 'react';
import {LoggedInUserContext, RegisteredUsersContext, UserObjectContext} from "../Hooks/Contexts";

function Auth({children}) {
    const [registeredUsers, registeringUser] = useState([]);
    const [loggedInUser, loggingIn] = useState(false);
    const [userObject, setUserObject] = useState(null);
    return (
        <RegisteredUsersContext.Provider value={{registeredUsers, registeringUser}}>
            <LoggedInUserContext.Provider value={{loggedInUser, loggingIn}}>
                <UserObjectContext.Provider value={{userObject, setUserObject}}>
                    {children}
                </UserObjectContext.Provider>
            </LoggedInUserContext.Provider>
        </RegisteredUsersContext.Provider>
    );
}

export default Auth;