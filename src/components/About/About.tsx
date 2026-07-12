import { PortfolioService } from '../../services/PortfolioService';
import SectionTitle from '../SectionTitle/SectionTitle';
const aboutme = await PortfolioService.getAboutMeDetails()
export default function About() {
  return (
    <section id="about" className="section about-section">
      <SectionTitle title="About Me" />

      <div className="about-container">
        {/* EDIT HERE: Personal introduction */}
        <div className="about-card">
          <h3>Who I Am</h3>
          <p>
            {
              aboutme?.whoami
            }
          </p>
        </div>

        {/* EDIT HERE: Experience */}
        <div className="about-card">
          <h3>Experience</h3>
          <p>
            {aboutme?.experience}
          </p>
        </div>

        {/* EDIT HERE: Skills / interests */}
        <div className="about-card">
          <h3>My Approach</h3>
          <p>
           {aboutme?.myapproach}
          </p>
        </div>
      </div>
    </section>
  );
}
