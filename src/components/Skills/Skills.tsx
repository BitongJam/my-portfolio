import { useRef } from 'react';
import { PortfolioService } from '../../services/PortfolioService';

const skills = await PortfolioService.getSkills();

// EDIT HERE: Skills are automatically grouped by 5 items per card
const skillGroups = Array.from(
  { length: Math.ceil(skills.length / 5) },
  (_, index) => skills.slice(index * 5, index * 5 + 5)
);

export default function Skills() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;

    const amount = carouselRef.current.clientWidth;

    carouselRef.current.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <h2>Skills</h2>
        <p>My technical stack and tools I work with.</p>
      </div>

      <div className="carousel-wrapper">
        <button className="carousel-btn" onClick={() => scrollCarousel('left')}>
          ←
        </button>

        {/* EDIT HERE: Add more skills in src/data/skills.ts. Every 5 skills becomes a new card. */}
        <div className="skills-carousel" ref={carouselRef}>
          {skillGroups.map((group, index) => (
            <div className="skill-group-card" key={index}>
              <h3>Skill Set {index + 1}</h3>

              {group.map((skill) => (
                <div className="skill-list-item" key={skill.name}>
                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <small>{skill.category}</small>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <button className="carousel-btn" onClick={() => scrollCarousel('right')}>
          →
        </button>
      </div>
    </section>
  );
}
