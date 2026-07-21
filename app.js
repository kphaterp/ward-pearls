/* ============================================================
   WARD PEARLS — app logic (shared across all pages)
   Reads <body data-page="..."> and renders accordingly.
   Content lives in data.js (CATEGORIES + PAGES).
   ============================================================ */
(function () {
  const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const catById = id => CATEGORIES.find(c => c.id === id);
  const pageById = id => PAGES.find(p => p.id === id);

  document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page || "home";
    buildTopNav(page);
    if (page === "home") buildHome();
    else buildContentPage(page);
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
    // if arriving with a #hash, open that card
    if (location.hash) openHash();
    window.addEventListener("hashchange", openHash);
    // copy buttons embedded inside card bodies (e.g. Documentation blocks)
    document.addEventListener("click", e => {
      const btn = e.target.closest(".copybtn[data-copy-pre]");
      if (!btn) return;
      const wrap = btn.closest(".dp-actions");
      const pre = wrap && wrap.nextElementSibling;
      if (pre && pre.tagName === "PRE") {
        navigator.clipboard.writeText(pre.textContent).then(() => {
          btn.textContent = "Copied ✓"; btn.classList.add("done");
          setTimeout(() => { btn.textContent = "Copy note"; btn.classList.remove("done"); }, 1600);
        });
      }
    });
  });

  function buildTopNav(active) {
    const bar = document.getElementById("topbar");
    if (!bar) return;
    let html = `<a class="brand" href="index.html">Kiran P, MD</a>`;
    html += `<a class="navlink${active === "home" ? " active" : ""}" href="index.html">Home</a>`;
    PAGES.forEach(p => {
      html += `<a class="navlink${active === p.id ? " active" : ""}" href="${p.id}.html">${p.short || p.title}</a>`;
    });
    bar.innerHTML = html;
  }

  /* ---------------- HOME ---------------- */
  function buildHome() {
    const main = document.getElementById("main");
    // nav cards
    let cards = `<div class="homegrid">`;
    PAGES.forEach(p => {
      const n = p.cats.reduce((a, id) => a + (catById(id) ? catById(id).topics.length : 0), 0);
      cards += `<a class="homecard" href="${p.id}.html">
        <span class="ico">${p.ico}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <span class="cnt">${n} ${n === 1 ? "topic" : "topics"}</span>
      </a>`;
    });
    cards += `</div><div id="results"></div>`;
    main.innerHTML = cards;

    // global search across all topics
    const search = document.getElementById("search");
    const grid = main.querySelector(".homegrid");
    const results = document.getElementById("results");
    search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();
      if (!q) { grid.style.display = ""; results.innerHTML = ""; return; }
      grid.style.display = "none";
      const hits = [];
      PAGES.forEach(p => p.cats.forEach(cid => {
        const c = catById(cid); if (!c) return;
        c.topics.forEach(t => {
          const hay = (t.t + " " + (t.body || "") + " " + (t.copy || "")).toLowerCase();
          if (hay.includes(q)) hits.push({ p, t });
        });
      }));
      if (!hits.length) { results.innerHTML = `<p class="lead" style="text-align:center">No topics match "${escapeHtml(search.value)}".</p>`; return; }
      results.innerHTML = hits.slice(0, 40).map(h =>
        `<a class="ritem" href="${h.p.id}.html#${slug(h.t.t)}"><span class="where">${h.p.title}</span><br><b>${h.t.t}</b></a>`
      ).join("");
    });
  }

  /* ---------------- CONTENT PAGE ---------------- */
  function buildContentPage(pageId) {
    const p = pageById(pageId);
    const main = document.getElementById("main");
    if (!p) { main.innerHTML = "<p>Page not found.</p>"; return; }
    const h1 = document.getElementById("pageTitle");
    if (h1) h1.textContent = p.title;
    const sub = document.getElementById("pageDesc");
    if (sub) sub.textContent = p.desc;

    p.cats.forEach(cid => {
      const cat = catById(cid); if (!cat) return;
      const sec = document.createElement("section");
      sec.id = cat.id;
      sec.innerHTML = `<div class="sec-head"><span class="ico">${cat.ico}</span><h2>${cat.name}</h2><span class="count">${cat.topics.length}</span></div>` +
        (cat.desc ? `<p class="sec-desc">${cat.desc}</p>` : "");
      const grid = document.createElement("div");
      grid.className = "grid";
      cat.topics.forEach(t => grid.appendChild(makeCard(t)));
      sec.appendChild(grid);
      main.appendChild(sec);
    });

    const noRes = document.createElement("div");
    noRes.className = "noresults";
    noRes.textContent = "No topics match your search.";
    main.appendChild(noRes);

    const search = document.getElementById("search");
    if (search) search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();
      let any = false;
      main.querySelectorAll("section").forEach(sec => {
        let sv = false;
        sec.querySelectorAll("details.card").forEach(card => {
          const m = !q || card.textContent.toLowerCase().includes(q);
          card.style.display = m ? "" : "none";
          if (m) { sv = true; any = true; }
          if (q && m) card.open = false;
        });
        sec.style.display = sv ? "" : "none";
      });
      noRes.style.display = any ? "none" : "block";
    });
  }

  function makeCard(t) {
    const card = document.createElement("details");
    card.className = "card";
    card.id = slug(t.t);
    if (t.copy) {
      // dot-phrase style card with copy button
      card.innerHTML = `<summary><span>${t.t}</span><span class="chev"></span></summary>
        <div class="card-body">
          ${t.note ? `<p class="lead">${t.note}</p>` : ""}
          <div class="dp-actions"><button class="copybtn" type="button">Copy</button></div>
          <pre class="dp">${escapeHtml(t.copy)}</pre>
        </div>`;
      card.querySelector(".copybtn").addEventListener("click", e => {
        navigator.clipboard.writeText(t.copy).then(() => {
          const b = e.target; b.textContent = "Copied ✓"; b.classList.add("done");
          setTimeout(() => { b.textContent = "Copy"; b.classList.remove("done"); }, 1600);
        });
      });
    } else {
      const filled = t.body && t.body.trim().length;
      card.innerHTML = `<summary><span>${t.t}${filled ? "" : '<span class="tag">to fill in</span>'}</span><span class="chev"></span></summary>
        <div class="card-body">${filled ? t.body : '<p class="lead">✍️ Empty slot — add your notes in data.js.</p>'}</div>`;
    }
    return card;
  }

  function openHash() {
    const el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (el && el.tagName === "DETAILS") { el.open = true; setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 60); }
  }

  function escapeHtml(s) {
    return s.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
  }
})();
