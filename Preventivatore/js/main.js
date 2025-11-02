document.addEventListener("DOMContentLoaded", () => {
  // ===== Helpers =====
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  // Cache DOM (dopo che il DOM è pronto)
  const chat       = $("#chatLog");
  const ta         = $("#promptInput");
  const send       = $("#sendBtn");
  const hamburger  = $("#hamburger");
  const overlay    = $("#overlay");
  const composer   = $(".composer");
  const sideButtons = $$(".sb-btn");

  // Stato lock/reset
  let isLocked = false;      // 🔒 blocco attivo finché non fai reset
  let lockNotified = false;  // evita multipli "Se non resetti..."

  // ===== Mobile sidebar toggle =====
  function toggleSidebar(open) {
    const shouldOpen =
      open ?? !document.body.classList.contains("sidebar-open");
    document.body.classList.toggle("sidebar-open", shouldOpen);
    const hb = $("#hamburger");
    if (hb) hb.setAttribute("aria-expanded", String(shouldOpen));
  }
  if (hamburger) hamburger.addEventListener("click", () => toggleSidebar());
  if (overlay) overlay.addEventListener("click", () => toggleSidebar(false));

  // ===== Textarea autogrow =====
  function grow(el) {
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 180) + "px";
  }
  if (ta) ta.addEventListener("input", () => grow(ta));

  // ===== Chat rendering =====
  function addMsg(role, html, { typing = false } = {}) {
    if (!chat) return null;
    const wrap = document.createElement("div");
    wrap.className = `msg ${role}${typing ? " typing" : ""}`;

    const roleEl = document.createElement("div");
    roleEl.className = "role";
    roleEl.textContent = role === "assistant" ? "SoleBot" : "Tu";

    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.innerHTML = typing
      ? `<span class="dot"></span><span class="dot"></span><span class="dot"></span>`
      : html;

    if (role === "assistant") wrap.append(roleEl, bubble);
    else wrap.append(bubble);

    chat.appendChild(wrap);
    chat.scrollTop = chat.scrollHeight;
    return wrap;
  }

  function replaceTyping(node, html) {
    if (!node) return;
    node.classList.remove("typing");
    const b = node.querySelector(".bubble");
    if (b) b.innerHTML = html;
    if (chat) chat.scrollTop = chat.scrollHeight;
  }

  // ===== Banner/Lock management =====
  function renderLockBanner() {
    const banner = document.createElement("div");
    banner.className = "lock-banner";
    banner.innerHTML = `
      <span class="note">❌ Se non resetti, non posso andare avanti.</span>
      <button class="reset-btn">🔄 Reset preventivo</button>
    `;

    // Inserisci prima del composer, oppure in fondo alla chat se composer manca
    if (composer && composer.parentElement) {
      composer.parentElement.insertBefore(banner, composer);
    } else if (chat) {
      chat.appendChild(banner);
    }

    const btn = $(".reset-btn", banner);
    if (btn) btn.addEventListener("click", resetChat);
  }

  function setLocked(lock) {
    isLocked = lock;
    lockNotified = false;

    sideButtons.forEach((b) => (b.disabled = lock));
    if (send) send.disabled = lock;
    if (ta) ta.disabled = lock;

    const old = $(".lock-banner");
    if (old) old.remove();
    if (lock) renderLockBanner();
  }

  function checkLock() {
    if (!isLocked) return false;
    if (!lockNotified) {
      addMsg("assistant", "❌ Se non resetti, non posso andare avanti.");
      lockNotified = true;
    }
    return true;
  }

  // ===== Reset =====
  function resetChat() {
    if (chat) chat.innerHTML = "";
    setLocked(false);
    if (ta) {
      ta.value = "";
      grow(ta);
      ta.focus();
    }
    addMsg("assistant", "✅ Chat azzerata. Puoi ripartire con un nuovo preventivo.");
  }

  // ===== Demo: form preventivo =====
  function renderQuoteForm() {
    if (checkLock()) return;

    const intro = addMsg("assistant", "", { typing: true });
    setTimeout(() => {
      replaceTyping(
        intro,
        `Ok! Compila i dati per il calcolo:<br>
         <div class="quote-form">
           <div class="row">
             <input id="weight" placeholder="Peso (kg)" inputmode="decimal" />
             <input id="len" placeholder="Lunghezza (cm)" inputmode="decimal" />
             <input id="wid" placeholder="Larghezza (cm)" inputmode="decimal" />
             <input id="hei" placeholder="Altezza (cm)" inputmode="decimal" />
           </div>
           <button id="calcBtn">Calcola</button>
         </div>`
      );

      const calcBtn = $("#calcBtn");
      if (calcBtn) {
        calcBtn.addEventListener("click", () => {
          const w = parseFloat($("#weight")?.value?.replace(",", ".") || "0") || 0;
          const L = parseFloat($("#len")?.value?.replace(",", ".") || "0") || 0;
          const W = parseFloat($("#wid")?.value?.replace(",", ".") || "0") || 0;
          const H = parseFloat($("#hei")?.value?.replace(",", ".") || "0") || 0;

          const vol = (L * W * H) / 5000; // divisore demo
          const kg = Math.max(w, vol);
          const price = 10 + Math.max(0, kg - 1) * 1.2;

          addMsg(
            "assistant",
            `Preventivo:<br>
             • Peso reale: ${w.toFixed(2)} kg<br>
             • Peso volumetrico: ${vol.toFixed(2)} kg<br>
             • Peso tassabile: ${kg.toFixed(2)} kg<br>
             ➡️ Totale stimato: € ${price.toFixed(2)}`
          );

          // ✅ Blocca SOLO dopo il calcolo
          setLocked(true);
        });
      }
    }, 300);
  }

  // ===== Prompt send =====
  function sendPrompt(text) {
    if (!text || !text.trim()) return;
    if (checkLock()) return; // bloccato
    addMsg("user", text.trim());
    const t = addMsg("assistant", "", { typing: true });
    setTimeout(() => replaceTyping(t, "Sto elaborando..."), 500);
  }

  // Eventi input/send
  if (send) {
    send.addEventListener("click", () => {
      sendPrompt(ta?.value || "");
      if (ta) {
        ta.value = "";
        grow(ta);
        ta.focus();
      }
    });
  }
  if (ta) {
    ta.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        send?.click();
      }
    });
  }

  // Sidebar → apre il form preventivo
  sideButtons.forEach((b) => {
    b.addEventListener("click", () => {
      toggleSidebar(false);
      renderQuoteForm();
    });
  });

  // focus iniziale
  ta?.focus();
});