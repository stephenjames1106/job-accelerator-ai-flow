// DevianAd.tsx
import React, { useEffect, useRef } from "react";
import { renderDevianAd } from "./devian-ad"; // 👈 yeh wo TS file hai jo humne banayi

interface DevianAdProps {
  size?: "300x250" | "336x280" | "728x90" | "320x100" | "160x600" | "320x150";
  theme?: "light" | "dark";
  url?: string;
  cta?: string;
  headline?: string;
  sub?: string;
  track?: string;
  corner?: number;
}

const DevianAd: React.FC<DevianAdProps> = ({
  size = "300x250",
  theme = "dark",
  url = "https://devian.in/?utm_source=publisher&utm_medium=display&utm_campaign=devian_brand",
  cta ="Get a Free Quote",
  headline = "Build Stunning Web & Apps",
  sub = "Full-stack dev, UI/UX, and growth.",
  track,
  corner = 12,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      renderDevianAd({
        container: ref.current,
        size,
        theme,
        url,
        cta,
        headline,
        sub,
        track,
        corner,
      });
    }
  }, [size, theme, url, cta, headline, sub, track, corner]);

  return <div ref={ref} />;
};

export default DevianAd;
