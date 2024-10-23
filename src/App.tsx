import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import GameDesign from './pages/GameDesign';
import Projects from './pages/Projects';
import Appreciation from './pages/Appreciations';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/gamedesign" element={<GameDesign />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/appreciations" element={<Appreciation />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
