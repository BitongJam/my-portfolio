import { PortfolioService } from '../../services/PortfolioService';
import Button from '../Button/Button';

const heroDetails = await PortfolioService.getHeroDetails();

export default function Hero() {
  return (
    <section id="home" className="section hero-modern">
      <div className="hero-content animate-left">
        {/* =====================================
            EDIT HERE: Greeting
            Change this text for your introduction.
        ===================================== */}
        <p className="hero-greeting">{heroDetails?.hero_greetings}</p>

        {/* =====================================
            EDIT HERE: Name
            Change your display name here.
        ===================================== */}
        <h1>{heroDetails?.hero_name}</h1>

        {/* =====================================
            EDIT HERE: Job Title
            Change your professional title here.
        ===================================== */}
        <h2>{heroDetails?.hero_position}</h2>

        {/* =====================================
            EDIT HERE: Description
            Change your personal description here.
        ===================================== */}
        <p className="hero-description">
          {/* I create modern, scalable, and elegant web applications using
          frontend and backend technologies. */}
          {heroDetails?.hero_description}
        </p>

        <div className="hero-actions">
          <Button href="#contact">Contact Me</Button>
          <Button href="/resume.pdf">Download Resume</Button>
        </div>

        <div className="tech-badges">
          <span>React</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>SQL</span>
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
