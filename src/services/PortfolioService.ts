import supabase from './supabase';
import portfolioData from './test.json';

export type Skill = {
  name: string;
  category: string;
  percentage: number;
};

export type Hero = {
  hero_name: string;
  hero_greetings: string;
  hero_position: string;
  hero_description: string;
  hero_img_url: string;
}

export type Projects = {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export type AboutMe = {
  whoami: string;
  experience:string;
  myapproach:string;
}

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
      console.info("getskills: ", data)

      return data ?? [];
    } catch (error) {
      console.error(error);
      return []
    }

  }

  // static getProjects() {
  //   return portfolioData.projects;
  // }

  static getSocialLinks() {
    return portfolioData.socialLinks;
  }

  static async getHeroDetails(): Promise<Hero | null> {
    try {
      const { data, error } = await supabase
        .from("config_settings")
        .select("field_name,value")
        .in("field_name", [
          "hero_name",
          "hero_greetings",
          "hero_position",
          "hero_description",
          "hero_img_url"
        ]);

      if (error) {
        console.error(error);
        return null;
      }

      const hero = data.reduce((acc, item) => {
        acc[item.field_name] = item.value;
        return acc;
      }, {} as Record<string, string>);

      return {
        hero_name: hero.hero_name ?? "",
        hero_greetings: hero.hero_greetings ?? "",
        hero_position: hero.hero_position ?? "",
        hero_description: hero.hero_description ?? "",
        hero_img_url: hero.hero_img_url ?? "https://placehold.co/420x420/111827/FFFFFF?text=Developer"
      };

    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async getProjects(): Promise<Projects[] | null> {

    try {
      const { data, error } = await supabase
        .from("projects")
        .select("title,description,link,project_tech(name)")

      if (error) {
        console.error(error);
        return null;
      }

      return data.map(project => ({
        title: project.title ?? "",
        description: project.description ?? "",
        tech: project.project_tech?.map(t => t.name) ?? [],
        link: project.link ?? "",
      }));

      console.log("getProjects: ", data)
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async getAboutMeDetails():Promise<AboutMe | null>
  {
     try {
      const { data, error } = await supabase
        .from("config_settings")
        .select("field_name,value")
        .in("field_name", [
          "aboutme_whoami",
          "aboutme_experience",
          "aboutme_my_approach"
        ]);

      if (error) {
        console.error(error);
        return null;
      }

      const aboutme = data.reduce((acc, item) => {
        acc[item.field_name] = item.value;
        return acc;
      }, {} as Record<string, string>);

      return {
        whoami: aboutme.aboutme_whoami ?? "",
        experience: aboutme.aboutme_experience ?? "",
        myapproach: aboutme.aboutme_my_approach ?? "",
      };

    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
