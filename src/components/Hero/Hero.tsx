import Button from '../Button/Button';

export default function Hero() {
  return (
    <section id="home" className="section hero-modern">
      <div className="hero-content animate-left">
        {/* =====================================
            EDIT HERE: Greeting
            Change this text for your introduction.
        ===================================== */}
        <p className="hero-greeting">Hello, I'm 👋</p>

        {/* =====================================
            EDIT HERE: Name
            Change your display name here.
        ===================================== */}
        <h1>James Ortiz</h1>

        {/* =====================================
            EDIT HERE: Job Title
            Change your professional title here.
        ===================================== */}
        <h2>Full Stack Developer</h2>

        {/* =====================================
            EDIT HERE: Description
            Change your personal description here.
        ===================================== */}
        <p className="hero-description">
          I create modern, scalable, and elegant web applications using
          frontend and backend technologies.
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
          src="https://placehold.co/420x420/111827/FFFFFF?text=Developer"
          alt="Developer profile placeholder"
        />
        <div className="floating-card">Available for projects 🚀</div>
      </div>
    </section>
  );
}
