import { NextSeo } from 'next-seo';

const SEO = ({ title, description, image }) => (
  <NextSeo
    title={title}
    description={description}
    openGraph={{
      title,
      description,
      images: [{ url: image }],
    }}
  />
);

export default SEO;
