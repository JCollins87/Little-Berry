/* Little Berry Systems — Futuristic Professional (lively + business-friendly) */

:root{
  --bg:#060914;
  --bg2:#0a1024;
  --card:rgba(255,255,255,0.06);
  --card2:rgba(255,255,255,0.085);
  --border:rgba(255,255,255,0.12);

  --text:rgba(255,255,255,0.93);
  --muted:rgba(255,255,255,0.68);
  --muted2:rgba(255,255,255,0.56);

  --a:#6EE7FF;     /* cyan */
  --b:#A78BFA;     /* violet */
  --c:#34D399;     /* green */
  --danger:#FF6B6B;

  --shadow:0 20px 70px rgba(0,0,0,0.55);
  --radius:18px;
  --radius2:26px;
  --max:1120px;

  --ring:0 0 0 4px rgba(110,231,255,0.18);
}

*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{
  margin:0;
  font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  color:var(--text);
  background:
    radial-gradient(1200px 700px at 15% -10%, rgba(110,231,255,0.22), transparent 55%),
    radial-gradient(900px 600px at 105% 5%, rgba(167,139,250,0.20), transparent 60%),
    radial-gradient(900px 700px at 70% 120%, rgba(52,211,153,0.10), transparent 60%),
    linear-gradient(180deg, var(--bg), var(--bg2));
  min-height:100vh;
}

a{color:inherit; text-decoration:none;}
p{line-height:1.6; margin:0 0 1rem;}
strong{color:rgba(255,255,255,0.95);}

.container{
  width:min(var(--max), calc(100% - 2rem));
  margin-inline:auto;
}

.sr-only{
  position:absolute;
  width:1px;height:1px;
  padding:0;margin:-1px;
  overflow:hidden;clip:rect(0,0,0,0);
  white-space:nowrap;border:0;
}

.skip-link{
  position:absolute;
  left:-999px; top:auto;
  width:1px;height:1px; overflow:hidden;
}
.skip-link:focus{
  left:1rem; top:1rem;
  width:auto;height:auto;
  padding:.75rem 1rem;
  background:rgba(0,0,0,0.7);
  border:1px solid var(--border);
  border-radius:14px;
  z-index:9999;
  box-shadow:var(--shadow);
}

/* Header / Nav */
.site-header{
  position:sticky;
  top:0;
  z-index:50;
  background:rgba(6,9,20,0.62);
  backdrop-filter: blur(12px);
  border-bottom:1px solid rgba(255,255,255,0.08);
}
.nav{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:.9rem 0;
  gap:1rem;
}
.brand{
  display:flex;
  align-items:center;
  gap:.75rem;
  font-weight:800;
  letter-spacing:.2px;
}
.brand-mark{
  width:16px;height:16px;
  border-radius:6px;
  background:linear-gradient(135deg, var(--a), var(--b));
  box-shadow: 0 0 0 4px rgba(110,231,255,0.10), 0 0 34px rgba(167,139,250,0.25);
}
.brand-text{font-size:1rem;}

.nav-links{
  display:flex;
  align-items:center;
  gap:1rem;
}
.nav-links a{
  padding:.55rem .65rem;
  border-radius:12px;
  color:var(--muted);
}
.nav-links a:hover{
  background:rgba(255,255,255,0.06);
  color:var(--text);
}

.nav-toggle{
  display:none;
  background:transparent;
  border:1px solid rgba(255,255,255,0.14);
  border-radius:14px;
  padding:.55rem .65rem;
  color:var(--text);
}
.hamburger{
  display:block;
  width:20px;height:2px;
  background:rgba(255,255,255,0.82);
  position:relative;
}
.hamburger::before,
.hamburger::after{
  content:"";
  position:absolute;
  left:0;
  width:20px;height:2px;
  background:rgba(255,255,255,0.82);
}
.hamburger::before{top:-6px;}
.hamburger::after{top:6px;}

/* Buttons */
.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:.55rem;
  padding:.9rem 1.05rem;
  border-radius:16px;
  border:1px solid rgba(255,255,255,0.16);
  background:rgba(255,255,255,0.06);
  color:var(--text);
  font-weight:700;
  transition:transform .15s ease, background .15s ease, border-color .15s ease;
}
.btn:hover{transform: translateY(-1px); background:rgba(255,255,255,0.09);}
.btn:focus{outline:none; box-shadow:var(--ring);}
.btn-icon{
  width:20px;height:20px;
  display:grid; place-items:center;
  border-radius:10px;
  background:rgba(255,255,255,0.06);
  border:1px solid rgba(255,255,255,0.14);
}
.btn-primary{
  border-color:rgba(110,231,255,0.35);
  background:linear-gradient(135deg, rgba(110,231,255,0.22), rgba(167,139,250,0.16));
}
.btn-secondary{
  border-color:rgba(167,139,250,0.35);
  background:rgba(255,255,255,0.06);
}
.btn-ghost{
  border-color:rgba(255,255,255,0.14);
  background:rgba(255,255,255,0.04);
}
.btn-block{width:100%;}

/* Hero */
.hero{
  position:relative;
  padding:5.75rem 0 3.25rem;
  overflow:hidden;
}
.hero-bg{
  position:absolute;
  inset:-40% -10% auto -10%;
  height:560px;
  background:
    radial-gradient(closest-side at 25% 50%, rgba(110,231,255,0.18), transparent 70%),
    radial-gradient(closest-side at 80% 35%, rgba(167,139,250,0.16), transparent 72%),
    radial-gradient(closest-side at 55% 70%, rgba(52,211,153,0.12), transparent 70%);
  filter:blur(16px);
  pointer-events:none;
}
.hero-gridlines{
  position:absolute;
  inset:0;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 46px 46px;
  mask-image: radial-gradient(closest-side at 50% 20%, rgba(0,0,0,0.65), transparent 70%);
  opacity:0.55;
  pointer-events:none;
}
.hero-grid{
  position:relative;
  display:grid;
  grid-template-columns: 1.25fr 0.9fr;
  gap:2rem;
  align-items:start;
}
.eyebrow{
  color:var(--muted);
  letter-spacing:0.2em;
  text-transform:uppercase;
  font-size:.78rem;
  margin:0 0 .75rem;
}
.hero h1{
  font-size:clamp(2.1rem, 3.6vw, 3.35rem);
  line-height:1.05;
  margin:0 0 1rem;
}
.subhead{
  color:var(--muted);
  font-size:1.05rem;
  max-width: 62ch;
}
.cta-row{
  display:flex;
  gap:.75rem;
  flex-wrap:wrap;
  margin: 1.25rem 0 1.2rem;
}
.hero-badges{
  display:flex;
  flex-wrap:wrap;
  gap:.65rem;
  margin: .25rem 0 1rem;
}
.badge{
  display:inline-flex;
  align-items:center;
  gap:.5rem;
  padding:.5rem .75rem;
  border:1px solid rgba(255,255,255,0.12);
  border-radius:999px;
  background:rgba(255,255,255,0.05);
  color:var(--muted);
  font-size:.9rem;
}
.badge-dot{
  width:8px;height:8px;
  border-radius:50%;
  background:linear-gradient(135deg, var(--a), var(--b));
  box-shadow:0 0 0 4px rgba(110,231,255,0.10);
}
.trust-row{
  display:flex;
  flex-wrap:wrap;
  gap:.55rem;
  margin-top: .25rem;
}
.trust-pill{
  padding:.45rem .7rem;
  border-radius:999px;
  border:1px solid rgba(255,255,255,0.12);
  background:rgba(255,255,255,0.04);
  color:var(--muted);
  font-weight:600;
  font-size:.92rem;
}

/* Glass cards */
.glass-card{
  background:linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.04));
  border:1px solid rgba(255,255,255,0.12);
  border-radius:var(--radius2);
  box-shadow:var(--shadow);
  padding:1.25rem;
  backdrop-filter: blur(12px);
}
.hero-panel .glass-card{ padding:1.25rem 1.25rem 1.1rem; }
.panel-top{ margin-bottom: 1rem; }
.panel-kicker{
  color:var(--muted2);
  text-transform:uppercase;
  letter-spacing:0.18em;
  font-size:.72rem;
}
.panel-title{
  font-size:1.2rem;
  font-weight:800;
  margin-top:.25rem;
}
.panel-steps{ display:grid; gap:.75rem; margin: 1rem 0 1.1rem; }
.panel-step{
  display:flex;
  gap:.75rem;
  align-items:flex-start;
  padding:.75rem;
  border-radius:18px;
  border:1px solid rgba(255,255,255,0.10);
  background:rgba(255,255,255,0.04);
}
.step-icon{
  width:28px;height:28px;
  border-radius:12px;
  display:grid; place-items:center;
  font-weight:800;
  background:linear-gradient(135deg, rgba(110,231,255,0.18), rgba(167,139,250,0.14));
  border:1px solid rgba(255,255,255,0.12);
}
.step-title{ font-weight:800; }
.step-sub{ color:var(--muted2); font-size:.92rem; margin-top:.15rem; }
.panel-cta .small{ margin: .75rem 0 0; }
.small{ font-size:.92rem; }
.muted{ color:var(--muted); }
.muted2{ color:var(--muted2); }

/* Sections */
.section{ padding: 4rem 0; }
.section-alt{
  background:rgba(255,255,255,0.02);
  border-top:1px solid rgba(255,255,255,0.06);
  border-bottom:1px solid rgba(255,255,255,0.06);
}
.section-head{ max-width: 75ch; margin-bottom: 1.75rem; }
.section-head h2{
  margin:0 0 .6rem;
  font-size:clamp(1.65rem, 2.3vw, 2.25rem);
  letter-spacing:-0.01em;
}
.section-head p{ margin:0; }

/* Services */
.cards-grid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:1rem;
}
.service-card{
  padding: 1.15rem;
  border-radius: var(--radius);
  border:1px solid rgba(255,255,255,0.12);
  background:rgba(255,255,255,0.04);
  transition: transform .18s ease, background .18s ease, border-color .18s ease;
  min-height: 270px;
  position:relative;
  overflow:hidden;
}
.service-card::before{
  content:"";
  position:absolute;
  inset:-30% -30% auto -30%;
  height:160px;
  background: radial-gradient(closest-side, rgba(110,231,255,0.14), transparent 65%);
  opacity:0.0;
  transition:opacity .18s ease;
}
.service-card:hover{
  transform: translateY(-2px);
  background:rgba(255,255,255,0.06);
  border-color: rgba(110,231,255,0.22);
}
.service-card:hover::before{ opacity: 1; }

.service-card.featured{
  border-color: rgba(110,231,255,0.30);
  background: linear-gradient(180deg, rgba(110,231,255,0.10), rgba(255,255,255,0.04));
}
.service-top{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:.75rem;
  margin-bottom:.6rem;
}
.service-icon{
  width:38px;height:38px;
  display:grid; place-items:center;
  border-radius:16px;
  border:1px solid rgba(255,255,255,0.14);
  background:linear-gradient(135deg, rgba(110,231,255,0.18), rgba(167,139,250,0.14));
}
.service-chip{
  font-size:.82rem;
  color:var(--muted);
  padding:.35rem .6rem;
  border-radius:999px;
  border:1px solid rgba(255,255,255,0.12);
  background:rgba(255,255,255,0.04);
}
.service-card h3{ margin:.25rem 0 .45rem; }
.service-card p{ color:var(--muted); margin:0 0 .8rem; }
.list{
  margin:0 0 .85rem;
  padding-left: 1.1rem;
  color:var(--muted);
}
.list li{ margin:.35rem 0; }
.text-link{
  color: rgba(110,231,255,0.92);
  font-weight:700;
}
.text-link:hover{ opacity:0.9; text-decoration: underline; }

/* SEO band */
.seo-band{
  margin-top:1.5rem;
  padding:1.25rem;
  border-radius:var(--radius);
  border:1px solid rgba(255,255,255,0.10);
  background:rgba(255,255,255,0.03);
}
.seo-band h3{ margin:0 0 .4rem; }
.seo-band p{ margin:0; color:var(--muted); }

/* How it works */
.how-grid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:1rem;
}
.how-card{
  padding:1.2rem;
  border-radius:var(--radius);
  border:1px solid rgba(255,255,255,0.12);
  background:rgba(255,255,255,0.04);
}
.how-num{
  font-weight:800;
  color: rgba(110,231,255,0.9);
  letter-spacing:0.08em;
}
.how-card h3{ margin:.6rem 0 .35rem; }
.how-card p{ margin:0; color:var(--muted); }

.callout{
  margin-top:1.25rem;
  padding:1.25rem;
  border-radius:var(--radius2);
  border:1px solid rgba(255,255,255,0.12);
  background:linear-gradient(135deg, rgba(110,231,255,0.10), rgba(167,139,250,0.08));
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:1rem;
  flex-wrap:wrap;
}
.callout-title{ font-weight:800; }
.callout-body{ color:var(--muted); }

/* About */
.about-grid{
  display:grid;
  grid-template-columns: 1.2fr 0.9fr;
  gap:1.25rem;
  align-items:start;
}
.about-pills{
  display:flex;
  flex-wrap:wrap;
  gap:.6rem;
  margin: 1rem 0 1.1rem;
}
.pill{
  padding:.5rem .75rem;
  border-radius:999px;
  border:1px solid rgba(255,255,255,0.12);
  background:rgba(255,255,255,0.04);
  color:var(--muted);
  font-weight:600;
}
.about-note{
  padding:1rem;
  border-radius:var(--radius);
  border:1px solid rgba(255,255,255,0.10);
  background:rgba(255,255,255,0.03);
}
.note-title{ font-weight:800; margin-bottom:.35rem; }

.checklist{
  margin:0;
  padding-left:1.1rem;
  color:var(--muted);
}
.checklist li{ margin:.45rem 0; }

.mini-stats{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:.75rem;
  margin-top:1rem;
}
.stat{
  padding:.85rem;
  border-radius:16px;
  border:1px solid rgba(255,255,255,0.10);
  background:rgba(255,255,255,0.04);
}
.stat-top{ font-weight:800; }
.stat-sub{ color:var(--muted2); font-size:.9rem; margin-top:.15rem; }

/* FAQ */
.faq-grid{
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap:1rem;
}
.faq{
  padding:1rem 1.1rem;
  border-radius:var(--radius);
  border:1px solid rgba(255,255,255,0.12);
  background:rgba(255,255,255,0.04);
}
.faq summary{
  cursor:pointer;
  font-weight:800;
  list-style:none;
}
.faq summary::-webkit-details-marker{ display:none; }
.faq p{ margin:.75rem 0 0; }

/* Contact */
.contact-grid{
  display:grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap:1.25rem;
  align-items:start;
}
.contact-cards{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:.75rem;
  margin: 1rem 0 1rem;
}
.contact-card{
  padding:1rem;
  border-radius:var(--radius);
  border:1px solid rgba(255,255,255,0.12);
  background:rgba(255,255,255,0.04);
}
.contact-kicker{
  color:var(--muted2);
  text-transform:uppercase;
  letter-spacing:0.14em;
  font-size:.72rem;
}
.contact-value{ margin-top:.35rem; font-weight:800; }

.form{ margin-top:.75rem; }
.field{ margin-bottom:.85rem; }
label{ display:block; font-weight:800; margin-bottom:.35rem; }
input, select, textarea{
  width:100%;
  padding:.82rem .9rem;
  border-radius:14px;
  border:1px solid rgba(255,255,255,0.14);
  background:rgba(0,0,0,0.22);
  color:var(--text);
  outline:none;
}
input:focus, select:focus, textarea:focus{
  box-shadow:var(--ring);
  border-color:rgba(110,231,255,0.30);
}
textarea{ resize:vertical; }

.two-col{
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap:.75rem;
}

.checkbox label{
  display:flex;
  align-items:flex-start;
  gap:.6rem;
  font-weight:600;
  color:var(--muted);
}
.checkbox input{ width:auto; margin-top:.2rem; }

.error{
  margin:.35rem 0 0;
  min-height:1.1em;
  color:var(--danger);
  font-size:.9rem;
}
.form-status{
  margin-top:.85rem;
  color:var(--muted);
}
.honeypot{
  position:absolute;
  left:-9999px;
  opacity:0;
}

/* Footer */
.footer{
  padding: 2.75rem 0 2.25rem;
  border-top:1px solid rgba(255,255,255,0.08);
}
.footer-row{
  display:flex;
  justify-content:space-between;
  gap:1rem;
  align-items:flex-start;
  padding-bottom:1.25rem;
}
.footer-brand{
  display:flex;
  align-items:center;
  gap:.75rem;
}
.footer-title{ font-weight:900; }
.footer-links{
  display:flex;
  gap:.75rem;
  flex-wrap:wrap;
}
.footer-links a{
  padding:.35rem .55rem;
  border-radius:12px;
  color:var(--muted);
}
.footer-links a:hover{ background:rgba(255,255,255,0.05); color:var(--text); }
.footer-bottom{ padding-top:1rem; }
.small{ font-size:.92rem; }

/* Responsive */
@media (max-width: 1040px){
  .hero-grid{ grid-template-columns: 1fr; }
  .about-grid{ grid-template-columns: 1fr; }
  .contact-grid{ grid-template-columns: 1fr; }
  .contact-cards{ grid-template-columns: 1fr; }
  .mini-stats{ grid-template-columns: 1fr; }
}
@media (max-width: 980px){
  .cards-grid{ grid-template-columns: repeat(2, 1fr); }
  .how-grid{ grid-template-columns: 1fr; }
  .faq-grid{ grid-template-columns: 1fr; }
}
@media (max-width: 640px){
  .nav-toggle{ display:inline-flex; }
  .nav-links{
    position:absolute;
    right:1rem;
    top:64px;
    width:min(360px, calc(100% - 2rem));
    flex-direction:column;
    align-items:stretch;
    padding:.75rem;
    border-radius:18px;
    border:1px solid rgba(255,255,255,0.14);
    background:rgba(6,9,20,0.88);
    backdrop-filter:blur(12px);
    box-shadow:var(--shadow);
    display:none;
  }
  .nav-links.open{ display:flex; }
  .nav-links a{ padding:.8rem .85rem; }
  .cards-grid{ grid-template-columns: 1fr; }
  .two-col{ grid-template-columns: 1fr; }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce){
  *{ transition:none !important; scroll-behavior:auto !important; }
}
