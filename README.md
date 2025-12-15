# 🌐 Markos Ioannou — Personal Website & Portfolio

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-brightgreen)
![Website](https://img.shields.io/website?url=https://markos-ioannou.com)
![Jekyll](https://img.shields.io/badge/Jekyll-Static%20Site-red)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-orange)
![Cloudflare Turnstile](https://img.shields.io/badge/Cloudflare-Turnstile-yellow)
![License](https://img.shields.io/badge/License-MIT-blue)

This repository contains the source code for my personal website and professional portfolio:

➡️ **https://markos-ioannou.com**

The site is built with **GitHub Pages** and **Jekyll**, designed to be fast, minimal, and maintainable, while showcasing my background in data analytics, machine learning, and bioinformatics.

---

## ✨ Overview

The website serves as a central professional hub and includes:

- 👋 Personal introduction and professional profile  
- 📊 Selected projects (data science, analytics, machine learning, bioinformatics)  
- 🧠 Skills, tools, and technologies  
- ✉️ A secure, spam-protected contact form  
- 🔍 SEO, social previews, and structured data  
- 📱 Fully responsive, mobile-first design  

---

## 🧱 Tech Stack

### Frontend
- **HTML5**
- **CSS3** (custom design system)
- **Vanilla JavaScript**
- **GitHub Pages**

### Static Site / Build
- **Jekyll**
- **Liquid templates**
- **jekyll-sitemap**

### Serverless Backend (Contact Form)
- **Cloudflare Workers**
- **Cloudflare Workers KV**
- **Cloudflare Turnstile** (anti-bot)
- **Resend** (email delivery)

### Other
- **Custom domain**
- **Minimal Google Analytics (consent-based)**

---

## ✉️ Contact Form Architecture

Although the site itself is fully static, the contact form uses a secure serverless workflow.

### High-level flow

1. User submits the form on a static page (GitHub Pages).
2. The form sends a `POST` request to a **Cloudflare Worker**.
3. The Worker performs:
   - Origin and payload validation  
   - Rate limiting  
   - Email format validation  
   - Disposable email blocking (KV-backed)  
   - DNS checks (MX / A / AAAA)  
   - Cloudflare Turnstile verification  
4. If all checks pass, the message is forwarded to my inbox via **Resend**.

### Why this approach?

- No traditional backend to maintain  
- No exposed secrets or API keys  
- Strong spam and abuse protection  
- Fully compatible with GitHub Pages  
- Privacy-friendly (no message storage)

---

## 📁 Repository Structure

```text
/
├── index.html
├── contact.html
├── 404.html
├── styles.css
├── _config.yml
├── footer.html
├── preview.html
├── assets/
│   ├── images/
│   ├── icons/
│   └── documents/
└── README.md
```

---

## 🚀 Local Usage

```bash
git clone https://github.com/markosioannou/markosioannou.github.io.git
cd markosioannou.github.io
open index.html
```

Optional full Jekyll build:

```bash
bundle install
bundle exec jekyll serve
```

---

## 📬 Contact

**Markos Ioannou**  
🌐 https://markos-ioannou.com  
💼 https://www.linkedin.com/in/markosioannou  
💻 https://github.com/markosioannou  

---

Thanks for visiting this repository 👋  
Yes — the contact form *is* intentionally over-engineered.
