import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, path, type = 'website' }: { title: string; description: string; path: string; type?: string }) {
  const siteUrl = 'https://stratusdaily.netlify.app';
  const fullUrl = `${siteUrl}${path}`;
  return (
    <Helmet>
      <title>{title} | Stratus Daily</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta property="og:title" content={`${title} | Stratus Daily`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Stratus Daily" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | Stratus Daily`} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': type === 'article' ? 'Article' : 'WebPage',
        name: title,
        description,
        url: fullUrl,
        publisher: { '@type': 'Organization', name: 'Stratus Daily' }
      })}</script>
    </Helmet>
  );
}
