import React, {useContext, useState} from 'react';
import './App.css';
import Main from "./Components/Templates/Main";
import Header from "./Sections/Header";
import Footer from "./Sections/Footer";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {Routes} from "./Routes/Routes";
import {FavoriteContexts} from "./Hooks/Contexts";
import Auth from "./Auth/Auth";

function App() {
    const [favorites, addFavorites] = useState([]);
    return (
        <Main>
            <Router>
                <Auth>
                    <FavoriteContexts.Provider value={{favorites, addFavorites}}>
                        <Header/>
                        <Switch>
                            <Routes/>
                        </Switch>
                        <Footer/>
                    </FavoriteContexts.Provider>
                </Auth>
            </Router>
        </Main>
    );
}

export default App;
