export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  keywords?: string[];
  datePublished?: string;
  dateModified?: string;
};

export const blogPosts: BlogPost[] = [];

