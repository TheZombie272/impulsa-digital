import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
  path: string;
  robots?: string;
  image?: string;
  type?: 'website' | 'article';
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const DEFAULT_IMAGE = '/og-image.png';

const upsertMetaByName = (name: string, content: string) => {
  let element = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const upsertMetaByProperty = (property: string, content: string) => {
  let element = document.head.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const upsertCanonical = (href: string) => {
  let element = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
};

const upsertStructuredData = (structuredData?: Record<string, unknown> | Array<Record<string, unknown>>) => {
  const existing = document.getElementById('seo-structured-data');
  if (existing) {
    existing.remove();
  }

  if (!structuredData) {
    return;
  }

  const script = document.createElement('script');
  script.id = 'seo-structured-data';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
};

const Seo = ({
  title,
  description,
  path,
  robots = 'index,follow',
  image = DEFAULT_IMAGE,
  type = 'website',
  structuredData,
}: SeoProps) => {
  useEffect(() => {
    const siteUrl = (import.meta.env.VITE_SITE_URL as string | undefined) || window.location.origin;
    const canonical = new URL(path, siteUrl).toString();
    const absoluteImage = image.startsWith('http') ? image : new URL(image, siteUrl).toString();

    document.title = title;

    upsertMetaByName('description', description);
    upsertMetaByName('robots', robots);

    upsertMetaByProperty('og:title', title);
    upsertMetaByProperty('og:description', description);
    upsertMetaByProperty('og:type', type);
    upsertMetaByProperty('og:url', canonical);
    upsertMetaByProperty('og:image', absoluteImage);
    upsertMetaByProperty('og:site_name', 'Impulsa Digital');

    upsertMetaByName('twitter:card', 'summary_large_image');
    upsertMetaByName('twitter:title', title);
    upsertMetaByName('twitter:description', description);
    upsertMetaByName('twitter:image', absoluteImage);

    upsertCanonical(canonical);
    upsertStructuredData(structuredData);
  }, [title, description, path, robots, image, type, structuredData]);

  return null;
};

export default Seo;
