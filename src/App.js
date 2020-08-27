import React, {useContext, useState} from 'react';
import './App.css';
import Main from "./Components/Templates/Main";
import Header from "./Sections/Header";
import Footer from "./Sections/Footer";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {Routes} from "./Routes/Routes";
import {FavoriteContexts} from "./Helpers/Contexts";

function App() {
    const [favorites, addFavorites] = useState([]);
    return (
        <Main>
            <Router>
                <FavoriteContexts.Provider value={{favorites, addFavorites}}>
                    <Header/>
                    <Switch>
                        <Routes/>
                    </Switch>
                    <Footer/>
                </FavoriteContexts.Provider>
            </Router>
        </Main>
    );
}

export default App;
