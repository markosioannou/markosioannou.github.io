import React from 'react';
import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.shell}>
        <div className={styles.footerTop}>
          © {new Date().getFullYear()} Markos Ioannou
        </div>

        <div className={styles.contactTag}>
          Built with GitHub Pages · Hosted at <code>markos-ioannou.com</code>
        </div>

        <div className={styles.footerLinks}>
          <a href="/contact.html">Contact</a>
          <a
            href="https://github.com/markosioannou"
            target="_blank"
            rel="noreferrer noopener">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/markosioannou"
            target="_blank"
            rel="noreferrer noopener">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
