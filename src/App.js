import React from "react";
import {Route, Routes} from "react-router-dom";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import Navbar from "./components/navbar/navbar";
import PageNotFound from "./pages/pageNotFound/404";
import Footer from "./components/footer/footer";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
