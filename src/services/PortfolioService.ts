import type { AboutMeProps } from '../models/aboutme';
import type { ContactProps } from '../models/contact';
import type { HeroProps } from '../models/hero';
import type { ProjectProps } from '../models/project';
import type { SkillProps } from '../models/skill';
import supabase from './supabase';
import portfolioData from './test.json';

export class PortfolioService {


  static async getSkills(): Promise<SkillProps[]> {
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

  static async  getContactDetails() : Promise<ContactProps> {
       try {
      const { data, error } = await supabase
        .from("config_settings")
        .select("field_name,value")
        .in("field_name", [
          "contact_email",
          "contact_phoneno",
          "contact_city"
        ]);

      if (error) {
        console.error(error);
        return {
          email: "",
          phone: "",
          address: ""
        };
      }

      const contact = data.reduce((acc, item) => {
        acc[item.field_name] = item.value;
        return acc;
      }, {} as Record<string, string>);

      return {
        email: contact.contact_email ?? "",
        phone: contact.contact_phoneno ?? "",
        address: contact.contact_city ?? ""
      };

    } catch (error) {
      console.error(error);
      return {
        email: "",
        phone: "",
        address: ""
      };
    }
  }

  static async getHeroDetails(): Promise<HeroProps | null> {
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

  static async getProjects(): Promise<ProjectProps[] | null> {

    try {
      const { data, error } = await supabase
        .from("projects")
        .select("id,title,description,link,project_tech(name)")

      if (error) {
        console.error(error);
        return null;
      }

      return data.map(project => ({
        id: project.id ?? 0,
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

  static async getProjectById(id: number): Promise<ProjectProps | null> {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select("id,title,description,link,project_tech(name),details")
        .eq("id", id)
        .single();

      if (error) {
        console.error(error);
        return null;
      }

      return {
        id:data.id ?? 0,
        title: data.title ?? "",
        description: data.description ?? "",
        tech: data.project_tech?.map(t => t.name) ?? [],
        link: data.link ?? "",
        details: data.details ?? "",
      };
    }catch (error) {
      console.error(error);
      return null;
    }
  }
  
  static async getAboutMeDetails():Promise<AboutMeProps | null>
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
