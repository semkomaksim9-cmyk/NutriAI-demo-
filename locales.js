/* ============================================================
   NutriAI — Premium Paywall
   Scoped with the "pw-" prefix so nothing here can collide
   with existing app styles.
   ============================================================ */

.pw-root * { box-sizing: border-box; }

.pw-backdrop {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: rgba(5, 5, 5, 0.72);
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  animation: pw-fade-in 0.35s ease forwards;
  font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
}

@keyframes pw-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes pw-fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

.pw-backdrop.pw-closing {
  animation: pw-fade-out 0.25s ease forwards;
}

/* ---------- Sheet / Modal container ---------- */

.pw-sheet {
  position: relative;
  width: 100%;
  max-width: 650px;
  max-height: 94vh;
  overflow-y: auto;
  background:
    radial-gradient(120% 90% at 50% -10%, rgba(0, 201, 141, 0.16) 0%, rgba(0, 201, 141, 0) 55%),
    linear-gradient(180deg, #121212 0%, #0B0B0B 55%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px 28px 0 0;
  padding: 14px 22px 28px;
  box-shadow:
    0 -20px 60px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(255, 255, 255, 0.02) inset;
  animation: pw-sheet-up 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  scrollbar-width: thin;
}

.pw-sheet.pw-closing {
  animation: pw-sheet-down 0.28s cubic-bezier(0.4, 0, 1, 1) forwards;
}

@keyframes pw-sheet-up {
  from { transform: translateY(100%); opacity: 0.4; }
  to { transform: translateY(0); opacity: 1; }
}
@keyframes pw-sheet-down {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(60px); opacity: 0; }
}

.pw-sheet::-webkit-scrollbar { width: 6px; }
.pw-sheet::-webkit-scrollbar-thumb { background: rgba(0, 201, 141, 0.25); border-radius: 10px; }

.pw-grabber {
  width: 40px;
  height: 4px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.18);
  margin: 8px auto 6px;
}

.pw-close-x {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
}
.pw-close-x:hover { background: rgba(255, 255, 255, 0.09); color: #fff; transform: scale(1.06); }
.pw-close-x:active { transform: scale(0.94); }

/* ---------- Desktop: centered modal ---------- */

@media (min-width: 780px) {
  .pw-backdrop { align-items: center; padding: 32px; }
  .pw-sheet {
    border-radius: 30px;
    padding: 20px 40px 36px;
    max-height: 90vh;
  }
  .pw-grabber { display: none; }
}

/* ---------- Header ---------- */

.pw-header {
  text-align: center;
  padding: 22px 4px 6px;
  animation: pw-item-in 0.5s ease both;
  animation-delay: 0.05s;
}

.pw-crown-wrap {
  width: 74px;
  height: 74px;
  margin: 0 auto 18px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(160deg, rgba(0, 201, 141, 0.22), rgba(0, 201, 141, 0.03));
  border: 1px solid rgba(0, 201, 141, 0.35);
  animation: pw-float 4.5s ease-in-out infinite;
}

.pw-crown-wrap::before {
  content: '';
  position: absolute;
  inset: -14px;
  border-radius: 30px;
  background: radial-gradient(circle, rgba(0, 201, 141, 0.35) 0%, rgba(0, 201, 141, 0) 70%);
  filter: blur(6px);
  animation: pw-glow-pulse 3s ease-in-out infinite;
  z-index: -1;
}

@keyframes pw-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-7px); }
}

@keyframes pw-glow-pulse {
  0%, 100% { opacity: 0.55; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.12); }
}

.pw-title {
  font-family: 'Space Grotesk', 'Manrope', sans-serif;
  font-size: 26px;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.02em;
  margin: 0 0 10px;
  line-height: 1.25;
}

.pw-subtitle {
  font-size: 14.5px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.55);
  max-width: 400px;
  margin: 0 auto 16px;
  font-weight: 500;
}

.pw-used-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 100px;
  font-size: 12.5px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.75);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  letter-spacing: 0.01em;
}
.pw-used-badge .pw-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: #00C98D;
  box-shadow: 0 0 8px rgba(0, 201, 141, 0.9);
}

/* ---------- Benefits ---------- */

.pw-benefits {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 22px 0 8px;
}

@media (max-width: 420px) {
  .pw-benefits { grid-template-columns: 1fr; }
}

.pw-benefit-card {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 13px 12px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.06);
  opacity: 0;
  animation: pw-item-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}

.pw-benefit-card:hover {
  transform: translateY(-2px);
  border-color: rgba(0, 201, 141, 0.35);
  background: rgba(0, 201, 141, 0.05);
}

.pw-benefit-icon {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 201, 141, 0.14);
  color: #00C98D;
}

.pw-benefit-text {
  font-size: 12.8px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.35;
}

@keyframes pw-item-in {
  from { opacity: 0; transform: translateY(10px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

/* ---------- Pricing ---------- */

.pw-pricing {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 26px 0 6px;
}

@media (max-width: 420px) {
  .pw-pricing { grid-template-columns: 1fr; }
}

.pw-plan-card {
  position: relative;
  border-radius: 20px;
  padding: 18px 16px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.03);
  border: 1.5px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.22s ease, background 0.22s ease, box-shadow 0.22s ease;
  opacity: 0;
  animation: pw-item-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.pw-plan-card:hover { transform: translateY(-3px); }

.pw-plan-card.pw-selected {
  border-color: rgba(0, 201, 141, 0.55);
  background: linear-gradient(165deg, rgba(0, 201, 141, 0.12), rgba(0, 201, 141, 0.02));
  box-shadow: 0 0 0 1px rgba(0, 201, 141, 0.25), 0 10px 34px rgba(0, 201, 141, 0.16);
}

.pw-plan-card.pw-yearly.pw-selected {
  animation: pw-item-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards, pw-border-glow 2.8s ease-in-out infinite;
}

@keyframes pw-border-glow {
  0%, 100% { box-shadow: 0 0 0 1px rgba(0, 201, 141, 0.25), 0 10px 34px rgba(0, 201, 141, 0.14); }
  50% { box-shadow: 0 0 0 1.5px rgba(0, 201, 141, 0.5), 0 10px 44px rgba(0, 201, 141, 0.3); }
}

.pw-best-value {
  position: absolute;
  top: -11px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(120deg, #00C98D, #00e3a0);
  color: #05130e;
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.02em;
  padding: 5px 12px;
  border-radius: 100px;
  white-space: nowrap;
  box-shadow: 0 4px 14px rgba(0, 201, 141, 0.45);
}

.pw-plan-name {
  font-size: 12.5px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.55);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 10px;
}

.pw-plan-price-row {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 4px;
}

.pw-plan-price {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 27px;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.02em;
  transition: all 0.25s ease;
}

.pw-plan-period {
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.45);
  font-weight: 600;
}

.pw-plan-sub {
  font-size: 11.5px;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 500;
}

.pw-save-pill {
  display: inline-block;
  margin-top: 9px;
  padding: 3px 9px;
  border-radius: 100px;
  font-size: 10.5px;
  font-weight: 700;
  color: #00C98D;
  background: rgba(0, 201, 141, 0.14);
}

.pw-radio {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s ease, background 0.2s ease;
}
.pw-plan-card.pw-selected .pw-radio {
  border-color: #00C98D;
  background: #00C98D;
}
.pw-radio-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #0B0B0B;
  opacity: 0;
  transform: scale(0.4);
  transition: all 0.2s ease;
}
.pw-plan-card.pw-selected .pw-radio-dot { opacity: 1; transform: scale(1); }

/* ---------- CTA ---------- */

.pw-cta {
  width: 100%;
  height: 58px;
  border: none;
  border-radius: 18px;
  margin-top: 22px;
  background: linear-gradient(135deg, #00C98D, #00b07d);
  color: #05130e;
  font-size: 16.5px;
  font-weight: 800;
  letter-spacing: -0.01em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 10px 32px rgba(0, 201, 141, 0.35), 0 0 0 1px rgba(0, 201, 141, 0.2) inset;
  transition: transform 0.16s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, filter 0.2s ease;
  animation: pw-cta-glow 3.2s ease-in-out infinite, pw-item-in 0.55s ease both;
  animation-delay: 0s, 0.3s;
}

@keyframes pw-cta-glow {
  0%, 100% { box-shadow: 0 10px 32px rgba(0, 201, 141, 0.35), 0 0 0 1px rgba(0, 201, 141, 0.2) inset; }
  50% { box-shadow: 0 10px 44px rgba(0, 201, 141, 0.55), 0 0 0 1px rgba(0, 201, 141, 0.32) inset; }
}

.pw-cta:hover { transform: translateY(-2px); filter: brightness(1.06); }
.pw-cta:active { transform: translateY(0) scale(0.98); }

.pw-cta.pw-loading { pointer-events: none; opacity: 0.85; }

.pw-spinner {
  width: 18px; height: 18px;
  border-radius: 50%;
  border: 2.5px solid rgba(5, 19, 14, 0.25);
  border-top-color: #05130e;
  animation: pw-spin 0.7s linear infinite;
}
@keyframes pw-spin { to { transform: rotate(360deg); } }

.pw-footer-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 18px;
  opacity: 0;
  animation: pw-item-in 0.5s ease forwards;
  animation-delay: 0.4s;
}

.pw-link-btn {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.55);
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease;
  padding: 4px;
}
.pw-link-btn:hover { color: #fff; }

.pw-legal-row {
  display: flex;
  gap: 16px;
}
.pw-legal-row button {
  background: none; border: none;
  font-size: 11.5px;
  color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: color 0.2s ease;
}
.pw-legal-row button:hover { color: rgba(255, 255, 255, 0.6); }

.pw-secure-note {
  text-align: center;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.32);
  margin-top: 14px;
  font-weight: 500;
}
