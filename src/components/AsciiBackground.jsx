import { useEffect, useState } from 'react';
import { asciiFrames } from '../asciiFrames';

const AsciiBackground = () => {
    const [frameIndex, setFrameIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFrameIndex((prev) => (prev + 1) % asciiFrames.length);
        }, 70); // 70ms = ~14 fps
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* ASCII animation container */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    zIndex: -0.5,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                }}
            >
        <pre
            style={{
                margin: 0,
                padding: '2rem',
                color: '#000000',       // your theme green
                fontFamily: 'monospace',
                fontSize: 'min(2vw, 2vh)', // scales with viewport, never too big
                lineHeight: 1.2,
                whiteSpace: 'pre',
                userSelect: 'none',
                textShadow: '0 0 2px rgba(0,0,0,0.2)',
                opacity: 0.02,
            }}
        >
          {asciiFrames[frameIndex]}
        </pre>
            </div>
        </>
    );
};

export default AsciiBackground;
