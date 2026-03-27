<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MatchMyHood — Find Your Neighbourhood, Anywhere in the World</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">
<link href="https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css" rel="stylesheet"/>
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%23C4622D'/><text y='24' x='5' font-size='22' font-family='serif' fill='white'>M</text></svg>">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YG0BGC28QZ"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-YG0BGC28QZ');</script>
<style>
  :root {
    --terracotta: #C4622D;
    --terracotta-light: #E8875A;
    --terracotta-dark: #9B4A20;
    --cream: #F8F1E7;
    --cream-dark: #EDE3D4;
    --sand: #D9C9B0;
    --earth: #3D2B1F;
    --earth-mid: #6B4C3B;
    --olive: #6B7C4A;
    --olive-light: #8EA065;
    --burgundy: #7A3030;
    --gold: #C9A455;
    --white: #FEFCF8;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    color: var(--earth);
    overflow-x: hidden;
  }

  /* ── TEXTURE OVERLAY ── */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1000;
    opacity: 0.4;
  }

  /* ── NAV ── */
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 18px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(248, 241, 231, 0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(196, 98, 45, 0.15);
    transition: all 0.3s ease;
  }

  .nav-logo {
    font-family: 'DM Serif Display', serif;
    font-size: 22px;
    color: var(--earth);
    text-decoration: none;
    letter-spacing: -0.3px;
  }

  .nav-logo span { color: var(--terracotta); }

  .nav-links {
    display: flex;
    gap: 36px;
    align-items: center;
    list-style: none;
  }

  .nav-links a {
    text-decoration: none;
    color: var(--earth-mid);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.3px;
    transition: color 0.2s;
  }

  .nav-links a:hover { color: var(--terracotta); }

  .nav-cta {
    background: var(--terracotta);
    color: var(--white) !important;
    padding: 10px 22px;
    border-radius: 100px;
    font-weight: 600 !important;
    transition: background 0.2s, transform 0.2s !important;
  }

  .nav-cta:hover {
    background: var(--terracotta-dark) !important;
    transform: translateY(-1px);
    color: var(--white) !important;
  }

  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 120px 48px 80px;
    position: relative;
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 70% 40%, rgba(196,98,45,0.08) 0%, transparent 70%),
      radial-gradient(ellipse 50% 50% at 20% 80%, rgba(107,124,74,0.07) 0%, transparent 60%),
      linear-gradient(160deg, var(--cream) 0%, var(--cream-dark) 100%);
  }

  /* Azulejo tile pattern in background */
  .hero-tiles {
    position: absolute;
    right: -40px;
    top: 50%;
    transform: translateY(-50%);
    width: 520px;
    height: 520px;
    opacity: 0.07;
    background-image: repeating-linear-gradient(
      0deg, var(--terracotta) 0px, var(--terracotta) 1px, transparent 1px, transparent 40px
    ),
    repeating-linear-gradient(
      90deg, var(--terracotta) 0px, var(--terracotta) 1px, transparent 1px, transparent 40px
    );
    border-radius: 50%;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 580px;
    animation: fadeUp 0.8s ease forwards;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(196, 98, 45, 0.1);
    border: 1px solid rgba(196, 98, 45, 0.25);
    padding: 7px 14px;
    border-radius: 100px;
    font-size: 12px;
    font-weight: 600;
    color: var(--terracotta-dark);
    letter-spacing: 0.8px;
    text-transform: uppercase;
    margin-bottom: 28px;
  }

  .hero-badge::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--terracotta);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }

  h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(48px, 6vw, 76px);
    font-weight: 600;
    line-height: 1.05;
    color: var(--earth);
    margin-bottom: 24px;
    letter-spacing: -1px;
  }

  h1 em {
    font-style: italic;
    color: var(--terracotta);
  }

  .hero-sub {
    font-size: 17px;
    line-height: 1.65;
    color: var(--earth-mid);
    margin-bottom: 44px;
    font-weight: 400;
    max-width: 460px;
  }

  /* ── HERO DEMO CARD ── */
  .hero-demo {
    position: relative;
    z-index: 2;
    margin-left: auto;
    width: 480px;
    animation: fadeUp 0.8s 0.2s ease both;
    flex-shrink: 0;
  }

  .demo-card {
    background: var(--white);
    border-radius: 24px;
    padding: 32px;
    box-shadow:
      0 2px 4px rgba(61,43,31,0.04),
      0 8px 24px rgba(61,43,31,0.08),
      0 32px 64px rgba(61,43,31,0.10);
    border: 1px solid rgba(196,98,45,0.1);
  }

  .demo-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: var(--sand);
    margin-bottom: 12px;
  }

  .demo-match-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
  }

  .demo-hood {
    flex: 1;
    background: var(--cream);
    border-radius: 14px;
    padding: 16px;
    border: 1px solid var(--cream-dark);
  }

  .demo-hood-city {
    font-size: 11px;
    font-weight: 600;
    color: var(--terracotta);
    letter-spacing: 0.8px;
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .demo-hood-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 600;
    color: var(--earth);
    line-height: 1.2;
  }

  .demo-arrow {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    color: var(--terracotta);
    font-size: 20px;
    flex-shrink: 0;
  }

  .match-score-badge {
    background: var(--terracotta);
    color: white;
    font-size: 10px;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 100px;
    letter-spacing: 0.3px;
  }

  .demo-result {
    background: linear-gradient(135deg, rgba(196,98,45,0.08), rgba(107,124,74,0.06));
    border: 1px solid rgba(196,98,45,0.2);
    border-radius: 14px;
    padding: 16px;
  }

  .demo-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 14px;
  }

  .demo-tag {
    font-size: 11px;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 100px;
    background: rgba(196,98,45,0.1);
    color: var(--terracotta-dark);
    border: 1px solid rgba(196,98,45,0.15);
  }

  .demo-tag.green {
    background: rgba(107,124,74,0.1);
    color: var(--olive);
    border-color: rgba(107,124,74,0.2);
  }

  .demo-why {
    margin-top: 16px;
    font-size: 13px;
    line-height: 1.6;
    color: var(--earth-mid);
    font-style: italic;
    border-top: 1px solid var(--cream-dark);
    padding-top: 14px;
  }

  /* ── SEARCH SECTION ── */
  .search-section {
    background: var(--earth);
    padding: 80px 48px;
    position: relative;
    overflow: hidden;
  }

  .search-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 30px,
      rgba(255,255,255,0.015) 30px,
      rgba(255,255,255,0.015) 31px
    );
  }

  .search-inner {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    text-align: center;
  }

  .search-inner h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(36px, 4vw, 54px);
    font-weight: 600;
    color: var(--cream);
    margin-bottom: 12px;
    letter-spacing: -0.5px;
  }

  .search-inner h2 em {
    font-style: italic;
    color: var(--terracotta-light);
  }

  .search-inner p {
    font-size: 16px;
    color: rgba(248,241,231,0.6);
    margin-bottom: 44px;
  }

  .search-form {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px;
    padding: 28px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr auto;
    gap: 14px;
    align-items: end;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: left;
  }

  .form-group label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgba(248,241,231,0.5);
  }

  .form-group select,
  .form-group input {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 12px;
    padding: 14px 16px;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    color: var(--cream);
    outline: none;
    transition: border-color 0.2s, background 0.2s;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
  }

  .form-group select option { background: var(--earth); color: var(--cream); }

  .form-group select:focus,
  .form-group input:focus {
    border-color: var(--terracotta-light);
    background: rgba(255,255,255,0.12);
  }

  .form-group input::placeholder { color: rgba(248,241,231,0.3); }

  .search-btn {
    background: var(--terracotta);
    color: white;
    border: none;
    border-radius: 12px;
    padding: 14px 28px;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
    height: 52px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .search-btn:hover {
    background: var(--terracotta-light);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(196,98,45,0.4);
  }

  .search-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  /* ── RESULTS ── */
  .results-area {
    margin-top: 32px;
    text-align: left;
    display: none;
  }

  .results-area.visible { display: block; animation: fadeUp 0.5s ease; }

  .result-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 14px;
  }

  .result-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .result-hood-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px;
    font-weight: 600;
    color: var(--cream);
  }

  .result-score {
    background: var(--terracotta);
    color: white;
    font-size: 13px;
    font-weight: 700;
    padding: 6px 14px;
    border-radius: 100px;
  }

  .result-city {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: var(--terracotta-light);
    margin-bottom: 10px;
  }

  .result-desc {
    font-size: 14px;
    line-height: 1.65;
    color: rgba(248,241,231,0.7);
    margin-bottom: 14px;
  }

  .result-tags { display: flex; flex-wrap: wrap; gap: 6px; }

  .result-tag {
    font-size: 11px;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 100px;
    background: rgba(196,98,45,0.2);
    color: var(--terracotta-light);
    border: 1px solid rgba(196,98,45,0.25);
  }

  .result-extras {
    margin-top: 14px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .result-extra {
    background: rgba(255,255,255,0.04);
    border-radius: 10px;
    padding: 10px 12px;
  }

  .result-extra-label {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: rgba(248,241,231,0.35);
    margin-bottom: 4px;
  }

  .result-extra-val {
    font-size: 13px;
    font-weight: 500;
    color: rgba(248,241,231,0.8);
  }

  .booking-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
    background: var(--olive);
    color: white;
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    padding: 10px 18px;
    border-radius: 100px;
    transition: all 0.2s;
  }

  .booking-btn:hover { background: var(--olive-light); transform: translateY(-1px); }

  .loading-msg {
    text-align: center;
    padding: 32px;
    color: rgba(248,241,231,0.5);
    font-size: 15px;
    display: none;
  }

  .loading-msg.visible {
    display: block;
    animation: fadeUp 0.3s ease;
  }

  .loading-dots::after {
    content: '';
    animation: dots 1.5s infinite;
  }

  @keyframes dots {
    0% { content: '.'; }
    33% { content: '..'; }
    66% { content: '...'; }
  }

  .error-msg {
    background: rgba(122,48,48,0.3);
    border: 1px solid rgba(122,48,48,0.5);
    border-radius: 12px;
    padding: 16px 20px;
    color: #ffb3b3;
    font-size: 14px;
    display: none;
    margin-top: 16px;
  }

  .error-msg.visible { display: block; }

  /* ── INTENT MODE SELECTOR ── */
  .intent-section {
    background: var(--white);
    padding: 64px 48px;
    border-bottom: 1px solid var(--cream-dark);
  }
  .intent-inner { max-width: 900px; margin: 0 auto; }
  .intent-pre {
    font-family: 'Cormorant Garamond', serif;
    font-size: 26px;
    font-weight: 500;
    color: var(--earth);
    text-align: center;
    margin-bottom: 36px;
    font-style: italic;
  }
  .intent-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .intent-card {
    border-radius: 20px;
    overflow: hidden;
    text-decoration: none;
    display: block;
    position: relative;
    border: 2px solid transparent;
    transition: all 0.3s;
    box-shadow: 0 4px 16px rgba(61,43,31,0.06);
  }
  .intent-card:hover {
    border-color: var(--terracotta);
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(61,43,31,0.14);
  }
  .intent-card.active { border-color: var(--terracotta); }
  .intent-card-photo {
    height: 200px;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  .intent-card-photo::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(61,43,31,0.1) 0%, rgba(61,43,31,0.55) 100%);
    transition: opacity 0.3s;
  }
  .intent-card:hover .intent-card-photo::after { opacity: 0.75; }
  .intent-card-body {
    background: var(--white);
    padding: 24px 28px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .intent-icon {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: rgba(196,98,45,0.08);
    border: 1px solid rgba(196,98,45,0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--terracotta);
    margin-bottom: 4px;
    transition: all 0.3s;
  }
  .intent-card:hover .intent-icon {
    background: var(--terracotta);
    color: white;
    border-color: var(--terracotta);
  }
  .intent-label {
    font-family: 'Cormorant Garamond', serif;
    font-size: 30px;
    font-weight: 600;
    color: var(--earth);
    line-height: 1;
  }
  .intent-desc {
    font-size: 14px;
    line-height: 1.6;
    color: var(--earth-mid);
  }
  .intent-arrow {
    font-size: 13px;
    font-weight: 600;
    color: var(--terracotta);
    margin-top: 4px;
    transition: gap 0.2s;
  }
  .intent-card:hover .intent-arrow { letter-spacing: 0.3px; }

  /* ── STEP SVG ICON ── */
  .step-svg-icon {
    width: 64px;
    height: 64px;
    background: rgba(196,98,45,0.07);
    border-radius: 18px;
    border: 1px solid rgba(196,98,45,0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    transition: all 0.3s;
  }
  .step:hover .step-svg-icon {
    background: rgba(196,98,45,0.13);
    transform: scale(1.05);
  }

  /* ── HOW IT WORKS ── */
  .how-section {
    padding: 100px 48px;
    background: var(--cream);
  }

  .section-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    color: var(--terracotta);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .section-label::before {
    content: '';
    width: 24px;
    height: 2px;
    background: var(--terracotta);
    display: inline-block;
  }

  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(36px, 4vw, 52px);
    font-weight: 600;
    color: var(--earth);
    margin-bottom: 60px;
    line-height: 1.15;
    letter-spacing: -0.5px;
    max-width: 600px;
  }

  .section-title em { font-style: italic; color: var(--terracotta); }

  .steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    max-width: 1000px;
  }

  .step {
    padding: 40px 36px;
    background: var(--white);
    position: relative;
    transition: transform 0.3s;
  }

  .step:first-child { border-radius: 24px 0 0 24px; }
  .step:last-child { border-radius: 0 24px 24px 0; }
  .step:hover { transform: translateY(-4px); z-index: 2; box-shadow: 0 16px 48px rgba(61,43,31,0.12); border-radius: 20px; }

  .step-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 64px;
    font-weight: 700;
    color: rgba(196,98,45,0.12);
    line-height: 1;
    margin-bottom: 20px;
  }

  .step-icon {
    font-size: 32px;
    margin-bottom: 16px;
  }

  .step h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 24px;
    font-weight: 600;
    color: var(--earth);
    margin-bottom: 12px;
  }

  .step p {
    font-size: 14px;
    line-height: 1.7;
    color: var(--earth-mid);
  }

  /* ── SAMPLE MATCHES ── */
  .matches-section {
    padding: 100px 48px;
    background: var(--cream-dark);
    overflow: hidden;
  }

  .matches-scroll {
    display: flex;
    gap: 20px;
    margin-top: 48px;
    overflow-x: auto;
    padding-bottom: 20px;
    scrollbar-width: none;
  }

  .matches-scroll::-webkit-scrollbar { display: none; }

  .match-pair {
    flex-shrink: 0;
    width: 340px;
    background: var(--white);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(61,43,31,0.06);
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: default;
  }

  .match-pair:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 48px rgba(61,43,31,0.14);
  }

  .match-pair-header {
    padding: 24px 24px 16px;
    background: linear-gradient(135deg, var(--earth) 0%, var(--earth-mid) 100%);
    position: relative;
  }

  .match-pair-header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, var(--terracotta), transparent);
  }

  .match-from {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: rgba(248,241,231,0.45);
    margin-bottom: 4px;
  }

  .match-from-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 26px;
    font-weight: 600;
    color: var(--cream);
  }

  .match-pair-body { padding: 20px 24px 24px; }

  .match-arrow-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  .match-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, var(--terracotta), var(--olive));
  }

  .match-pct {
    font-size: 12px;
    font-weight: 700;
    color: var(--terracotta);
    background: rgba(196,98,45,0.1);
    padding: 4px 10px;
    border-radius: 100px;
  }

  .match-to {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: var(--terracotta);
    margin-bottom: 4px;
  }

  .match-to-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px;
    font-weight: 600;
    color: var(--earth);
    margin-bottom: 10px;
  }

  .match-desc {
    font-size: 13px;
    line-height: 1.65;
    color: var(--earth-mid);
    margin-bottom: 14px;
  }

  .match-vibes { display: flex; flex-wrap: wrap; gap: 6px; }

  .match-vibe {
    font-size: 11px;
    padding: 3px 9px;
    border-radius: 100px;
    font-weight: 500;
  }

  .vibe-terra { background: rgba(196,98,45,0.1); color: var(--terracotta-dark); }
  .vibe-olive { background: rgba(107,124,74,0.1); color: var(--olive); }
  .vibe-gold { background: rgba(201,164,85,0.15); color: #8B6914; }

  /* ── WHY ICON SVG ── */
  .why-icon-svg {
    width: 56px;
    height: 56px;
    background: rgba(196,98,45,0.08);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    border: 1px solid rgba(196,98,45,0.12);
    transition: all 0.3s;
  }
  .why-card:hover .why-icon-svg {
    background: rgba(196,98,45,0.14);
    transform: scale(1.05);
  }

  /* ── MATCH PHOTO CARDS ── */
  .match-photo {
    height: 160px;
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
  }
  .match-photo::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(61,43,31,0.2) 0%, rgba(61,43,31,0.7) 100%);
  }
  .match-photo-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px 20px;
    z-index: 2;
  }

  /* ── PRICING ── */
  .pricing-section {
    padding: 100px 48px;
    background: var(--cream);
  }
  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    max-width: 1200px;
    align-items: start;
  }
  .price-card {
    background: var(--white);
    border-radius: 24px;
    padding: 36px 32px;
    border: 1px solid var(--cream-dark);
    position: relative;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .price-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(61,43,31,0.10);
  }
  .price-card-featured {
    background: var(--earth);
    border-color: var(--earth);
    transform: scale(1.03);
  }
  .price-card-featured:hover { transform: scale(1.03) translateY(-4px); }
  .price-card-lifetime {
    border-color: rgba(201,164,85,0.4);
    background: linear-gradient(135deg, var(--white) 0%, rgba(201,164,85,0.05) 100%);
  }
  .price-badge {
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    background: var(--terracotta);
    color: white;
    padding: 4px 12px;
    border-radius: 100px;
    margin-bottom: 16px;
  }
  .price-badge-gold {
    background: var(--gold);
    color: var(--earth);
  }
  .price-tier {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px;
    font-weight: 600;
    color: var(--earth);
    margin-bottom: 8px;
  }
  .price-card-featured .price-tier { color: var(--cream); }
  .price-amount {
    font-family: 'Cormorant Garamond', serif;
    font-size: 52px;
    font-weight: 700;
    color: var(--terracotta);
    line-height: 1;
    margin-bottom: 12px;
  }
  .price-card-featured .price-amount { color: var(--terracotta-light); }
  .price-card-lifetime .price-amount { color: var(--gold); }
  .price-amount span {
    font-size: 16px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    color: var(--earth-mid);
  }
  .price-card-featured .price-amount span { color: rgba(248,241,231,0.5); }
  .price-desc {
    font-size: 14px;
    color: var(--earth-mid);
    margin-bottom: 24px;
    line-height: 1.5;
    border-bottom: 1px solid var(--cream-dark);
    padding-bottom: 20px;
  }
  .price-card-featured .price-desc {
    color: rgba(248,241,231,0.6);
    border-color: rgba(255,255,255,0.1);
  }
  .price-features {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 28px;
  }
  .price-features li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: var(--earth);
  }
  .price-card-featured .price-features li { color: var(--cream); }
  .price-features li.disabled { color: var(--sand); }
  .price-btn {
    display: block;
    text-align: center;
    text-decoration: none;
    padding: 14px 24px;
    border-radius: 100px;
    font-size: 15px;
    font-weight: 600;
    transition: all 0.2s;
  }
  .price-btn-outline {
    border: 1.5px solid var(--sand);
    color: var(--earth);
  }
  .price-btn-outline:hover { border-color: var(--terracotta); color: var(--terracotta); }
  .price-btn-light {
    background: var(--cream);
    color: var(--earth);
  }
  .price-btn-light:hover { background: var(--white); transform: translateY(-1px); }
  .price-btn-gold {
    background: var(--gold);
    color: var(--earth);
    font-weight: 700;
  }
  .price-btn-gold:hover { background: #d4aa5e; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201,164,85,0.4); }

  /* ── ROADMAP ── */
  .roadmap-section {
    padding: 100px 48px;
    background: var(--cream-dark);
  }
  .roadmap-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    margin-top: 56px;
    max-width: 1100px;
  }
  .roadmap-col {
    background: var(--white);
    padding: 36px 32px;
  }
  .roadmap-col:first-child { border-radius: 20px 0 0 20px; }
  .roadmap-col:last-child { border-radius: 0 20px 20px 0; }
  .roadmap-phase-label {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: var(--earth-mid);
    margin-bottom: 28px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--cream-dark);
  }
  .phase-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .phase-dot-live { background: #6B7C4A; box-shadow: 0 0 0 3px rgba(107,124,74,0.2); animation: pulse 2s infinite; }
  .phase-dot-soon { background: var(--gold); }
  .phase-dot-future { background: var(--sand); }
  .roadmap-items { display: flex; flex-direction: column; gap: 20px; }
  .roadmap-item {
    display: flex;
    gap: 14px;
    align-items: flex-start;
  }
  .roadmap-item-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: rgba(196,98,45,0.08);
    border: 1px solid rgba(196,98,45,0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: var(--terracotta);
  }
  .roadmap-soon .roadmap-item-icon { background: rgba(201,164,85,0.1); border-color: rgba(201,164,85,0.2); color: #8B6914; }
  .roadmap-future .roadmap-item-icon { background: rgba(107,124,74,0.1); border-color: rgba(107,124,74,0.2); color: var(--olive); }
  .roadmap-item-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--earth);
    margin-bottom: 3px;
  }
  .roadmap-item-desc {
    font-size: 12px;
    line-height: 1.55;
    color: var(--earth-mid);
  }

  /* ── RESPONSIVE ADDITIONS ── */
  @media (max-width: 900px) {
    .pricing-grid { grid-template-columns: repeat(2, 1fr); }
    .price-card-featured { transform: none; }
    .price-card-featured:hover { transform: translateY(-4px); }
    .roadmap-grid { grid-template-columns: 1fr; }
    .roadmap-col:first-child, .roadmap-col:last-child { border-radius: 20px; }
    .roadmap-col { border-radius: 20px; }
    .pricing-section, .roadmap-section { padding: 60px 24px; }
  }
  @media (max-width: 600px) {
    .pricing-grid { grid-template-columns: 1fr; }
  }

  .why-section {
    padding: 100px 48px;
    background: var(--white);
  }

  .why-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-top: 60px;
    max-width: 1100px;
  }

  .why-card {
    padding: 36px 32px;
    border-radius: 20px;
    border: 1px solid var(--cream-dark);
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
  }

  .why-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--terracotta), var(--gold));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s;
  }

  .why-card:hover::before { transform: scaleX(1); }
  .why-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(61,43,31,0.08); }

  .why-icon { font-size: 36px; margin-bottom: 20px; }

  .why-card h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 600;
    color: var(--earth);
    margin-bottom: 10px;
  }

  .why-card p {
    font-size: 14px;
    line-height: 1.7;
    color: var(--earth-mid);
  }

  /* ── NEWSLETTER ── */
  .newsletter-section {
    padding: 100px 48px;
    background: linear-gradient(135deg, var(--terracotta-dark) 0%, var(--earth) 100%);
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .newsletter-section::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: rgba(196,98,45,0.15);
  }

  .newsletter-section::after {
    content: '';
    position: absolute;
    bottom: -80px;
    left: -80px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgba(107,124,74,0.1);
  }

  .newsletter-inner { position: relative; z-index: 2; max-width: 540px; margin: 0 auto; }

  .newsletter-inner h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(36px, 4vw, 52px);
    font-weight: 600;
    color: var(--cream);
    margin-bottom: 16px;
    line-height: 1.1;
  }

  .newsletter-inner p {
    font-size: 16px;
    color: rgba(248,241,231,0.65);
    margin-bottom: 36px;
    line-height: 1.6;
  }

  .newsletter-form {
    display: flex;
    gap: 10px;
    max-width: 440px;
    margin: 0 auto;
  }

  .newsletter-form input {
    flex: 1;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 12px;
    padding: 16px 20px;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    color: var(--cream);
    outline: none;
    transition: border-color 0.2s;
  }

  .newsletter-form input::placeholder { color: rgba(248,241,231,0.35); }
  .newsletter-form input:focus { border-color: var(--terracotta-light); }

  .newsletter-form button {
    background: var(--cream);
    color: var(--terracotta-dark);
    border: none;
    border-radius: 12px;
    padding: 16px 24px;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
  }

  .newsletter-form button:hover {
    background: var(--white);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  }

  .newsletter-success {
    display: none;
    background: rgba(107,124,74,0.2);
    border: 1px solid rgba(107,124,74,0.4);
    border-radius: 12px;
    padding: 16px 24px;
    color: #b8d4a0;
    font-size: 14px;
    margin-top: 16px;
  }

  /* ── FOOTER ── */
  footer {
    background: var(--earth);
    padding: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer-logo {
    font-family: 'DM Serif Display', serif;
    font-size: 20px;
    color: var(--cream);
  }

  .footer-logo span { color: var(--terracotta-light); }

  .footer-tagline {
    font-size: 13px;
    color: rgba(248,241,231,0.4);
    margin-top: 6px;
  }

  .footer-links {
    display: flex;
    gap: 28px;
    list-style: none;
  }

  .footer-links a {
    text-decoration: none;
    font-size: 13px;
    color: rgba(248,241,231,0.45);
    transition: color 0.2s;
  }

  .footer-links a:hover { color: var(--terracotta-light); }

  .footer-copy {
    font-size: 12px;
    color: rgba(248,241,231,0.3);
  }

  /* ── STATS BAR ── */
  .stats-bar {
    background: var(--cream-dark);
    padding: 28px 48px;
    display: flex;
    justify-content: center;
    gap: 80px;
    border-top: 1px solid var(--sand);
    border-bottom: 1px solid var(--sand);
  }

  .stat {
    text-align: center;
  }

  .stat-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 40px;
    font-weight: 700;
    color: var(--terracotta);
    line-height: 1;
  }

  .stat-label {
    font-size: 12px;
    font-weight: 500;
    color: var(--earth-mid);
    margin-top: 4px;
    letter-spacing: 0.3px;
  }

  /* Responsive */
  @media (max-width: 900px) {
    .intent-cards { grid-template-columns: 1fr; }
    .intent-section { padding: 48px 24px; }
    nav { padding: 16px 24px; }
    .nav-links { display: none; }
    .hero { flex-direction: column; padding: 100px 24px 60px; gap: 40px; }
    .hero-demo { width: 100%; margin-left: 0; }
    .search-form { grid-template-columns: 1fr; }
    .steps-grid { grid-template-columns: 1fr; }
    .step:first-child, .step:last-child { border-radius: 20px; }
    .why-grid { grid-template-columns: 1fr; }
    .stats-bar { gap: 40px; flex-wrap: wrap; }
    footer { flex-direction: column; gap: 24px; text-align: center; }
    .footer-links { justify-content: center; }
    .how-section, .matches-section, .why-section, .newsletter-section, .search-section { padding: 60px 24px; }
    .booking-btns { flex-direction: column; }
    .suggestions-grid { grid-template-columns: 1fr; }
  }

  /* VIBE SELECTOR */
  .vibe-selector-wrap { grid-column: 1 / -1; padding: 0 2px; }
  .vibe-selector-label { font-size: 11px; letter-spacing: 0.8px; text-transform: uppercase; color: rgba(248,241,231,0.5); font-weight: 600; margin-bottom: 10px; }
  .vibe-pills { display: flex; flex-wrap: wrap; gap: 8px; }
  .vibe-pill { display: inline-flex; align-items: center; gap: 5px; padding: 7px 14px; border-radius: 100px; border: 1.5px solid rgba(248,241,231,0.2); background: rgba(248,241,231,0.05); color: rgba(248,241,231,0.7); font-size: 13px; font-family: 'DM Sans', sans-serif; cursor: pointer; transition: all 0.2s; user-select: none; white-space: nowrap; }
  .vibe-pill:hover { border-color: var(--terracotta-light); color: var(--cream); }
  .vibe-pill.active { background: var(--terracotta); border-color: var(--terracotta); color: white; font-weight: 600; }

  /* RESULT PHOTO */
  .result-photo { width: 100%; height: 200px; object-fit: cover; border-radius: 12px; margin-bottom: 16px; display: block; }
  .result-photo-placeholder { width: 100%; height: 180px; border-radius: 12px; margin-bottom: 16px; background: linear-gradient(135deg, rgba(196,98,45,0.2), rgba(61,43,31,0.4)); display: flex; align-items: center; justify-content: center; color: rgba(248,241,231,0.3); font-size: 13px; }

  /* RESULT MAP */
  .result-map { width: 100%; height: 280px; border-radius: 12px; margin: 16px 0; position: relative; }
  .result-map.fullscreen { position: fixed !important; top: 0 !important; left: 0 !important; width: 100vw !important; height: 100vh !important; border-radius: 0 !important; z-index: 9999 !important; margin: 0 !important; overflow: visible !important; }
  .map-expand-btn { position: absolute; top: 8px; left: 8px; z-index: 10; background: rgba(61,43,31,0.85); color: var(--cream); border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; padding: 5px 10px; font-size: 12px; font-weight: 600; cursor: pointer; font-family: 'DM Sans', sans-serif; transition: all 0.2s; backdrop-filter: blur(4px); }
  .map-expand-btn:hover { background: var(--terracotta); }
  .map-layer-pills { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
  .map-layer-pill { display: inline-flex; align-items: center; gap: 4px; padding: 5px 12px; border-radius: 100px; border: 1.5px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.05); color: rgba(248,241,231,0.6); font-size: 12px; font-family: 'DM Sans', sans-serif; cursor: pointer; transition: all 0.2s; user-select: none; }
  .map-layer-pill:hover { border-color: var(--terracotta-light); color: var(--cream); }
  .map-3d-toggle { display: inline-flex; align-items: center; gap: 4px; padding: 5px 12px; border-radius: 100px; border: 1.5px solid rgba(255,255,255,0.15); background: rgba(20,20,20,0.75); color: rgba(248,241,231,0.6); font-size: 12px; font-family: 'DM Sans', sans-serif; cursor: pointer; transition: all 0.2s; user-select: none; backdrop-filter: blur(4px); box-shadow: 0 1px 4px rgba(0,0,0,0.3); }
  .map-3d-toggle:hover { border-color: var(--terracotta-light); color: var(--cream); }
  .map-3d-toggle.active { background: var(--terracotta); border-color: var(--terracotta); color: white; font-weight: 600; }
  .mapboxgl-ctrl.mapboxgl-ctrl-3d { background: none; box-shadow: none; margin: 0; }
  .mapboxgl-popup-content { background: var(--earth) !important; color: var(--cream) !important; border-radius: 8px !important; padding: 4px !important; box-shadow: 0 4px 16px rgba(0,0,0,0.3) !important; }
  .mapboxgl-popup-tip { border-top-color: var(--earth) !important; }
  .mapboxgl-ctrl-group { background: var(--earth) !important; border: 1px solid rgba(255,255,255,0.1) !important; }
  .mapboxgl-ctrl-group button { background: transparent !important; }
  .mapboxgl-ctrl-group button .mapboxgl-ctrl-icon { filter: invert(1) !important; }

  /* TOP 3 PICKS */
  .picks-section { margin: 14px 0; }
  .picks-title { font-size: 11px; letter-spacing: 0.8px; text-transform: uppercase; color: rgba(248,241,231,0.5); font-weight: 600; margin-bottom: 8px; }
  .picks-list { display: flex; flex-direction: column; gap: 6px; }
  .pick-item { display: flex; align-items: flex-start; gap: 10px; padding: 10px 12px; background: rgba(255,255,255,0.04); border-radius: 10px; border: 1px solid rgba(255,255,255,0.06); }
  .pick-num { font-size: 11px; color: var(--terracotta-light); font-weight: 700; min-width: 16px; margin-top: 2px; }
  .pick-info { flex: 1; }
  .pick-name { font-size: 14px; color: var(--cream); font-weight: 600; margin-bottom: 2px; }
  .pick-desc { font-size: 12px; color: rgba(248,241,231,0.5); line-height: 1.4; }
  .pick-link { font-size: 11px; color: var(--terracotta-light); text-decoration: none; margin-top: 4px; display: inline-block; transition: color 0.2s; }
  .pick-link:hover { color: var(--cream); }

  /* MUST TRY */
  .must-try { margin: 12px 0; padding: 12px 14px; background: rgba(196,98,45,0.1); border-radius: 10px; border: 1px solid rgba(196,98,45,0.2); font-size: 13px; color: rgba(248,241,231,0.85); line-height: 1.5; }
  .must-try strong { color: var(--terracotta-light); }

  /* BOOKING BUTTONS */
  .booking-btns { display: flex; gap: 10px; margin-top: 16px; flex-wrap: wrap; }
  .booking-btn-hotel { flex: 1; min-width: 140px; display: inline-flex; align-items: center; justify-content: center; gap: 6px; padding: 12px 16px; background: var(--terracotta); color: white; text-decoration: none; border-radius: 100px; font-size: 13px; font-weight: 600; font-family: 'DM Sans', sans-serif; transition: all 0.2s; text-align: center; }
  .booking-btn-hotel:hover { background: var(--terracotta-dark); transform: translateY(-1px); }
  .booking-btn-airbnb { flex: 1; min-width: 140px; display: inline-flex; align-items: center; justify-content: center; gap: 6px; padding: 12px 16px; background: transparent; color: var(--cream); text-decoration: none; border-radius: 100px; font-size: 13px; font-weight: 600; font-family: 'DM Sans', sans-serif; border: 1.5px solid rgba(248,241,231,0.25); transition: all 0.2s; text-align: center; }
  .booking-btn-airbnb:hover { border-color: var(--cream); transform: translateY(-1px); }

  /* SUGGESTION SECTION */
  .suggestions-section { background: var(--cream-dark); padding: 80px 24px; }
  .suggestions-inner { max-width: 860px; margin: 0 auto; }
  .suggestions-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-top: 40px; }
  .suggestion-card { background: white; border-radius: 16px; padding: 28px; box-shadow: 0 2px 16px rgba(61,43,31,0.06); }
  .suggestion-card h3 { font-family: 'Cormorant Garamond', serif; font-size: 22px; color: var(--earth); margin-bottom: 8px; font-weight: 600; }
  .suggestion-card p { font-size: 14px; color: var(--earth-mid); margin-bottom: 20px; line-height: 1.6; }
  .suggestion-input { width: 100%; padding: 12px 16px; border: 1.5px solid var(--sand); border-radius: 10px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: var(--earth); background: var(--cream); box-sizing: border-box; margin-bottom: 10px; resize: vertical; min-height: 80px; }
  .suggestion-input:focus { outline: none; border-color: var(--terracotta); }
  .suggestion-btn { width: 100%; padding: 12px; background: var(--earth); color: white; border: none; border-radius: 100px; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
  .suggestion-btn:hover { background: var(--terracotta); }
  .suggestion-success { display: none; font-size: 13px; color: var(--terracotta); margin-top: 10px; font-weight: 600; }

  /* PLAN SELECTOR IN WAITLIST */
  .plan-select { width: 100%; padding: 12px 16px; border: 1.5px solid rgba(248,241,231,0.2); border-radius: 10px; background: rgba(255,255,255,0.08); color: var(--cream); font-family: 'DM Sans', sans-serif; font-size: 14px; margin-bottom: 12px; appearance: none; cursor: pointer; }
  .plan-select:focus { outline: none; border-color: var(--terracotta); }
  .plan-select option { background: var(--earth); color: var(--cream); }
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <a href="#" class="nav-logo">Match<span>My</span>Hood</a>
  <ul class="nav-links">
    <li><a href="#how">How it works</a></li>
    <li><a href="#examples">Examples</a></li>
    <li><a href="#pricing">Pricing</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#newsletter" class="nav-cta">Get early access</a></li>
  </ul>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-tiles"></div>

  <div class="hero-content">
    <div class="hero-badge">Now in beta · 30+ cities covered</div>
    <h1>Love a neighbourhood.<br>Find it <em>everywhere.</em></h1>
    <p class="hero-sub">
      Tell us where you love in your city — MatchMyHood finds your perfect equivalent anywhere in the world. Stop staying in the wrong part of town.
    </p>
    <div style="display:flex; gap:14px; flex-wrap:wrap;">
      <a href="#match" style="display:inline-flex; align-items:center; gap:8px; background:var(--terracotta); color:white; text-decoration:none; padding:16px 28px; border-radius:100px; font-weight:600; font-size:15px; transition:all 0.2s;" onmouseover="this.style.background='var(--terracotta-dark)'; this.style.transform='translateY(-2px)'" onmouseout="this.style.background='var(--terracotta)'; this.style.transform='translateY(0)'">
        ✦ Match my hood
      </a>
      <a href="#examples" style="display:inline-flex; align-items:center; gap:8px; background:transparent; color:var(--earth); text-decoration:none; padding:16px 28px; border-radius:100px; font-weight:500; font-size:15px; border:1.5px solid var(--sand); transition:all 0.2s;" onmouseover="this.style.borderColor='var(--terracotta)'; this.style.color='var(--terracotta)'" onmouseout="this.style.borderColor='var(--sand)'; this.style.color='var(--earth)'">
        See examples →
      </a>
    </div>
  </div>

  <!-- Hero demo card -->
  <div class="hero-demo">
    <div class="demo-card">
      <div class="demo-label">✦ Live match example</div>
      <div class="demo-match-row">
        <div class="demo-hood">
          <div class="demo-hood-city">Lisbon, Portugal</div>
          <div class="demo-hood-name">Príncipe Real</div>
        </div>
        <div class="demo-arrow">
          <span>→</span>
          <span class="match-score-badge">92% match</span>
        </div>
        <div class="demo-result">
          <div class="demo-hood-city">Barcelona, Spain</div>
          <div class="demo-hood-name">Sant Pere</div>
        </div>
      </div>
      <div class="demo-tags">
        <span class="demo-tag">Bohemian & leafy</span>
        <span class="demo-tag">Natural wine bars</span>
        <span class="demo-tag green">Walkable</span>
        <span class="demo-tag green">Artsy</span>
        <span class="demo-tag">Boutique shops</span>
        <span class="demo-tag">Local crowd</span>
      </div>
      <div class="demo-why">
        "Both are elegant, tree-lined neighbourhoods loved by creatives — independent wine bars, design boutiques, and a relaxed local energy far from the tourist circuit."
      </div>
    </div>
  </div>
</section>

<!-- STATS BAR -->
<div class="stats-bar">
  <div class="stat">
    <div class="stat-num">30+</div>
    <div class="stat-label">Cities covered</div>
  </div>
  <div class="stat">
    <div class="stat-num">500+</div>
    <div class="stat-label">Neighbourhoods mapped</div>
  </div>
  <div class="stat">
    <div class="stat-num">8</div>
    <div class="stat-label">Lifestyle dimensions</div>
  </div>
  <div class="stat">
    <div class="stat-num">Free</div>
    <div class="stat-label">To get started</div>
  </div>
</div>

<!-- INTENT MODE SELECTOR -->
<section class="intent-section">
  <div class="intent-inner">
    <p class="intent-pre">I am looking for a neighbourhood because I am planning to…</p>
    <div class="intent-cards">

      <a href="#match" class="intent-card" id="intentVisit" onclick="setIntent('visit')">
        <div class="intent-card-photo" style="background-image:url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=700&q=80')"></div>
        <div class="intent-card-body">
          <div class="intent-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M4 20 C4 20 6 12 14 12 C22 12 24 20 24 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M14 4 L14 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M8 6 L11 9 M20 6 L17 9" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
              <circle cx="14" cy="20" r="4" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.1)"/>
              <path d="M3 24 L25 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="intent-label">Visit</div>
          <div class="intent-desc">I'm travelling and want to find the best neighbourhood to stay in</div>
          <div class="intent-arrow">Find where to stay →</div>
        </div>
      </a>

      <a href="#match" class="intent-card" id="intentMove" onclick="setIntent('move')">
        <div class="intent-card-photo" style="background-image:url('https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=700&q=80')"></div>
        <div class="intent-card-body">
          <div class="intent-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 3 L26 10 L26 25 L2 25 L2 10 Z" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.08)" stroke-linejoin="round"/>
              <path d="M9 25 L9 16 L14 16 L19 16 L19 25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <rect x="11" y="16" width="6" height="9" rx="1" stroke="currentColor" stroke-width="1.3" fill="rgba(255,255,255,0.1)"/>
              <path d="M14 3 L2 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="intent-label">Move</div>
          <div class="intent-desc">I'm relocating and want to find a neighbourhood that feels like home</div>
          <div class="intent-arrow">Find where to live →</div>
        </div>
      </a>

    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="how-section" id="how">
  <div class="section-label">How it works</div>
  <h2 class="section-title">Three steps to finding your <em>perfect neighbourhood</em></h2>
  <div class="steps-grid">
    <div class="step">
      <div class="step-num">01</div>
      <div class="step-svg-icon">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M18 4 L32 12 L32 32 L4 32 L4 12 Z" stroke="#C4622D" stroke-width="1.5" fill="rgba(196,98,45,0.07)" stroke-linejoin="round"/>
          <path d="M12 32 L12 22 L18 22 L24 22 L24 32" stroke="#C4622D" stroke-width="1.5" stroke-linecap="round"/>
          <rect x="14" y="22" width="8" height="10" rx="1" stroke="#C4622D" stroke-width="1.3" fill="rgba(196,98,45,0.1)"/>
          <path d="M18 4 L4 12" stroke="#C4622D" stroke-width="1.5" stroke-linecap="round"/>
          <circle cx="26" cy="14" r="3" stroke="#C4622D" stroke-width="1.2" fill="rgba(196,98,45,0.1)"/>
        </svg>
      </div>
      <h3>Tell us your favourite hood</h3>
      <p>Select your home city and the neighbourhood you love most — the one that just feels right. The coffee, the streets, the pace, the people.</p>
    </div>
    <div class="step">
      <div class="step-num">02</div>
      <div class="step-svg-icon">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="14" stroke="#C4622D" stroke-width="1.5" fill="rgba(196,98,45,0.06)"/>
          <ellipse cx="18" cy="18" rx="5.5" ry="14" stroke="#C4622D" stroke-width="1.2"/>
          <path d="M4.5 18 L31.5 18" stroke="#C4622D" stroke-width="1.2" stroke-linecap="round"/>
          <path d="M6 11 L30 11 M6 25 L30 25" stroke="#C4622D" stroke-width="1" stroke-linecap="round" stroke-dasharray="2 3"/>
          <path d="M22 8 L26 6 L28 10" stroke="#C4622D" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" fill="rgba(196,98,45,0.1)"/>
        </svg>
      </div>
      <h3>Choose your destination</h3>
      <p>Pick any city in our network. Our AI analyses walkability, food scene, nightlife, green space, cost level, safety, and wine bar culture.</p>
    </div>
    <div class="step">
      <div class="step-num">03</div>
      <div class="step-svg-icon">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="14" stroke="#C4622D" stroke-width="1.5" fill="rgba(196,98,45,0.06)"/>
          <circle cx="18" cy="18" r="8" stroke="#C4622D" stroke-width="1.2" fill="rgba(196,98,45,0.05)"/>
          <circle cx="18" cy="18" r="3" fill="#C4622D"/>
          <path d="M18 4 L18 8 M18 28 L18 32 M4 18 L8 18 M28 18 L32 18" stroke="#C4622D" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>
      <h3>Get your matches</h3>
      <p>We return your single best neighbourhood match with a similarity score, personality explanation, food & wine picks, and direct booking links.</p>
    </div>
  </div>
</section>

<!-- SAMPLE MATCHES -->
<section class="matches-section" id="examples">
  <div class="section-label">Match examples</div>
  <h2 class="section-title">Neighbourhoods that <em>speak the same language</em></h2>

  <div class="matches-scroll">

    <div class="match-pair">
      <div class="match-photo" style="background-image:url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80')">
        <div class="match-photo-overlay">
          <div class="match-from">Lisbon, Portugal</div>
          <div class="match-from-name">Chiado</div>
        </div>
      </div>
      <div class="match-pair-body">
        <div class="match-arrow-row">
          <div class="match-line"></div>
          <div class="match-pct">93% match</div>
        </div>
        <div class="match-to">Rome, Italy</div>
        <div class="match-to-name">Prati</div>
        <div class="match-desc">Elegant, literary, upscale cafés and independent bookshops, sophisticated locals, timeless European energy.</div>
        <div class="match-vibes">
          <span class="match-vibe vibe-terra">Literary</span>
          <span class="match-vibe vibe-olive">Elegant</span>
          <span class="match-vibe vibe-gold">Great cafés</span>
        </div>
      </div>
    </div>

    <div class="match-pair">
      <div class="match-photo" style="background-image:url('https://images.unsplash.com/photo-1529154036614-a60975f5c760?w=600&q=80')">
        <div class="match-photo-overlay">
          <div class="match-from">Rome, Italy</div>
          <div class="match-from-name">Trastevere</div>
        </div>
      </div>
      <div class="match-pair-body">
        <div class="match-arrow-row">
          <div class="match-line"></div>
          <div class="match-pct">91% match</div>
        </div>
        <div class="match-to">Lisbon, Portugal</div>
        <div class="match-to-name">Príncipe Real</div>
        <div class="match-desc">Leafy, bohemian, artisan coffee and natural wine, fashionable but not flashy, loved by creatives.</div>
        <div class="match-vibes">
          <span class="match-vibe vibe-terra">Bohemian</span>
          <span class="match-vibe vibe-olive">Artsy</span>
          <span class="match-vibe vibe-gold">Natural wine</span>
        </div>
      </div>
    </div>

    <div class="match-pair">
      <div class="match-photo" style="background-image:url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80')">
        <div class="match-photo-overlay">
          <div class="match-from">London, UK</div>
          <div class="match-from-name">Shoreditch</div>
        </div>
      </div>
      <div class="match-pair-body">
        <div class="match-arrow-row">
          <div class="match-line"></div>
          <div class="match-pct">88% match</div>
        </div>
        <div class="match-to">Berlin, Germany</div>
        <div class="match-to-name">Prenzlauer Berg</div>
        <div class="match-desc">Creative hub, street art, independent cafés, young professional crowd, great nightlife.</div>
        <div class="match-vibes">
          <span class="match-vibe vibe-terra">Creative</span>
          <span class="match-vibe vibe-olive">Street art</span>
          <span class="match-vibe vibe-gold">Nightlife</span>
        </div>
      </div>
    </div>

    <div class="match-pair">
      <div class="match-photo" style="background-image:url('https://images.unsplash.com/photo-1549144511-f099e773c147?w=600&q=80')">
        <div class="match-photo-overlay">
          <div class="match-from">Paris, France</div>
          <div class="match-from-name">Le Marais</div>
        </div>
      </div>
      <div class="match-pair-body">
        <div class="match-arrow-row">
          <div class="match-line"></div>
          <div class="match-pct">90% match</div>
        </div>
        <div class="match-to">Amsterdam, Netherlands</div>
        <div class="match-to-name">Jordaan</div>
        <div class="match-desc">Historic, artistic, canal-side wine bars, independent galleries, fashionable without pretension.</div>
        <div class="match-vibes">
          <span class="match-vibe vibe-terra">Historic</span>
          <span class="match-vibe vibe-olive">Galleries</span>
          <span class="match-vibe vibe-gold">Canal life</span>
        </div>
      </div>
    </div>

    <div class="match-pair">
      <div class="match-photo" style="background-image:url('https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=600&q=80')">
        <div class="match-photo-overlay">
          <div class="match-from">Barcelona, Spain</div>
          <div class="match-from-name">Gràcia</div>
        </div>
      </div>
      <div class="match-pair-body">
        <div class="match-arrow-row">
          <div class="match-line"></div>
          <div class="match-pct">87% match</div>
        </div>
        <div class="match-to">Madrid, Spain</div>
        <div class="match-to-name">Malasaña</div>
        <div class="match-desc">Village-like squares, alternative culture, vintage shops, indie bars, strong community feel.</div>
        <div class="match-vibes">
          <span class="match-vibe vibe-terra">Village feel</span>
          <span class="match-vibe vibe-olive">Indie bars</span>
          <span class="match-vibe vibe-gold">Vintage</span>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- MATCH TOOL (AI-POWERED) -->
<section class="search-section" id="match">
  <div class="search-inner">
    <h2>Find your <em>match</em> now</h2>
    <p>Powered by AI · Free to use · No account needed</p>

    <div class="search-form">
      <div class="form-group">
        <label>Your home city</label>
        <select id="homeCity">
          <option value="">Select your city...</option>
          <optgroup label="🇪🇺 Europe">
            <option value="Lisbon">Lisbon</option>
            <option value="Porto">Porto</option>
            <option value="London">London</option>
            <option value="Paris">Paris</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Madrid">Madrid</option>
            <option value="Amsterdam">Amsterdam</option>
            <option value="Rome">Rome</option>
            <option value="Berlin">Berlin</option>
            <option value="Vienna">Vienna</option>
            <option value="Munich">Munich</option>
            <option value="Düsseldorf">Düsseldorf</option>
            <option value="Frankfurt">Frankfurt</option>
            <option value="Copenhagen">Copenhagen</option>
            <option value="Stockholm">Stockholm</option>
            <option value="Prague">Prague</option>
            <option value="Budapest">Budapest</option>
            <option value="Seville">Seville</option>
            <option value="Florence">Florence</option>
            <option value="Milan">Milan</option>
            <option value="Brussels">Brussels</option>
          </optgroup>
          <optgroup label="🌎 Americas">
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="San Francisco">San Francisco</option>
            <option value="Chicago">Chicago</option>
            <option value="Miami">Miami</option>
            <option value="Boston">Boston</option>
            <option value="Washington DC">Washington DC</option>
            <option value="Toronto">Toronto</option>
            <option value="Montreal">Montreal</option>
            <option value="Mexico City">Mexico City</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Buenos Aires">Buenos Aires</option>
          </optgroup>
          <optgroup label="🌏 Asia Pacific">
            <option value="Tokyo">Tokyo</option>
            <option value="Seoul">Seoul</option>
            <option value="Singapore">Singapore</option>
            <option value="Dubai">Dubai</option>
            <option value="Sydney">Sydney</option>
            <option value="Melbourne">Melbourne</option>
            <option value="Beijing">Beijing</option>
            <option value="Shanghai">Shanghai</option>
            <option value="Bangkok">Bangkok</option>
          </optgroup>
          <optgroup label="🌍 Africa & Middle East">
            <option value="Cape Town">Cape Town</option>
            <option value="Marrakech">Marrakech</option>
          </optgroup>
        </select>
      </div>
      <div class="form-group">
        <label>Your favourite neighbourhood</label>
        <input type="text" id="homeHood" placeholder="e.g. Príncipe Real, Shoreditch…" />
      </div>
      <div class="form-group">
        <label>Destination city</label>
        <select id="destCity">
          <option value="">Select destination...</option>
          <optgroup label="🇪🇺 Europe">
            <option value="Lisbon">Lisbon</option>
            <option value="Porto">Porto</option>
            <option value="London">London</option>
            <option value="Paris">Paris</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Madrid">Madrid</option>
            <option value="Amsterdam">Amsterdam</option>
            <option value="Rome">Rome</option>
            <option value="Berlin">Berlin</option>
            <option value="Vienna">Vienna</option>
            <option value="Munich">Munich</option>
            <option value="Düsseldorf">Düsseldorf</option>
            <option value="Frankfurt">Frankfurt</option>
            <option value="Copenhagen">Copenhagen</option>
            <option value="Stockholm">Stockholm</option>
            <option value="Prague">Prague</option>
            <option value="Budapest">Budapest</option>
            <option value="Seville">Seville</option>
            <option value="Florence">Florence</option>
            <option value="Milan">Milan</option>
            <option value="Istanbul">Istanbul</option>
            <option value="Brussels">Brussels</option>
          </optgroup>
          <optgroup label="🌎 Americas">
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="San Francisco">San Francisco</option>
            <option value="Chicago">Chicago</option>
            <option value="Miami">Miami</option>
            <option value="Boston">Boston</option>
            <option value="Washington DC">Washington DC</option>
            <option value="Toronto">Toronto</option>
            <option value="Montreal">Montreal</option>
            <option value="Mexico City">Mexico City</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Buenos Aires">Buenos Aires</option>
          </optgroup>
          <optgroup label="🌏 Asia Pacific">
            <option value="Tokyo">Tokyo</option>
            <option value="Seoul">Seoul</option>
            <option value="Singapore">Singapore</option>
            <option value="Dubai">Dubai</option>
            <option value="Sydney">Sydney</option>
            <option value="Melbourne">Melbourne</option>
            <option value="Beijing">Beijing</option>
            <option value="Shanghai">Shanghai</option>
            <option value="Bangkok">Bangkok</option>
            <option value="Bali">Bali</option>
          </optgroup>
          <optgroup label="🌍 Africa & Middle East">
            <option value="Cape Town">Cape Town</option>
            <option value="Marrakech">Marrakech</option>
          </optgroup>
        </select>
      </div>
      <button class="search-btn" id="matchBtn" onclick="runMatch()">
        <span id="btnText">✦ Match it</span>
      </button>
      <div class="vibe-selector-wrap">
        <div class="vibe-selector-label" id="vibeSelectorLabel">✦ Your vibe (optional — select all that apply)</div>
        <div class="vibe-pills" id="vibePills">
          <span class="vibe-pill" onclick="toggleVibe(this)" data-vibe="Wine &amp; Nightlife">🍷 Wine &amp; Nightlife</span>
          <span class="vibe-pill" onclick="toggleVibe(this)" data-vibe="Shopping &amp; Boutiques">🛍️ Shopping &amp; Boutiques</span>
          <span class="vibe-pill" onclick="toggleVibe(this)" data-vibe="Food &amp; Restaurants">🍽️ Food &amp; Restaurants</span>
          <span class="vibe-pill" onclick="toggleVibe(this)" data-vibe="Parks &amp; Outdoors">🌿 Parks &amp; Outdoors</span>
          <span class="vibe-pill" onclick="toggleVibe(this)" data-vibe="Family Friendly">👨‍👩‍👧 Family Friendly</span>
          <span class="vibe-pill" onclick="toggleVibe(this)" data-vibe="Digital Nomad">💻 Digital Nomad</span>
          <span class="vibe-pill" onclick="toggleVibe(this)" data-vibe="Culture &amp; Architecture">🏛️ Culture &amp; Architecture</span>
          <span class="vibe-pill" onclick="toggleVibe(this)" data-vibe="Music &amp; Arts">🎵 Music &amp; Arts</span>
          <span class="vibe-pill" onclick="toggleVibe(this)" data-vibe="Cafés &amp; Chill">☕ Cafés &amp; Chill</span>
        </div>
      </div>
    </div>

    <div class="loading-msg" id="loadingMsg">
      <span class="loading-dots">Finding your neighbourhood match</span>
    </div>

    <div class="error-msg" id="errorMsg"></div>

  </div>
</section>

<!-- DYNAMIC RESULTS -->
<section class="search-section" id="results" style="padding-top:0; background: var(--earth);">
  <div class="search-inner" style="max-width:900px;">
    <div class="results-area" id="resultsArea"></div>
  </div>
</section>

<!-- WHY MATCHMYHOOD -->
<section class="why-section">
  <div class="section-label">Why MatchMyHood</div>
  <h2 class="section-title">Stop landing in the <em>wrong part</em> of town</h2>
  <div class="why-grid">

    <div class="why-card">
      <div class="why-icon-svg">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" stroke="#C4622D" stroke-width="1.5"/>
          <circle cx="16" cy="16" r="6" fill="rgba(196,98,45,0.15)" stroke="#C4622D" stroke-width="1.5"/>
          <circle cx="16" cy="16" r="2.5" fill="#C4622D"/>
          <line x1="16" y1="2" x2="16" y2="8" stroke="#C4622D" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="16" y1="24" x2="16" y2="30" stroke="#C4622D" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="2" y1="16" x2="8" y2="16" stroke="#C4622D" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="24" y1="16" x2="30" y2="16" stroke="#C4622D" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>
      <h3>Personality-first matching</h3>
      <p>We don't just compare locations — we compare lifestyle DNA. Walkability, food scene, wine bar culture, nightlife energy, safety, cost, and green space all factor in.</p>
    </div>

    <div class="why-card">
      <div class="why-icon-svg">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M8 6 C8 6 6 10 6 14 C6 19 10.5 23 16 23 C21.5 23 26 19 26 14 C26 10 24 6 24 6 Z" stroke="#C4622D" stroke-width="1.5" fill="rgba(196,98,45,0.08)" stroke-linejoin="round"/>
          <path d="M12 23 L11 28 M20 23 L21 28" stroke="#C4622D" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M9 28 L23 28" stroke="#C4622D" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M11 13 C12 11 14 10 16 10 C18 10 20 11 21 13" stroke="#C4622D" stroke-width="1.3" stroke-linecap="round"/>
        </svg>
      </div>
      <h3>Food & wine built in</h3>
      <p>Every matched neighbourhood comes with curated restaurant picks and wine bar recommendations. Because where you eat defines where you stay.</p>
    </div>

    <div class="why-card">
      <div class="why-icon-svg">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M4 22 L16 6 L28 22" stroke="#C4622D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="rgba(196,98,45,0.08)"/>
          <rect x="13" y="16" width="6" height="6" rx="1" stroke="#C4622D" stroke-width="1.3" fill="rgba(196,98,45,0.1)"/>
          <path d="M2 22 L30 22" stroke="#C4622D" stroke-width="1.5" stroke-linecap="round"/>
          <circle cx="24" cy="10" r="3.5" fill="rgba(196,98,45,0.12)" stroke="#C4622D" stroke-width="1.3"/>
          <path d="M24 8.5 L24 10 L25 11" stroke="#C4622D" stroke-width="1" stroke-linecap="round"/>
        </svg>
      </div>
      <h3>Built by someone who actually moved</h3>
      <p>Founded by a Senior Distribution Specialist at Corendon Airlines who has lived in Ireland, Bolivia, Brazil, Italy, and the UK. MatchMyHood is the tool he spent hours wishing existed every time he landed somewhere new and had to figure out which neighbourhood actually felt like home.</p>
    </div>

    <div class="why-card">
      <div class="why-icon-svg">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="10" width="24" height="18" rx="3" stroke="#C4622D" stroke-width="1.5" fill="rgba(196,98,45,0.06)"/>
          <path d="M10 10 L10 7 C10 5.3 11.3 4 13 4 L19 4 C20.7 4 22 5.3 22 7 L22 10" stroke="#C4622D" stroke-width="1.5" stroke-linecap="round"/>
          <circle cx="16" cy="19" r="3" fill="rgba(196,98,45,0.15)" stroke="#C4622D" stroke-width="1.3"/>
          <path d="M16 22 L16 25" stroke="#C4622D" stroke-width="1.3" stroke-linecap="round"/>
        </svg>
      </div>
      <h3>Book where you match</h3>
      <p>Direct links to Booking.com filtered by your matched neighbourhood. No more scrolling through 400 properties without knowing which part of the city is right for you.</p>
    </div>

    <div class="why-card">
      <div class="why-icon-svg">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="12" stroke="#C4622D" stroke-width="1.5" fill="rgba(196,98,45,0.06)"/>
          <ellipse cx="16" cy="16" rx="5" ry="12" stroke="#C4622D" stroke-width="1.2"/>
          <path d="M4.5 11 L27.5 11 M4.5 21 L27.5 21" stroke="#C4622D" stroke-width="1.2" stroke-linecap="round"/>
        </svg>
      </div>
      <h3>30+ cities, growing weekly</h3>
      <p>Europe, North America, Southeast Asia. We're adding new cities every week, starting with the destinations digital nomads and independent travellers love most.</p>
    </div>

    <div class="why-card">
      <div class="why-icon-svg">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4 L19.5 12 L28 13 L22 19 L23.5 28 L16 24 L8.5 28 L10 19 L4 13 L12.5 12 Z" stroke="#C4622D" stroke-width="1.5" fill="rgba(196,98,45,0.1)" stroke-linejoin="round"/>
        </svg>
      </div>
      <h3>Free to start</h3>
      <p>3 matches per month, free forever. Upgrade to Explorer for unlimited matches, food crawl builder, and our weekly Neighbourhood of the Week newsletter.</p>
    </div>

  </div>
</section>

<!-- PRICING -->
<section class="pricing-section" id="pricing">
  <div class="section-label">Pricing</div>
  <h2 class="section-title">Simple, <em>honest</em> pricing</h2>
  <p style="color:var(--earth-mid); font-size:16px; margin-bottom:56px; max-width:520px;">Start free. Upgrade when you're ready. The first 500 members get a lifetime deal that will never be offered again.</p>

  <div class="pricing-grid">

    <div class="price-card">
      <div class="price-tier">Free</div>
      <div class="price-amount">€0<span>/month</span></div>
      <div class="price-desc">For occasional travellers just getting started.</div>
      <ul class="price-features">
        <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#6B7C4A" stroke-width="1.3" fill="none"/><path d="M5 8 L7 10 L11 6" stroke="#6B7C4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> 3 neighbourhood matches/month</li>
        <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#6B7C4A" stroke-width="1.3" fill="none"/><path d="M5 8 L7 10 L11 6" stroke="#6B7C4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Basic neighbourhood profiles</li>
        <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#6B7C4A" stroke-width="1.3" fill="none"/><path d="M5 8 L7 10 L11 6" stroke="#6B7C4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Booking.com links</li>
        <li class="disabled"><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#D9C9B0" stroke-width="1.3" fill="none"/><path d="M5.5 10.5 L10.5 5.5 M10.5 10.5 L5.5 5.5" stroke="#D9C9B0" stroke-width="1.3" stroke-linecap="round"/></svg> Food crawl builder</li>
        <li class="disabled"><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#D9C9B0" stroke-width="1.3" fill="none"/><path d="M5.5 10.5 L10.5 5.5 M10.5 10.5 L5.5 5.5" stroke="#D9C9B0" stroke-width="1.3" stroke-linecap="round"/></svg> Wine bar layer</li>
        <li class="disabled"><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#D9C9B0" stroke-width="1.3" fill="none"/><path d="M5.5 10.5 L10.5 5.5 M10.5 10.5 L5.5 5.5" stroke="#D9C9B0" stroke-width="1.3" stroke-linecap="round"/></svg> Neighbourhood maps</li>
      </ul>
      <a href="#newsletter" onclick="selectPlan('free')" class="price-btn price-btn-outline">Get started free</a>
    </div>

    <div class="price-card">
      <div class="price-tier">Pay as you go</div>
      <div class="price-amount">€0.90<span>/search</span></div>
      <div class="price-desc">No subscription. Pay only when you need a match.</div>
      <ul class="price-features">
        <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#6B7C4A" stroke-width="1.3" fill="none"/><path d="M5 8 L7 10 L11 6" stroke="#6B7C4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Full neighbourhood profile</li>
        <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#6B7C4A" stroke-width="1.3" fill="none"/><path d="M5 8 L7 10 L11 6" stroke="#6B7C4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Booking & Airbnb links</li>
        <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#6B7C4A" stroke-width="1.3" fill="none"/><path d="M5 8 L7 10 L11 6" stroke="#6B7C4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> No subscription required</li>
        <li class="disabled"><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#D9C9B0" stroke-width="1.3" fill="none"/><path d="M5.5 10.5 L10.5 5.5 M10.5 10.5 L5.5 5.5" stroke="#D9C9B0" stroke-width="1.3" stroke-linecap="round"/></svg> Food crawl builder</li>
        <li class="disabled"><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#D9C9B0" stroke-width="1.3" fill="none"/><path d="M5.5 10.5 L10.5 5.5 M10.5 10.5 L5.5 5.5" stroke="#D9C9B0" stroke-width="1.3" stroke-linecap="round"/></svg> Weekly newsletter</li>
      </ul>
      <button onclick="handleStripeCheckout('payg')" class="price-btn price-btn-outline" style="width:100%;cursor:pointer;">
        💳 Buy a search — €0.90
      </button>
    </div>

    <div class="price-card price-card-featured">
      <div class="price-badge">Most popular</div>
      <div class="price-tier">Explorer</div>
      <div class="price-amount">€5.90<span>/month</span></div>
      <div class="price-desc">For frequent travellers and digital nomads.</div>
      <ul class="price-features">
        <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#F8F1E7" stroke-width="1.3" fill="none"/><path d="M5 8 L7 10 L11 6" stroke="#F8F1E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Unlimited matches</li>
        <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#F8F1E7" stroke-width="1.3" fill="none"/><path d="M5 8 L7 10 L11 6" stroke="#F8F1E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Full neighbourhood profiles</li>
        <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#F8F1E7" stroke-width="1.3" fill="none"/><path d="M5 8 L7 10 L11 6" stroke="#F8F1E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Food crawl builder</li>
        <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#F8F1E7" stroke-width="1.3" fill="none"/><path d="M5 8 L7 10 L11 6" stroke="#F8F1E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Wine bar layer</li>
        <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#F8F1E7" stroke-width="1.3" fill="none"/><path d="M5 8 L7 10 L11 6" stroke="#F8F1E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Neighbourhood maps</li>
        <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#F8F1E7" stroke-width="1.3" fill="none"/><path d="M5 8 L7 10 L11 6" stroke="#F8F1E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Weekly newsletter</li>
      </ul>
      <button onclick="handleStripeCheckout('explorer_annual')" class="price-btn price-btn-light" style="width:100%;cursor:pointer;border:none;">
        💳 Subscribe — €49/year
      </button>
      <p style="font-size:11px; margin-top:10px; opacity:0.6; text-align:center;">or <button onclick="handleStripeCheckout('explorer_monthly')" style="background:none;border:none;font-size:11px;opacity:0.8;cursor:pointer;text-decoration:underline;font-family:inherit;">€5.90/month</button>, cancel anytime</p>
    </div>

    <div class="price-card price-card-lifetime">
      <div class="price-badge price-badge-gold">⚡ First 500 only</div>
      <div class="price-tier">Founding Member</div>
      <div class="price-amount">€149<span>once, forever</span></div>
      <div class="price-desc">Lock in lifetime access before we launch. Never pay again.</div>
      <ul class="price-features">
        <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#C9A455" stroke-width="1.3" fill="none"/><path d="M5 8 L7 10 L11 6" stroke="#C9A455" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Everything in Explorer, forever</li>
        <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#C9A455" stroke-width="1.3" fill="none"/><path d="M5 8 L7 10 L11 6" stroke="#C9A455" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Nomad Pro features on launch</li>
        <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#C9A455" stroke-width="1.3" fill="none"/><path d="M5 8 L7 10 L11 6" stroke="#C9A455" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Rental & real estate maps (Q4 2026)</li>
        <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#C9A455" stroke-width="1.3" fill="none"/><path d="M5 8 L7 10 L11 6" stroke="#C9A455" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Mood restaurant maps (Q3 2026)</li>
        <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#C9A455" stroke-width="1.3" fill="none"/><path d="M5 8 L7 10 L11 6" stroke="#C9A455" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Founding member badge & input</li>
        <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#C9A455" stroke-width="1.3" fill="none"/><path d="M5 8 L7 10 L11 6" stroke="#C9A455" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Priority access to new cities</li>
      </ul>
      <button onclick="handleStripeCheckout('founding_member')" class="price-btn price-btn-gold" style="width:100%;cursor:pointer;border:none;">
        ⭐ Claim lifetime access — €149
      </button>
      <p style="font-size:11px; margin-top:10px; color:var(--gold); text-align:center; font-weight:600;">Only 500 available · Never repeated</p>
    </div>

  </div>
</section>

<!-- ROADMAP -->
<section class="roadmap-section" id="roadmap">
  <div class="section-label">What's coming</div>
  <h2 class="section-title">Built in the open — <em>here's the plan</em></h2>

  <div class="roadmap-grid">

    <div class="roadmap-col roadmap-live">
      <div class="roadmap-phase-label">
        <span class="phase-dot phase-dot-live"></span>
        Live now · April 2026
      </div>
      <div class="roadmap-items">
        <div class="roadmap-item">
          <div class="roadmap-item-icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7.5" stroke="currentColor" stroke-width="1.3" fill="rgba(196,98,45,0.1)"/><circle cx="9" cy="9" r="3" fill="currentColor"/></svg>
          </div>
          <div>
            <div class="roadmap-item-title">AI neighbourhood matching</div>
            <div class="roadmap-item-desc">Match any neighbourhood across 30+ cities worldwide</div>
          </div>
        </div>
        <div class="roadmap-item">
          <div class="roadmap-item-icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="4" width="14" height="11" rx="2" stroke="currentColor" stroke-width="1.3" fill="rgba(196,98,45,0.1)"/><path d="M2 7 L16 7" stroke="currentColor" stroke-width="1.2"/><circle cx="5" cy="11" r="1" fill="currentColor"/></svg>
          </div>
          <div>
            <div class="roadmap-item-title">Booking.com integration</div>
            <div class="roadmap-item-desc">Book accommodation in your matched neighbourhood instantly</div>
          </div>
        </div>
        <div class="roadmap-item">
          <div class="roadmap-item-icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2 L11 7 L16 7.5 L12.5 11 L13.5 16 L9 13.5 L4.5 16 L5.5 11 L2 7.5 L7 7 Z" stroke="currentColor" stroke-width="1.3" fill="rgba(196,98,45,0.1)" stroke-linejoin="round"/></svg>
          </div>
          <div>
            <div class="roadmap-item-title">Food & wine picks</div>
            <div class="roadmap-item-desc">Curated restaurant and wine bar recommendation per match</div>
          </div>
        </div>
      </div>
    </div>

    <div class="roadmap-col roadmap-soon">
      <div class="roadmap-phase-label">
        <span class="phase-dot phase-dot-soon"></span>
        Coming · Q3 2026
      </div>
      <div class="roadmap-items">
        <div class="roadmap-item">
          <div class="roadmap-item-icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" stroke-width="1.3" fill="rgba(201,164,85,0.1)"/><circle cx="6" cy="6" r="1.5" fill="currentColor" opacity="0.6"/><circle cx="12" cy="6" r="1.5" fill="currentColor" opacity="0.6"/><circle cx="6" cy="12" r="1.5" fill="currentColor" opacity="0.6"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>
          </div>
          <div>
            <div class="roadmap-item-title">Mood restaurant maps</div>
            <div class="roadmap-item-desc">Curated map of restaurants & bars filtered by mood — romantic, solo, wine crawl, Sunday brunch</div>
          </div>
        </div>
        <div class="roadmap-item">
          <div class="roadmap-item-icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2 C5.7 2 3 4.7 3 8 C3 12 9 16 9 16 C9 16 15 12 15 8 C15 4.7 12.3 2 9 2 Z" stroke="currentColor" stroke-width="1.3" fill="rgba(201,164,85,0.1)"/><circle cx="9" cy="8" r="2.5" stroke="currentColor" stroke-width="1.2" fill="none"/></svg>
          </div>
          <div>
            <div class="roadmap-item-title">Neighbourhood map embed</div>
            <div class="roadmap-item-desc">Interactive map showing your matched neighbourhood boundaries and key spots</div>
          </div>
        </div>
        <div class="roadmap-item">
          <div class="roadmap-item-icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9 L7 13 L15 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div>
            <div class="roadmap-item-title">Food crawl builder</div>
            <div class="roadmap-item-desc">AI-generated walking food itinerary within your matched neighbourhood</div>
          </div>
        </div>
      </div>
    </div>

    <div class="roadmap-col roadmap-future">
      <div class="roadmap-phase-label">
        <span class="phase-dot phase-dot-future"></span>
        Coming · Q4 2026
      </div>
      <div class="roadmap-items">
        <div class="roadmap-item">
          <div class="roadmap-item-icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="5" width="14" height="11" rx="2" stroke="currentColor" stroke-width="1.3" fill="rgba(107,124,74,0.1)"/><path d="M6 5 L6 3.5 C6 2.7 6.7 2 7.5 2 L10.5 2 C11.3 2 12 2.7 12 3.5 L12 5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><circle cx="9" cy="11" r="2" stroke="currentColor" stroke-width="1.2" fill="rgba(107,124,74,0.15)"/></svg>
          </div>
          <div>
            <div class="roadmap-item-title">Rental & real estate maps</div>
            <div class="roadmap-item-desc">Short & long-term rentals via Idealista, Spotahome & Booking.com in your matched neighbourhood</div>
          </div>
        </div>
        <div class="roadmap-item">
          <div class="roadmap-item-icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7.5" stroke="currentColor" stroke-width="1.3" fill="rgba(107,124,74,0.1)"/><ellipse cx="9" cy="9" rx="3" ry="7.5" stroke="currentColor" stroke-width="1.1"/><path d="M2 9 L16 9" stroke="currentColor" stroke-width="1.1"/></svg>
          </div>
          <div>
            <div class="roadmap-item-title">Nomad Mode</div>
            <div class="roadmap-item-desc">Monthly city guides with co-working density, WiFi quality, visa info, and housing affordability</div>
          </div>
        </div>
        <div class="roadmap-item">
          <div class="roadmap-item-icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 14 L9 3 L16 14 Z" stroke="currentColor" stroke-width="1.3" fill="rgba(107,124,74,0.1)" stroke-linejoin="round"/><path d="M6.5 14 L6.5 10 L11.5 10 L11.5 14" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
          </div>
          <div>
            <div class="roadmap-item-title">Airport & transit layer</div>
            <div class="roadmap-item-desc">Best neighbourhoods by transit time from major airports — for layovers and arrivals</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- NEWSLETTER -->
<section class="newsletter-section" id="newsletter">
  <div class="newsletter-inner">
    <h2>The neighbourhood you'll love is out there</h2>
    <p>Join the waitlist. Get early access, our weekly Neighbourhood of the Week email, and a founding member discount when we launch.</p>
    <form class="newsletter-form" name="waitlist" method="POST" data-netlify="true" onsubmit="handleWaitlist(event)">
      <input type="hidden" name="form-name" value="waitlist" />
      <select name="plan" id="waitlistPlan" class="plan-select">
        <option value="free">🆓 Free — 3 matches/month</option>
        <option value="explorer">🗺️ Explorer — €5.90/month (unlimited)</option>
        <option value="founding">⭐ Founding Member — €149 lifetime</option>
      </select>
      <input type="email" name="email" id="emailInput" placeholder="your@email.com" required />
      <button type="submit">Join waitlist</button>
    </form>
    <div class="newsletter-success" id="newsletterSuccess">
      ✓ You're on the list! We'll be in touch very soon.
    </div>
    <p style="font-size:12px; color:rgba(248,241,231,0.3); margin-top:16px;">No spam. Unsubscribe anytime. We hate tourist traps as much as you do.</p>
  </div>
</section>

<!-- SUGGESTIONS -->
<section class="suggestions-section">
  <div class="suggestions-inner">
    <div class="section-label">Help us grow</div>
    <h2 class="section-title" style="color:var(--earth);">Shape the future of <em>MatchMyHood</em></h2>
    <div class="suggestions-grid">

      <div class="suggestion-card">
        <h3>🏙️ Suggest a city</h3>
        <p>Which city should we add next? Tell us where you're travelling and we'll prioritise it.</p>
        <form name="city-suggestion" method="POST" data-netlify="true" onsubmit="handleSuggestion(event,'city')">
          <input type="hidden" name="form-name" value="city-suggestion" />
          <textarea class="suggestion-input" name="city" placeholder="e.g. Tokyo, Buenos Aires, Cape Town…" rows="3" required></textarea>
          <button type="submit" class="suggestion-btn">Suggest a city →</button>
          <div class="suggestion-success" id="citySuccess">✓ Thanks! We'll add it to our roadmap.</div>
        </form>
      </div>

      <div class="suggestion-card">
        <h3>💡 Suggest a feature</h3>
        <p>What would make MatchMyHood more useful for you? We read every suggestion.</p>
        <form name="feature-suggestion" method="POST" data-netlify="true" onsubmit="handleSuggestion(event,'feature')">
          <input type="hidden" name="form-name" value="feature-suggestion" />
          <textarea class="suggestion-input" name="feature" placeholder="e.g. Add restaurant maps, show public transport, compare neighbourhoods side by side…" rows="3" required></textarea>
          <button type="submit" class="suggestion-btn">Send suggestion →</button>
          <div class="suggestion-success" id="featureSuccess">✓ Thanks! Your suggestion helps shape the roadmap.</div>
        </form>
      </div>

    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div>
    <div class="footer-logo">Match<span>My</span>Hood</div>
    <div class="footer-tagline">Find your neighbourhood. Anywhere in the world.</div>
  </div>
  <ul class="footer-links">
    <li><a href="#how">How it works</a></li>
    <li><a href="#match">Try it free</a></li>
    <li><a href="/cdn-cgi/l/email-protection#b6ded3dadad9f6dbd7c2d5dedbcfded9d9d298d5d9db">Contact</a></li>
    <li><a href="#">Privacy</a></li>
  </ul>
  <div class="footer-copy">© 2026 MatchMyHood</div>
</footer>

<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js"></script>
<script>
const UNSPLASH_KEY = 'OaKCSMFgv0aiRZGozXW1aPGh7R8IXoWfPpk24cZOXYA';
const MAPBOX_TOKEN = 'pk.eyJ1IjoidGlhZ283MDEiLCJhIjoiY21uNjBkbHIxMDBzcDJyc2I1czFrdWt1biJ9.v1XnI4B7BwOQDV17LE-nIg';

const METRO_LINKS = {
  "Lisbon":        { name: "Metro de Lisboa", url: "https://www.metrolisboa.pt/en/travel/diagrams-and-maps/" },
  "Porto":         { name: "Metro do Porto", url: "https://en.metrodoporto.pt/pages/364" },
  "London":        { name: "London Underground", url: "https://tfl.gov.uk/maps/track/tube" },
  "Paris":         { name: "RATP Paris Métro", url: "https://www.ratp.fr/en/plans-lignes/plans-metro" },
  "Barcelona":     { name: "Metro Barcelona", url: "https://www.tmb.cat/en/barcelona-metro/map" },
  "Madrid":        { name: "Metro Madrid", url: "https://www.metromadrid.es/en/travel-on-metro/metro-map" },
  "Amsterdam":     { name: "GVB Metro Map", url: "https://en.gvb.nl/en/travel-information/journey-planner/route-maps" },
  "Rome":          { name: "Roma Metropolitana", url: "https://www.atac.roma.it/en/page/metro-rail-connections-and-night-buses" },
  "Milan":         { name: "ATM Milano Metro", url: "https://www.atm.it/en/ViaggiaConNoi/Pagine/mappa_rete.aspx" },
  "Berlin":        { name: "BVG Berlin U-Bahn", url: "https://www.bvg.de/en/connections/bvg-maps/tube-map" },
  "Munich":        { name: "MVV München U-Bahn", url: "https://www.mvv-muenchen.de/en/maps-stations/maps/index.html" },
  "Vienna":        { name: "Wiener Linien U-Bahn", url: "https://www.wienerlinien.at/en/netzplan.html" },
  "Copenhagen":    { name: "Copenhagen Metro", url: "https://www.m.dk/en/find-your-route/metro-map/" },
  "Stockholm":     { name: "SL Tunnelbana", url: "https://sl.se/en/in-english/maps--timetables/" },
  "Prague":        { name: "Prague Metro", url: "https://www.dpp.cz/en/travelling/network-maps" },
  "Budapest":      { name: "BKK Budapest Metro", url: "https://bkk.hu/en/maps-and-timetables/maps/" },
  "Brussels":      { name: "STIB Metro Brussels", url: "https://www.stib-mivb.be/article.html?l=en&_guid=9bc60d5c-6a3d-35a0-3e40-27c2d7dde2b4" },
  "Istanbul":      { name: "İstanbul Metro", url: "https://www.metro.istanbul/en/haritalar" },
  "New York":      { name: "MTA NYC Subway", url: "https://new.mta.info/maps" },
  "Los Angeles":   { name: "LA Metro Rail", url: "https://www.metro.net/riding/maps/" },
  "San Francisco": { name: "BART Map", url: "https://www.bart.gov/sites/default/files/docs/system-map.pdf" },
  "Chicago":       { name: "CTA L Map", url: "https://www.transitchicago.com/maps/" },
  "Washington DC": { name: "WMATA Metro Map", url: "https://www.wmata.com/schedules/maps/" },
  "Boston":        { name: "MBTA T Map", url: "https://www.mbta.com/maps" },
  "Toronto":       { name: "TTC Subway Map", url: "https://www.ttc.ca/routes-and-schedules/subway-map" },
  "Montreal":      { name: "STM Métro", url: "https://www.stm.info/en/info/networks/metro/map" },
  "Mexico City":   { name: "Metro CDMX", url: "https://metro.cdmx.gob.mx/red-del-metro" },
  "São Paulo":     { name: "Metrô SP", url: "https://www.metro.sp.gov.br/sua-viagem/mapa-da-rede-metro-cptm.aspx" },
  "Buenos Aires":  { name: "Subte Buenos Aires", url: "https://www.buenosaires.gob.ar/subte/mapa-de-la-red" },
  "Tokyo":         { name: "Tokyo Metro Map", url: "https://www.tokyometro.jp/en/subwaymap/" },
  "Seoul":         { name: "Seoul Metro Map", url: "https://www.seoulmetro.co.kr/en/cyberStation.do" },
  "Singapore":     { name: "MRT Network Map", url: "https://www.lta.gov.sg/content/ltagov/en/getting_around/public_transport/mrt_and_lrt_trains/system_map.html" },
  "Dubai":         { name: "Dubai Metro Map", url: "https://dubai.ae/en/information-and-services/transport/dubai-metro" },
  "Sydney":        { name: "Sydney Metro Map", url: "https://transportnsw.info/routes/maps" },
  "Melbourne":     { name: "Melbourne Metro", url: "https://www.ptv.vic.gov.au/more/travelling-on-the-network/maps/" },
  "Bangkok":       { name: "BTS/MRT Bangkok", url: "https://www.bangkokmasstransit.com/" },
  "Beijing":       { name: "Beijing Subway Map", url: "https://www.bjsubway.com/en/" },
  "Shanghai":      { name: "Shanghai Metro Map", url: "https://www.shmetro.com/node135/201304/con130892.htm" },
};
const FOURSQUARE_KEY = '244GKZ3SYN0QA4CMYR4VXURO3PLM00MUWHAXLJUV04UE05T1';
const BOOKING_AFF = '7909431';
const GYG_AFF = 'MLFUF2A';
const VIATOR_AFF = 'P00293970';

// Property sites per city for LIVE mode
// Helper functions for property URL building
const slug = s => encodeURIComponent(s.toLowerCase().replace(/ /g,'-'));
const enc  = s => encodeURIComponent(s);

const PROPERTY_SITES = {
  "Lisbon":   [{ name:"Idealista",    url:(h,c)=>`https://www.idealista.pt/arrendar-casas/lisboa/${slug(h)}/` },
               { name:"Imovirtual",   url:(h,c)=>`https://www.imovirtual.com/arrendar/apartamento/lisboa/?q=${enc(h)}` }],
  "Porto":    [{ name:"Idealista",    url:(h,c)=>`https://www.idealista.pt/arrendar-casas/porto/${slug(h)}/` },
               { name:"Imovirtual",   url:(h,c)=>`https://www.imovirtual.com/arrendar/apartamento/porto/?q=${enc(h)}` }],
  "London":   [{ name:"Rightmove",    url:(h,c)=>`https://www.rightmove.co.uk/property-to-rent/find.html?searchLocation=${enc(h+', London')}&radius=0.5&sortType=6` },
               { name:"Zoopla",       url:(h,c)=>`https://www.zoopla.co.uk/to-rent/property/london/${slug(h)}/` },
               { name:"SpareRoom",    url:(h,c)=>`https://www.spareroom.co.uk/flatshare/search_results.pl?where=${enc(h+', London')}&search_type=flatshares` }],
  // Paris — SeLoger/PAP don't support neighbourhood URLs, LeBonCoin is best available
  "Paris":    [{ name:"LeBonCoin",    url:(h,c)=>`https://www.leboncoin.fr/recherche?category=10&text=${enc(h+' Paris')}&real_estate_type=2` },
               { name:"SeLoger",      url:(h,c)=>`https://www.seloger.com/list.htm?idtypebien=1&idtt=1&tri=initial&q=${enc(h+' Paris')}` },
               { name:"PAP",          url:(h,c)=>`https://www.pap.fr/annonce/locations-appartement-paris-g439?q=${enc(h)}` }],
  "Barcelona":[{ name:"Idealista",    url:(h,c)=>`https://www.idealista.com/alquiler-viviendas/barcelona/${slug(h)}/` },
               { name:"Fotocasa",     url:(h,c)=>`https://www.fotocasa.es/es/alquiler/viviendas/barcelona-capital/${slug(h)}/l` }],
  "Madrid":   [{ name:"Idealista",    url:(h,c)=>`https://www.idealista.com/alquiler-viviendas/madrid/${slug(h)}/` },
               { name:"Fotocasa",     url:(h,c)=>`https://www.fotocasa.es/es/alquiler/viviendas/madrid-capital/${slug(h)}/l` }],
  "Seville":  [{ name:"Idealista",    url:(h,c)=>`https://www.idealista.com/alquiler-viviendas/sevilla/${slug(h)}/` },
               { name:"Fotocasa",     url:(h,c)=>`https://www.fotocasa.es/es/alquiler/viviendas/sevilla-capital/${slug(h)}/l` }],
  // Amsterdam — Funda slugs are Dutch, Pararius works better in English
  "Amsterdam":[{ name:"Funda",        url:(h,c)=>`https://www.funda.nl/huur/amsterdam/?q=${enc(h)}` },
               { name:"Pararius",     url:(h,c)=>`https://www.pararius.com/apartment-for-rent/amsterdam?q=${enc(h)}` }],
  "Rome":     [{ name:"Immobiliare",  url:(h,c)=>`https://www.immobiliare.it/affitto-case/roma/?qTesto=${enc(h)}` },
               { name:"Idealista",    url:(h,c)=>`https://www.idealista.it/affitto-case/roma/${slug(h)}/` }],
  "Florence": [{ name:"Immobiliare",  url:(h,c)=>`https://www.immobiliare.it/affitto-case/firenze/?qTesto=${enc(h)}` },
               { name:"Idealista",    url:(h,c)=>`https://www.idealista.it/affitto-case/firenze/${slug(h)}/` }],
  "Milan":    [{ name:"Immobiliare",  url:(h,c)=>`https://www.immobiliare.it/affitto-case/milano/?qTesto=${enc(h)}` },
               { name:"Idealista",    url:(h,c)=>`https://www.idealista.it/affitto-case/milano/${slug(h)}/` }],
  "Berlin":   [{ name:"ImmoScout24",  url:(h,c)=>`https://www.immobilienscout24.de/Suche/de/berlin/berlin/wohnung-mieten?freetext=${enc(h)}` },
               { name:"WG-Gesucht",   url:(h,c)=>`https://www.wg-gesucht.de/wg-zimmer-und-1-zimmer-wohnungen-und-wohnungen-in-Berlin.8.0.1.0.html?freetext=${enc(h)}` }],
  "Munich":   [{ name:"ImmoScout24",  url:(h,c)=>`https://www.immobilienscout24.de/Suche/de/bayern/muenchen/wohnung-mieten?freetext=${enc(h)}` },
               { name:"Immowelt",     url:(h,c)=>`https://www.immowelt.de/classified-search?distributionTypes=Rent&estateTypes=Apartment&searchDescription=${enc(h)}` }],
  "Frankfurt":[{ name:"ImmoScout24",  url:(h,c)=>`https://www.immobilienscout24.de/Suche/de/hessen/frankfurt-am-main/wohnung-mieten?freetext=${enc(h)}` },
               { name:"Immowelt",     url:(h,c)=>`https://www.immowelt.de/classified-search?distributionTypes=Rent&estateTypes=Apartment&searchDescription=${enc(h)}` }],
  "Düsseldorf":[{ name:"ImmoScout24", url:(h,c)=>`https://www.immobilienscout24.de/Suche/de/nordrhein-westfalen/duesseldorf/wohnung-mieten?freetext=${enc(h)}` },
                { name:"Immowelt",    url:(h,c)=>`https://www.immowelt.de/classified-search?distributionTypes=Rent&estateTypes=Apartment&searchDescription=${enc(h)}` }],
  "Vienna":   [{ name:"Willhaben",    url:(h,c)=>`https://www.willhaben.at/iad/immobilien/mietwohnungen/wien/?keyword=${enc(h)}` },
               { name:"ImmoScout AT", url:(h,c)=>`https://www.immobilienscout24.at/immobilien/wohnung-mieten/wien?freetext=${enc(h)}` }],
  "Copenhagen":[{ name:"Lejebolig",   url:(h,c)=>`https://www.lejebolig.dk/lejebolig?q=${enc(h+' København')}` },
                { name:"Boligsiden",  url:(h,c)=>`https://www.boligsiden.dk/leje/?searchTerm=${enc(h)}` }],
  "Stockholm":[{ name:"Blocket",      url:(h,c)=>`https://www.blocket.se/bostad/hyra/lagenheter/stockholm?q=${enc(h)}` },
               { name:"Hemnet",       url:(h,c)=>`https://www.hemnet.se/bostader?q=${enc(h)}` }],
  "Prague":   [{ name:"Sreality",     url:(h,c)=>`https://www.sreality.cz/hledani/pronajem/byty/praha?hledani=${enc(h)}` },
               { name:"Bezrealitky",  url:(h,c)=>`https://www.bezrealitky.cz/vypis/pronajem-byt/praha?fulltext=${enc(h)}` }],
  "Budapest": [{ name:"Ingatlan.com", url:(h,c)=>`https://ingatlan.com/lista/kiado+lakas+budapest?q=${enc(h)}` },
               { name:"Albérlet.hu",  url:(h,c)=>`https://www.alberlet.hu/kiado-alberlet/budapest/?q=${enc(h)}` }],
  "Brussels": [{ name:"Immoweb",      url:(h,c)=>`https://www.immoweb.be/en/search/house-and-apartment/for-rent?countries=BE&localities=${enc(h)}&orderBy=relevance` },
               { name:"Zimmo",        url:(h,c)=>`https://www.zimmo.be/en/to-rent/?search=${enc(h+' Brussels')}` }],
  "Istanbul": [{ name:"Sahibinden",   url:(h,c)=>`https://www.sahibinden.com/kiralik-daire/istanbul?query=${enc(h)}` },
               { name:"Emlakjet",     url:(h,c)=>`https://www.emlakjet.com/kiralik-daire/istanbul/?text=${enc(h)}` }],
  "New York": [{ name:"StreetEasy",   url:(h,c)=>`https://streeteasy.com/for-rent/nyc/${slug(h)}` },
               { name:"Apartments",   url:(h,c)=>`https://www.apartments.com/${slug(h)}-new-york-ny/` }],
  "Los Angeles":[{ name:"Zillow",     url:(h,c)=>`https://www.zillow.com/${slug(h)}-los-angeles-ca/rentals/` },
                 { name:"Apartments", url:(h,c)=>`https://www.apartments.com/${slug(h)}-los-angeles-ca/` }],
  "San Francisco":[{ name:"Zillow",   url:(h,c)=>`https://www.zillow.com/${slug(h)}-san-francisco-ca/rentals/` },
                   { name:"Apartments",url:(h,c)=>`https://www.apartments.com/${slug(h)}-san-francisco-ca/` }],
  "Chicago":  [{ name:"Zillow",       url:(h,c)=>`https://www.zillow.com/${slug(h)}-chicago-il/rentals/` },
               { name:"Apartments",   url:(h,c)=>`https://www.apartments.com/${slug(h)}-chicago-il/` }],
  "Miami":    [{ name:"Zillow",       url:(h,c)=>`https://www.zillow.com/${slug(h)}-miami-fl/rentals/` },
               { name:"Apartments",   url:(h,c)=>`https://www.apartments.com/${slug(h)}-miami-fl/` }],
  "Boston":   [{ name:"Zillow",       url:(h,c)=>`https://www.zillow.com/${slug(h)}-boston-ma/rentals/` },
               { name:"Apartments",   url:(h,c)=>`https://www.apartments.com/${slug(h)}-boston-ma/` }],
  "Washington DC":[{ name:"Zillow",   url:(h,c)=>`https://www.zillow.com/${slug(h)}-washington-dc/rentals/` },
                   { name:"Apartments",url:(h,c)=>`https://www.apartments.com/${slug(h)}-washington-dc/` }],
  // Canada — Realtor.ca has no neighbourhood URL, use Kijiji + PadMapper
  "Toronto":  [{ name:"Kijiji",       url:(h,c)=>`https://www.kijiji.ca/b-apartments-condos/city-of-toronto/q=${enc(h)}/c37l1700273` },
               { name:"PadMapper",    url:(h,c)=>`https://www.padmapper.com/apartments/toronto-on?q=${enc(h)}` }],
  "Montreal": [{ name:"Kijiji",       url:(h,c)=>`https://www.kijiji.ca/b-apartments-condos/montreal/q=${enc(h)}/c37l80002` },
               { name:"PadMapper",    url:(h,c)=>`https://www.padmapper.com/apartments/montreal-qc?q=${enc(h)}` }],
  // Mexico City — Inmuebles24 SEO paths only exist for indexed hoods, use search instead
  "Mexico City":[{ name:"Inmuebles24",url:(h,c)=>`https://www.inmuebles24.com/inmuebles?operacion=2&tipo=1&provincia=df&q=${enc(h)}` },
                 { name:"Lamudi",     url:(h,c)=>`https://www.lamudi.com.mx/buscar/?q=${enc(h+' Ciudad de Mexico')}&for=rent` }],
  "São Paulo":[{ name:"ZAP Imóveis",  url:(h,c)=>`https://www.zapimoveis.com.br/aluguel/imoveis/sp+sao-paulo+${slug(h)}/` },
               { name:"VivaReal",     url:(h,c)=>`https://www.vivareal.com.br/aluguel/sp/sao-paulo/${slug(h)}_bairro/` }],
  "Rio de Janeiro":[{ name:"ZAP Imóveis", url:(h,c)=>`https://www.zapimoveis.com.br/aluguel/imoveis/rj+rio-de-janeiro+${slug(h)}/` },
                    { name:"VivaReal",    url:(h,c)=>`https://www.vivareal.com.br/aluguel/rj/rio-de-janeiro/${slug(h)}_bairro/` }],
  "Buenos Aires":[{ name:"ZonaProp",  url:(h,c)=>`https://www.zonaprop.com.ar/departamentos-alquiler.html?q=${enc(h)}` },
                  { name:"Argenprop", url:(h,c)=>`https://www.argenprop.com/departamento?operacion=alquiler&localidad=${enc(h)}` }],
  // Tokyo — Suumo needs Japanese, GaijinPot is best for English speakers
  "Tokyo":    [{ name:"GaijinPot",    url:(h,c)=>`https://housing.gaijinpot.com/en/rent/?region%5B%5D=13&q=${enc(h)}` },
               { name:"Suumo",        url:(h,c)=>`https://suumo.jp/chintai/tokyo/sc_${enc(h)}/` }],
  "Seoul":    [{ name:"Dabang",       url:(h,c)=>`https://www.dabangapp.com/map/seoul?search=${enc(h)}` },
               { name:"Zigbang",      url:(h,c)=>`https://www.zigbang.com/home/search?q=${enc(h)}` }],
  "Singapore":[{ name:"PropertyGuru", url:(h,c)=>`https://www.propertyguru.com.sg/property-for-rent?freetext=${enc(h)}&listingType=rent` },
               { name:"99.co",        url:(h,c)=>`https://www.99.co/singapore/rent?q=${enc(h)}` }],
  "Dubai":    [{ name:"Property Finder",url:(h,c)=>`https://www.propertyfinder.ae/en/rent/apartments-for-rent.html?q=${enc(h)}` },
               { name:"Bayut",        url:(h,c)=>`https://www.bayut.com/to-rent/apartments/${slug(h)}/` }],
  "Sydney":   [{ name:"REA",          url:(h,c)=>`https://www.realestate.com.au/rent/in-${slug(h).replace(/-/g,'+')},+nsw/list-1` },
               { name:"Domain",       url:(h,c)=>`https://www.domain.com.au/rent/${slug(h)}-nsw/` }],
  "Melbourne":[{ name:"REA",          url:(h,c)=>`https://www.realestate.com.au/rent/in-${slug(h).replace(/-/g,'+')},+vic/list-1` },
               { name:"Domain",       url:(h,c)=>`https://www.domain.com.au/rent/${slug(h)}-vic/` }],
  "Bangkok":  [{ name:"DDProperty",   url:(h,c)=>`https://www.ddproperty.com/en/property-for-rent/?q=${enc(h)}` },
               { name:"FazWaz",       url:(h,c)=>`https://www.fazwaz.com/property-for-rent/thailand/bangkok/${slug(h)}` }],
  "Bali":     [{ name:"FazWaz",       url:(h,c)=>`https://www.fazwaz.com/property-for-rent/indonesia/bali/${slug(h)}` },
               { name:"Dot Property", url:(h,c)=>`https://www.dotproperty.id/properties-for-rent/bali/${slug(h)}` }],
  "Beijing":  [{ name:"Lianjia",      url:(h,c)=>`https://bj.lianjia.com/zufang/?q=${enc(h)}` },
               { name:"Anjuke",       url:(h,c)=>`https://beijing.anjuke.com/rent/?kw=${enc(h)}` }],
  "Shanghai": [{ name:"Lianjia",      url:(h,c)=>`https://sh.lianjia.com/zufang/?q=${enc(h)}` },
               { name:"Anjuke",       url:(h,c)=>`https://shanghai.anjuke.com/rent/?kw=${enc(h)}` }],
  "Cape Town":[{ name:"Property24",   url:(h,c)=>`https://www.property24.com/property-to-rent/cape-town/western-cape/9?q=${enc(h)}` },
               { name:"Private Property",url:(h,c)=>`https://www.privateproperty.co.za/to-rent/western-cape/cape-town/${slug(h)}/` }],
  "Marrakech":[{ name:"Mubawab",      url:(h,c)=>`https://www.mubawab.ma/fr/sc/marrakech:location-appartement?q=${enc(h)}` },
               { name:"Avito.ma",     url:(h,c)=>`https://www.avito.ma/fr/marrakech/appartements/%C3%A0_louer?q=${enc(h)}` }],
};

// Track active vibes
let activeVibes = [];
let currentIntent = 'visit';
// Track last shown neighbourhoods — passed as excludeHood to avoid repetition
let lastShownHoods = [];
// Prevent concurrent searches (double-clicks on "Search for an alternative match")
let isSearching = false;
// ── NOMINATIM SERIAL QUEUE ──────────────────────────────────────────────────
// Nominatim rate limit: 1 req/sec. We must process sequentially, not with
// setTimeout offsets — response times vary and can cause concurrent requests.
const _nomQ = [];
let _nomRunning = false;
function queueNominatim(fn) {
  _nomQ.push(fn);
  if (!_nomRunning) _drainNomQ();
}
async function _drainNomQ() {
  _nomRunning = true;
  while (_nomQ.length > 0) {
    const fn = _nomQ.shift();
    try { await fn(); } catch(e) {}
    await new Promise(r => setTimeout(r, 1600)); // guaranteed 1.6s gap
  }
  _nomRunning = false;
}

// Lightweight circle GeoJSON (no turf.js needed)
function turf_circle(center, radiusKm, steps = 64) {
  const [lng, lat] = center;
  const coords = [];
  for (let i = 0; i <= steps; i++) {
    const angle = (i / steps) * 2 * Math.PI;
    const dLat = (radiusKm / 111.32) * Math.cos(angle);
    const dLng = (radiusKm / (111.32 * Math.cos(lat * Math.PI / 180))) * Math.sin(angle);
    coords.push([lng + dLng, lat + dLat]);
  }
  return { type: 'Feature', geometry: { type: 'Polygon', coordinates: [coords] } };
}

let mapInstances = {};

function toggleVibe(el) {
  el.classList.toggle('active');
  const vibe = el.dataset.vibe;
  if (el.classList.contains('active')) {
    activeVibes.push(vibe);
  } else {
    activeVibes = activeVibes.filter(v => v !== vibe);
  }
}

const VISIT_VIBES = [
  {vibe: "Wine & Nightlife", emoji: "🍷"},
  {vibe: "Shopping & Boutiques", emoji: "🛍️"},
  {vibe: "Food & Restaurants", emoji: "🍽️"},
  {vibe: "Parks & Outdoors", emoji: "🌿"},
  {vibe: "Culture & Architecture", emoji: "🏛️"},
  {vibe: "Music & Arts", emoji: "🎵"},
  {vibe: "Cafés & Chill", emoji: "☕"},
  {vibe: "Family Friendly", emoji: "👨‍👩‍👧"},
  {vibe: "Digital Nomad", emoji: "💻"},
];

const LIVE_VIBES = [
  {vibe: "Good Transport Links", emoji: "🚇"},
  {vibe: "Parks & Green Spaces", emoji: "🌿"},
  {vibe: "Family Friendly", emoji: "👨‍👩‍👧"},
  {vibe: "Quiet & Residential", emoji: "🏡"},
  {vibe: "Vibrant Local Scene", emoji: "🎭"},
  {vibe: "Expat Community", emoji: "🌍"},
  {vibe: "Budget Friendly", emoji: "💶"},
  {vibe: "Digital Nomad", emoji: "💻"},
  {vibe: "Cafés & Coworking", emoji: "☕"},
];

function setIntent(type) {
  currentIntent = type;
  document.querySelectorAll('.intent-card').forEach(c => c.classList.remove('active'));
  document.getElementById('intent' + type.charAt(0).toUpperCase() + type.slice(1))?.classList.add('active');

  const h2 = document.querySelector('.search-inner h2');
  if (h2) h2.innerHTML = type === 'move'
    ? 'Find where to <em>live</em>'
    : 'Find your <em>match</em> now';

  // Swap vibe pills
  activeVibes = [];
  const pills = document.getElementById('vibePills');
  const vibes = type === 'move' ? LIVE_VIBES : VISIT_VIBES;
  pills.innerHTML = vibes.map(v =>
    `<span class="vibe-pill" onclick="toggleVibe(this)" data-vibe="${v.vibe}">${v.emoji} ${v.vibe}</span>`
  ).join('');

  const label = document.getElementById('vibeSelectorLabel');
  if (label) label.textContent = type === 'move'
    ? '✦ What matters most to you (optional)'
    : '✦ Your vibe (optional — select all that apply)';
}

async function fetchUnsplashPhoto(query) {
  try {
    const url = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=landscape&client_id=${UNSPLASH_KEY}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    return data.urls?.regular || null;
  } catch { return null; }
}

async function runMatch(isAlternative = false) {
  if (isSearching) return; // prevent concurrent searches
  isSearching = true;
  const homeCity = document.getElementById('homeCity').value;
  const homeHood = document.getElementById('homeHood').value.trim();
  const destCity = document.getElementById('destCity').value;

  if (!homeCity || !homeHood || !destCity) {
    showError('Please fill in all three fields to find your match.');
    return;
  }
  if (homeCity === destCity) {
    showError("Your home city and destination are the same — pick a different destination!");
    return;
  }

  const btn = document.getElementById('matchBtn');
  const btnText = document.getElementById('btnText');
  const loading = document.getElementById('loadingMsg');
  const results = document.getElementById('resultsArea');
  const errorEl = document.getElementById('errorMsg');

  btn.disabled = true;
  btnText.textContent = 'Matching…';
  loading.classList.add('visible');
  errorEl.classList.remove('visible');

  // Disable + update all alternative match buttons so user gets feedback
  document.querySelectorAll('.alt-search-btn').forEach(b => {
    b.disabled = true;
    b.textContent = 'Searching…';
    b.style.opacity = '0.5';
    b.style.cursor = 'not-allowed';
  });

  // For a fresh search, wipe old results and reset state
  if (!isAlternative) {
    results.classList.remove('visible');
    results.innerHTML = '';
    lastShownHoods = [];
    mapInstances = {};
  }

  // Pass the last shown hood to avoid repetition
  const excludeHoods = lastShownHoods.length > 0 ? [...lastShownHoods] : [];

  try {
    // STEP 1 — Fast call: Claude + Foursquare (~15s)
    const result = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.matchmyhood.com/api/match");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.timeout = 120000; // 2 minutes
      xhr.onload = () => {
        try {
          const data = JSON.parse(xhr.responseText);
          if (data.matches) resolve({matches: data.matches, intent: data.intent});
          else reject(new Error(data.error || "No matches returned"));
        } catch {
          reject(new Error("Could not parse response"));
        }
      };
      xhr.onerror = () => reject(new Error("Network error"));
      xhr.ontimeout = () => reject(new Error("Request timed out"));
      xhr.send(JSON.stringify({ homeCity, homeHood, destCity, vibes: activeVibes, intent: currentIntent, excludeHoods }));
    });

    const matches = result.matches;

    if (!matches || !Array.isArray(matches)) {
      throw new Error('Could not parse match results. Please try again.');
    }

    // Track the returned hood to exclude next time
    if (matches[0]?.name) lastShownHoods.push(matches[0].name);

    // Capture current card count BEFORE rendering so amenity fetch targets correct DOM IDs
    const domOffset = document.getElementById('resultsArea').querySelectorAll('.result-card-wrap').length;

    // Show results — append if alternative, replace if fresh
    await renderResults(matches, homeHood, homeCity, destCity, isAlternative);

    // STEP 2 — Background call: Overpass amenities + transit (~30s, silent)
    {
      const callId = `amenity-loading-${Date.now()}`;
      const amenityNote = document.createElement('div');
      amenityNote.id = callId;
      amenityNote.style.cssText = 'text-align:center;font-size:12px;color:rgba(248,241,231,0.4);padding:8px;';
      amenityNote.textContent = '⏳ Loading local data…';
      document.getElementById('resultsArea').prepend(amenityNote);

      const amenityDomOffset = domOffset;

      // Fetch Nominatim polygons for each match — used to scope amenity pins to real hood shape
      const polygons = await Promise.all(matches.map(async m => {
        try {
          // Strip parentheticals e.g. "Neukölln (Reuterkiez)" → "Neukölln"
          const cleanName = m.name.replace(/\s*\(.*?\)/g, '').trim();
          const q = encodeURIComponent(cleanName + ', ' + m.city);
          const r = await fetch(`https://api.matchmyhood.com/api/nominatim?q=${q}`);
          const data = await r.json();
          const feature = data.features?.[0];
          const isPolygon = feature?.geometry?.type === 'Polygon' || feature?.geometry?.type === 'MultiPolygon';
          return isPolygon ? feature.geometry : null;
        } catch { return null; }
      }));

      // Attach polygon to each match before sending to amenities endpoint
      const matchesWithPolygons = matches.map((m, idx) => ({
        ...m, _polygon: polygons[idx] || null
      }));

      fetch('https://api.matchmyhood.com/api/amenities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ matches: matchesWithPolygons, destCity, intent: currentIntent })
      })
      .then(r => r.json())
      .then(data => {
        document.getElementById(callId)?.remove();
        if (!data.matches) return;
        data.matches.forEach((m, idx) => {
          const i = idx + amenityDomOffset;

          // Always update stations count + names (even if 0 / empty)
          const metroArr = m.nearestMetro || [];
          const busArr   = m.nearestBus || [];
          const busOnly  = m.busOnly || false;
          const busCount = m.busCount || busArr.length;
          const stationsEl = document.getElementById(`amenity-${i}-stations`);
          if (stationsEl) stationsEl.textContent = busOnly ? busCount : metroArr.length;

          // Update station tile icon + label for bus-only
          if (busOnly) {
            const tileEl = stationsEl?.closest('div[style*="text-align:center"]');
            if (tileEl) {
              const iconEl = tileEl.querySelector('div:first-child');
              const labelEl = tileEl.querySelector('div:last-child');
              if (iconEl) iconEl.textContent = '🚌';
              if (labelEl) labelEl.textContent = 'Bus stops';
            }
          }

          const stationNamesWrap = document.getElementById(`station-names-${i}`);
          if (stationNamesWrap) {
            if (busOnly && busArr.length) {
              stationNamesWrap.innerHTML = `<div>🚌 ${busArr.join(' · ')}</div><div style="font-size:10px;color:rgba(248,241,231,0.3);margin-top:4px;">No metro/train/tram within 800m</div>`;
              stationNamesWrap.style.display = 'block';
            } else if (metroArr.length) {
              stationNamesWrap.innerHTML = `<div>🚇 ${metroArr.join(' · ')}</div>`;
              stationNamesWrap.style.display = 'block';
            } else {
              stationNamesWrap.style.display = 'none';
            }
          }

          // Legacy transit-wrap (LIVE mode transit section above map)
          if (metroArr.length) {
            const transitEl = document.getElementById(`transit-${i}`);
            if (transitEl) transitEl.textContent = metroArr.join(' · ');
            const transitWrap = document.getElementById(`transit-wrap-${i}`);
            if (transitWrap) transitWrap.style.display = 'block';
          }

          // Update all tiles — both modes, always
          ['pharmacies','supermarkets','parks','gyms','intlSchools','museums','restaurants','cafes','bars','musicVenues','cinemas','theatres','markets','hospitals'].forEach(key => {
            const el = document.getElementById(`amenity-${i}-${key}`);
            if (el) el.textContent = m.amenities?.[key] ?? '0';
          });

          // Populate map sources from server coords
          const fillMapSource = (sourceId, coords, label, pillId) => {
            const map = mapInstances[i];
            if (!map || !coords?.length) return;
            const feats = coords.map(c => ({ type:'Feature', geometry:{ type:'Point', coordinates:[c.lon,c.lat] }, properties:{ name:c.name||label, city: m.city||destCity, hood: m.name } }));
            const geojson = { type:'FeatureCollection', features:feats };
            map._sourceData[sourceId] = geojson; // store for 3D revert restore
            const go = () => {
              const src = map.getSource(sourceId);
              if (src) {
                src.setData(geojson);
                if (pillId) { const pill = document.getElementById(pillId); if(pill) pill.textContent = pill.textContent.replace(' ⏳',''); }
              } else setTimeout(go, 500);
            };
            go();
          };
          fillMapSource('transport',    m.transitCoords,     'Station',     `pill-transport-${i}`);
          fillMapSource('restaurants',  m.restaurantCoords,  'Restaurant',  null);
          fillMapSource('bars',         m.barCoords,         'Bar',         null);
          fillMapSource('supermarkets', m.supermarketCoords, 'Supermarket', null);
          fillMapSource('gyms',         m.gymCoords,         'Gym',         null);
          fillMapSource('museums',      m.museumCoords,      'Attraction',  null);
          fillMapSource('coffee',       m.cafeCoords,        'Café',        null);

          // Fetch and draw real transit lines
          fetch('https://api.matchmyhood.com/api/transitlines', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ lat: m.lat, lng: m.lng })
          })
          .then(r => r.json())
          .then(data => {
            const map = mapInstances[i];
            if (!map) return;

            const transportPill = document.getElementById(`pill-transport-${i}`);

            if (data.lines?.length) {
              // Transit lines exist — hide the transport pins pill entirely
              if (transportPill) transportPill.style.display = 'none';
            } else {
              // No lines — rename pill to Bus Stops so it's clear what it shows
              if (transportPill) {
                transportPill.textContent = transportPill.textContent.replace('⏳','').trim();
                transportPill.innerHTML = '🚌 Bus Stops';
              }
            }

            if (!data.lines?.length) return;
            // Stagger additions — adding 150+ sources/layers simultaneously overwhelms Mapbox
            data.lines.forEach((line, idx) => {
              setTimeout(() => {
              const sourceId = `transit-line-${i}-${idx}`;
              const layerId  = `transit-line-layer-${i}-${idx}`;
              // Add each line as a MultiLineString
              const geojson = {
                type: 'Feature',
                properties: { name: line.name, ref: line.ref, colour: line.colour },
                geometry: { type: 'MultiLineString', coordinates: line.coords }
              };
              const addLine = () => {
                try {
                  if (!map.getSource(sourceId)) {
                    map.addSource(sourceId, { type: 'geojson', data: geojson });
                    map.addLayer({
                      id: layerId, type: 'line', source: sourceId,
                      layout: { visibility: 'visible' },
                      paint: { 'line-color': line.colour, 'line-width': 1.5, 'line-opacity': 0.2 }
                    });

                    // Draw stop pins exactly on the line
                    if (line.stops?.length) {
                      const stopsSourceId = `${sourceId}-stops`;
                      const stopsLayerId  = `${layerId}-stops`;
                      map.addSource(stopsSourceId, { type: 'geojson', data: {
                        type: 'FeatureCollection',
                        features: line.stops.map(c => ({
                          type: 'Feature',
                          geometry: { type: 'Point', coordinates: c },
                          properties: { name: line.name, ref: line.ref }
                        }))
                      }});
                      map.addLayer({ id: stopsLayerId, type: 'circle', source: stopsSourceId,
                        layout: { visibility: 'visible' },
                        paint: { 'circle-radius': 4, 'circle-color': line.colour, 'circle-stroke-width': 1.5, 'circle-stroke-color': 'white', 'circle-opacity': 0.8 }
                      });
                    }
                    // Hover popup showing line name + ref
                    map.on('mouseenter', layerId, (e) => {
                      map.getCanvas().style.cursor = 'pointer';
                      const label = line.ref ? `${line.ref} — ${line.name}` : line.name;
                      new mapboxgl.Popup({ closeButton: false, closeOnClick: false, offset: 10 })
                        .setLngLat(e.lngLat)
                        .setHTML(`<div style="font-size:12px;font-weight:700;color:var(--cream);padding:2px 4px;">${label}</div>`)
                        .addTo(map);
                    });
                    map.on('mouseleave', layerId, () => {
                      map.getCanvas().style.cursor = '';
                      document.querySelectorAll('.mapboxgl-popup').forEach(p => p.remove());
                    });
                  }
                } catch(e) { console.error('addLine error:', e.message); }
              };
              addLine();
              }, idx * 30); // 30ms stagger per line
            });
          })
          .catch(e => console.error('Transit lines error:', e));
        });
      })
      .catch(err => {
        console.error('Amenities error:', err);
        document.getElementById(callId)?.remove();
      });
    }

  } catch (err) {
    showError(err.message || 'Something went wrong finding your match. Please try again in a moment.');
    console.error(err);
  } finally {
    btn.disabled = false;
    btnText.textContent = '✦ Match it';
    loading.classList.remove('visible');
    isSearching = false;
    // Restore all alternative buttons
    document.querySelectorAll('.alt-search-btn').forEach(b => {
      b.disabled = false;
      b.textContent = 'Search for an alternative match →';
      b.style.opacity = '1';
      b.style.cursor = 'pointer';
    });
  }
}

async function renderResults(matches, homeHood, homeCity, destCity, isAlternative = false) {
  const results = document.getElementById('resultsArea');

  // Determine global match index offset so DOM IDs stay unique across appended cards
  const existingCards = results.querySelectorAll('.result-card-wrap').length;
  const indexOffset = existingCards;

  const header = isAlternative
    ? `<div style="margin:32px 0 24px;padding-top:24px;border-top:1px solid rgba(248,241,231,0.1);">
        <p style="font-size:13px; color:rgba(248,241,231,0.5); letter-spacing:0.8px; text-transform:uppercase; font-weight:600; margin-bottom:10px;">✦ Your alternative match</p>
        <p style="font-size:18px; color:var(--cream); font-family:'Cormorant Garamond',serif; font-weight:600;">
          Here's another neighbourhood in ${destCity} for you:
        </p>
      </div>`
    : `<div style="margin-bottom:24px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;flex-wrap:wrap;gap:10px;">
          <p style="font-size:13px; color:rgba(248,241,231,0.5); letter-spacing:0.8px; text-transform:uppercase; font-weight:600;">✦ Your match</p>
        </div>
        <p style="font-size:18px; color:var(--cream); font-family:'Cormorant Garamond',serif; font-weight:600;">
          If you love <em style="color:var(--terracotta-light)">${homeHood}</em> in ${homeCity}, here's your perfect neighbourhood in ${destCity}:
        </p>
      </div>`;

  // Build cards HTML
  const cards = matches.map((m, idx) => {
    const i = idx + indexOffset; // unique index across all appended cards
    const bookingUrl = `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(m.name + ' ' + destCity)}`;
    const airbnbUrl = `https://www.airbnb.com/s/${encodeURIComponent(destCity + '--' + m.name)}/homes`;

    const restaurants = (m.top3Restaurants || []).map((r, j) => {
      const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(r.name + ' ' + m.name + ' ' + destCity)}`;
      return `<div class="pick-item">
        <div class="pick-num">${j+1}</div>
        <div class="pick-info">
          <div class="pick-name">${r.name}</div>
          <div class="pick-desc">${r.description}</div>
          <a href="${mapsUrl}" target="_blank" class="pick-link">📍 View on map →</a>
        </div>
      </div>`;
    }).join('');

    const wineBars = (m.top3WineBars || []).map((r, j) => {
      const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(r.name + ' ' + m.name + ' ' + destCity)}`;
      return `<div class="pick-item">
        <div class="pick-num">${j+1}</div>
        <div class="pick-info">
          <div class="pick-name">${r.name}</div>
          <div class="pick-desc">${r.description}</div>
          <a href="${mapsUrl}" target="_blank" class="pick-link">📍 View on map →</a>
        </div>
      </div>`;
    }).join('');

    const thingsToDo = (m.top3ThingsToDo || []).map((r, j) => {
      const gygUrl = `https://www.getyourguide.com/s/?q=${encodeURIComponent(r.gygQuery || r.name + ' ' + destCity)}&partner_id=${GYG_AFF}`;
      const viatorUrl = `https://www.viator.com/search/${encodeURIComponent(destCity)}?text=${encodeURIComponent(r.name)}&pid=${VIATOR_AFF}`;
      const badge = r.isPaid ? '<span style="font-size:10px;background:rgba(196,98,45,0.2);color:var(--terracotta-light);padding:2px 8px;border-radius:100px;margin-left:6px;">Bookable</span>' : '<span style="font-size:10px;background:rgba(107,124,74,0.2);color:#8BA55A;padding:2px 8px;border-radius:100px;margin-left:6px;">Free</span>';
      return `<div class="pick-item">
        <div class="pick-num">${j+1}</div>
        <div class="pick-info">
          <div class="pick-name">${r.name}${badge}</div>
          <div class="pick-desc">${r.description}</div>
          ${r.isPaid ? `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:4px;">
            <a href="${gygUrl}" target="_blank" class="pick-link">🎫 GetYourGuide →</a>
            <a href="${viatorUrl}" target="_blank" class="pick-link">🎟️ Viator →</a>
          </div>` : ''}
        </div>
      </div>`;
    }).join('');

    // Pros & cons
    const prosHtml = (m.pros || []).map(p =>
      `<div style="display:flex;align-items:center;gap:8px;font-size:13px;color:rgba(248,241,231,0.8);margin-bottom:6px;">
        <span style="color:#8BA55A;font-size:16px;">✓</span> ${p}
      </div>`
    ).join('');

    const consHtml = (m.cons || []).map(c =>
      `<div style="display:flex;align-items:center;gap:8px;font-size:13px;color:rgba(248,241,231,0.8);margin-bottom:6px;">
        <span style="color:var(--terracotta-light);font-size:16px;">!</span> ${c}
      </div>`
    ).join('');

    const prosConsHtml = (prosHtml || consHtml) ? `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:14px 0;padding:16px;background:rgba(255,255,255,0.04);border-radius:12px;border:1px solid rgba(255,255,255,0.06);">
        ${prosHtml ? `<div><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:#8BA55A;margin-bottom:10px;">✓ Highlights</div>${prosHtml}</div>` : ''}
        ${consHtml ? `<div><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:var(--terracotta-light);margin-bottom:10px;">! Watch out</div>${consHtml}</div>` : ''}
      </div>` : '';

    // Transport
    const metroLink = METRO_LINKS[destCity];
    const transportHtml = `
      <div id="transit-wrap-${i}" style="margin:14px 0;padding:12px 14px;background:rgba(255,255,255,0.04);border-radius:10px;border:1px solid rgba(255,255,255,0.06);${m.nearestMetro?.length ? '' : 'display:none'}">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:rgba(248,241,231,0.4);">🚇 Nearest Metro / Transit</div>
          ${metroLink ? `<a href="${metroLink.url}" target="_blank" style="font-size:11px;color:var(--terracotta-light);text-decoration:none;font-weight:600;">${metroLink.name} map →</a>` : ''}
        </div>
        <div id="transit-${i}" style="font-size:13px;color:rgba(248,241,231,0.8);">${m.nearestMetro?.join(' · ') || ''}</div>
      </div>`;

    // Station names row — shown below amenity grids in both modes
    const stationNamesHtml = `
      <div id="station-names-${i}" style="margin:8px 0 14px;padding:8px 12px;background:rgba(255,255,255,0.03);border-radius:8px;border:1px solid rgba(255,255,255,0.05);font-size:12px;color:rgba(248,241,231,0.5);display:${(m.nearestMetro?.length || m.busOnly) ? 'block' : 'none'};">
        <div id="station-names-text-${i}">${m.busOnly ? '🚌 ' + (m.nearestBus?.join(' · ') || '') : '🚇 ' + (m.nearestMetro?.join(' · ') || '')}</div>
        ${m.busOnly ? '<div style="font-size:10px;color:rgba(248,241,231,0.3);margin-top:4px;">No metro/train/tram within 800m</div>' : ''}
      </div>`;

    // VISIT amenity grid — restaurants, bars, coffees, parks, attractions, stations
    const visitAmenitiesHtml = `
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0 0;">
        <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.04);border-radius:10px;">
          <div style="font-size:20px;margin-bottom:4px;">🍽️</div>
          <div id="amenity-${i}-restaurants" style="font-size:18px;font-weight:700;color:var(--cream);">${m.amenities?.restaurants ?? '…'}</div>
          <div style="font-size:10px;color:rgba(248,241,231,0.4);">Restaurants</div>
        </div>
        <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.04);border-radius:10px;">
          <div style="font-size:20px;margin-bottom:4px;">🍷</div>
          <div id="amenity-${i}-bars" style="font-size:18px;font-weight:700;color:var(--cream);">${m.amenities?.bars ?? '…'}</div>
          <div style="font-size:10px;color:rgba(248,241,231,0.4);">Bars & Pubs</div>
        </div>
        <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.04);border-radius:10px;">
          <div style="font-size:20px;margin-bottom:4px;">☕</div>
          <div id="amenity-${i}-cafes" style="font-size:18px;font-weight:700;color:var(--cream);">${m.amenities?.cafes ?? '…'}</div>
          <div style="font-size:10px;color:rgba(248,241,231,0.4);">Coffee Shops</div>
        </div>
        <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.04);border-radius:10px;">
          <div style="font-size:20px;margin-bottom:4px;">🌳</div>
          <div id="amenity-${i}-parks" style="font-size:18px;font-weight:700;color:var(--cream);">${m.amenities?.parks ?? '…'}</div>
          <div style="font-size:10px;color:rgba(248,241,231,0.4);">Parks</div>
        </div>
        <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.04);border-radius:10px;">
          <div style="font-size:20px;margin-bottom:4px;">🏛️</div>
          <div id="amenity-${i}-museums" style="font-size:18px;font-weight:700;color:var(--cream);">${m.amenities?.museums ?? '…'}</div>
          <div style="font-size:10px;color:rgba(248,241,231,0.4);">Attractions</div>
        </div>
        <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.04);border-radius:10px;">
          <div style="font-size:20px;margin-bottom:4px;">${m.busOnly ? '🚌' : '🚇'}</div>
          <div id="amenity-${i}-stations" style="font-size:18px;font-weight:700;color:var(--cream);">${m.busOnly ? (m.busCount ?? m.nearestBus?.length ?? '…') : (m.nearestMetro?.length ?? '…')}</div>
          <div style="font-size:10px;color:rgba(248,241,231,0.4);">${m.busOnly ? 'Bus stops' : 'Stations'}</div>
        </div>
      </div>
      ${stationNamesHtml}
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:rgba(248,241,231,0.35);margin:16px 0 8px;">🎭 Entertainment & Culture</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:0;">
        <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.04);border-radius:10px;">
          <div style="font-size:20px;margin-bottom:4px;">🎵</div>
          <div id="amenity-${i}-musicVenues" style="font-size:18px;font-weight:700;color:var(--cream);">${m.amenities?.musicVenues ?? '…'}</div>
          <div style="font-size:10px;color:rgba(248,241,231,0.4);">Music Venues</div>
        </div>
        <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.04);border-radius:10px;">
          <div style="font-size:20px;margin-bottom:4px;">🎬</div>
          <div id="amenity-${i}-cinemas" style="font-size:18px;font-weight:700;color:var(--cream);">${m.amenities?.cinemas ?? '…'}</div>
          <div style="font-size:10px;color:rgba(248,241,231,0.4);">Cinemas</div>
        </div>
        <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.04);border-radius:10px;">
          <div style="font-size:20px;margin-bottom:4px;">🎭</div>
          <div id="amenity-${i}-theatres" style="font-size:18px;font-weight:700;color:var(--cream);">${m.amenities?.theatres ?? '…'}</div>
          <div style="font-size:10px;color:rgba(248,241,231,0.4);">Theatres</div>
        </div>
        <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.04);border-radius:10px;">
          <div style="font-size:20px;margin-bottom:4px;">🛒</div>
          <div id="amenity-${i}-markets" style="font-size:18px;font-weight:700;color:var(--cream);">${m.amenities?.markets ?? '…'}</div>
          <div style="font-size:10px;color:rgba(248,241,231,0.4);">Street Markets</div>
        </div>
      </div>`;

    // LIVE amenities grid (Museums shown on map as Attractions)
    const amenitiesHtml = `
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0 0;">
        <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.04);border-radius:10px;">
          <div style="font-size:20px;margin-bottom:4px;">💊</div>
          <div id="amenity-${i}-pharmacies" style="font-size:18px;font-weight:700;color:var(--cream);">${m.amenities?.pharmacies ?? '…'}</div>
          <div style="font-size:10px;color:rgba(248,241,231,0.4);">Pharmacies</div>
        </div>
        <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.04);border-radius:10px;">
          <div style="font-size:20px;margin-bottom:4px;">🛒</div>
          <div id="amenity-${i}-supermarkets" style="font-size:18px;font-weight:700;color:var(--cream);">${m.amenities?.supermarkets ?? '…'}</div>
          <div style="font-size:10px;color:rgba(248,241,231,0.4);">Supermarkets</div>
        </div>
        <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.04);border-radius:10px;">
          <div style="font-size:20px;margin-bottom:4px;">🌳</div>
          <div id="amenity-${i}-parks" style="font-size:18px;font-weight:700;color:var(--cream);">${m.amenities?.parks ?? '…'}</div>
          <div style="font-size:10px;color:rgba(248,241,231,0.4);">Parks</div>
        </div>
        <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.04);border-radius:10px;">
          <div style="font-size:20px;margin-bottom:4px;">🏋️</div>
          <div id="amenity-${i}-gyms" style="font-size:18px;font-weight:700;color:var(--cream);">${m.amenities?.gyms ?? '…'}</div>
          <div style="font-size:10px;color:rgba(248,241,231,0.4);">Gyms</div>
        </div>
        <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.04);border-radius:10px;">
          <div style="font-size:20px;margin-bottom:4px;">🎓</div>
          <div id="amenity-${i}-intlSchools" style="font-size:18px;font-weight:700;color:var(--cream);">${m.amenities?.intlSchools ?? '…'}</div>
          <div style="font-size:10px;color:rgba(248,241,231,0.4);">Schools</div>
        </div>
        <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.04);border-radius:10px;">
          <div style="font-size:20px;margin-bottom:4px;">${m.busOnly ? '🚌' : '🚇'}</div>
          <div id="amenity-${i}-stations" style="font-size:18px;font-weight:700;color:var(--cream);">${m.busOnly ? (m.busCount ?? m.nearestBus?.length ?? '…') : (m.nearestMetro?.length ?? '…')}</div>
          <div style="font-size:10px;color:rgba(248,241,231,0.4);">${m.busOnly ? 'Bus stops' : 'Stations'}</div>
        </div>
      </div>
      ${stationNamesHtml}
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:rgba(248,241,231,0.35);margin:16px 0 8px;">🎭 Entertainment & Culture</div>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:0;">
        <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.04);border-radius:10px;">
          <div style="font-size:20px;margin-bottom:4px;">🎵</div>
          <div id="amenity-${i}-musicVenues" style="font-size:18px;font-weight:700;color:var(--cream);">${m.amenities?.musicVenues ?? '…'}</div>
          <div style="font-size:10px;color:rgba(248,241,231,0.4);">Music Venues</div>
        </div>
        <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.04);border-radius:10px;">
          <div style="font-size:20px;margin-bottom:4px;">🎬</div>
          <div id="amenity-${i}-cinemas" style="font-size:18px;font-weight:700;color:var(--cream);">${m.amenities?.cinemas ?? '…'}</div>
          <div style="font-size:10px;color:rgba(248,241,231,0.4);">Cinemas</div>
        </div>
        <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.04);border-radius:10px;">
          <div style="font-size:20px;margin-bottom:4px;">🎭</div>
          <div id="amenity-${i}-theatres" style="font-size:18px;font-weight:700;color:var(--cream);">${m.amenities?.theatres ?? '…'}</div>
          <div style="font-size:10px;color:rgba(248,241,231,0.4);">Theatres</div>
        </div>
        <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.04);border-radius:10px;">
          <div style="font-size:20px;margin-bottom:4px;">🛒</div>
          <div id="amenity-${i}-markets" style="font-size:18px;font-weight:700;color:var(--cream);">${m.amenities?.markets ?? '…'}</div>
          <div style="font-size:10px;color:rgba(248,241,231,0.4);">Street Markets</div>
        </div>
        <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.04);border-radius:10px;">
          <div style="font-size:20px;margin-bottom:4px;">🏥</div>
          <div id="amenity-${i}-hospitals" style="font-size:18px;font-weight:700;color:var(--cream);">${m.amenities?.hospitals ?? '…'}</div>
          <div style="font-size:10px;color:rgba(248,241,231,0.4);">Hospitals</div>
        </div>
      </div>`;

    // Rent info (LIVE only)
    const rentHtml = m.averageRent1bed ? `
      <div style="margin:14px 0;padding:12px 14px;background:rgba(201,164,85,0.08);border-radius:10px;border:1px solid rgba(201,164,85,0.2);">
        <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:var(--gold);">🏠 Average 1-bed rent: </span>
        <span style="font-size:14px;color:var(--cream);font-weight:600;">${m.averageRent1bed}</span>
      </div>` : '';

    // Property links for LIVE mode
    const isLive = currentIntent === 'move';
    const propertySites = PROPERTY_SITES[destCity] || [];
    const propertyLinksHtml = isLive && propertySites.length ? `
      <div style="margin-top:12px;">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:rgba(248,241,231,0.4);margin-bottom:8px;">🏠 Find a place to rent in <span style="color:var(--terracotta-light)">${m.name}</span></div>
        <div class="booking-btns">
          ${propertySites.map((s, idx) => `
            <a href="${s.url(m.name, destCity)}" target="_blank" class="${idx === 0 ? 'booking-btn-hotel' : 'booking-btn-airbnb'}">
              🔍 ${s.name} →
            </a>`).join('')}
          <a href="${airbnbUrl}" target="_blank" class="booking-btn-airbnb">🏠 Airbnb →</a>
        </div>
        <div style="font-size:10px;color:rgba(248,241,231,0.3);margin-top:6px;">Links pre-filtered for ${m.name} · Refine on-site for best results</div>
      </div>` : `
      <div class="booking-btns">
        <a href="${bookingUrl}" target="_blank" class="booking-btn-hotel">🏨 Hotels in ${m.name} →</a>
        <a href="${airbnbUrl}" target="_blank" class="booking-btn-airbnb">🏠 Airbnb in ${m.name} →</a>
      </div>`;

    return `
    <div class="result-card-wrap">
    <div class="result-card" id="card-${i}" style="animation-delay:${i * 0.1}s">
      <div id="photo-${i}" class="result-photo-placeholder">Loading photo…</div>
      <div class="result-header">
        <div>
          <div class="result-city">${m.city} · <span style="color:var(--terracotta-light);font-size:11px;">${isLive ? '🏡 LIVE' : '✈️ VISIT'}</span></div>
          <div class="result-hood-name">${m.name}</div>
        </div>
        <div class="result-score">${m.matchScore}% match</div>
      </div>
      <p style="font-size:15px; color:rgba(248,241,231,0.85); font-style:italic; margin-bottom:10px; font-family:'Cormorant Garamond',serif;">"${m.tagline}"</p>
      <div class="result-desc">${m.whyItMatches}</div>
      <div class="result-tags">${(m.vibes||[]).map(v=>`<span class="result-tag">${v}</span>`).join('')}</div>

      ${prosConsHtml}
      ${transportHtml}
      ${isLive ? amenitiesHtml : visitAmenitiesHtml}
      ${isLive ? rentHtml : ''}

      ${m.mustTry ? `<div class="must-try">⭐ <strong>Must try:</strong> ${m.mustTry}</div>` : ''}

      <div class="picks-section">
        <div class="picks-title">🍽️ Top restaurants</div>
        <div class="picks-list">${restaurants || '<div class="pick-item"><div class="pick-desc">Loading…</div></div>'}</div>
      </div>

      <div class="picks-section">
        <div class="picks-title">🍷 Top wine bars & drinks</div>
        <div class="picks-list">${wineBars || '<div class="pick-item"><div class="pick-desc">Loading…</div></div>'}</div>
      </div>

      <div class="picks-section">
        <div class="picks-title">🏛️ Top things to do</div>
        <div class="picks-list">${thingsToDo || '<div class="pick-item"><div class="pick-desc">Loading…</div></div>'}</div>
      </div>

      <div class="result-extras">
        <div class="result-extra"><div class="result-extra-label">🚶 Walkability</div><div class="result-extra-val">${m.walkScore||'—'}</div></div>
        <div class="result-extra"><div class="result-extra-label">💶 Cost level</div><div class="result-extra-val">${m.costLevel||'—'}</div></div>
        <div class="result-extra"><div class="result-extra-label">🔒 Safety</div><div class="result-extra-val">${m.safetyRating||'—'}</div></div>
      </div>
      <p style="font-size:12px; color:rgba(248,241,231,0.4); margin-top:12px;">🎯 Best for: ${m.bestFor||'—'}</p>

      ${(m.lat && m.lng) ? `
      <div class="map-layer-pills" id="map-pills-${i}">
        <span class="map-layer-pill active" data-layer="neighbourhood" onclick="toggleMapLayer(${i},'neighbourhood',this)">🏘️ Neighbourhood</span>
        ${isLive
          ? `<span class="map-layer-pill" data-layer="supermarkets" onclick="toggleMapLayer(${i},'supermarkets',this)">🛒 Supermarkets</span>
             <span class="map-layer-pill" data-layer="gyms" onclick="toggleMapLayer(${i},'gyms',this)">🏋️ Gyms</span>`
          : `<span class="map-layer-pill" data-layer="restaurants" onclick="toggleMapLayer(${i},'restaurants',this)">🍽️ Restaurants</span>
             <span class="map-layer-pill" data-layer="bars" onclick="toggleMapLayer(${i},'bars',this)">🍷 Wine Bars</span>
             <span class="map-layer-pill" data-layer="museums" onclick="toggleMapLayer(${i},'museums',this)">🏛️ Attractions</span>`}
        <span class="map-layer-pill" data-layer="coffee" onclick="toggleMapLayer(${i},'coffee',this)">☕ Coffee</span>
        <span id="pill-transport-${i}" class="map-layer-pill" data-layer="transport" onclick="toggleMapLayer(${i},'transport',this)">🚇 Transport ⏳</span>
        <span id="pill-parks-${i}" class="map-layer-pill" data-layer="parks" onclick="toggleMapLayer(${i},'parks',this)">🌳 Parks ⏳</span>
      </div>
      <div class="result-map" id="map-${i}">
        <button class="map-expand-btn" onclick="toggleMapFullscreen('map-${i}', this)">⛶ Expand</button>
      </div>` : ''}

      ${propertyLinksHtml}
    </div>
    </div>
    <div style="text-align:center;margin:20px 0 8px;">
      <button onclick="runMatch(true)" class="alt-search-btn" style="display:inline-flex;align-items:center;gap:8px;background:transparent;border:1.5px solid rgba(196,98,45,0.5);color:var(--terracotta-light);padding:13px 26px;border-radius:100px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;cursor:pointer;transition:all 0.2s;letter-spacing:0.2px;" onmouseover="if(!isSearching){this.style.borderColor='var(--terracotta-light)';this.style.background='rgba(196,98,45,0.08)'}" onmouseout="this.style.borderColor='rgba(196,98,45,0.5)';this.style.background='transparent'">
        Search for an alternative match →
      </button>
    </div>`;
  }).join('');

  const shareText = `<div style="margin-top:20px; padding:16px 20px; background:rgba(255,255,255,0.05); border-radius:12px; border:1px solid rgba(255,255,255,0.08);">
    <p style="font-size:13px; color:rgba(248,241,231,0.5); margin-bottom:10px;">Share your match 👇</p>
    <button onclick="shareMatch('${homeHood}','${homeCity}','${matches[0]?.name}','${destCity}')" style="background:var(--terracotta); color:white; border:none; border-radius:100px; padding:10px 20px; font-family:'DM Sans',sans-serif; font-size:13px; font-weight:600; cursor:pointer; transition:all 0.2s;" onmouseover="this.style.background='var(--terracotta-light)'" onmouseout="this.style.background='var(--terracotta)'">
      Share on social ✦
    </button>
  </div>`;

  const premiumTeaser = `
  <div style="margin-top:24px; padding:28px; background:linear-gradient(135deg, rgba(201,164,85,0.08), rgba(61,43,31,0.3)); border-radius:20px; border:1.5px solid rgba(201,164,85,0.3); text-align:center;">
    <div style="font-size:11px; letter-spacing:0.8px; text-transform:uppercase; color:var(--gold); font-weight:700; margin-bottom:12px;">✦ Explorer & Founding Members</div>
    <h3 style="font-family:'Cormorant Garamond',serif; font-size:24px; color:var(--cream); font-weight:600; margin-bottom:8px;">Unlock the full neighbourhood deep-dive</h3>
    <p style="font-size:14px; color:rgba(248,241,231,0.6); margin-bottom:20px; max-width:400px; margin-left:auto; margin-right:auto; line-height:1.6;">
      Neighbourhood boundary maps · Restaurant & bar pins · Public transport layer · Events & what's on · Rental & real estate links · Off the beaten track picks
    </p>
    <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
      <button onclick="handleStripeCheckout('explorer_annual')" style="background:var(--terracotta); color:white; border:none; border-radius:100px; padding:14px 28px; font-family:'DM Sans',sans-serif; font-size:14px; font-weight:700; cursor:pointer; transition:all 0.2s;">
        🗺️ Explorer — €49/year
      </button>
      <button onclick="handleStripeCheckout('founding_member')" style="background:linear-gradient(135deg, #C9A455, #B8922E); color:white; border:none; border-radius:100px; padding:14px 28px; font-family:'DM Sans',sans-serif; font-size:14px; font-weight:700; cursor:pointer; transition:all 0.2s;">
        ⭐ Founding Member — €149 forever
      </button>
    </div>
    <p style="font-size:11px; color:rgba(248,241,231,0.3); margin-top:12px;">First 500 founding members only · Never repeated</p>
  </div>`;

  if (isAlternative) {
    // Remove old premiumTeaser + shareText before appending new content
    results.querySelectorAll('.results-footer').forEach(el => el.remove());
    const newContent = document.createElement('div');
    newContent.innerHTML = header + cards + `<div class="results-footer">${shareText}${premiumTeaser}</div>`;
    results.appendChild(newContent);
    // Scroll to new alternative match, not top of results
    newContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    results.innerHTML = header + cards + `<div class="results-footer">${shareText}${premiumTeaser}</div>`;
    results.classList.add('visible');
    // UX fix: scroll to results section but offset down just enough — form stays partially visible
    const resultsSection = document.getElementById('results');
    const offset = resultsSection.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }

  // Load photos and maps — staggered to avoid Unsplash rate limits
  (async () => {
    for (let idx = 0; idx < matches.length; idx++) {
      const m = matches[idx];
      const i = idx + indexOffset; // match DOM IDs
      if (idx > 0) await new Promise(r => setTimeout(r, 1000));

      // Load Unsplash photo with fallback queries
      if (m.unsplashQuery) {
        const shortQuery = m.unsplashQuery.split(' ').slice(0,2).join(' ');
        const queries = [shortQuery, m.city, `${m.city} street`, 'lisbon barcelona london street'];
        let photoUrl = null;
        for (const q of queries) {
          photoUrl = await fetchUnsplashPhoto(q);
          if (photoUrl) break;
          await new Promise(r => setTimeout(r, 500));
        }
        const photoEl = document.getElementById(`photo-${i}`);
        if (photoEl && photoUrl) {
          photoEl.outerHTML = `<img src="${photoUrl}" class="result-photo" alt="${m.name} neighbourhood" loading="lazy"/>`;
        } else if (photoEl) {
          photoEl.innerHTML = `🏘️ ${m.name}`;
        }
      }

      // Init Mapbox map
      if (m.lat && m.lng) {
        setTimeout(() => {
          const mapEl = document.getElementById(`map-${i}`);
          if (mapEl && !mapInstances[i]) {
            try {
              mapboxgl.accessToken = MAPBOX_TOKEN;
              const map = new mapboxgl.Map({
                container: `map-${i}`,
                style: 'mapbox://styles/mapbox/light-v11',
                center: [m.lng, m.lat],
                zoom: 14.5,
                scrollZoom: false,
                attributionControl: false,
              });

              map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right');
              map.addControl(new mapboxgl.AttributionControl({ compact: true }));

              // ── 3D TOGGLE CONTROL ────────────────────────────────────────
              const Toggle3D = {
                _btn: null,
                _active: false,
                onAdd(map) {
                  this._map = map;
                  const container = document.createElement('div');
                  container.className = 'mapboxgl-ctrl mapboxgl-ctrl-3d';
                  this._btn = document.createElement('button');
                  this._btn.className = 'map-3d-toggle';
                  this._btn.innerHTML = '🏙️ 3D';
                  this._btn.title = 'Toggle 3D view';
                  this._btn.onclick = () => {
                    this._active = !this._active;
                    if (this._active) {
                      this._btn.classList.add('active');
                      map.setStyle('mapbox://styles/mapbox/standard');
                      map.once('style.load', () => {
                        map.easeTo({ pitch: 50, bearing: -15, duration: 800 });
                      });
                    } else {
                      this._btn.classList.remove('active');
                      map.setStyle('mapbox://styles/mapbox/light-v11');
                      map.once('style.load', () => {
                        map.easeTo({ pitch: 0, bearing: 0, duration: 600 });
                        // Re-add all custom layers wiped by setStyle
                        restoreMapLayers(map, map._matchData, map._matchIndex);
                      });
                    }
                  };
                  container.appendChild(this._btn);
                  return container;
                },
                onRemove() { this._btn = null; }
              };
              map.addControl(Toggle3D, 'top-right');

              // Store match data on map instance for layer toggling
              map._matchData = m;
              map._matchIndex = i;
              map._sourceData = {};        // pin GeoJSON per source, for 3D revert restore
              map._boundaryData = null;    // current boundary GeoJSON (circle or polygon)
              mapInstances[i] = map;

              map.on('load', () => {
                // ── NEIGHBOURHOOD BOUNDARY ──────────────────────────────
                // Step 1: Draw circle IMMEDIATELY — guaranteed to always show.
                // This is the reliable baseline regardless of Nominatim result.
                try {
                  const circle = turf_circle([m.lng, m.lat], 0.6);
                  map._boundaryData = circle;
                  map.addSource('neighbourhood', { type: 'geojson', data: circle });
                  map.addLayer({ id: 'neighbourhood-fill', type: 'fill', source: 'neighbourhood', paint: { 'fill-color': '#C4622D', 'fill-opacity': 0.10 } });
                  map.addLayer({ id: 'neighbourhood-border', type: 'line', source: 'neighbourhood', paint: { 'line-color': '#C4622D', 'line-width': 2, 'line-opacity': 0.7, 'line-dasharray': [4, 2] } });
                } catch(e) { console.error('Circle boundary error:', e.message); }

                // Step 2: Try Nominatim to upgrade circle to a real polygon.
                // Serial queue ensures max 1 req/sec across all map instances.
                queueNominatim(() => new Promise(resolve => {
                  const cleanName = m.name.replace(/\s*\(.*?\)/g, '').trim();
                  const hoodQuery = encodeURIComponent(cleanName + ', ' + m.city);
                  fetch(`https://api.matchmyhood.com/api/nominatim?q=${hoodQuery}`)
                    .then(r => r.json())
                    .then(data => {
                      const feature = data.features?.[0];
                      const isPolygon = feature?.geometry?.type === 'Polygon' || feature?.geometry?.type === 'MultiPolygon';
                      if (isPolygon) {
                        try {
                          // Replace circle data with the real polygon geometry
                          map._boundaryData = feature;
                          map.getSource('neighbourhood').setData(feature);
                          // Upgrade to solid border
                          map.setPaintProperty('neighbourhood-fill', 'fill-opacity', 0.12);
                          map.setPaintProperty('neighbourhood-border', 'line-width', 2.5);
                          map.setPaintProperty('neighbourhood-border', 'line-opacity', 0.85);
                        } catch(e) { console.error('Polygon upgrade error:', e.message); }
                      }
                      // If no polygon found, the circle stays — no need to do anything
                      resolve();
                    })
                    .catch(() => resolve());
                }));

                // ── NEIGHBOURHOOD LABEL — small HTML overlay, top-left corner ──────
                const labelEl = document.createElement('div');
                labelEl.style.cssText = 'position:absolute;bottom:42px;left:10px;z-index:10;background:rgba(61,43,31,0.72);color:rgba(248,241,231,0.9);padding:4px 10px;border-radius:6px;font-size:11px;font-weight:600;letter-spacing:0.3px;backdrop-filter:blur(6px);font-family:DM Sans,sans-serif;pointer-events:none;';
                labelEl.textContent = m.name;
                document.getElementById('map-' + i).appendChild(labelEl);

                // ── RESTAURANT + BAR PINS — real coords from server, populated by amenity callback ──
                map.addSource('restaurants', { type: 'geojson', data: { type: 'FeatureCollection', features: [] }});
                map.addLayer({ id: 'restaurants-layer', type: 'circle', source: 'restaurants', layout: { visibility: 'none' }, paint: { 'circle-radius': 7, 'circle-color': '#C4622D', 'circle-stroke-width': 1.5, 'circle-stroke-color': 'white' }});
                map.addSource('bars', { type: 'geojson', data: { type: 'FeatureCollection', features: [] }});
                map.addLayer({ id: 'bars-layer', type: 'circle', source: 'bars', layout: { visibility: 'none' }, paint: { 'circle-radius': 7, 'circle-color': '#7A3030', 'circle-stroke-width': 1.5, 'circle-stroke-color': 'white' }});

                // ── EXTRA LAYERS (all filled by amenity callback) ──
                map.addSource('supermarkets', { type: 'geojson', data: { type: 'FeatureCollection', features: [] }});
                map.addLayer({ id: 'supermarkets-layer', type: 'circle', source: 'supermarkets', layout: { visibility: 'none' }, paint: { 'circle-radius': 8, 'circle-color': '#2E7D32', 'circle-stroke-width': 2, 'circle-stroke-color': 'white' }});
                map.addSource('gyms', { type: 'geojson', data: { type: 'FeatureCollection', features: [] }});
                map.addLayer({ id: 'gyms-layer', type: 'circle', source: 'gyms', layout: { visibility: 'none' }, paint: { 'circle-radius': 8, 'circle-color': '#6A1B9A', 'circle-stroke-width': 2, 'circle-stroke-color': 'white' }});
                map.addSource('museums', { type: 'geojson', data: { type: 'FeatureCollection', features: [] }});
                map.addLayer({ id: 'museums-layer', type: 'circle', source: 'museums', layout: { visibility: 'none' }, paint: { 'circle-radius': 8, 'circle-color': '#B8860B', 'circle-stroke-width': 2, 'circle-stroke-color': 'white' }});
                map.addSource('coffee', { type: 'geojson', data: { type: 'FeatureCollection', features: [] }});
                map.addLayer({ id: 'coffee-layer', type: 'circle', source: 'coffee', layout: { visibility: 'none' }, paint: { 'circle-radius': 7, 'circle-color': '#795548', 'circle-stroke-width': 2, 'circle-stroke-color': 'white' }});

                // ── TRANSPORT — empty source, filled by amenity callback ──
                map.addSource('transport', { type: 'geojson', data: { type: 'FeatureCollection', features: [] }});
                map.addLayer({ id: 'transport-layer', type: 'circle', source: 'transport', layout: { visibility: 'none' }, paint: { 'circle-radius': 9, 'circle-color': '#185FA5', 'circle-stroke-width': 2, 'circle-stroke-color': 'white' }});

                // ── PARKS — empty source, browser fetches named park polygons after 45s ──
                map.addSource('parks', { type: 'geojson', data: { type: 'FeatureCollection', features: [] }});
                map.addLayer({ id: 'parks-layer', type: 'fill', source: 'parks', layout: { visibility: 'none' }, paint: { 'fill-color': '#3B6D11', 'fill-opacity': 0.35 }});

                setTimeout(() => {
                  const pq = encodeURIComponent(`[out:json][timeout:10];way["leisure"="park"]["name"](around:700,${m.lat},${m.lng});out geom 5;`);
                  fetch(`https://api.matchmyhood.com/api/overpass?data=${pq}`)
                    .then(r => r.text())
                    .then(raw => {
                      if (raw.trimStart().startsWith('<')) return;
                      const pd = JSON.parse(raw);
                      const pf = (pd.elements||[]).filter(e=>e.geometry?.length>2).slice(0,5)
                        .map(e=>({ type:'Feature', geometry:{ type:'Polygon', coordinates:[e.geometry.map(p=>[p.lon,p.lat])] }, properties:{ name:e.tags?.name||'Park' } }));
                      if (pf.length) { const src = map.getSource('parks'); if(src) { map._sourceData['parks'] = { type:'FeatureCollection', features:pf }; src.setData(map._sourceData['parks']); } }
                      const pill = document.getElementById(`pill-parks-${i}`);
                      if (pill) pill.textContent = pill.textContent.replace(' ⏳','');
                    }).catch(()=>{});
                }, 45000);

                // Popup on pin click with Google Maps link
                ['restaurants-layer', 'bars-layer', 'transport-layer', 'supermarkets-layer', 'gyms-layer', 'museums-layer', 'coffee-layer'].forEach(layerId => {
                  map.on('click', layerId, e => {
                    const props = e.features[0].properties;
                    const cityCtx = [props.hood, props.city].filter(Boolean).join(', '); const mapsUrl = props.mapsUrl || `https://maps.google.com/?q=${encodeURIComponent(props.name + (cityCtx ? ", " + cityCtx : ""))}`;
                    new mapboxgl.Popup({ closeButton: true, maxWidth: '220px' })
                      .setLngLat(e.lngLat)
                      .setHTML(`
                        <div style="font-size:13px;font-weight:700;color:var(--cream);margin-bottom:4px;">${props.name}</div>
                        ${props.desc ? `<div style="font-size:11px;color:rgba(248,241,231,0.6);margin-bottom:8px;line-height:1.4;">${props.desc}</div>` : ''}
                        <a href="${mapsUrl}" target="_blank" style="font-size:11px;color:#E8875A;text-decoration:none;font-weight:600;">📍 Open in Google Maps →</a>
                      `)
                      .addTo(map);
                  });
                  map.on('mouseenter', layerId, () => map.getCanvas().style.cursor = 'pointer');
                  map.on('mouseleave', layerId, () => map.getCanvas().style.cursor = '');
                });
              });

            } catch(e) { console.error('Map error:', e); }
          }
        }, 500 + i * 300);
      }
    }
  })();
}

function toggleMapFullscreen(mapId, btn) {
  const mapEl = document.getElementById(mapId);
  if (!mapEl) return;
  const isFullscreen = mapEl.classList.toggle('fullscreen');
  const closeId = 'close-' + mapId;
  if (isFullscreen) {
    btn.style.display = 'none'; // hide expand button while fullscreen
    const closeBtn = document.createElement('button');
    closeBtn.id = closeId;
    closeBtn.textContent = '✕ Close map';
    // position:fixed on body — nothing can clip it
    closeBtn.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:99999;background:rgba(61,43,31,0.9);color:rgba(248,241,231,0.95);border:none;padding:12px 22px;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;font-family:DM Sans,sans-serif;backdrop-filter:blur(8px);box-shadow:0 4px 16px rgba(0,0,0,0.4);letter-spacing:0.3px;';
    closeBtn.onclick = () => toggleMapFullscreen(mapId, btn);
    document.body.appendChild(closeBtn); // ← body, not mapEl
  } else {
    btn.style.display = ''; // restore expand button
    const existing = document.getElementById(closeId);
    if (existing) existing.remove();
  }
  // Resize the Mapbox map after container size changes
  const idx = parseInt(mapId.replace('map-', ''));
  if (mapInstances[idx]) {
    setTimeout(() => mapInstances[idx].resize(), 100);
  }
  // Close on Escape
  if (isFullscreen) {
    const handler = (e) => { if (e.key === 'Escape') { toggleMapFullscreen(mapId, btn); document.removeEventListener('keydown', handler); }};
    document.addEventListener('keydown', handler);
  }
}

// ── RESTORE MAP LAYERS AFTER 3D → FLAT STYLE SWAP ───────────────────────────
// setStyle() wipes all custom sources/layers. This rebuilds them from stored data.
function restoreMapLayers(map, m, i) {
  try {
    // Neighbourhood boundary
    const boundary = map._boundaryData || turf_circle([m.lng, m.lat], 0.6);
    map.addSource('neighbourhood', { type: 'geojson', data: boundary });
    map.addLayer({ id: 'neighbourhood-fill', type: 'fill', source: 'neighbourhood', paint: { 'fill-color': '#C4622D', 'fill-opacity': boundary === map._boundaryData ? 0.12 : 0.10 } });
    map.addLayer({ id: 'neighbourhood-border', type: 'line', source: 'neighbourhood', paint: { 'line-color': '#C4622D', 'line-width': 2, 'line-opacity': 0.7, 'line-dasharray': [4, 2] } });
  } catch(e) {}

  // Pin layers — restore sources + layers, re-populate with stored data
  const pinLayers = [
    { id: 'restaurants', layerId: 'restaurants-layer', type: 'circle', paint: { 'circle-radius': 7, 'circle-color': '#C4622D', 'circle-stroke-width': 1.5, 'circle-stroke-color': 'white' } },
    { id: 'bars',        layerId: 'bars-layer',        type: 'circle', paint: { 'circle-radius': 7, 'circle-color': '#7A3030', 'circle-stroke-width': 1.5, 'circle-stroke-color': 'white' } },
    { id: 'supermarkets',layerId: 'supermarkets-layer',type: 'circle', paint: { 'circle-radius': 8, 'circle-color': '#2E7D32', 'circle-stroke-width': 2,   'circle-stroke-color': 'white' } },
    { id: 'gyms',        layerId: 'gyms-layer',        type: 'circle', paint: { 'circle-radius': 8, 'circle-color': '#6A1B9A', 'circle-stroke-width': 2,   'circle-stroke-color': 'white' } },
    { id: 'museums',     layerId: 'museums-layer',     type: 'circle', paint: { 'circle-radius': 8, 'circle-color': '#B8860B', 'circle-stroke-width': 2,   'circle-stroke-color': 'white' } },
    { id: 'coffee',      layerId: 'coffee-layer',      type: 'circle', paint: { 'circle-radius': 7, 'circle-color': '#795548', 'circle-stroke-width': 2,   'circle-stroke-color': 'white' } },
    { id: 'transport',   layerId: 'transport-layer',   type: 'circle', paint: { 'circle-radius': 9, 'circle-color': '#185FA5', 'circle-stroke-width': 2,   'circle-stroke-color': 'white' } },
  ];

  pinLayers.forEach(({ id, layerId, type, paint }) => {
    try {
      const data = map._sourceData[id] || { type: 'FeatureCollection', features: [] };
      map.addSource(id, { type: 'geojson', data });
      // Restore visibility: check if the pill was active before 3D was toggled
      const pillEl = document.querySelector(`#map-pills-${i} [data-layer="${id}"]`);
      const wasVisible = pillEl?.classList.contains('active') ? 'visible' : 'none';
      map.addLayer({ id: layerId, type, source: id, layout: { visibility: wasVisible }, paint });
    } catch(e) {}
  });

  // Parks fill layer
  try {
    const parksData = map._sourceData['parks'] || { type: 'FeatureCollection', features: [] };
    map.addSource('parks', { type: 'geojson', data: parksData });
    const parksPill = document.querySelector(`#map-pills-${i} [data-layer="parks"]`);
    const parksVisible = parksPill?.classList.contains('active') ? 'visible' : 'none';
    map.addLayer({ id: 'parks-layer', type: 'fill', source: 'parks', layout: { visibility: parksVisible }, paint: { 'fill-color': '#3B6D11', 'fill-opacity': 0.35 } });
  } catch(e) {}

  // Re-attach click handlers on pin layers
  ['restaurants-layer','bars-layer','transport-layer','supermarkets-layer','gyms-layer','museums-layer','coffee-layer'].forEach(layerId => {
    map.on('click', layerId, e => {
      const props = e.features[0].properties;
      const cityCtx = [props.hood, props.city].filter(Boolean).join(', ');
      const mapsUrl = props.mapsUrl || `https://maps.google.com/?q=${encodeURIComponent(props.name + (cityCtx ? ', ' + cityCtx : ''))}`;
      new mapboxgl.Popup({ closeButton: true, maxWidth: '220px' })
        .setLngLat(e.lngLat)
        .setHTML(`<div style="font-size:13px;font-weight:700;color:var(--cream);margin-bottom:4px;">${props.name}</div><a href="${mapsUrl}" target="_blank" style="font-size:11px;color:#E8875A;text-decoration:none;font-weight:600;">📍 Open in Google Maps →</a>`)
        .addTo(map);
    });
    map.on('mouseenter', layerId, () => map.getCanvas().style.cursor = 'pointer');
    map.on('mouseleave', layerId, () => map.getCanvas().style.cursor = '');
  });
}

function toggleMapLayer(mapIndex, layer, pillEl) {
  const map = mapInstances[mapIndex];
  if (!map) return;

  pillEl.classList.toggle('active');
  const isActive = pillEl.classList.contains('active');

  const layerMap = {
    'neighbourhood': ['neighbourhood-fill', 'neighbourhood-border'],
    'restaurants': ['restaurants-layer'],
    'bars': ['bars-layer'],
    'transport': ['transport-layer'],
    'parks': ['parks-layer'],
    'supermarkets': ['supermarkets-layer'],
    'gyms': ['gyms-layer'],
    'museums': ['museums-layer'],
    'coffee': ['coffee-layer'],
  };

  const layers = layerMap[layer] || [];
  layers.forEach(id => {
    if (map.getLayer(id)) {
      map.setLayoutProperty(id, 'visibility', isActive ? 'visible' : 'none');
    }
  });
}

function shareMatch(fromHood, fromCity, toHood, toCity) {
  const text = `If you love ${fromHood} in ${fromCity}, you'll love ${toHood} in ${toCity} — matched by MatchMyHood 🏘️✨ matchmyhood.com #MatchMyHood #travel`;
  if (navigator.share) {
    navigator.share({ text, url: 'https://matchmyhood.com' });
  } else {
    navigator.clipboard.writeText(text).then(() => alert('Copied to clipboard! Paste it on TikTok, Instagram or X 🎉'));
  }
}

function showError(msg) {
  const el = document.getElementById('errorMsg');
  el.textContent = '⚠️ ' + msg;
  el.classList.add('visible');
}

const BEEHIIV_PUBLICATION_ID = 'YOUR_BEEHIIV_PUBLICATION_ID'; // Get from beehiiv.com dashboard

function handleWaitlist(e) {
  e.preventDefault();
  const email = document.getElementById('emailInput').value;
  const plan = document.getElementById('waitlistPlan').value;
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }

  // Submit to Netlify Forms
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ 'form-name': 'waitlist', email, plan }).toString()
  }).then(() => {
    document.getElementById('newsletterSuccess').style.display = 'block';
    document.getElementById('emailInput').value = '';
    document.querySelector('.newsletter-form button').textContent = 'Done ✓';
  }).catch(() => {
    document.getElementById('newsletterSuccess').style.display = 'block';
    document.getElementById('emailInput').value = '';
  });

  // Also subscribe to Beehiiv newsletter
  if (!BEEHIIV_PUBLICATION_ID.includes('YOUR_')) {
    fetch(`https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, reactivate_existing: true, send_welcome_email: true })
    }).catch(err => console.log('Beehiiv:', err));
  }
}

function handleSuggestion(e, type) {
  e.preventDefault();
  const form = e.target;
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(new FormData(form)).toString()
  }).then(() => {
    document.getElementById(type + 'Success').style.display = 'block';
    form.reset();
  }).catch(() => {
    document.getElementById(type + 'Success').style.display = 'block';
    form.reset();
  });
}

// Pre-select plan in waitlist from pricing card clicks
// Stripe checkout handler — replace with real Stripe links when ready
const STRIPE_LINKS = {
  payg: 'https://buy.stripe.com/YOUR_PAYG_LINK',
  explorer_monthly: 'https://buy.stripe.com/YOUR_EXPLORER_MONTHLY_LINK',
  explorer_annual: 'https://buy.stripe.com/YOUR_EXPLORER_ANNUAL_LINK',
  founding_member: 'https://buy.stripe.com/YOUR_FOUNDING_MEMBER_LINK'
};

function handleStripeCheckout(plan) {
  const link = STRIPE_LINKS[plan];
  if (!link || link.includes('YOUR_')) {
    // Stripe not yet set up — redirect to waitlist
    document.querySelector('#newsletter').scrollIntoView({ behavior: 'smooth' });
    const sel = document.getElementById('waitlistPlan');
    if (sel) {
      if (plan === 'founding_member') sel.value = 'founding';
      else if (plan.startsWith('explorer')) sel.value = 'explorer';
      else sel.value = 'free';
    }
    return;
  }
  window.open(link, '_blank');
}

function selectPlan(plan) {
  const sel = document.getElementById('waitlistPlan');
  if (sel) sel.value = plan;
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Nav scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (nav) {
    if (window.scrollY > 20) {
      nav.style.boxShadow = '0 4px 24px rgba(61,43,31,0.1)';
    } else {
      nav.style.boxShadow = 'none';
    }
  }
});
</script>
</body>
</html>
