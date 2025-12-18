import React, { useEffect } from "react";
import Root from "@theme-original/Root";

export default function RootWrapper(props) {
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 10;
      document.documentElement.classList.toggle("mk-scrolled", scrolled);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <Root {...props} />;
}