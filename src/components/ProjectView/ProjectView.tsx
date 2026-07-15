import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PortfolioService } from '../../services/PortfolioService';
import type { ProjectProps } from '../../models/project';



function renderRichText(content?: string) {
    if (!content) {
        return null;
    }

    const hasHtmlMarkup = /<[^>]+>/.test(content);

       if (hasHtmlMarkup) {
        return (
            <iframe
                className="project-view-content"
                srcDoc={content}
                title="Project Preview"
                style={{
                    width: "100%",
                    minHeight: "500px",
                    border: "none",
                }}
            />
        );
    }

    return <div className="project-view-content project-view-content--plain">{content}</div>;
}

export default function ProjectView() {

    const {id} = useParams();
    const navigate = useNavigate();

    const defaultProjData: ProjectProps = {
        title: "",
        description: "",
        link: "",
        details: "",
        tech: [],
        id: 0
    };
    const [projectState, setProjectState] = useState<ProjectProps>(defaultProjData);

    useEffect(() => {
        console.log("ProjectView: id = ", id);
        const loadProject = async () => {
            if (!id) return;

            const result = await PortfolioService.getProjectById(Number(id));
            console.log("ProjectView: ", result);
            if (result) {
                setProjectState(result);
            }
        };

        loadProject();
    }, [id]);

    const description = projectState.details && projectState.details.trim() !== ''
    ? renderRichText(projectState.details)
    : <p>No additional details available for this project.</p>;

    return (
        <>
          <section className="section project-view-section">
                <div className="project-view-shell">
                    <div className="project-view-topbar">
                        <button
                            className="project-view-close-btn"
                            onClick={() => navigate(-1)}
                            aria-label="Close project view"
                        >
                            ✕
                        </button>
                    </div>
                    <div className="project-view-header">
                        <div>
                            <p className="project-view-eyebrow">Project details</p>
                            <h2 className="project-view-title">{projectState.title}</h2>
                            <p className="project-view-summary">{projectState.description}</p>

                            {projectState.tech.length > 0 && (
                                <div className="project-tags project-view-tags">
                                    {projectState.tech.map((item) => (
                                        <span key={item}>{item}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                        {projectState.link && projectState.link !== '#' && (
                            <a className="project-view-link" href={projectState.link} target="_blank" rel="noreferrer">
                                Open project →
                            </a>
                        )}
                    </div>

                    <div>
                        <article className="project-view-card">
                            <h3>Module Description</h3>
                            {description}
                        </article>
                    </div>
                </div>
            </section>
        </>
          
       
    );
}