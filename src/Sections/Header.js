import React, {useContext} from 'react';
import Nav from "../Components/Elements/Nav";
import Logo from "../Components/Blocks/Logo";
import List from "../Components/Elements/List";
import ListItems from "../Components/Blocks/List-Items";
import {FavoriteContexts, LoggedInUserContext} from "../Hooks/Contexts";

function Header() {
    const {favorites} = useContext(FavoriteContexts);
    const {loggedInUser} = useContext(LoggedInUserContext)
    const listItems = [
        {
            link: '/',
            text: 'Home'
        },
        {
            link: (loggedInUser) ? '/profile' : '/sign-in',
            text: `My ${(loggedInUser) ? 'Profile' : 'Account'}`
        },
        {
            link: '/favorites',
            text: <>
                <i className="icofont-heart icofont-2x"></i><span
                className="badge badge-pill badge-danger ml-n2">{favorites.length}</span>
            </>
        },
    ];
    return (
        <header className="w-100">
            <Nav>
                <Logo/>
                <List>
                    <ListItems items={listItems}/>
                </List>
            </Nav>
        </header>
    );
}

export default Header;