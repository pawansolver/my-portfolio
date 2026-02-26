export interface CareerPage {
  slug: string;
  title: string;
  description?: string;
}

export const careerPages: CareerPage[] = [
  {
    slug: "internship-programs",
    title: "Internship Programs",
    description: "Explore our internship opportunities"
  },
  {
    slug: "life-at-nighwan",
    title: "Life at Nighwan",
    description: "Discover our work culture and environment"
  },
  {
    slug: "current-openings",
    title: "Current Openings",
    description: "View available job positions"
  }
];
