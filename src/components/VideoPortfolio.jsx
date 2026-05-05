import { FaPlayCircle } from "react-icons/fa";

const videos = [
    // Add your video objects here when ready
    // Example:
    // {
    //   id: 1,
    //   title: "Sample Film",
    //   description: "Short description",
    //   thumbnail: "/path/to/thumbnail.jpg",
    //   link: "https://vimeo.com/..."
    // }
];

export default function VideoPortfolio() {
    if (videos.length === 0) {
        return (
            <section className="section">
                <h2 className="section-title">Video Portfolio</h2>
                <div className="text-center py-12" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>🎬 In Construction – videos coming soon.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="section">
            <h2 className="section-title">Video Portfolio</h2>
            <div className="video-grid">
                {videos.map((video) => (
                    <div key={video.id} className="video-card">
                        <a href={video.link} target="_blank" rel="noopener noreferrer" className="video-thumbnail">
                            <img src={video.thumbnail} alt={video.title} />
                            <div className="play-overlay">
                                <FaPlayCircle className="play-icon" />
                            </div>
                        </a>
                        <div className="video-content">
                            <h3 className="video-title">{video.title}</h3>
                            <p className="video-description">{video.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
