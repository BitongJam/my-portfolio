import { useEffect, useRef, useState } from 'react';
import { PortfolioService, type Projects } from '../../services/PortfolioService';

export default function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [projects, setProjects] = useState<Projects[]>([]);

  useEffect(() => {
    async function loadProjects() {
      const data = await PortfolioService.getProjects();

      if (data) {
        setProjects(data);
      }
    }

    loadProjects();
  }, []);

  const scrollProjects = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left:
        direction === 'right'
          ? carouselRef.current.clientWidth
          : -carouselRef.current.clientWidth,
      behavior: 'smooth'
    });
  };

  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <h2>Projects</h2>
        <p>Some of the applications and systems I have built.</p>
      </div>

      <div className="carousel-wrapper">
        <button
          className="carousel-btn"
          onClick={() => scrollProjects('left')}
        >
          ←
        </button>

        <div className="projects-carousel" ref={carouselRef}>
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <a href={project.link}>
                  View Project →
                </a>
              </div>
            </article>
          ))}
        </div>

        <button
          className="carousel-btn"
          onClick={() => scrollProjects('right')}
        >
          →
        </button>
      </div>
    </section>
  );
}