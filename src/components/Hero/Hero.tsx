import { PortfolioService } from '../../services/PortfolioService';
import Button from '../Button/Button';

const heroDetails = await PortfolioService.getHeroDetails();
const skills = await PortfolioService.getSkills();

export default function Hero() {
  return (
    <section id="home" className="section hero-modern">
      <div className="hero-content animate-left">
        <p className="hero-greeting">{heroDetails?.hero_greetings}</p>

        <h1>{heroDetails?.hero_name}</h1>
        <h2>{heroDetails?.hero_position}</h2>
        <p className="hero-description">
          {heroDetails?.hero_description}
        </p>

        <div className="hero-actions">
          <Button href="#contact">Contact Me</Button>
          <Button href="/resume.pdf">Download Resume</Button>
        </div>

        <div className="tech-badges">
          {
            skills.map((skill) => (
              <span key={skill.name} className="tech-badge">{skill.name}</span>
            ))
          }

        </div>
      </div>

      <div className="hero-image-card animate-right">
        {/* =====================================
            EDIT HERE: Profile Image
            Replace this placeholder image later.
            Put your image inside src/assets/images/
        ===================================== */}
        <img
          loading="lazy"
          src={heroDetails?.hero_img_url}
          alt="Developer profile placeholder"
        />
        <div className="floating-card">Available for projects 🚀</div>
      </div>
    </section>
  );
}
