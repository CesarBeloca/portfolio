import { backendProjects } from "../data/projects";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function BackendProjects() {
    return (
        <>
            <h2 id="backend-title" className="section-title">Backend Projects (APIs)</h2>
            <ul className="backend-list">
                {backendProjects.map((item) => (
                    <li key={item.name}>
                        <div className="backend-header">
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="backend-name">
                                {item.name}
                            </a>
                            {item.liveUrl && (
                                <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="backend-live">
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                            )}
                        </div>
                        <p className="backend-description">{item.description}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}
