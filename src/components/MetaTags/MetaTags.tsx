import React from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({ title, description }) => {
  React.useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, [title, description]);

  return null;
};

export default MetaTags;
