// devian-ad.ts

type AdSize = "300x250" | "336x280" | "728x90" | "320x100" | "160x600" | "320x150";
type Theme = "light" | "dark";

interface DevianAdConfig {
  container: HTMLElement;
  size?: AdSize;
  theme?: Theme;
  url?: string;
  cta?: string;
  headline?: string;
  sub?: string;
  track?: string; // optional tracking endpoint
  corner?: number;
}

export function renderDevianAd(config: DevianAdConfig): void {
  const {
    container,
    size = "300x250",
    theme = "dark",
    url = "https://devian.in/?utm_source=publisher&utm_medium=display&utm_campaign=devian_brand",
    cta,
    headline = "Build Stunning Web & Apps",
    sub = "Full-stack dev, UI/UX, and growth.",
    track = "",
    corner = 12,
  } = config;

  const sizes: Record<AdSize, { w: number; h: number; layout: string }> = {
    "300x250": { w: 300, h: 250, layout: "square" },
    "336x280": { w: 336, h: 280, layout: "square" },
    "728x90": { w: 728, h: 90, layout: "banner" },
    "320x100": { w: 320, h: 100, layout: "banner" },
    "160x600": { w: 160, h: 600, layout: "skyscraper" },
    "320x150": { w: 320, h: 150, layout: "banner" },
  };
  const meta = sizes[size];

  const palette =
    theme === "light"
      ? {
          bg: "#ffffff",
          card: "#f3f6f9",
          text: "#0b0f14",
          sub: "#394656",
          accent: "#1f9758",
          glow: "0 0 24px rgba(31,151,88,0.25)",
        }
      : {
          bg: "#0b0f14",
          card: "#0f1720",
          text: "#e7eef7",
          sub: "#a7b4c3",
          accent: "#37ff8b",
          glow: "0 0 32px rgba(55,255,139,0.35)",
        };

  // cleanup old ad
  container.innerHTML = "";

  // Create shadow root
  const wrapper = document.createElement("div");
  const shadow = wrapper.attachShadow({ mode: "open" });
  container.appendChild(wrapper);

  // Click + impression tracking
  const beacon = (payload: any) => {
    if (!track) return;
    try {
      const data = new Blob([JSON.stringify(payload)], { type: "application/json" });
      if (navigator.sendBeacon) {
        navigator.sendBeacon(track, data);
      } else {
        fetch(track, { method: "POST", body: JSON.stringify(payload) });
      }
    } catch {}
  };

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer sponsored";
  anchor.innerHTML = `
    <div class="ad">
      <div class="chrome">
        <div class="brand">
          <img src="https://devian.in/logo/logo.webp" alt="Devian Logo" class="logo" />
          <div class="name">Devian</div>
        </div>
        <div class="copy">
          <h3 class="headline">${headline}</h3>
          <p class="sub">${sub}</p>
        </div>
        <div class="cta">${cta}</div>
      </div>
      <div class="tag">Ad</div>
    </div>
  `;

  const style = document.createElement("style");
  style.textContent = `
    .ad {
      width: fit-content;
      height: ${meta.h}px;
      border-radius: ${corner}px;
      background: ${palette.bg};
      border: 1px solid ${theme === "light" ? "#e2e8f0" : "#1b2330"};
      box-shadow: ${palette.glow};
      font-family: sans-serif;
      display: grid;
      grid-template-rows: auto 1fr auto;
      padding: 12px;
      padding-bottom: 8px;
      color: ${palette.text};
      position: relative;
      overflow: hidden;
      margin: 8px auto 26px auto;
    }
    .brand { display: flex; align-items: center; gap: 6px; }
    .logo {
      width: 28px; 
      height: 28px;
      border-radius: 6px;
      object-fit: cover;
      background: #fff;
    }
    .name { font-weight: bold; font-size: 18px; }
    .headline { margin: 8px 0 4px; font-size: 16px; font-weight: bold; }
    .sub { margin: 0; font-size: 13px; color: ${palette.sub}; }
    .cta {
      margin-top: auto;
      background: ${palette.accent};
      color: #0b0f14;
      font-weight: bold;
      padding: 4px 12px;
      border-radius: 999px;
      display: inline-block;
      text-align: center;
      margin-top: 8px;
    }
    .tag {
      position: absolute;
      top: 6px; right: 8px;
      font-size: 10px;
      background: ${palette.card};
      padding: 2px 6px;
      border-radius: 999px;
      color: ${palette.sub};
    }
  `;

  shadow.appendChild(style);
  shadow.appendChild(anchor);

  // Track impression
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        beacon({ t: "impression", size, ts: Date.now() });
        observer.disconnect();
      }
    });
  });
  observer.observe(wrapper);

  anchor.addEventListener("click", () => {
    beacon({ t: "click", size, ts: Date.now() });
  });
}
