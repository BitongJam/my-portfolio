export  interface ProjectProps {
  id: number;
  title: string;
  description: string;
  link: string;
  details?: string | null;
  tech: string[];
}