import { randomAnimation } from '../asciiAnimations';

export default function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Cesar Lopes de Mendonca</p>
            <p>
                ASCII animation: <strong>"{randomAnimation.name}"</strong>
                {randomAnimation.author && ` by ${randomAnimation.author}`}
                {` `}(source: <a href="https://ascii.co.uk/animated" target="_blank" rel="noopener noreferrer">ASCII.co.uk</a>)
            </p>
        </footer>
    );
}
