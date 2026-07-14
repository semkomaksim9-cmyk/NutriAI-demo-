
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Unbounded:wght@500;700;800&family=JetBrains+Mono:wght@500;700&display=swap');

:root{
  --bg:#0B0F14;
  --card:#171D26;
  --ink:#F8FAFC;
  --lime:#10B981;
  --orange:#34D399;
  --blue:#10B981;
  --pink:#6EE7B7;
  --gray:#94A3B8;
  --track:#243041;
  --emerald-bg:#0B0F14;
  --emerald-surface:#171D26;
  --emerald-primary:#10B981;
  --emerald-secondary:#34D399;
  --emerald-hover:#A7F3D0;
  --emerald-text:#F8FAFC;
  --emerald-text-secondary:#94A3B8;
  --emerald-border:rgba(255,255,255,0.08);
  --font-body:'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-display:'Unbounded', 'Plus Jakarta Sans', sans-serif;
  --font-mono:'JetBrains Mono', 'Fira Code', monospace;
}
*{box-sizing:border-box;}
html,body{margin:0;padding:0;}

body::before{
  content:'';
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:linear-gradient(180deg, #0B0F14 0%, #0E131A 100%);
  z-index:-2;
  pointer-events:none;
}

body::after{
  content:'';
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:
    radial-gradient(circle at 20% 30%, rgba(16,185,129,0.10) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(52,211,153,0.06) 0%, transparent 45%),
    radial-gradient(circle at 50% 50%, rgba(167,243,208,0.04) 0%, transparent 50%);
  z-index:-1;
  pointer-events:none;
}

body{
  background:var(--bg);
  color:var(--ink);
  font-family:var(--font-body);
  min-height:100vh;
  padding:0 20px 80px;
  position:relative;
  font-weight:500;
  letter-spacing:-0.15px;
  -webkit-font-smoothing:antialiased;
  text-rendering:optimizeLegibility;
}
.wrap{
  max-width:1000px;
  margin:0 auto;
}

.auth-switcher-top{
  position:absolute;
  top:20px;
  right:20px;
  z-index:50;
  display:flex;
  gap:6px;
  padding:6px;
  background:rgba(255,255,255,0.08);
  border-radius:12px;
  border:1px solid rgba(16,185,129,0.2);
}
.page-enter{
  animation: page-fade .4s ease both;
}
.page-exit{
  animation: page-fade-out .25s ease both;
}

.auth-screen{
  min-height:calc(100vh - 80px);
  display:flex;
  align-items:center;
  justify-content:center;
  padding:40px 0 20px;
  position:relative;
}

.auth-screen .auth-card{
  margin:0 auto;
}

.auth-card{
  position:relative;
  z-index:10;
  width:min(520px, 100%);
  background:rgba(24,28,34,0.5);
  backdrop-filter:blur(20px);
  border:1px solid rgba(16,185,129,0.15);
  border-radius:24px;
  box-shadow:
    0 0 40px rgba(16,185,129,0.1),
    0 20px 60px rgba(0,0,0,0.4),
    inset 0 1px 0 rgba(255,255,255,0.08);
  padding:48px;
  animation:card-float .6s ease-out;
}

@keyframes card-float{
  from{
    opacity:0;
    transform:translateY(20px);
  }
  to{
    opacity:1;
    transform:translateY(0);
  }
}

.auth-card:hover{
  border-color:rgba(16,185,129,0.25);
  box-shadow:
    0 0 60px rgba(16,185,129,0.15),
    0 20px 80px rgba(0,0,0,0.5),
    inset 0 1px 0 rgba(255,255,255,0.1);
}

.auth-card-register{
  background:rgba(20,24,30,0.5);
}

.auth-header{
  margin-bottom:32px;
  text-align:center;
}

.auth-header h1{
  font-size:28px;
  font-weight:700;
  margin:0 0 12px;
  letter-spacing:-0.5px;
  background:linear-gradient(135deg, #F8FAFC, rgba(16,185,129,0.8));
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  background-clip:text;
}

.auth-header p{
  margin:0;
  color:var(--gray);
  line-height:1.6;
  font-size:14px;
}

.auth-header-register h1{
  font-size:28px;
  margin:0;
  letter-spacing:0.04em;
}
.auth-header-register p{
  margin:14px 0 0;
  color:rgba(255,255,255,0.7);
  line-height:1.7;
  max-width:460px;
}
.auth-subtitle{
  color:rgba(255,255,255,0.75);
  font-size:14px;
  line-height:1.7;
  margin-top:10px;
  max-width:420px;
}
.auth-form{
  display:grid;
  gap:16px;
}
.auth-form-register{
  padding-top:4px;
}

.auth-form-register .field-row,
.auth-form-login .field-row{
  grid-template-columns:1fr;
}

.auth-form-register .field-row > div,
.auth-form-login .field-row > div{
  width:100%;
  max-width:460px;
  margin:0 auto;
}
.google-btn{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  padding:16px 18px;
  border:1px solid rgba(255,255,255,0.12);
  border-radius:16px;
  background:rgba(255,255,255,0.05);
  color:#FFFFFF;
  font-weight:700;
}
.google-icon{
  width:22px;
  height:22px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:6px;
  background:#FFFFFF;
  color:#1A73E8;
  font-size:14px;
  font-weight:700;
}
.separator{
  display:flex;
  align-items:center;
  gap:12px;
  color:rgba(255,255,255,0.45);
  font-size:13px;
}
.separator::before,
.separator::after{
  content:'';
  flex:1;
  height:1px;
  background:rgba(255,255,255,0.08);
}
.step-dots{
  display:flex;
  gap:8px;
  justify-content:center;
  margin-bottom:10px;
}
.step-dots .dot{
  width:10px;
  height:10px;
  border-radius:50%;
  background:rgba(255,255,255,0.16);
}
.step-dots .dot.active{
  background:rgba(16,185,129,0.95);
  box-shadow:0 0 20px rgba(16,185,129,0.35);
}
.section-title{
  font-size:15px;
  font-weight:700;
  margin-top:10px;
  margin-bottom:8px;
  color:#FFFFFF;
}
.btn-auth{
  background:linear-gradient(135deg, var(--lime), var(--orange));
  color:#04110c;
}

.auth-form-register .mini,
.auth-form-login .mini{
  color:rgba(110,231,183,0.9);
}
.btn-register{
  padding:16px 0;
  border-radius:18px;
  font-size:15px;
}
.back-to-login{
  padding:14px 0;
  border-radius:16px;
  background:rgba(255,255,255,0.05);
  border:1px solid rgba(255,255,255,0.08);
  color:#FFFFFF;
  font-weight:700;
}
.auth-info{
  color:var(--gray);
  font-size:13px;
  text-align:center;
  margin-top:8px;
}
.auth-form-register input,
.auth-form-login input{
  background:rgba(255,255,255,0.04);
  border:1px solid rgba(16,185,129,0.2);
  color:#FFFFFF;
  border-radius:12px;
  padding:12px 16px !important;
  transition:all .2s ease;
  backdrop-filter:blur(10px);
}

.auth-form-register input:hover,
.auth-form-login input:hover{
  border-color:rgba(16,185,129,0.4);
  background:rgba(255,255,255,0.06);
}

.auth-form-register input:focus,
.auth-form-login input:focus{
  border-color:rgba(16,185,129,0.6);
  background:rgba(255,255,255,0.08);
  box-shadow:0 0 0 3px rgba(16,185,129,0.1);
  outline:none;
}

.auth-form-register input::placeholder,
.auth-form-login input::placeholder{
  color:rgba(255,255,255,0.4);
}

.auth-card-login{
  background:rgba(24,28,34,0.5);
}

.auth-header-login h1{
  font-size:28px;
  margin:0 0 12px;
  letter-spacing:-0.5px;
  background:linear-gradient(135deg, #F8FAFC, rgba(16,185,129,0.8));
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  background-clip:text;
}

.auth-header-login p{
  margin:0;
  color:var(--gray);
  line-height:1.6;
  font-size:14px;
}

.btn-login{
  padding:14px 0;
  border-radius:12px;
  font-size:14px;
  font-weight:700;
  background:linear-gradient(135deg, var(--lime), var(--orange));
  color:#000000;
  border:none;
  transition:all .3s ease;
  box-shadow:
    0 0 20px rgba(16,185,129,0.3),
    0 8px 24px rgba(16,185,129,0.15);
  position:relative;
  overflow:hidden;
}

.btn-login:hover{
  transform:translateY(-2px);
  box-shadow:
    0 0 40px rgba(16,185,129,0.5),
    0 12px 36px rgba(16,185,129,0.3);
}

.btn-login:active{
  transform:translateY(0);
}
header.top{
  background:linear-gradient(135deg, rgba(15,17,21,0.8), rgba(16,185,129,0.15));
  backdrop-filter:blur(20px);
  border-bottom:1px solid rgba(16,185,129,0.2);
  clip-path:polygon(0 0, 100% 0, 100% 82%, 0 100%);
  width:100vw;
  margin:0 0 28px;
  margin-left:calc(50% - 50vw);
  margin-right:calc(50% - 50vw);
  padding:12px 12px 34px;
  display:flex;
  align-items:flex-start;
  justify-content:flex-start;
  gap:10px;
  flex-wrap:wrap;
  box-shadow:0 10px 30px rgba(0,0,0,0.3);
}

.header-left{
  display:flex;
  flex-direction:row;
  align-items:center;
  gap:10px;
  flex-wrap:wrap;
}

.header-right{
  display:flex;
  align-items:flex-end;
  justify-content:flex-end;
  width:auto;
  margin-left:auto;
}

.profile-name{
  font-weight:700;
  color:#FFFFFF;
  font-size:14px;
}

.profile-meta{
  color:var(--gray);
  font-size:12px;
}

.date-under-logo{
  margin-top:8px;
  background:rgba(16,185,129,0.2);
  color:var(--lime);
}
.top-actions{
  display:flex;
  align-items:center;
  gap:10px;
}
.top-actions .link-btn{
  color:#FFFFFF;
  text-decoration:none;
  font-size:13px;
}
.top-actions .link-btn:hover{color:rgba(255,255,255,0.85);}
.brand{
  font-family:var(--font-display);
  font-weight:900;
  font-size:clamp(24px, 3.8vw, 34px);
  letter-spacing:-0.01em;
  line-height:1.05;
  color:#0B1220;
  text-transform:none;
  max-width:520px;
}
.brand .bolt{color:#FFFFFF; -webkit-text-stroke:1.5px #0B1220;}
.logo{
  font-family:var(--font-display);
  font-weight:700;
  color:#FFFFFF;
  text-shadow:0 3px 18px rgba(30,27,75,0.55);
}
.date-badge{
  font-weight:700;
  font-size:12px;
  color:#0B1220;
  text-transform:uppercase;
  letter-spacing:0.05em;
  background:#FFFFFF;
  padding:7px 12px;
  border-radius:999px;
  white-space:nowrap;
  box-shadow:0 4px 0 rgba(11,18,32,0.18);
}
.grid{
  display:grid;
  grid-template-columns:1fr;
  gap:0;
  align-items:start;
}
@media (max-width:760px){
  .grid{grid-template-columns:1fr;}
  header.top{clip-path:polygon(0 0, 100% 0, 100% 92%, 0 100%); padding:28px 22px 40px;}
  .top-actions{width:100%; justify-content:space-between;}
}
.panel-title{
  font-family:var(--font-display);
  font-weight:700;
  font-size:12px;
  text-transform:uppercase;
  letter-spacing:0.1em;
  color:var(--gray);
  margin:0 0 10px;
}
/* --- Photo scan feature --- */
:root{
  --np-bg: #0B0B0B;
  --np-card: #FFFFFF;
  --np-ink: #0B0B0B;
  --np-accent: #00C98D;
  --np-muted: #8A8F98;
  --np-display-font: 'Space Grotesk', sans-serif;
}

.photo-scan-card{
  margin-bottom:16px;
  background:var(--np-bg);
  border-radius:24px;
  padding:0;
  position:relative;
  overflow:hidden;
}

.np-tactile{ transition: transform .18s cubic-bezier(0.34,1.56,0.64,1), opacity .15s ease; }
.np-tactile:active{ transform: scale(0.95); opacity: 0.9; }

/* Idle */
.np-scan-idle{ padding:28px 20px 24px; text-align:center; animation: np-fade-in .35s ease both; }
.np-scan-camera-area{
  width:100%; aspect-ratio: 4/3; border-radius:24px; border:1.5px dashed rgba(0,201,141,0.4);
  background: radial-gradient(circle at 50% 40%, rgba(0,201,141,0.14), rgba(255,255,255,0.02));
  display:flex; align-items:center; justify-content:center; cursor:pointer; margin-bottom:18px;
}
.np-scan-title{ font-family:var(--np-display-font); font-weight:700; font-size:19px; letter-spacing:-0.02em; color:#fff; margin-bottom:6px; }
.np-scan-subtitle{ color:var(--np-muted); font-size:13px; line-height:1.5; margin-bottom:20px; }
.np-scan-btn-primary{
  width:100%; padding:15px; border-radius:18px; border:none; cursor:pointer;
  background:var(--np-accent); color:#04140F; font-weight:700; font-size:14px;
  display:flex; align-items:center; justify-content:center; gap:9px;
  box-shadow:0 14px 28px -12px rgba(0,201,141,0.45); margin-bottom:10px;
}
.np-scan-btn-secondary{
  width:100%; padding:13px; border-radius:18px; border:1px solid rgba(255,255,255,0.12); cursor:pointer;
  background:rgba(255,255,255,0.04); color:#fff; font-weight:600; font-size:13px;
  display:flex; align-items:center; justify-content:center; gap:9px;
}

/* Analyzing */
.np-analyze-frame{ position:relative; border-radius:24px; overflow:hidden; aspect-ratio:4/3; animation: np-fade-in .35s ease both; }
.np-analyze-photo{ width:100%; height:100%; object-fit:cover; filter:brightness(0.42) saturate(1.1); }
.np-analyze-overlay{ position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:20px; }
.np-pulse-wrap{ display:flex; align-items:center; gap:5px; height:34px; }
.np-pulse-bar{ width:5px; height:100%; border-radius:99px; background:var(--np-accent); animation: np-pulse 1s ease-in-out infinite; }
@keyframes np-pulse{ 0%,100%{ transform:scaleY(0.3); opacity:0.5; } 50%{ transform:scaleY(1); opacity:1; } }
.np-analyze-steps{ text-align:center; padding:0 20px; }
.np-analyze-step{ font-family:var(--np-display-font); font-weight:700; font-size:14px; color:#fff; margin-bottom:6px; transition:opacity .35s ease; }

/* Result */
.np-result{ animation: np-fade-in .35s ease both; }
.np-result-photo-wrap{ position:relative; border-radius:24px; overflow:hidden; aspect-ratio:4/3; margin:0 0 14px; }
.np-result-photo{ width:100%; height:100%; object-fit:cover; display:block; }
.np-result-photo-gradient{ position:absolute; inset:0; background:linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.78) 100%); }
.np-result-close{
  position:absolute; top:12px; right:12px; width:32px; height:32px; border-radius:50%; border:none;
  background:rgba(0,0,0,0.5); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); color:#fff; cursor:pointer;
  display:flex; align-items:center; justify-content:center;
}
.np-result-photo-info{ position:absolute; left:18px; right:18px; bottom:15px; }
.np-result-dish-name{ font-family:var(--np-display-font); font-weight:700; font-size:20px; color:#fff; margin-bottom:7px; }
.np-result-badges{ display:flex; gap:7px; flex-wrap:wrap; }
.np-badge{
  background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.18); color:#fff;
  font-size:11px; font-weight:700; padding:5px 11px; border-radius:99px;
}
.np-badge-accent{ background:rgba(0,201,141,0.18); border-color:rgba(0,201,141,0.4); color:var(--np-accent); }

/* Stat grid */
.np-stat-grid{ display:grid; grid-template-columns:1fr 1fr; gap:9px; margin-bottom:14px; }
.np-stat-card{
  background:var(--np-card); color:var(--np-ink); border-radius:18px; padding:12px 14px;
  box-shadow:0 14px 28px -20px rgba(0,0,0,0.55);
}
.np-stat-wide{ grid-column:1 / -1; }
.np-stat-accent{ background:linear-gradient(135deg, var(--np-accent), #00E6A0); }
.np-stat-label{ font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; opacity:0.6; margin-bottom:4px; }
.np-stat-value{ font-family:var(--np-display-font); font-weight:700; font-size:17px; }
.np-stat-edit-row{ display:flex; align-items:baseline; gap:4px; }
.np-stat-input{
  width:56px; background:transparent; border:none; border-bottom:1.5px dashed var(--np-accent);
  color:var(--np-ink); font-family:var(--np-display-font); font-weight:700; font-size:17px; padding:0; outline:none;
  -moz-appearance:textfield;
}
.np-stat-input::-webkit-outer-spin-button, .np-stat-input::-webkit-inner-spin-button{ -webkit-appearance:none; margin:0; }
.np-stat-unit-inline{ font-family:var(--np-display-font); font-weight:700; font-size:17px; }
.np-edit-pencil{ opacity:0.4; margin-left:2px; }

/* Portion slider */
.np-portion-card{ background:var(--np-card); color:var(--np-ink); border-radius:20px; padding:16px; margin-bottom:16px; box-shadow:0 18px 36px -22px rgba(0,0,0,0.5); }
.np-portion-top{ display:flex; justify-content:space-between; align-items:baseline; margin-bottom:11px; font-weight:700; font-size:13.5px; }
.np-portion-value{ font-family:var(--np-display-font); font-weight:700; font-size:16px; }
.np-slider{
  -webkit-appearance:none; width:100%; height:6px; border-radius:99px; outline:none;
  background:linear-gradient(90deg, var(--np-accent), rgba(0,201,141,0.15));
}
.np-slider::-webkit-slider-thumb{
  -webkit-appearance:none; width:20px; height:20px; border-radius:50%; background:#fff;
  border:3px solid var(--np-accent); cursor:pointer; box-shadow:0 4px 10px rgba(0,0,0,0.25);
}
.np-slider::-moz-range-thumb{
  width:20px; height:20px; border-radius:50%; background:#fff; border:3px solid var(--np-accent); cursor:pointer;
}
.np-portion-scale{ display:flex; justify-content:space-between; font-size:10.5px; color:var(--np-muted); margin-top:6px; font-weight:600; }

/* Ingredients */
.np-ingredients-title{ font-size:10.5px; font-weight:800; text-transform:uppercase; letter-spacing:0.06em; color:var(--np-muted); margin-bottom:9px; }
.np-ingredients-list{ display:flex; flex-direction:column; gap:8px; margin-bottom:16px; }
.np-ingredient-row{
  background:var(--np-card); color:var(--np-ink); border-radius:16px; padding:11px 13px;
  display:flex; align-items:center; justify-content:space-between; gap:10px;
  box-shadow:0 10px 22px -18px rgba(0,0,0,0.5);
}
.np-ingredient-info{ min-width:0; }
.np-ingredient-name{ font-weight:700; font-size:13px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.np-ingredient-macros{ font-size:11.5px; color:var(--np-muted); margin-top:1px; }
.np-ingredient-edit-input{
  width:56px; font-size:12px; border:none; border-bottom:1.5px solid var(--np-accent);
  outline:none; font-family:'Manrope', sans-serif; font-weight:600; margin-top:2px;
}
.np-ingredient-actions{ display:flex; gap:4px; flex-shrink:0; }
.np-icon-btn{
  width:28px; height:28px; border-radius:9px; border:none; background:rgba(11,11,11,0.06);
  color:var(--np-ink); display:flex; align-items:center; justify-content:center; cursor:pointer;
}
.np-add-ingredient-btn{
  display:flex; align-items:center; justify-content:center; gap:6px; padding:11px;
  border-radius:16px; border:1.5px dashed rgba(255,255,255,0.2); background:transparent;
  color:#fff; font-size:12.5px; font-weight:600; cursor:pointer;
}

/* Action bar */
.np-action-bar{ display:flex; gap:8px; padding:2px 0 6px; }
.np-action-primary{
  flex:2; padding:15px; border-radius:18px; border:none; cursor:pointer;
  background:var(--np-accent); color:#04140F; font-weight:700; font-size:14px;
  box-shadow:0 14px 28px -12px rgba(0,201,141,0.45);
}
.np-action-icon{
  width:50px; border-radius:18px; border:1px solid rgba(255,255,255,0.14); background:rgba(255,255,255,0.05);
  color:#fff; display:flex; align-items:center; justify-content:center; cursor:pointer;
}

/* Toast */
.np-toast{
  position:fixed; left:50%; bottom:24px; transform:translateX(-50%); z-index:60;
  background:#fff; color:var(--np-ink); font-weight:700; font-size:12.5px; padding:10px 18px;
  border-radius:99px; box-shadow:0 12px 32px rgba(0,0,0,0.35); display:flex; align-items:center; gap:7px;
  animation: np-toast-in .25s ease both;
}
@keyframes np-toast-in{ from{ opacity:0; transform:translate(-50%, 10px); } to{ opacity:1; transform:translate(-50%, 0); } }
@keyframes np-fade-in{ from{ opacity:0; transform:translateY(8px); } to{ opacity:1; transform:translateY(0); } }

@media (min-width: 720px){
  .np-stat-grid{ grid-template-columns: repeat(4, 1fr); }
  .np-stat-wide{ grid-column: span 4; }
}

.photo-scan-btn{
  position:relative;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  padding:14px;
  border-radius:16px;
  border:1.5px dashed rgba(16,185,129,0.45);
  background:
    linear-gradient(180deg, rgba(16,185,129,0.08), rgba(52,211,153,0.03));
  color:var(--ink);
  font-weight:700;
  font-size:13.5px;
  letter-spacing:-0.2px;
  cursor:pointer;
  transition:all .25s ease;
}
.photo-scan-btn:hover{
  border-color:rgba(16,185,129,0.85);
  background:linear-gradient(180deg, rgba(16,185,129,0.16), rgba(52,211,153,0.06));
  transform:translateY(-1px);
}
.photo-scan-btn:disabled{
  cursor:default;
  opacity:0.85;
}
.photo-scan-icon{
  font-size:17px;
  display:inline-block;
}
.photo-scan-btn.scanning .photo-scan-icon{
  animation:photo-scan-pulse 1.1s ease-in-out infinite;
}
@keyframes photo-scan-pulse{
  0%,100%{ transform:scale(1) rotate(0deg); opacity:1; }
  50%{ transform:scale(1.25) rotate(12deg); opacity:0.6; }
}

/* Tooltip: appears above the button on hover, like a little hint bubble */
.photo-scan-tip{
  position:absolute;
  bottom:calc(100% + 10px);
  left:50%;
  transform:translateX(-50%) translateY(4px);
  width:max-content;
  max-width:240px;
  background:var(--card);
  border:1px solid rgba(16,185,129,0.35);
  color:var(--ink);
  font-size:11.5px;
  font-weight:600;
  line-height:1.35;
  padding:8px 11px;
  border-radius:10px;
  text-align:center;
  box-shadow:0 12px 24px -10px rgba(0,0,0,0.6);
  opacity:0;
  pointer-events:none;
  transition:opacity .2s ease, transform .2s ease;
  z-index:5;
}
.photo-scan-tip::after{
  content:'';
  position:absolute;
  top:100%;
  left:50%;
  transform:translateX(-50%);
  border:6px solid transparent;
  border-top-color:var(--card);
}
.photo-scan-btn:hover .photo-scan-tip,
.photo-scan-btn:focus-visible .photo-scan-tip{
  opacity:1;
  transform:translateX(-50%) translateY(0);
}

.photo-scan-error{
  margin-top:8px;
  font-size:12.5px;
  font-weight:600;
  color:var(--pink);
  line-height:1.4;
}
.photo-scan-retry{
  margin-top:8px;
  background:transparent;
  border:1px solid var(--track);
  color:var(--ink);
  border-radius:10px;
  padding:8px 14px;
  font-weight:700;
  font-size:12.5px;
  cursor:pointer;
}
.photo-scan-retry:hover{ border-color:rgba(16,185,129,0.6); }

/* --- Scanning stage: photo + corner brackets + moving scan line --- */
/* --- iOS-style sheet polish (spring entrance, drag handle, frosted glass, tactile press) --- */
@keyframes ios-sheet-in{
  from{ opacity:0; transform:translateY(18px) scale(0.98); }
  to{ opacity:1; transform:translateY(0) scale(1); }
}
.ios-sheet{
  animation:ios-sheet-in .5s cubic-bezier(0.34, 1.2, 0.4, 1) both;
  border-radius:26px !important;
  padding-top:10px;
}
.ios-sheet-handle{
  width:36px;
  height:5px;
  border-radius:99px;
  background:rgba(255,255,255,0.18);
  margin:0 auto 10px;
}
.photo-scan-btn,
.scan-add-btn,
.scan-result-close,
.photo-scan-retry{
  transition:transform .15s cubic-bezier(0.34, 1.56, 0.64, 1), opacity .15s ease;
}
.photo-scan-btn:active,
.scan-add-btn:active,
.scan-result-close:active,
.photo-scan-retry:active{
  transform:scale(0.96);
  opacity:0.9;
}
.scan-health-badge{
  backdrop-filter:blur(10px) saturate(1.6);
  -webkit-backdrop-filter:blur(10px) saturate(1.6);
}
.scan-result-close{
  backdrop-filter:blur(10px);
  -webkit-backdrop-filter:blur(10px);
}

.scan-frame{
  position:relative;
  border-radius:18px;
  overflow:hidden;
  background:#000;
}
.scan-photo{
  width:100%;
  max-height:260px;
  object-fit:cover;
  display:block;
  filter:brightness(0.85);
}
.scan-corner{
  position:absolute;
  width:22px;
  height:22px;
  border:2.5px solid var(--lime);
}
.scan-corner.tl{ top:10px; left:10px; border-right:none; border-bottom:none; border-radius:6px 0 0 0; }
.scan-corner.tr{ top:10px; right:10px; border-left:none; border-bottom:none; border-radius:0 6px 0 0; }
.scan-corner.bl{ bottom:10px; left:10px; border-right:none; border-top:none; border-radius:0 0 0 6px; }
.scan-corner.br{ bottom:10px; right:10px; border-left:none; border-top:none; border-radius:0 0 6px 0; }
.scan-line{
  position:absolute;
  left:0; right:0;
  height:2px;
  background:linear-gradient(90deg, transparent, var(--lime), transparent);
  box-shadow:0 0 12px 2px rgba(16,185,129,0.8);
  animation:scan-line-move 1.8s ease-in-out infinite;
}
@keyframes scan-line-move{
  0%{ top:8%; opacity:0; }
  10%{ opacity:1; }
  90%{ opacity:1; }
  100%{ top:92%; opacity:0; }
}
.scan-caption-box{
  padding:16px 14px 18px;
  text-align:center;
}
.scan-caption-mini{
  font-size:11px;
  color:var(--gray);
  font-weight:700;
  text-transform:uppercase;
  letter-spacing:0.06em;
  margin-bottom:6px;
}
.scan-caption-main{
  font-size:16px;
  font-weight:800;
  font-family:'Unbounded', sans-serif;
  letter-spacing:-0.3px;
  margin-bottom:8px;
  animation:fade-in-up .3s ease both;
}
.scan-caption-note{
  font-size:11px;
  color:var(--gray);
  line-height:1.4;
}

/* --- Result stage: full card with photo, health badge, stats, ingredients --- */
.scan-result-card{
  animation:fade-in-up .3s ease both;
}
.scan-result-photo-wrap{
  position:relative;
  border-radius:20px;
  overflow:hidden;
  margin-bottom:14px;
  box-shadow:0 12px 28px -14px rgba(0,0,0,0.55);
}
.scan-result-photo{
  width:100%;
  max-height:220px;
  object-fit:cover;
  display:block;
}
.scan-health-badge{
  position:absolute;
  left:10px;
  bottom:10px;
  background:rgba(11,15,20,0.7);
  border:1px solid rgba(255,255,255,0.14);
  color:var(--ink);
  font-size:11.5px;
  font-weight:700;
  padding:7px 12px;
  border-radius:99px;
}
.scan-result-close{
  position:absolute;
  top:10px;
  right:10px;
  width:30px;
  height:30px;
  border-radius:50%;
  border:none;
  background:rgba(11,15,20,0.6);
  color:var(--ink);
  font-size:15px;
  cursor:pointer;
}
.scan-result-title{
  font-family:'Unbounded', sans-serif;
  font-weight:800;
  font-size:18px;
  letter-spacing:-0.3px;
  margin-bottom:12px;
}
.scan-stat-row{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:9px;
  margin-bottom:9px;
}
.scan-stat-row.three{
  grid-template-columns:1fr 1fr 1fr;
}
.scan-stat-row.three .scan-stat-card{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:5px;
  font-weight:700;
  font-size:12.5px;
}
.scan-stat-emoji{ font-size:14px; }
.scan-stat-card{
  background:var(--card);
  border:1px solid var(--track);
  border-radius:16px;
  padding:11px 12px;
  box-shadow:0 6px 16px -12px rgba(0,0,0,0.5);
}
.scan-stat-label{
  font-size:10px;
  color:var(--gray);
  font-weight:700;
  text-transform:uppercase;
  letter-spacing:0.05em;
  margin-bottom:3px;
}
.scan-stat-value{
  font-size:16px;
  font-weight:800;
  font-family:'Unbounded', sans-serif;
}
.scan-ingredients-title{
  font-size:11px;
  font-weight:800;
  text-transform:uppercase;
  letter-spacing:0.06em;
  color:var(--gray);
  margin:16px 0 8px;
}
.scan-ingredients-list{
  margin-bottom:16px;
  background:var(--card);
  border:1px solid var(--track);
  border-radius:16px;
  padding:2px 14px;
}
.scan-ingredient-row{
  display:flex;
  justify-content:space-between;
  font-size:13px;
  font-weight:600;
  padding:10px 0;
  border-bottom:1px solid rgba(255,255,255,0.06);
}
.scan-ingredient-row:last-child{ border-bottom:none; }
.scan-ingredient-macros{
  color:var(--gray);
  font-weight:600;
}
.scan-add-btn{
  width:100%;
  padding:16px;
  border-radius:18px;
  border:none;
  background:linear-gradient(135deg, var(--lime), var(--orange));
  color:#000;
  font-weight:800;
  font-size:15px;
  cursor:pointer;
  box-shadow:0 10px 24px -10px rgba(16,185,129,0.5);
}
.scan-add-btn:hover{ filter:brightness(1.05); }

.photo-results{
  margin-top:12px;
  padding:12px;
  border-radius:16px;
  border:1px solid rgba(110,231,183,0.22);
  background:
    linear-gradient(180deg, rgba(10,18,15,0.98), rgba(15,26,21,0.96)),
    radial-gradient(circle at top left, rgba(16,185,129,0.14), transparent 55%);
  animation:fade-in-up .3s ease both;
}
.photo-results-title{
  font-size:10px;
  font-weight:800;
  text-transform:uppercase;
  letter-spacing:0.08em;
  color:rgba(167,243,208,0.88);
  margin-bottom:9px;
}
.photo-result-item{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
  padding:9px 0;
  border-top:1px solid rgba(255,255,255,0.06);
}
.photo-result-item:first-of-type{
  border-top:none;
  padding-top:2px;
}
.photo-result-name{
  font-size:13px;
  font-weight:700;
}
.photo-result-macros{
  font-size:11.5px;
  color:var(--gray);
  margin-top:2px;
}
.photo-result-actions{
  display:flex;
  align-items:center;
  gap:6px;
  flex-shrink:0;
}
.photo-result-add{
  background:linear-gradient(135deg, var(--lime), var(--orange));
  color:#000;
  border:none;
  border-radius:10px;
  padding:7px 13px;
  font-weight:700;
  font-size:12px;
  cursor:pointer;
  transition:transform .2s ease;
}
.photo-result-add:hover{ transform:translateY(-1px); }
.photo-result-discard{
  width:26px;
  height:26px;
  border-radius:50%;
  border:1px solid var(--track);
  background:transparent;
  color:var(--gray);
  font-size:14px;
  line-height:1;
  cursor:pointer;
  transition:all .2s ease;
}
.photo-result-discard:hover{
  color:var(--pink);
  border-color:var(--pink);
}

.add-card{
  background:var(--card);
  border:1px solid var(--track);
  border-radius:20px;
  padding:22px;
  margin-bottom:26px;
  box-shadow:0 12px 28px -20px rgba(0,0,0,0.6);
}
.field-row{
  display:grid;
  grid-template-columns:2fr 1fr;
  gap:10px;
  margin-bottom:12px;
}

.params-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:14px;
  margin-bottom:14px;
}

.param-item{
  min-width:0;
}

.param-item--full{
  grid-column:1 / -1;
}

.param-item--height-align{
  margin-top:56px;
}
.macro-row{
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  gap:10px;
  margin-bottom:14px;
}
label.mini{
  display:block;
  font-size:11px;
  font-weight:700;
  text-transform:uppercase;
  letter-spacing:0.05em;
  color:var(--gray);
  margin-bottom:5px;
}

.unit-switch{
  display:inline-flex;
  gap:6px;
  margin:2px 0 8px;
  padding:4px;
  border:1px solid rgba(16,185,129,0.22);
  border-radius:10px;
  background:rgba(255,255,255,0.03);
}

.unit-btn{
  border:0;
  border-radius:8px;
  padding:6px 10px;
  font-size:12px;
  font-weight:700;
  color:var(--gray);
  background:transparent;
  text-transform:none;
}

.unit-btn.active{
  color:#07130f;
  background:linear-gradient(135deg, var(--lime), var(--orange));
  box-shadow:0 0 14px rgba(16,185,129,0.25);
}

.wheel-wrap{
  position:relative;
}

.wheel-trigger{
  width:100%;
  min-height:56px;
  border:1px solid rgba(164,179,198,0.22);
  border-radius:14px;
  background:linear-gradient(180deg, rgba(8,14,23,0.95), rgba(6,11,18,0.95));
  color:var(--ink);
  display:flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  padding:10px 12px;
  transition:border-color .18s ease, transform .16s ease;
}

.wheel-trigger:hover{
  border-color:rgba(144,220,187,0.5);
}

.wheel-trigger:active{
  transform:scale(0.995);
}

.wheel-value{
  font-size:28px;
  font-weight:700;
  letter-spacing:-0.02em;
  line-height:1;
}

.wheel-overlay{
  position:fixed;
  inset:0;
  z-index:120;
  background:rgba(6,10,16,0.32);
  backdrop-filter:blur(8px);
  display:flex;
  align-items:center;
  justify-content:center;
  padding:0;
  animation:wheel-overlay-fade .22s ease-out both;
}

.wheel-modal{
  width:100%;
  height:100%;
  border:0;
  border-radius:0;
  background:
    radial-gradient(circle at 50% 18%, rgba(16,185,129,0.18), transparent 30%),
    linear-gradient(180deg, #0B0F14, #111827);
  box-shadow:none;
  padding:20px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  animation:wheel-modal-rise .26s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.wheel-modal-title{
  text-align:center;
  font-size:12px;
  font-weight:800;
  letter-spacing:0.08em;
  text-transform:uppercase;
  color:rgba(167,243,208,0.95);
  margin-bottom:14px;
}

.wheel-modal-select-wrap{
  position:relative;
  width:min(480px, 100%);
  margin:0 auto;
}

.wheel-modal-select-wrap::after{
  content:'';
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  border-radius:18px;
  pointer-events:none;
  background:
    linear-gradient(180deg, rgba(11,15,20,0.86), transparent 24%, transparent 76%, rgba(11,15,20,0.86)),
    linear-gradient(90deg, rgba(16,185,129,0.06), transparent 18%, transparent 82%, rgba(16,185,129,0.06));
  z-index:1;
}

.wheel-modal-select-wrap::before{
  content:'';
  position:absolute;
  left:12px;
  right:12px;
  top:50%;
  height:48px;
  transform:translateY(-50%);
  border-radius:16px;
  border:1px solid rgba(16,185,129,0.5);
  background:
    linear-gradient(180deg, rgba(16,185,129,0.24), rgba(16,185,129,0.10)),
    radial-gradient(circle at 50% 50%, rgba(167,243,208,0.18), transparent 70%);
  box-shadow:
    0 0 0 1px rgba(16,185,129,0.08),
    0 0 24px rgba(16,185,129,0.10);
  pointer-events:none;
  z-index:2;
}

.wheel-modal-select-wrap .wheel-select{
  width:100%;
  height:min(44vh, 320px);
  border:1px solid rgba(16,185,129,0.24);
  border-radius:18px;
  background:linear-gradient(180deg, rgba(12,18,24,0.98), rgba(9,14,20,0.98));
  color:#f8fafc;
  font-family:var(--font-body);
  font-size:28px;
  font-weight:700;
  text-align:center;
  padding:0;
  line-height:1.7;
  overflow-y:auto;
  position:relative;
  z-index:0;
  scroll-behavior:smooth;
  scroll-snap-type:y mandatory;
  scroll-padding-block:calc(50% - 14px);
  overscroll-behavior:contain;
  scrollbar-width:thin;
  scrollbar-color:rgba(16,185,129,0.9) rgba(255,255,255,0.04);
}

.wheel-select-list{
  display:flex;
  flex-direction:column;
}

.wheel-modal-select-wrap .wheel-select::-webkit-scrollbar{
  width:8px;
}

.wheel-modal-select-wrap .wheel-select::-webkit-scrollbar-track{
  background:rgba(255,255,255,0.04);
  border-radius:999px;
}

.wheel-modal-select-wrap .wheel-select::-webkit-scrollbar-thumb{
  background:linear-gradient(180deg, rgba(16,185,129,0.95), rgba(52,211,153,0.78));
  border-radius:999px;
  border:2px solid rgba(8,12,16,0.95);
}

.wheel-modal-select-wrap .wheel-select::-webkit-scrollbar-thumb:hover{
  background:linear-gradient(180deg, rgba(16,185,129,1), rgba(52,211,153,0.88));
}

.wheel-option{
  width:100%;
  border:0;
  background:transparent;
  font-family:var(--font-body);
  font-size:28px;
  font-weight:600;
  color:rgba(226,233,242,0.34);
  padding:4px 0;
  line-height:1.7;
  text-align:center;
  scroll-snap-align:center;
  scroll-snap-stop:always;
  transition:color .16s ease, background .16s ease, transform .16s ease;
}

.wheel-option:hover{
  color:rgba(248,250,252,0.78);
}

.wheel-option.active{
  color:#ffffff;
  background:rgba(16,185,129,0.34);
  text-shadow:0 0 12px rgba(110,231,183,0.14);
}

.wheel-confirm-btn{
  margin:20px auto 0;
  width:min(480px, 100%);
  border-radius:14px;
  min-height:50px;
  font-size:15px;
  font-weight:700;
  letter-spacing:0;
  background:linear-gradient(180deg, #6EE7B7, #10B981);
  color:#06120d;
  box-shadow:0 12px 28px rgba(16,185,129,0.28);
}

@media (max-width:640px){
  .wheel-modal{padding:16px 14px 24px; justify-content:flex-end;}
  .wheel-modal-title{margin-bottom:10px;}
  .wheel-modal-select-wrap .wheel-select{height:46vh;}
  .wheel-confirm-btn{margin-top:14px;}
}

.wheel-unit{
  font-size:15px;
  font-weight:700;
  letter-spacing:0.04em;
  text-transform:uppercase;
  color:rgba(236,243,249,0.88);
}

.wheel-modal-unit{
  position:absolute;
  right:14px;
  top:50%;
  transform:translateY(-50%);
  z-index:3;
  pointer-events:none;
  font-size:12px;
  font-weight:700;
  letter-spacing:0.04em;
  text-transform:uppercase;
  color:rgba(236,243,249,0.82);
}

@keyframes wheel-overlay-fade{
  from{opacity:0;}
  to{opacity:1;}
}

@keyframes wheel-modal-rise{
  from{opacity:0; transform:translateY(18px) scale(0.99);}
  to{opacity:1; transform:translateY(0) scale(1);}
}

input[type=text], input[type=number]{
  width:100%;
  font-family:var(--font-body);
  font-size:15px;
  font-weight:600;
  padding:11px 13px;
  border:2px solid var(--track);
  border-radius:12px;
  background:var(--bg);
  color:var(--ink);
  transition:border-color .15s ease;
}
select{
  width:100%;
  font-family:var(--font-body);
  font-size:15px;
  font-weight:600;
  padding:11px 13px;
  border:2px solid var(--track);
  border-radius:12px;
  background:var(--bg);
  color:var(--ink);
  transition:border-color .15s ease;
}
input:focus-visible{
  outline:none;
  border-color:var(--blue);
}
select:focus-visible{
  outline:none;
  border-color:var(--blue);
}

.goal-ios-picker{
  display:grid;
  grid-template-columns:repeat(4, minmax(0, 1fr));
  gap:10px;
}

.goal-other-wrap{
  margin-top:10px;
}

.goal-ios-card{
  width:100%;
  border:1px solid rgba(255,255,255,0.12);
  border-radius:16px;
  background:linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
  color:var(--ink);
  display:flex;
  align-items:center;
  gap:10px;
  min-height:46px;
  padding:10px 12px;
  text-align:left;
  backdrop-filter:blur(10px);
  transition:all .2s ease;
}

.goal-ios-card:hover{
  border-color:rgba(16,185,129,0.35);
  background:linear-gradient(180deg, rgba(16,185,129,0.12), rgba(16,185,129,0.06));
}

.goal-ios-card.active{
  border-color:rgba(16,185,129,0.6);
  background:linear-gradient(180deg, rgba(16,185,129,0.18), rgba(16,185,129,0.08));
  box-shadow:0 0 0 2px rgba(16,185,129,0.16), 0 8px 20px rgba(16,185,129,0.15);
}

.goal-ios-icon{
  width:24px;
  height:24px;
  border-radius:999px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  background:rgba(255,255,255,0.08);
  font-size:14px;
}

.goal-ios-text{
  font-size:13px;
  font-weight:700;
  letter-spacing:-0.1px;
}

/* Keep auth inputs consistent across text/email/password types */
.auth-form-register input,
.auth-form-login input{
  background:rgba(255,255,255,0.04) !important;
  border:1px solid rgba(16,185,129,0.2) !important;
  color:#FFFFFF;
  border-radius:14px;
  padding:14px 18px !important;
  min-height:56px;
  font-size:17px !important;
  font-weight:600;
}

.auth-form-register input:focus,
.auth-form-login input:focus,
.auth-form-register input:focus-visible,
.auth-form-login input:focus-visible{
  border-color:rgba(16,185,129,0.6) !important;
  box-shadow:0 0 0 3px rgba(16,185,129,0.1) !important;
}
button{
  font-family:var(--font-body);
  cursor:pointer;
  transition:all .2s ease;
}

.btn-add{
  width:100%;
  background:linear-gradient(135deg, var(--lime), var(--orange));
  color:#000000;
  border:none;
  border-radius:12px;
  padding:14px;
  font-weight:700;
  font-size:14px;
  letter-spacing:-0.3px;
  transition:all .3s ease;
  box-shadow:
    0 0 20px rgba(16,185,129,0.3),
    0 8px 24px rgba(16,185,129,0.15);
  position:relative;
  overflow:hidden;
}

.btn-add::before{
  content:'';
  position:absolute;
  top:0;
  left:-100%;
  width:100%;
  height:100%;
  background:linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition:left .6s ease;
}

.btn-add:hover{
  transform:translateY(-2px);
  box-shadow:
    0 0 40px rgba(16,185,129,0.5),
    0 12px 36px rgba(16,185,129,0.3),
    inset 0 1px 0 rgba(255,255,255,0.3);
}

.btn-add:hover::before{
  left:100%;
}

.btn-add:active{
  transform:translateY(0);
}

.preview-line{
  min-height:18px;
  font-size:13px;
  font-weight:600;
  color:var(--gray);
  margin:-4px 0 12px;
}
.preview-line.found{color:var(--lime);}
.preview-line.missing{color:var(--pink);}
.manual-panel{
  display:none;
  margin-top:16px;
  padding-top:16px;
  border-top:2px dashed var(--track);
}
.manual-panel.show{display:block;}
.manual-note{
  font-size:12.5px;
  color:var(--gray);
  margin:0 0 12px;
  line-height:1.4;
  font-weight:600;
}

.food-suggestions{
  margin-top:8px;
  padding:8px 10px;
  border:1px solid rgba(110,231,183,0.22);
  border-radius:14px;
  background:
    linear-gradient(180deg, rgba(10,18,15,0.98), rgba(15,26,21,0.96)),
    radial-gradient(circle at top left, rgba(16,185,129,0.16), transparent 55%);
  box-shadow:
    0 16px 34px rgba(0,0,0,0.34),
    0 0 0 1px rgba(16,185,129,0.08),
    inset 0 1px 0 rgba(255,255,255,0.03);
}

.food-suggestions-title{
  font-size:10px;
  font-weight:800;
  text-transform:uppercase;
  letter-spacing:0.08em;
  color:rgba(167,243,208,0.88);
  margin-bottom:7px;
}

.food-suggestions-list{
  display:flex;
  flex-wrap:wrap;
  gap:6px;
}

.food-suggestion-btn{
  border:1px solid rgba(110,231,183,0.28);
  background:linear-gradient(135deg, rgba(110,231,183,0.18), rgba(16,185,129,0.12));
  color:#F6FFFB;
  border-radius:999px;
  padding:7px 9px;
  font-size:11.5px;
  font-weight:700;
  text-align:left;
  box-shadow:
    0 6px 14px rgba(0,0,0,0.14),
    inset 0 1px 0 rgba(255,255,255,0.04);
}

.food-suggestion-btn:hover{
  border-color:rgba(167,243,208,0.52);
  background:linear-gradient(135deg, rgba(110,231,183,0.24), rgba(16,185,129,0.16));
  color:#FFFFFF;
  transform:translateY(-1px);
  box-shadow:
    0 8px 18px rgba(0,0,0,0.18),
    0 0 0 1px rgba(110,231,183,0.08),
    0 0 18px rgba(16,185,129,0.08);
}

.goal-hint{
  margin-top:12px;
  font-size:13px;
  color:var(--lime);
  font-weight:700;
}
.remember-row{
  display:flex;
  align-items:flex-end;
  padding-bottom:11px;
}
.remember-label{
  display:flex;
  align-items:center;
  gap:6px;
  text-transform:none;
  letter-spacing:0;
  font-size:12.5px;
  font-weight:600;
  color:var(--ink);
}
.btn-manual{
  background:#4338CA;
  color:#FFFFFF;
  margin-top:4px;
}
.btn-manual:hover{background:var(--pink); color:#FFFFFF;}
.btn-danger{
  background: linear-gradient(135deg, #FF6B6B, #F14747);
  border-color: transparent;
  color: #FFFFFF;
  margin-top: 10px;
}
.btn-danger:hover{
  background: linear-gradient(135deg, #F14747, #D32A2A);
}
.log-list{
  list-style:none;
  margin:0;
  padding:0;
}
.log-item{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
  background:var(--card);
  border:1px solid var(--track);
  border-left:5px solid var(--blue);
  border-radius:14px;
  padding:13px 16px;
  margin-bottom:9px;
  box-shadow:0 8px 18px -16px rgba(0,0,0,0.6);
  animation:slide-in .18s ease;
}
.log-item-left{
  display:flex;
  align-items:center;
  gap:10px;
}
.log-item-thumb{
  width:38px;
  height:38px;
  border-radius:10px;
  object-fit:cover;
  flex-shrink:0;
  border:1px solid var(--track);
}
.scan-edit-hint{
  font-size:10.5px;
  color:var(--gray);
  font-weight:600;
  margin:-8px 0 12px;
}
.scan-stat-input{
  width:100%;
  background:transparent;
  border:none;
  color:var(--ink);
  font-size:16px;
  font-weight:800;
  font-family:'Unbounded', sans-serif;
  padding:0;
  -moz-appearance:textfield;
}
.scan-stat-input::-webkit-outer-spin-button,
.scan-stat-input::-webkit-inner-spin-button{
  -webkit-appearance:none;
  margin:0;
}
.scan-stat-input:focus{ outline:none; }
.scan-stat-card{
  position:relative;
}
.scan-stat-card::after{
  content:'✎';
  position:absolute;
  top:8px;
  right:9px;
  font-size:10px;
  color:var(--gray);
  opacity:0.7;
}
.scan-stat-card.small{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:4px;
  font-weight:700;
  font-size:12.5px;
}
.scan-stat-card.small::after{ display:none; }
.scan-stat-input-sm{
  width:34px;
  background:transparent;
  border:none;
  border-bottom:1px dashed var(--track);
  color:var(--ink);
  font-size:12.5px;
  font-weight:700;
  font-family:'Plus Jakarta Sans', sans-serif;
  padding:0 0 1px;
  text-align:center;
  -moz-appearance:textfield;
}
.scan-stat-input-sm::-webkit-outer-spin-button,
.scan-stat-input-sm::-webkit-inner-spin-button{
  -webkit-appearance:none;
  margin:0;
}
.scan-stat-input-sm:focus{ outline:none; border-bottom-color:var(--lime); }
.scan-stat-unit{
  font-size:11px;
  color:var(--gray);
  font-weight:600;
}
@keyframes slide-in{
  from{opacity:0; transform:translateY(-4px);}
  to{opacity:1; transform:translateY(0);}
}

@keyframes page-fade{
  from{opacity:0; transform:translateY(12px);}
  to{opacity:1; transform:translateY(0);}
}

@keyframes page-fade-out{
  from{opacity:1; transform:translateY(0);}
  to{opacity:0; transform:translateY(-12px);}
}

.log-item .name{font-weight:700; font-size:14.5px;}
.log-item .macros{font-size:12px; color:var(--gray); margin-top:2px; font-weight:600;}
.log-item .right{display:flex; align-items:center; gap:12px;}
.log-item .kcal{font-weight:800; font-variant-numeric:tabular-nums; font-size:15px; color:var(--blue);}
.del-btn{
  background:var(--bg);
  border:none;
  color:var(--gray);
  font-size:16px;
  line-height:1;
  width:26px;
  height:26px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
}
.del-btn:hover{color:#FFFFFF; background:var(--pink);}
.empty-state{
  color:var(--gray);
  font-weight:600;
  font-size:13.5px;
  padding:20px;
  text-align:center;
  border:2px dashed var(--track);
  border-radius:14px;
}
.day-actions{
  margin-top:16px;
  display:flex;
  justify-content:flex-end;
}

.profile-screen{
  max-width:760px;
  margin:0 auto;
  padding:20px 0 40px;
}

.profile-screen__topbar{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:16px;
  margin-bottom:20px;
}

.profile-screen__title{
  margin:0;
  font-size:clamp(34px, 5vw, 52px);
  line-height:1;
  letter-spacing:-0.04em;
  font-weight:800;
}

.profile-close-btn{
  width:52px;
  height:52px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,0.08);
  background:rgba(255,255,255,0.08);
  color:#fff;
  font-size:30px;
  line-height:1;
  display:flex;
  align-items:center;
  justify-content:center;
}

.profile-days-card{
  border-radius:24px;
  padding:22px 24px;
  margin-bottom:20px;
  background:linear-gradient(135deg, rgba(16,185,129,0.18), rgba(52,211,153,0.08));
  border:1px solid rgba(16,185,129,0.36);
  box-shadow:0 0 0 1px rgba(16,185,129,0.08), 0 12px 28px rgba(16,185,129,0.10);
}

.profile-days-label{
  font-size:12px;
  font-weight:800;
  text-transform:uppercase;
  letter-spacing:0.08em;
  color:rgba(167,243,208,0.86);
  margin-bottom:12px;
}

.profile-days-value{
  font-size:64px;
  font-weight:800;
  line-height:0.95;
  color:#ffffff;
  letter-spacing:-0.02em;
}

.profile-stats-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:12px;
  margin-bottom:16px;
}

.profile-stats-grid--single{
  grid-template-columns:1fr;
}

.profile-stat-card{
  border-radius:24px;
  padding:18px 20px;
}

.profile-stat-card--dark{
  background:#1f1f22;
  border:1px solid rgba(255,255,255,0.05);
}

.profile-stat-label{
  font-size:12px;
  text-transform:uppercase;
  letter-spacing:0.08em;
  color:rgba(248,250,252,0.62);
  margin-bottom:12px;
}

.profile-stat-value{
  font-size:56px;
  font-weight:800;
  line-height:0.95;
  display:flex;
  align-items:center;
  gap:6px;
}

.profile-stat-icon{
  font-size:36px;
}

.profile-overview-btn{
  width:100%;
  border:1px solid rgba(255,255,255,0.06);
  background:linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04));
  color:#fff;
  border-radius:24px;
  min-height:74px;
  font-size:18px;
  font-weight:700;
  margin-bottom:26px;
}

.profile-section{
  margin-bottom:28px;
}

.profile-section-title{
  margin-bottom:14px;
  font-size:16px;
  font-weight:700;
  color:rgba(248,250,252,0.38);
}

.profile-setting-card{
  background:rgba(255,255,255,0.04);
  border:1px solid rgba(255,255,255,0.06);
  border-radius:24px;
  padding:8px 18px;
}

.profile-setting-row{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
  padding:16px 0;
}

.profile-setting-row--btn{
  width:100%;
  text-align:left;
  background:transparent;
  border:0;
  border-radius:0;
  color:inherit;
  transition:background .14s ease;
}

.profile-setting-row--btn:hover{
  background:rgba(255,255,255,0.04);
}

.profile-setting-row + .profile-setting-row{
  border-top:1px solid rgba(255,255,255,0.06);
}

.profile-setting-name{
  font-size:18px;
  font-weight:700;
  color:#F8FAFC;
}

.profile-setting-subtitle{
  margin-top:4px;
  font-size:13px;
  line-height:1.4;
  color:rgba(148,163,184,0.92);
}

.profile-setting-value{
  color:#F4C15B;
  font-size:17px;
  font-weight:700;
  text-align:right;
}

.profile-language-group{
  display:flex;
  gap:8px;
  padding:10px 0 16px;
}

.profile-toggle{
  position:relative;
  width:58px;
  height:34px;
  display:inline-flex;
}

.profile-toggle input{
  opacity:0;
  width:0;
  height:0;
}

.profile-toggle-slider{
  position:absolute;
  inset:0;
  border-radius:999px;
  background:rgba(148,163,184,0.35);
  transition:background .2s ease;
}

.profile-toggle-slider::before{
  content:'';
  position:absolute;
  top:3px;
  left:3px;
  width:28px;
  height:28px;
  border-radius:50%;
  background:#fff;
  transition:transform .2s ease;
}

.profile-toggle input:checked + .profile-toggle-slider{
  background:linear-gradient(135deg, #6EE7B7, #10B981);
}

.profile-toggle input:checked + .profile-toggle-slider::before{
  transform:translateX(24px);
}

.profile-summary{
  display:flex;
  align-items:center;
  justify-content:space-between;
  flex-wrap:wrap;
  gap:12px;
  background:rgba(255,255,255,0.06);
  border:1px solid rgba(255,255,255,0.08);
  border-radius:18px;
  padding:16px 18px;
  margin-bottom:18px;
}
.profile-summary-title{
  font-size:13px;
  font-weight:700;
  color:var(--gray);
  text-transform:uppercase;
  letter-spacing:0.08em;
  margin-bottom:6px;
}
.profile-summary-values{
  display:flex;
  flex-wrap:wrap;
  gap:12px;
  font-size:14px;
  color:var(--ink);
}
.profile-summary-values span{
  color:var(--gray);
}
.profile-summary .link-btn{
  margin-left:auto;
  padding:8px 12px;
  border-radius:999px;
  color:#FFFFFF;
  background:rgba(255,255,255,0.08);
  text-decoration:none;
}
.profile-summary .link-btn:hover{background:rgba(255,255,255,0.14);}
.link-btn{
  background:none;
  border:none;
  font-size:12.5px;
  font-weight:700;
  color:var(--gray);
  text-decoration:underline;
  text-underline-offset:3px;
}
.link-btn:hover{color:var(--pink);}

.language-switcher{
  display:flex;
  gap:6px;
  padding:6px;
  background:rgba(255,255,255,0.08);
  border-radius:12px;
  border:1px solid rgba(16,185,129,0.2);
}

.lang-btn{
  padding:8px 12px;
  font-size:12px;
  font-weight:700;
  letter-spacing:0.5px;
  background:transparent;
  color:var(--gray);
  border:1px solid transparent;
  border-radius:8px;
  cursor:pointer;
  transition:all .2s ease;
}

.lang-btn:hover{
  color:var(--lime);
  border-color:rgba(16,185,129,0.3);
  background:rgba(16,185,129,0.08);
}

.lang-btn.active{
  color:#FFFFFF;
  background:linear-gradient(135deg, var(--lime), var(--orange));
  border-color:transparent;
  box-shadow:0 0 15px rgba(16,185,129,0.3);
}

.profile-link{
  padding:10px 16px;
  border-radius:12px;
  color:#000000;
  font-size:13px;
  font-weight:700;
  letter-spacing:-0.3px;
  background:linear-gradient(135deg, var(--lime), var(--orange));
  border:none;
  box-shadow:0 0 20px rgba(16,185,129,0.3);
  text-decoration:none;
  transition:all .2s ease;
}

.profile-link:hover{
  transform:translateY(-2px);
  box-shadow:0 0 40px rgba(16,185,129,0.5), 0 12px 36px rgba(16,185,129,0.3);
}

.back-button{
  font-size:14px;
  color:#0B1220;
  text-decoration:none;
  border:1px solid rgba(11,18,32,0.12);
  background:#FFFFFF;
  padding:10px 16px;
  border-radius:999px;
  transition:background .15s ease, transform .15s ease, box-shadow .15s ease;
  box-shadow:0 12px 24px rgba(11,18,32,0.1);
}
.back-button:hover{
  background:#f5f7fb;
  transform:translateY(-1px);
  box-shadow:0 14px 28px rgba(11,18,32,0.14);
}

@media (max-width:760px){
  .profile-stats-grid{grid-template-columns:1fr 1fr;}
  .profile-stat-value{font-size:44px;}
  .profile-setting-row{align-items:flex-start;}
  .profile-setting-value{font-size:15px;}
  .profile-language-group{flex-wrap:wrap;}
}

@media (max-width:560px){
  .profile-stats-grid{grid-template-columns:1fr;}
  .profile-screen__title{font-size:44px;}
  .profile-close-btn{width:46px; height:46px; font-size:26px;}
}

.facts{
  position:relative;
  max-width:620px;
  width:100%;
  margin:0 auto;
  background:var(--card);
  border:1px solid var(--track);
  border-radius:24px;
  padding:24px 22px;
  box-shadow:0 16px 32px -20px rgba(0,0,0,0.65);
}

.diary-overlay{
  position:fixed;
  inset:0;
  z-index:122;
  background:rgba(6,10,16,0.2);
  backdrop-filter:blur(6px);
  animation:wheel-overlay-fade .22s ease-out both;
}

.diary-column{
  position:fixed;
  inset:18px;
  z-index:123;
  background:var(--card);
  border:1px solid var(--track);
  border-radius:24px;
  padding:22px;
  overflow:auto;
  opacity:0;
  pointer-events:none;
  transform:translateY(18px) scale(0.99);
  transition:opacity .22s ease, transform .24s ease;
}

.diary-column.open{
  opacity:1;
  pointer-events:auto;
  transform:translateY(0) scale(1);
}

.diary-panel-close{
  position:sticky;
  top:0;
  margin-left:auto;
  width:36px;
  height:36px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,0.18);
  background:rgba(255,255,255,0.06);
  color:#fff;
  font-size:22px;
  line-height:1;
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:2;
}

.diary-panel-close:hover{
  background:rgba(255,255,255,0.12);
}
.facts h2{
  font-family:var(--font-display);
  font-weight:800;
  font-size:15px;
  text-transform:uppercase;
  letter-spacing:0.06em;
  margin:0 0 14px;
  text-align:center;
}
.week-strip{
  display:grid;
  grid-template-columns:repeat(7, 1fr);
  gap:4px;
  margin-bottom:18px;
}
.day-cell{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:3px;
  padding:8px 2px;
  border-radius:12px;
  border:1px solid transparent;
}
.day-cell.today{
  background:var(--bg);
  border-color:var(--blue);
}
.day-name{
  font-size:9.5px;
  font-weight:700;
  text-transform:uppercase;
  color:var(--gray);
  letter-spacing:0.03em;
}
.day-num{
  font-size:13px;
  font-weight:800;
}
.day-kcal{
  font-size:9.5px;
  font-weight:700;
  color:var(--gray);
}
.day-kcal.under{color:#4ADE80;}
.day-kcal.over{color:var(--pink);}
.day-dot{
  display:inline-block;
  width:6px;
  height:6px;
  border-radius:50%;
  background:var(--orange);
}
.goal-line{
  text-align:center;
  font-size:12px;
  font-weight:700;
  color:var(--gray);
  margin-bottom:10px;
}
.goal-line input{
  width:56px;
  padding:3px 6px;
  font-size:12px;
  font-weight:700;
  border:2px solid var(--track);
  border-radius:8px;
  text-align:center;
  background:var(--bg);
  color:var(--ink);
}
.ring-wrap{
  position:relative;
  width:190px;
  height:190px;
  margin:0 auto 20px;
}
.ring-wrap svg{width:100%; height:100%; transform:rotate(-90deg);}
.ring-track{fill:none; stroke:var(--track); stroke-width:16;}
.ring-progress{fill:none; stroke:var(--lime); stroke-width:16; stroke-linecap:round; transition:stroke-dashoffset .5s ease, stroke .3s ease;}
.ring-center{
  position:absolute;
  inset:0;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
.ring-kcal{
  font-family:var(--font-display);
  font-weight:900;
  font-size:36px;
  font-variant-numeric:tabular-nums;
  line-height:1;
}
.ring-label{
  font-size:10.5px;
  font-weight:700;
  text-transform:uppercase;
  letter-spacing:0.06em;
  color:var(--gray);
  margin-top:5px;
  text-align:center;
}
.ring-remaining{
  font-size:11px;
  font-weight:600;
  color:var(--gray);
  margin-top:4px;
}
.macro-bars{
  margin-bottom:18px;
}
.macro-bar-row{
  margin-bottom:12px;
}
.macro-bar-row.has-tip{
  position:relative;
  cursor:help;
}
.macro-tip{
  position:absolute;
  bottom:calc(100% + 6px);
  left:0;
  right:0;
  background:var(--card);
  border:1px solid var(--track);
  border-radius:10px;
  padding:8px 11px;
  font-size:11.5px;
  font-weight:600;
  line-height:1.35;
  color:var(--ink);
  box-shadow:0 12px 24px -10px rgba(0,0,0,0.6);
  opacity:0;
  transform:translateY(4px);
  pointer-events:none;
  transition:opacity .18s ease, transform .18s ease;
  z-index:4;
}
.macro-bar-row.has-tip:hover .macro-tip{
  opacity:1;
  transform:translateY(0);
}
.macro-bar-top{
  display:flex;
  justify-content:space-between;
  font-size:12px;
  font-weight:700;
  margin-bottom:5px;
}
.macro-emoji{
  margin-right:5px;
  font-size:14px;
}
.macro-bar-top .val{
  font-variant-numeric:tabular-nums;
  color:var(--gray);
  font-weight:700;
}
.macro-bar-track{
  height:7px;
  background:var(--track);
  border-radius:99px;
  overflow:hidden;
}
.macro-bar-fill{
  height:100%;
  border-radius:99px;
  transition:width .4s ease;
}
.bottom-row{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
}
.added-pill{
  background:linear-gradient(135deg, rgba(16,185,129,0.18), rgba(52,211,153,0.10));
  border:1px solid rgba(16,185,129,0.40);
  border-radius:999px;
  padding:10px 16px;
  font-size:12.5px;
  font-weight:700;
  color:#D1FAE5;
  box-shadow:0 0 0 1px rgba(16,185,129,0.08);
}

.added-pill-btn{
  cursor:pointer;
  transition:border-color .16s ease, color .16s ease, background .16s ease, box-shadow .16s ease;
}

.added-pill-btn:hover{
  border-color:rgba(16,185,129,0.65);
  color:#ffffff;
  background:linear-gradient(135deg, rgba(16,185,129,0.26), rgba(52,211,153,0.16));
  box-shadow:0 0 14px rgba(16,185,129,0.18);
}

.added-preview{
  margin-top:10px;
  display:flex;
  gap:8px;
  flex-wrap:nowrap;
  min-height:28px;
  overflow-x:auto;
  overflow-y:hidden;
  padding-bottom:4px;
  scroll-snap-type:x proximity;
}

.added-preview-item{
  background:rgba(255,255,255,0.06);
  border:1px solid rgba(255,255,255,0.1);
  border-radius:999px;
  padding:6px 10px;
  font-size:11.5px;
  font-weight:700;
  color:#D9F5E8;
  white-space:nowrap;
  flex:0 0 auto;
  scroll-snap-align:start;
}

.added-preview-empty{
  font-size:11.5px;
  font-weight:600;
  color:var(--gray);
}

.motivation-quote{
  margin-top:12px;
  padding:10px 12px;
  border-radius:12px;
  border:1px solid rgba(16,185,129,0.25);
  background:linear-gradient(135deg, rgba(16,185,129,0.1), rgba(52,211,153,0.05));
  font-size:12.5px;
  font-weight:700;
  line-height:1.45;
  color:#d7ffe9;
  text-align:center;
}
.fab-add{
  width:54px;
  height:54px;
  border-radius:50%;
  background:var(--blue);
  color:#FFFFFF;
  border:none;
  font-size:30px;
  font-weight:700;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-shrink:0;
  transition:background .15s ease, transform .12s ease;
}
.fab-add:hover{background:#38BDF8; transform:scale(1.05);}
.footnote{
  font-size:10.5px;
  font-weight:600;
  color:var(--gray);
  margin-top:16px;
  line-height:1.4;
  text-align:center;
}
footer.credit{
  text-align:center;
  color:var(--gray);
  font-weight:600;
  font-size:12px;
  margin-top:40px;
}
@media (max-width:760px){
  .field-row{grid-template-columns:1fr;}
  .params-grid{grid-template-columns:1fr;}
  .param-item--height-align{margin-top:0;}
  .goal-ios-picker{grid-template-columns:1fr;}
  .macro-row{grid-template-columns:1fr;}
  .week-strip{grid-template-columns:repeat(4, 1fr);}
  .diary-column{inset:0; border-radius:0; padding:18px 14px 28px;}
}

/* ===== PREMIUM AI WEBSITE ===== */

.premium-ai{
  background:var(--emerald-bg);
  color:var(--emerald-text);
  font-family:var(--font-body);
  overflow:hidden;
  position:relative;
}

/* Background & Particles */
.ai-background{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:0;
  overflow:hidden;
  pointer-events:none;
}

.particle{
  position:absolute;
  border-radius:50%;
  background:radial-gradient(circle at 30% 30%, rgba(16,185,129,0.15), transparent 70%);
  filter:blur(40px);
  opacity:0.6;
}

.gradient-orb{
  position:absolute;
  border-radius:50%;
  filter:blur(80px);
  opacity:0.3;
}

.orb-1{
  width:400px;
  height:400px;
  background:radial-gradient(circle, rgba(16,185,129,0.4), transparent 70%);
  top:-100px;
  left:-100px;
}

.orb-2{
  width:350px;
  height:350px;
  background:radial-gradient(circle, rgba(52,211,153,0.3), transparent 70%);
  top:50%;
  right:-50px;
}

.orb-3{
  width:300px;
  height:300px;
  background:radial-gradient(circle, rgba(110,231,183,0.25), transparent 70%);
  bottom:-50px;
  left:50%;
}

/* Navigation */
.ai-nav{
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index:100;
  backdrop-filter:blur(20px);
  background:rgba(15,17,21,0.7);
  border-bottom:1px solid var(--emerald-border);
  padding:16px 0;
}

.ai-nav-content{
  max-width:1200px;
  margin:0 auto;
  padding:0 32px;
  display:flex;
  align-items:center;
  justify-content:space-between;
}

.ai-logo{
  display:flex;
  align-items:center;
  gap:10px;
  font-size:20px;
  font-weight:700;
  letter-spacing:-0.5px;
}

.logo-icon{
  font-size:24px;
}

.logo-text{
  background:linear-gradient(135deg, var(--emerald-primary), var(--emerald-secondary));
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  background-clip:text;
}

.ai-nav-links{
  display:flex;
  align-items:center;
  gap:32px;
}

.nav-link{
  color:var(--emerald-text-secondary);
  text-decoration:none;
  font-size:14px;
  font-weight:500;
  transition:color .2s ease;
}

.nav-link:hover{
  color:var(--emerald-primary);
}

/* Buttons */
.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  padding:10px 20px;
  border-radius:12px;
  border:none;
  font-size:14px;
  font-weight:600;
  cursor:pointer;
  transition:all .2s ease;
  text-decoration:none;
  white-space:nowrap;
  position:relative;
  overflow:hidden;
}

.btn-primary{
  background:linear-gradient(135deg, var(--emerald-primary), var(--emerald-secondary));
  color:var(--emerald-bg);
  box-shadow:0 0 20px rgba(16,185,129,0.3);
}

.btn-primary:hover{
  box-shadow:0 0 40px rgba(16,185,129,0.5), 0 0 60px rgba(16,185,129,0.3);
  transform:translateY(-2px);
}

.btn-secondary{
  background:rgba(255,255,255,0.08);
  color:var(--emerald-text);
  border:1px solid var(--emerald-border);
}

.btn-secondary:hover{
  background:rgba(16,185,129,0.1);
  border-color:var(--emerald-primary);
  color:var(--emerald-primary);
}

.btn-large{
  padding:14px 32px;
  font-size:16px;
}

.btn-full{
  width:100%;
}

.btn-arrow{
  transition:transform .2s ease;
}

.btn:hover .btn-arrow{
  transform:translateX(4px);
}

/* Glass Cards */
.glass-card{
  background:rgba(24,28,34,0.4);
  backdrop-filter:blur(10px);
  border:1px solid var(--emerald-border);
  border-radius:16px;
  padding:24px;
  transition:all .3s ease;
}

.glass-card:hover{
  background:rgba(24,28,34,0.6);
  border-color:rgba(16,185,129,0.3);
  box-shadow:0 0 30px rgba(16,185,129,0.15);
}

.glass-large{
  min-height:300px;
  display:flex;
  flex-direction:column;
}

/* Hero Section */
.ai-hero{
  position:relative;
  z-index:10;
  padding:120px 32px 80px;
  max-width:1400px;
  margin:0 auto;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:60px;
  align-items:center;
}

.hero-content{
  animation:fade-in-up .6s ease .1s both;
}

@keyframes fade-in-up{
  from{
    opacity:0;
    transform:translateY(30px);
  }
  to{
    opacity:1;
    transform:translateY(0);
  }
}

.hero-badge{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:8px 16px;
  background:rgba(16,185,129,0.1);
  border:1px solid rgba(16,185,129,0.3);
  border-radius:20px;
  font-size:13px;
  font-weight:600;
  color:var(--emerald-primary);
  margin-bottom:24px;
}

.badge-dot{
  width:6px;
  height:6px;
  background:var(--emerald-primary);
  border-radius:50%;
  animation:pulse 2s ease-in-out infinite;
}

@keyframes pulse{
  0%, 100%{opacity:1;}
  50%{opacity:0.5;}
}

.hero-title{
  font-size:56px;
  line-height:1.2;
  font-weight:700;
  margin:0 0 24px;
  letter-spacing:-1px;
}

.gradient-text{
  background:linear-gradient(135deg, var(--emerald-primary), var(--emerald-secondary), var(--emerald-hover));
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  background-clip:text;
}

.hero-subtitle{
  font-size:16px;
  line-height:1.6;
  color:var(--emerald-text-secondary);
  margin:0 0 32px;
}

.hero-actions{
  display:flex;
  gap:16px;
  margin-bottom:48px;
}

.hero-stats{
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  gap:32px;
  padding-top:32px;
  border-top:1px solid var(--emerald-border);
}

.stat{
  text-align:left;
}

.stat-value{
  font-size:28px;
  font-weight:700;
  color:var(--emerald-primary);
  margin-bottom:4px;
}

.stat-label{
  font-size:13px;
  color:var(--emerald-text-secondary);
}

.hero-visual{
  animation:fade-in-up .6s ease .2s both;
}

.card-header{
  display:flex;
  gap:8px;
  margin-bottom:20px;
}

.dot{
  width:12px;
  height:12px;
  border-radius:50%;
}

.dot.red{
  background:#FF6B6B;
}

.dot.yellow{
  background:#FFD93D;
}

.dot.green{
  background:var(--emerald-primary);
}

.card-code{
  font-family:var(--font-mono);
  font-size:13px;
  line-height:1.8;
}

.code-line{
  color:var(--emerald-text-secondary);
}

.code-keyword{
  color:var(--emerald-primary);
  font-weight:600;
}

.code-method{
  color:var(--emerald-secondary);
}

/* Features Section */
.ai-features{
  position:relative;
  z-index:10;
  padding:80px 32px;
  max-width:1400px;
  margin:0 auto;
}

.section-header{
  text-align:center;
  margin-bottom:60px;
}

.section-header h2{
  font-size:44px;
  font-weight:700;
  margin:0 0 16px;
  letter-spacing:-1px;
}

.section-header p{
  font-size:16px;
  color:var(--emerald-text-secondary);
  margin:0;
}

.features-grid{
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  gap:24px;
}

.feature-card{
  position:relative;
  transition:all .3s ease;
}

.feature-card:hover{
  transform:translateY(-4px);
}

.feature-icon{
  font-size:40px;
  margin-bottom:16px;
}

.feature-card h3{
  font-size:18px;
  font-weight:600;
  margin:0 0 12px;
}

.feature-card p{
  font-size:14px;
  color:var(--emerald-text-secondary);
  margin:0 0 16px;
  line-height:1.6;
}

.feature-arrow{
  font-size:20px;
  color:var(--emerald-primary);
  transition:transform .2s ease;
}

.feature-card:hover .feature-arrow{
  transform:translateX(4px);
}

/* Pricing Section */
.ai-pricing{
  position:relative;
  z-index:10;
  padding:80px 32px;
  max-width:1400px;
  margin:0 auto;
}

.pricing-grid{
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  gap:32px;
}

.pricing-card{
  position:relative;
  display:flex;
  flex-direction:column;
  padding:32px;
}

.pricing-card.active{
  transform:scale(1.05);
  background:rgba(16,185,129,0.05);
  border-color:var(--emerald-primary);
}

.pricing-badge{
  display:inline-block;
  padding:6px 12px;
  background:rgba(16,185,129,0.1);
  border-radius:8px;
  font-size:12px;
  font-weight:600;
  color:var(--emerald-primary);
  margin-bottom:16px;
  width:fit-content;
}

.pricing-badge.popular{
  background:linear-gradient(135deg, rgba(16,185,129,0.2), rgba(52,211,153,0.1));
}

.pricing-name{
  font-size:20px;
  font-weight:700;
  margin-bottom:16px;
}

.pricing-price{
  display:flex;
  align-items:baseline;
  gap:8px;
  margin-bottom:32px;
}

.currency{
  font-size:14px;
  color:var(--emerald-text-secondary);
}

.amount{
  font-size:48px;
  font-weight:700;
}

.period{
  font-size:14px;
  color:var(--emerald-text-secondary);
}

.pricing-features{
  list-style:none;
  padding:0;
  margin:0 0 32px;
  flex:1;
}

.pricing-features li{
  padding:12px 0;
  border-bottom:1px solid var(--emerald-border);
  font-size:14px;
}

.pricing-features li:last-child{
  border-bottom:none;
}

/* CTA Section */
.ai-cta{
  position:relative;
  z-index:10;
  padding:80px 32px;
  max-width:1400px;
  margin:0 auto;
  text-align:center;
}

.cta-content h2{
  font-size:44px;
  font-weight:700;
  margin:0 0 16px;
  letter-spacing:-1px;
}

.cta-content p{
  font-size:16px;
  color:var(--emerald-text-secondary);
  margin:0 0 32px;
}

/* Footer */
.ai-footer{
  position:relative;
  z-index:10;
  border-top:1px solid var(--emerald-border);
  background:rgba(15,17,21,0.5);
  padding:60px 32px 32px;
}

.footer-content{
  max-width:1400px;
  margin:0 auto 40px;
  display:grid;
  grid-template-columns:repeat(4, 1fr);
  gap:40px;
}

.footer-section h3,
.footer-section h4{
  font-size:14px;
  font-weight:700;
  margin:0 0 16px;
}

.footer-section p{
  font-size:14px;
  color:var(--emerald-text-secondary);
  margin:0;
}

.footer-section ul{
  list-style:none;
  padding:0;
  margin:0;
}

.footer-section a{
  color:var(--emerald-text-secondary);
  text-decoration:none;
  font-size:14px;
  transition:color .2s ease;
  display:block;
  padding:8px 0;
}

.footer-section a:hover{
  color:var(--emerald-primary);
}

.footer-bottom{
  max-width:1400px;
  margin:0 auto;
  padding-top:32px;
  border-top:1px solid var(--emerald-border);
  display:flex;
  align-items:center;
  justify-content:space-between;
  font-size:14px;
  color:var(--emerald-text-secondary);
}

.social-links{
  display:flex;
  gap:24px;
}

.social-links a{
  color:var(--emerald-text-secondary);
  text-decoration:none;
  transition:color .2s ease;
}

.social-links a:hover{
  color:var(--emerald-primary);
}

/* Responsive */
@media (max-width:1024px){
  .ai-hero{
    grid-template-columns:1fr;
    gap:40px;
    padding:80px 32px;
  }

  .hero-title{
    font-size:44px;
  }

  .features-grid,
  .pricing-grid{
    grid-template-columns:repeat(2, 1fr);
  }

  .pricing-card.active{
    transform:scale(1);
  }

  .footer-content{
    grid-template-columns:repeat(2, 1fr);
  }
}

@media (max-width:640px){
  .ai-nav-links{
    gap:16px;
  }

  .ai-hero{
    padding:60px 20px;
  }

  .hero-title{
    font-size:32px;
  }

  .hero-subtitle{
    font-size:14px;
  }

  .hero-actions{
    flex-direction:column;
  }

  .hero-stats{
    grid-template-columns:1fr;
    gap:24px;
  }

  .features-grid,
  .pricing-grid{
    grid-template-columns:1fr;
  }

  .section-header h2{
    font-size:32px;
  }

  .ai-nav-content{
    padding:0 16px;
  }

  .ai-nav-links{
    display:none;
  }

  .footer-content{
    grid-template-columns:1fr;
  }

  .footer-bottom{
    flex-direction:column;
    gap:16px;
  }
}
