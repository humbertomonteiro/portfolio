import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Notes from "./pages/Notes";
import Projects from "./pages/Projects";

import ExempleRoute from "./components/ExemplesReact/ExempleRoutes/ExempleRoute";

import Description from "./pages/Description";
import PagesNotes from './pages/PagesNotes'

export default function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/profile' element={ <Profile />} />
            <Route path='/notes' element={ <Notes />} />
            <Route path='/projects' element={ <Projects />} />
            
            <Route path="/exempleRoutes" element={ <ExempleRoute /> } />

            <Route path="/pages-notes/:id" element={ <PagesNotes /> } />
            <Route path="/description/:id" element={ <Description /> } />

            <Route path="*" element={ <Home /> } />
        </Routes>
    )
}