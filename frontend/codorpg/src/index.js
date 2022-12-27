import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {LoginPage} from "./pages/login/LoginPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {GamePage} from "./pages/game/GamePage";
import {RegisterPage} from "./pages/register/RegisterPage";
import {NavigationBar} from "./components/navbar/NavigationBar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path={'/game'} element={sessionStorage.getItem('loggedIn') === '1' ? <GamePage/> : <LoginPage/> } />
                <Route path={'/register'} element={<RegisterPage />}/>
            </Routes>
        </BrowserRouter>
    </>
);

