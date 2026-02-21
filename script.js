// Little Berry Systems - minimal JS for nav + CTA prefill + form validation + Formspree submit UX
(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.getElementById("navLinks");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // CTA lane prefill
  document.querySelectorAll("[data-lane]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const val = btn.getAttribute("data-lane");
      const inquiry = document.getElementById("inquiryType");
      if (inquiry && val) {
        setTimeout(() => {
          inquiry.value = val;
          const nameEl = document.getElementById("name");
          (nameEl || inquiry).focus();
        }, 150);
      }
    });
  });

  // Form validation
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");
  const replyTo = document.getElementById("replyTo");

  const fields = {
    name: { el: document.getElementById("name"), err: "errName", required: true },
    company: { el: document.getElementById("company"), err: "errCompany", required: true },
    email: { el: document.getElementById("email"), err: "errEmail", required: true, type: "email" },
    phone: { el: document.getElementById("phone"), err: "errPhone", required: false, type: "phone" },

    inquiryType: { el: document.getElementById("inquiryType"), err: "errInquiryType", required: true },
    urgency: { el: document.getElementById("urgency"), err: "errUrgency", required: true },
    size: { el: document.getElementById("size"), err: "errSize", required: true },
    location: { el: document.getElementById("location"), err: "errLocation", required: true },
    contactPref: { el: document.getElementById("contactPref"), err: "errContactPref", required: true },

    message: { el: document.getElementById("message"), err: "errMessage", required: true },
    consent: { el: document.getElementById("consent"), err: "errConsent", required: true, type: "checkbox" }
  };

  function setError(id, msg) {
    const p = document.getElementById(id);
    if (p) p.textContent = msg || "";
  }

  function isEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).trim());
  }

  function isPhoneLoose(v) {
    if (!v) return true;
    return /^[0-9()+\-\s.]{7,}$/.test(String(v).trim());
  }

  function validateRequiredSelect(fieldKey, label) {
    const f = fields[fieldKey];
    const v = (f.el.value || "").trim();
    if (!v) {
      setError(f.err, `Please select ${label}.`);
      return false;
    }
    setError(f.err, "");
    return true;
  }

  function validate() {
    let ok = true;

    const name = fields.name.el.value.trim();
    if (!name) { setError(fields.name.err, "Please enter your name."); ok = false; }
    else setError(fields.name.err, "");

    const company = fields.company.el.value.trim();
    if (!company) { setError(fields.company.err, "Please enter your company name."); ok = false; }
    else setError(fields.company.err, "");

    const email = fields.email.el.value.trim();
    if (!email) { setError(fields.email.err, "Please enter your email."); ok = false; }
    else if (!isEmail(email)) { setError(fields.email.err, "Please enter a valid email address."); ok = false; }
    else setError(fields.email.err, "");

    if (replyTo) replyTo.value = email;

    const phone = fields.phone.el.value.trim();
    if (!isPhoneLoose(phone)) { setError(fields.phone.err, "Please enter a valid phone number (or leave blank)."); ok = false; }
    else setError(fields.phone.err, "");

    ok = validateRequiredSelect("inquiryType", "an inquiry type") && ok;
    ok = validateRequiredSelect("urgency", "how soon you need help") && ok;
    ok = validateRequiredSelect("size", "an approximate size") && ok;
    ok = validateRequiredSelect("location", "a location") && ok;
    ok = validateRequiredSelect("contactPref", "a preferred contact method") && ok;

    const message = fields.message.el.value.trim();
    if (!message) { setError(fields.message.err, "Please add a short message about what you need."); ok = false; }
    else if (message.length < 20) { setError(fields.message.err, "Please add a bit more detail (at least 20 characters)."); ok = false; }
    else setError(fields.message.err, "");

    const consent = fields.consent.el.checked;
    if (!consent) { setError(fields.consent.err, "Consent is required to submit."); ok = false; }
    else setError(fields.consent.err, "");

    return ok;
  }

  async function handleSubmit(e) {
    if (!form) return;
    e.preventDefault();
    if (statusEl) statusEl.textContent = "";

    if ((form.getAttribute("action") || "").includes("REPLACE_ME")) {
      if (statusEl) statusEl.textContent = "Form endpoint not configured yet. Replace the Formspree action URL in index.html.";
      return;
    }

    const ok = validate();
    if (!ok) {
      if (statusEl) statusEl.textContent = "Please fix the highlighted fields and try again.";
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    const oldText = btn ? btn.textContent : "";
    if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
    if (statusEl) statusEl.textContent = "Sending your inquiry…";

    try {
      const formData = new FormData(form);
      const res = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      });

      if (res.ok) {
        form.reset();
        if (statusEl) statusEl.textContent = "Success! Your inquiry was sent. We’ll follow up soon.";
      } else {
        if (statusEl) statusEl.textContent = "Something went wrong sending your inquiry. Please try again or email us directly.";
      }
    } catch (err) {
      if (statusEl) statusEl.textContent = "Network error. Please try again or email us directly.";
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = oldText || "Send Inquiry"; }
    }
  }

  if (form) form.addEventListener("submit", handleSubmit);
})();
