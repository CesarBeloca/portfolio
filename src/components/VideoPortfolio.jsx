import {useState} from "react";
import {videos} from "../data/videos";
import {FaExternalLinkAlt, FaTimes} from "react-icons/fa";

const sortedVideos = [...videos].sort((a, b) => {
    if (a.year === null && b.year === null) return 0;
    if (a.year === null) return 1;
    if (b.year === null) return -1;
    return b.year - a.year;
});

const categories = ["All", "Commercial", "Fiction", "Documentary", "Music Video", "Scripted Reality", "Web Series"];


export default function VideoPortfolio() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [modalVideo, setModalVideo] = useState(null);

    const filteredVideos = activeCategory === "All" ? sortedVideos : sortedVideos.filter((video) => video.category === activeCategory);

    const getEmbedUrl = (video) => {
        if (!video.url) return null;
        const {url, start, end} = video;
        // YouTube
        if (url.includes("youtube.com/watch?v=")) {
            const videoId = url.split("v=")[1]?.split("&")[0];
            let embedUrl = `https://www.youtube.com/embed/${videoId}`;
            const params = [];
            if (start && !isNaN(start)) params.push(`start=${start}`);
            if (end && !isNaN(end)) params.push(`end=${end}`);
            if (params.length) embedUrl += `?${params.join('&')}`;
            return embedUrl;
        }
        // YouTube short link
        if (url.includes("youtu.be/")) {
            const videoId = url.split("youtu.be/")[1]?.split("?")[0];
            let embedUrl = `https://www.youtube.com/embed/${videoId}`;
            const params = [];
            if (start && !isNaN(start)) params.push(`start=${start}`);
            if (end && !isNaN(end)) params.push(`end=${end}`);
            if (params.length) embedUrl += `?${params.join('&')}`;
            return embedUrl;
        }
        // Vimeo
        if (url.includes("vimeo.com/")) {
            const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
            let embedUrl = `https://player.vimeo.com/video/${videoId}`;
            if (start) embedUrl += `#t=${start}s`;
            return embedUrl;
        }
        return null;
    };

    const openModal = (video) => {
        const embedUrl = getEmbedUrl(video);
        if (embedUrl) setModalVideo(embedUrl); else alert("No embeddable video link available.");
    };

    const closeModal = () => setModalVideo(null);

    return (<section className="section">
        <h2 className="section-title">Video Portfolio</h2>

        <div className="filter-buttons">
            {categories.map((cat) => (<button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            >
                {cat}
            </button>))}
        </div>

        {filteredVideos.length === 0 ? (
            <div className="text-center py-12 text-gray-500">No videos in this category yet.</div>) : (
            <div className="video-grid">
                {filteredVideos.map((video) => (<div key={video.id} className="video-card">
                    <div className="video-thumbnail" onClick={() => openModal(video)}>
                        {video.url ? (<>
                            <img
                                src={video.thumbnail || `/video-thumbnails/${video.id}.png`}
                                alt={video.title}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://placehold.co/480x270?text=${encodeURIComponent(video.title)}`;
                                }}
                            />
                            <div className="play-overlay">
                                <FaExternalLinkAlt className="play-icon"/>
                            </div>
                        </>) : (<div
                            className="w-full h-48 bg-gray-700 flex items-center justify-center text-gray-400">
                            No video yet
                        </div>)}
                    </div>
                    <div className="video-content">
                        <h3 className="video-title">{video.title}</h3>
                        {video.year && <p className="text-sm text-gray-400">{video.year}</p>}
                        {video.series && <p className="text-xs text-gray-500 italic">Series: {video.series}</p>}
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="category-badge">{video.category}</span>
                            {video.tags.map(tag => (
                                <span key={tag} className="tag-badge">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>))}
            </div>)}

        {modalVideo && (<div className="modal-overlay" onClick={closeModal}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={closeModal}>
                    <FaTimes/>
                </button>
                <iframe
                    key={modalVideo}
                    src={modalVideo}
                    title="Video player"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="modal-iframe"
                />
            </div>
        </div>)}
    </section>);
}
