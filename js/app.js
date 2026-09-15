const yearEl = document.querySelector("[data-year]");
if (yearEl) yearEl.textContent = new Date().getFullYear();

fetch("/data/kpis.json")
  .then((r) => r.json())
  .then((k) => {
    const map = {
      deals: k.deals?.toLocaleString("fr-FR"),
      volume: k.volumeUsdTn + " T$",
      period: k.period,
      updated: k.updated,
    };
    document.querySelectorAll("[data-kpi]").forEach((el) => {
      const key = el.getAttribute("data-kpi");
      if (map[key]) el.textContent = map[key];
    });
  })
  .catch(() => {});
