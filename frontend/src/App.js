import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";


/* Screens */
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

import React from "react";
import {Container} from 'react-bootstrap'

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <main className="py-3">
                <Container>
                    <Routes>
                        <Route path='/' element={<HomeScreen/>} exact/>
                        <Route path='/product/:id' element={<ProductScreen/>}/>
                    </Routes>
                </Container>
            </main>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;
