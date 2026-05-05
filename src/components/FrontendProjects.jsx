import { frontendProjects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function FrontendProjects() {
    return (
        <>
            <h2 id="frontend-title" className="section-title">Frontend Projects</h2>
            <div className="projects-grid">
                {frontendProjects.map((project) => (
                    <div key={project.id} className="project-card">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <img
                                src={`/screenshots/${project.id}.png`}
                                alt={project.title}
                                className="project-image"
                                onError={(e) => { e.target.onerror = null; e.target.src = '/screenshot-placeholder.png'; }}
                            />
                        </a>
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((t) => (
                                    <span key={t} className="tech-badge">{t}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-icon">
                                    <FaExternalLinkAlt /> Live
                                </a>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-icon link-icon-light">
                                    <FaGithub /> Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
