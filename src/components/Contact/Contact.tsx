import { PortfolioService } from '../../services/PortfolioService';

const contact = await PortfolioService.getContactDetails();

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-header animate-up">
        {/* EDIT HERE: Contact title */}
        <h2>Let's Work Together</h2>
        {/* EDIT HERE: Contact description */}
        <p>Have a project, idea, or opportunity? I would love to hear from you.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info animate-left">
          {/* EDIT HERE: Contact details */}
          <div className="contact-card">
            <span>👋</span>
            <h3>Let's Connect</h3>
            <p>I'm available for freelance projects, collaborations, and developer opportunities.</p>
          </div>

          <div className="contact-details">
            <p>📧 {contact.email}</p>
            <p>📱 {contact.phone}</p>
            <p>📍 {contact.address}</p>
          </div>

          {/* <div className="social-links">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noreferrer">
                {social.name}
              </a>
            ))} 
          </div>*/}
        </div>

        <form className="contact-form animate-right">
          {/* EDIT HERE: Form fields */}
          <div className="input-group">
            <label>Name</label>
            <input placeholder="Your Name" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea placeholder="Tell me about your project..." rows={6} />
          </div>

          <button type="button">Send Message 🚀</button>
        </form>
      </div>
    </section>
  );
}
