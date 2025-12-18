// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const siteUrl = 'https://markos-ioannou.com';
const baseUrl = '/blog/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Markos Ioannou · Data & Analytics',
  tagline:
    'Personal website of Markos Ioannou, featuring data analytics and machine learning projects, skills, and experience.',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: siteUrl,
  baseUrl,

  organizationName: 'markosioannou',
  projectName: 'markosioannou.github.io',

  onBrokenLinks: 'throw',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  // Inject global <head> tags (your preview.html equivalent)
  headTags: [
    // Apple / iOS
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: `${siteUrl}/assets/icons/apple-touch-icon.png`,
      },
    },

    // Favicons
    {
      tagName: 'link',
      attributes: { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${siteUrl}/assets/icons/favicon-32x32.png` },
    },
    {
      tagName: 'link',
      attributes: { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${siteUrl}/assets/icons/favicon-16x16.png` },
    },

    // PWA
    {
      tagName: 'link',
      attributes: { rel: 'manifest', href: `${siteUrl}/assets/icons/site.webmanifest` },
    },

    // Theme color
    { tagName: 'meta', attributes: { name: 'theme-color', content: '#020617' } },

    // JSON-LD Person
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `${siteUrl}#person`,
        name: 'Markos Ioannou',
        url: siteUrl,
        image: `${siteUrl}/assets/images/profile.jpeg`,
        jobTitle: 'Data & Analytics · Bioinformatics',
        description:
          'Data analytics and machine learning professional with a focus on applied data science, insights, and real-world problem solving.',
        sameAs: [
          'https://www.linkedin.com/in/markosioannou',
          'https://github.com/markosioannou',
        ],
        knowsAbout: [
          'Data Analytics',
          'Machine Learning',
          'Data Science',
          'Python',
          'SQL',
          'Statistics',
          'Data Visualization',
          'Bioinformatics',
          'Healthcare Data Science',
          'Artificial Intelligence',
        ],
        mainEntityOfPage: { '@id': `${siteUrl}/#website` },
        worksFor: { '@id': `${siteUrl}/#organization` },
      }),
    },

    // JSON-LD Organization
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Markos Ioannou',
        url: `${siteUrl}/`,
        logo: `${siteUrl}/assets/images/logo.png`,
        sameAs: [
          'https://www.linkedin.com/in/markosioannou',
          'https://github.com/markosioannou',
        ],
        founder: { '@id': `${siteUrl}#person` },
      }),
    },

    // JSON-LD WebSite
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: 'Markos Ioannou',
        publisher: { '@id': `${siteUrl}/#organization` },
      }),
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */ ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          routeBasePath: '/', // blog index at /blog/ (because baseUrl is /blog/)
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
      // Default social card for OG/Twitter (acts like your preview.jpg default)
      image: '${siteUrl}/assets/images/preview.jpg',

      // Extra global meta defaults
      metadata: [
        { name: 'twitter:card', content: 'summary_large_image' },
      ],

      colorMode: {
        respectPrefersColorScheme: true,
        disableSwitch: true,
      },

      navbar: {
        title: '',
        logo: {
          alt: 'Markos',
          src: 'https://markos-ioannou.com/assets/icons/android-chrome-512x512.png', // put in blog_src/static/img/logo.png (or change)
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/', label: 'Blog', position: 'left' },

          {
            type: 'html',
            position: 'right',
            value: `
              <a href="https://markos-ioannou.com/contact.html"
                class="mk-pill-btn"
                aria-label="Available for opportunities">
                <span class="mk-pill-dot"></span>
                <span>Available for opportunities</span>
              </a>
            `,
          },
        ],
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;