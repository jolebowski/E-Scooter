interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
}

export const updateSEO = ({ title, description, keywords = [] }: SEOProps) => {
  document.title = `${title} | E-Scooter`;
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }

  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute('content', keywords.join(', '));
  }
};
