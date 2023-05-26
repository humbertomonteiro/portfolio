import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Notes from "./pages/Notes";
import Projects from "./pages/Projects";

import Git from './pages/PagesNotes/Git'
import Github from './pages/PagesNotes/Github'
import Node from './pages/PagesNotes/Node'
import React from './pages/PagesNotes/React'
import Firebase from './pages/PagesNotes/Firebase'

import ExempleRoute from "./components/ExemplesReact/ExempleRoutes/ExempleRoute";

export default function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/profile' element={ <Profile />} />
            <Route path='/notes' element={ <Notes />} />
            <Route path='/projects' element={ <Projects />} />
            
            <Route path='/git' element={ <Git />} />
            <Route path='/github' element={ <Github />} />
            <Route path='/node' element={ <Node />} />
            <Route path='/react' element={ <React />} />
            <Route path='/firebase' element={ <Firebase />} />
            
            <Route path="/exempleRoutes" element={ <ExempleRoute /> } />

            <Route path="*" element={ <Home /> } />
        </Routes>
    )
}