import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, AboutMe, PlacesVisited, BooksRead, Contact, NotFound } from "./pages"

class App extends React.Component{
    render(){
        return(
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about-me" element={<AboutMe/>}/>
                <Route path="/places-visited" element={<PlacesVisited/>}/>
                <Route path="/books-read" element={<BooksRead/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        )
    }
}

export default App;
