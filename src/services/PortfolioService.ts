import supabase from './supabase';
import portfolioData from './test.json';

export type Skill = {
  name: string;
  category: string;
  percentage: number;
};

export class PortfolioService {
  // EDIT HERE: Replace this JSON source later with API calls if needed
  // static getSkills() {
  //   return portfolioData.skills;
  // }

  
 static async getSkills(): Promise<Skill[]> {
  try {
     const { data, error } = await supabase
      .from("skills")
      .select("name, category, percentage");

        console.log("Supabase response:", { data, error });

    if (error) {
      console.error(error);
      return [];
    }
    console.info("getskills: ",data)

    return data ?? [];
  } catch (error) {
     console.error(error);
     return []
  }
   
  }

  static getProjects() {
    return portfolioData.projects;
  }

  static getSocialLinks() {
    return portfolioData.socialLinks;
  }
}
