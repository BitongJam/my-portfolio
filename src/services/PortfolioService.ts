import portfolioData from './test.json';

export class PortfolioService {
  // EDIT HERE: Replace this JSON source later with API calls if needed
  static getSkills() {
    return portfolioData.skills;
  }

  static getProjects() {
    return portfolioData.projects;
  }

  static getSocialLinks() {
    return portfolioData.socialLinks;
  }
}
