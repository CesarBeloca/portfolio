import AsciiBackground from "./components/AsciiBackground.jsx";

import {useRef, useState, useEffect} from "react";
import Hero from "./components/Hero";
import FrontendProjects from "./components/FrontendProjects";
import BackendProjects from "./components/BackendProjects";
import VideoPortfolio from "./components/VideoPortfolio";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {

    const [activeSection, setActiveSection] = useState('tech');
    const [showHero, setShowHero] = useState(true);
    const [navbarRevealed, setNavbarRevealed] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!navbarRevealed && window.scrollY > 50) {
                setNavbarRevealed(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navbarRevealed]);
    const showSection = (section) => {

        if (showHero) setShowHero(false);
        setActiveSection(section);
        setTimeout(() => {
            let elementId = '';
            if (section === 'tech') elementId = 'frontend-title';
            else if (section === 'video') elementId = 'video-title';
            else if (section === 'about') elementId = 'about-title';
            if (elementId) {
                const el = document.getElementById(elementId);
                if (el) el.scrollIntoView({behavior: 'smooth'});
            } else {
                sectionRef.current?.scrollIntoView({behavior: 'smooth'});
            }
        }, 100);
    };
    const goHome = () => {

        setShowHero(true);
        setActiveSection('tech');
        window.scrollTo({top: 0, behavior: 'smooth'});
    };


    return (
        <div>
            <div>
                <nav className={`navbar ${!navbarRevealed ? 'navbar-hidden' : ''}`}>
                    <div className="navbar-container">
                        <div className="navbar-brand" onClick={goHome} style={{cursor: 'pointer'}}>
                            Cesar Lopes de Mendonca
                        </div>
                        <div className="navbar-links">
                            <button onClick={() => showSection('tech')} className="navbar-link">Tech</button>
                            <button onClick={() => showSection('video')} className="navbar-link">Video</button>
                            <button onClick={() => showSection('about')} className="navbar-link">About</button>
                            <div className="dropdown">
                                <button className="dropdown-trigger">CV ▼</button>
                                <div className="dropdown-menu">
                                    <a href="/cv-tech.pdf" download>Tech CV</a>
                                    <a href="/cv-video.pdf" download>Video CV</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {showHero && (
                    <Hero onTechClick={() => showSection('tech')} onVideoClick={() => showSection('video')}/>
                )}

                <div ref={sectionRef}>
                    {activeSection === 'tech' && (
                        <div className="section">
                            <FrontendProjects/>
                            <BackendProjects/>
                        </div>
                    )}
                    {activeSection === 'video' && (
                        <div className="section">
                            <VideoPortfolio/>
                        </div>
                    )}
                    {activeSection === 'about' && (
                        <div className="section">
                            <About/>
                        </div>
                    )}
                </div>

                <Footer/>
                <AsciiBackground/>
            </div>
        </div>
    );
}

export default App;
