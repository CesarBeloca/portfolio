import { useEffect, useState } from 'react';
import { asciiFrames } from '../asciiFrames';

export default function Hero({ onTechClick, onVideoClick }) {
    const [frameIndex, setFrameIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFrameIndex((prev) => (prev + 1) % asciiFrames.length);
        }, 70);
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
          {asciiFrames[frameIndex]}
        </pre>
            </div>
        </section>
    );
}
