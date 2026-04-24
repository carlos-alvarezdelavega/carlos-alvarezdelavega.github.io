import { content } from "./content.js";

const app = document.querySelector("#app");
const storedMode = localStorage.getItem("theme-mode");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialMode = storedMode || (prefersDark ? "dark" : "light");

document.documentElement.dataset.mode = initialMode;

app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="${content.hero.name}">
      <span class="brand__name">${content.hero.name}</span>
      <span class="brand__role">UX Researcher</span>
    </a>
    <nav class="nav" aria-label="Primary navigation">
      ${content.nav
        .map((item) => `<a class="nav__link" href="${item.href}">${item.label}</a>`)
        .join("")}
    </nav>
    <button class="theme-toggle" type="button" aria-pressed="${initialMode === "dark"}">
      <span class="theme-toggle__mark" aria-hidden="true"></span>
      <span class="theme-toggle__text">${initialMode === "dark" ? "Light" : "Dark"}</span>
    </button>
  </header>

  <main id="top">
    <section class="hero section">
      <div class="shell hero__grid">
        <div class="hero__content">
          <p class="kicker">AI-enabled research workflows</p>
          <h1>${content.hero.name}</h1>
          <p class="hero__title">${content.hero.title}</p>
          <p class="hero__intro">${content.hero.intro}</p>
        </div>
        <aside class="hero__proof" aria-label="Selected organizations">
          <button class="proof-toggle" type="button" aria-expanded="false">
            <span>Selected work across</span>
            <span class="proof-toggle__icon" aria-hidden="true">+</span>
          </button>
          <div class="proof-panel">
            <p class="meta-label proof-label">Selected work across</p>
            <div class="logo-grid">
              ${content.hero.logos
                .map(
                  (logo) => `
                    <figure class="logo-tile">
                      <img
                        class="logo-tile__image logo-tile__image--${logo.slug}"
                        src="${logo.src}"
                        alt="${logo.alt}"
                        loading="eager"
                      />
                    </figure>
                  `
                )
                .join("")}
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="section section--tinted" id="work">
      <div class="shell">
        ${renderHeading("Work", "What I do", content.whatIDo.intro)}
        <div class="what-grid">
          ${content.whatIDo.points
            .map(
              (point, index) => `
                <article class="card what-card">
                  <p class="card__index">${String(index + 1).padStart(2, "0")}</p>
                  <p>${point}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" id="impact">
      <div class="shell">
        ${renderHeading(
          "Selected impact",
          "Shaping product direction with clearer research systems",
          content.impact.intro
        )}
        <div class="impact-list">
          ${content.impact.items
            .map(
              (item, index) => `
                <article class="impact-card card">
                  <div class="impact-card__summary">
                    <p class="meta-label">Impact ${String(index + 1).padStart(2, "0")}</p>
                    <h3>${item.title}</h3>
                    <p>${item.summary}</p>
                    <button class="detail-toggle" type="button" aria-expanded="false">
                      <span>View details</span>
                      <span class="detail-toggle__icon" aria-hidden="true">+</span>
                    </button>
                  </div>
                  <div class="impact-card__details" aria-hidden="true">
                    <div class="impact-card__details-inner">
                      ${item.detailSections.map(renderDetailSection).join("")}
                    </div>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section section--tinted" id="experiments">
      <div class="shell">
        ${renderHeading("Experiments", "Lightweight explorations in research tooling", content.experiments.intro)}
        <div class="experiment-grid">
          ${content.experiments.items
            .map(
              (item) => `
                <article class="card experiment-card">
                  <h3>${item.title}</h3>
                  <p>${item.summary}</p>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="text-links">
          ${content.experiments.links
            .map((link) =>
              link.href
                ? `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`
                : `<span>${link.label}</span>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" id="how-i-work">
      <div class="shell">
        ${renderHeading("How I work", "Research that helps decisions move forward", content.howIWork.intro)}
        <div class="principles">
          ${content.howIWork.principles
            .map(
              (principle) => `
                <article class="principle">
                  <h3>${principle.title}</h3>
                  <p>${principle.body}</p>
                  <p class="principle__practice">${principle.practice}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section section--tinted" id="about">
      <div class="shell about">
        ${renderHeading("About", "Making research useful in complex environments", "")}
        <div class="about__copy">
          ${content.about.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="shell footer__inner">
      <p>${content.hero.name}</p>
      <p>${content.hero.title}</p>
    </div>
  </footer>
`;

bindInteractions();

function renderHeading(kicker, title, body) {
  return `
    <div class="section-heading">
      <p class="kicker">${kicker}</p>
      <h2>${title}</h2>
      ${body ? `<p>${body}</p>` : ""}
    </div>
  `;
}

function renderDetailSection(section) {
  return `
    <section class="detail-section">
      <h4>${section.heading}</h4>
      ${(section.paragraphs || []).map((paragraph) => `<p>${paragraph}</p>`).join("")}
      ${
        section.bullets
          ? `<ul>${section.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>`
          : ""
      }
    </section>
  `;
}

function bindInteractions() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll(".detail-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".impact-card");
      const details = card.querySelector(".impact-card__details");
      const icon = button.querySelector(".detail-toggle__icon");
      const isOpen = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", String(!isOpen));
      button.querySelector("span").textContent = isOpen ? "View details" : "Hide details";
      icon.textContent = isOpen ? "+" : "-";
      card.dataset.open = String(!isOpen);
      details.setAttribute("aria-hidden", String(isOpen));
    });
  });

  const proofToggle = document.querySelector(".proof-toggle");
  if (proofToggle) {
    proofToggle.addEventListener("click", () => {
      const proof = proofToggle.closest(".hero__proof");
      const icon = proofToggle.querySelector(".proof-toggle__icon");
      const isOpen = proofToggle.getAttribute("aria-expanded") === "true";

      proofToggle.setAttribute("aria-expanded", String(!isOpen));
      proof.dataset.open = String(!isOpen);
      icon.textContent = isOpen ? "+" : "-";
    });
  }

  const toggle = document.querySelector(".theme-toggle");
  toggle.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.mode === "dark";
    const nextMode = isDark ? "light" : "dark";

    document.documentElement.dataset.mode = nextMode;
    localStorage.setItem("theme-mode", nextMode);
    toggle.setAttribute("aria-pressed", String(nextMode === "dark"));
    toggle.querySelector(".theme-toggle__text").textContent =
      nextMode === "dark" ? "Light" : "Dark";
  });
}
