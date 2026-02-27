import { useEffect } from 'react';

export type SeoTag = {
  name?: string;
  property?: string;
  content: string;
};

export type SeoLink = {
  rel: string;
  href: string;
};

type SEOHeadProps = {
  title: string;
  tags: SeoTag[];
  links?: SeoLink[];
  jsonLd?: Record<string, unknown>[];
};

function applyMetaTag(tag: SeoTag) {
  const meta = document.createElement('meta');
  if (tag.name) meta.setAttribute('name', tag.name);
  if (tag.property) meta.setAttribute('property', tag.property);
  meta.setAttribute('content', tag.content);
  meta.setAttribute('data-seo', '1');
  document.head.appendChild(meta);
}

function applyLinkTag(link: SeoLink) {
  const el = document.createElement('link');
  el.setAttribute('rel', link.rel);
  el.setAttribute('href', link.href);
  el.setAttribute('data-seo', '1');
  document.head.appendChild(el);
}

function applyJsonLd(schema: Record<string, unknown>) {
  const script = document.createElement('script');
  script.setAttribute('type', 'application/ld+json');
  script.setAttribute('data-seo', '1');
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

export default function SEOHead({ title, tags, links = [], jsonLd = [] }: SEOHeadProps) {
  useEffect(() => {
    const existing = document.head.querySelectorAll('[data-seo="1"]');
    existing.forEach((el) => el.parentNode?.removeChild(el));

    if (title) document.title = title;
    tags.forEach(applyMetaTag);
    links.forEach(applyLinkTag);
    jsonLd.forEach(applyJsonLd);
  }, [title, tags, links, jsonLd]);

  return null;
}
