"use client";

import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    const shouldSkipIntro = url.searchParams.get("skipIntro") === "1";

    document.documentElement.dataset.intro = shouldSkipIntro ? "skip" : "play";

    if (shouldSkipIntro) {
      url.searchParams.delete("skipIntro");
      window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
      return;
    }

    setShowIntro(true);
  }, []);

  if (!showIntro) {
    return null;
  }

  return (
    <iframe
      className="introLoaderFrame"
      src="/agc-tech-loader.html"
      title="AGC TECH intro animation"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
