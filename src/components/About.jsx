import myPhoto from '../../public/CESAR-ASCII.png';

export default function About() {
    return (
        <section className="section">
            <h2 id="about-title" className="section-title">A bit about me</h2>
            <div className="about-container">
                <div className="about-image">
                    <img src={myPhoto} alt="Cesar Lopes de Mendonca" />
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
