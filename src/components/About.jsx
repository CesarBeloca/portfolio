import { useEffect, useState } from 'react';
import { asciiFrames } from '../asciiFrames.js';   // adjust path if needed

export default function About() {
    const [frameIndex, setFrameIndex] = useState(0);

    useEffect(() => {
        if (!asciiFrames.length) return;
        const interval = setInterval(() => {
            setFrameIndex((prev) => (prev + 1) % asciiFrames.length);
        }, 80); // 80ms ≈ 12.5 fps – adjust for slower/faster
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="section">
            <h2 id="about-title" className="section-title">A bit about me</h2>
            <div className="about-container">
                <div className="about-image">
                    <pre className="about-ascii-art">
            {asciiFrames[frameIndex]}
          </pre>
                </div>
                <div className="about-text-large">
                    <p>Brazilian by birth, Czech by home.</p>
                    <p>Dad of three, husband of one, servant of two cats and a dog.</p>
                    <p className="compact-p">I'm into tarot and runes,</p>
                    <p className="compact-p">I've interviewed people sentenced to life in prison,</p>
                    <p className="compact-p">and I love ASCII.</p>
                </div>
            </div>
        </section>
    );
}