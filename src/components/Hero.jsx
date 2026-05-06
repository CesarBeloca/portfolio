import {useEffect, useState} from 'react';
import { randomAnimation } from '../asciiAnimations';

export default function Hero({onTechClick, onVideoClick}) {

    const [frameIndex, setFrameIndex] = useState(0);

    useEffect(() => {
        console.log('Animation name:', randomAnimation.name);
        console.log('Frame rate (ms):', randomAnimation.framerate);
        const interval = setInterval(() => {
            setFrameIndex((prev) => (prev + 1) % randomAnimation.frames.length);
        }, randomAnimation.framerate);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero">
            <div className="hero-text">
                <h1 className="hero-title">Cesar Lopes de Mendonca</h1>
                <p className="hero-subtitle">Developer & Filmmaker</p>
                <p className="hero-subtitle">Building digital tools and visual stories.</p>
                <div className="hero-buttons">
                    <button onClick={onTechClick} className="btn-primary">Explore Tech</button>
                    <button onClick={onVideoClick} className="btn-outline">Watch Films</button>
                </div>
            </div>

            <div className="ascii-showcase">
                <pre className="ascii-art-show">
                  {randomAnimation.frames[frameIndex]}
                </pre>
            </div>
        </section>
    );
}
