
// Build comparison table dynamically from window.DUSSAT_PRODUCTS
(function(){
  const data = window.DUSSAT_PRODUCTS;
  if (!data) return;
  const table = document.querySelector('table.compare tbody');
  if (!table) return;

  // Gather union of all spec keys
  const specKeys = Array.from(new Set(data.flatMap(p => Object.keys(p.specs))));

  // Header cells (already in HTML for names); fill subtitle row
  const headRow = document.querySelector('tr.names');
  const subRow = document.querySelector('tr.subs');
  data.forEach(p => {
    const th = document.createElement('th');
    th.innerHTML = `<a href="/products/${p.slug}.html" class="btn">${p.name}</a>`;
    headRow.appendChild(th);

    const td = document.createElement('td');
    td.className = "muted";
    td.textContent = p.tagline;
    subRow.appendChild(td);
  });

  // Build spec rows
  for (const key of specKeys) {
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    th.textContent = key;
    tr.appendChild(th);

    for (const p of data) {
      const td = document.createElement('td');
      td.textContent = p.specs[key] || "-";
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
})();
