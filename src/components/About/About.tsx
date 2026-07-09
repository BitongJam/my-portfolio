import SectionTitle from '../SectionTitle/SectionTitle';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <SectionTitle title="About Me" />

      <div className="about-container">
        {/* EDIT HERE: Personal introduction */}
        <div className="about-card">
          <h3>Who I Am</h3>
          <p>
            I am a software developer focused on building reliable, scalable,
            and user-friendly applications. I enjoy turning ideas into
            practical solutions through clean code and modern technologies.
          </p>
        </div>

        {/* EDIT HERE: Experience */}
        <div className="about-card">
          <h3>Experience</h3>
          <p>
            My experience covers frontend development, backend systems,
            databases, enterprise applications, and application deployment.
            I work with technologies that help businesses improve their
            workflow and productivity.
          </p>
        </div>

        {/* EDIT HERE: Skills / interests */}
        <div className="about-card">
          <h3>My Approach</h3>
          <p>
            I believe in continuous learning, maintainable architecture, and
            creating solutions that are easy to understand and extend in the
            future.
          </p>
        </div>
      </div>
    </section>
  );
}
