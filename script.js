const deliveries = [
      { id: "ENT-2401", client: "Mercado Boa Mesa", region: "Sudeste", carrier: "RotaSul Express", due: "2026-05-02", delivered: "2026-05-02", status: "Entregue" },
      { id: "ENT-2402", client: "Farmacia Vida", region: "Nordeste", carrier: "NordCargo", due: "2026-05-03", delivered: "2026-05-08", status: "Entregue" },
      { id: "ENT-2403", client: "Tech Minas", region: "Sudeste", carrier: "TransBrasil", due: "2026-05-04", delivered: "2026-05-10", status: "Entregue" },
      { id: "ENT-2404", client: "Autopecas Central", region: "Centro-Oeste", carrier: "ViaNorte Log", due: "2026-05-05", delivered: "2026-05-07", status: "Entregue" },
      { id: "ENT-2405", client: "Moveis Aurora", region: "Sul", carrier: "RotaSul Express", due: "2026-05-06", delivered: "2026-05-06", status: "Entregue" },
      { id: "ENT-2406", client: "Hospital Santa Clara", region: "Norte", carrier: "Amazonas Frete", due: "2026-05-07", delivered: "2026-05-15", status: "Entregue" },
      { id: "ENT-2407", client: "SuperCompras Recife", region: "Nordeste", carrier: "NordCargo", due: "2026-05-09", delivered: "2026-05-12", status: "Entregue" },
      { id: "ENT-2408", client: "Eletro Forte", region: "Sudeste", carrier: "TransBrasil", due: "2026-05-10", delivered: "2026-05-11", status: "Entregue" },
      { id: "ENT-2409", client: "Agro Campo", region: "Centro-Oeste", carrier: "ViaNorte Log", due: "2026-05-11", delivered: "2026-05-18", status: "Entregue" },
      { id: "ENT-2410", client: "Casa Verde", region: "Sul", carrier: "RotaSul Express", due: "2026-05-12", delivered: "2026-05-14", status: "Entregue" },
      { id: "ENT-2411", client: "Moda Praia Natal", region: "Nordeste", carrier: "NordCargo", due: "2026-05-13", delivered: "2026-05-21", status: "Entregue" },
      { id: "ENT-2412", client: "Constrular Manaus", region: "Norte", carrier: "Amazonas Frete", due: "2026-05-15", delivered: "2026-05-17", status: "Entregue" },
      { id: "ENT-2413", client: "Clinica Alfa", region: "Sudeste", carrier: "EntregaMax", due: "2026-05-16", delivered: "2026-05-16", status: "Entregue" },
      { id: "ENT-2414", client: "Pet Shop Sul", region: "Sul", carrier: "RotaSul Express", due: "2026-05-17", delivered: "2026-05-22", status: "Entregue" },
      { id: "ENT-2415", client: "Bazar Fortaleza", region: "Nordeste", carrier: "EntregaMax", due: "2026-05-18", delivered: "2026-05-19", status: "Entregue" },
      { id: "ENT-2416", client: "Solar Energia", region: "Centro-Oeste", carrier: "ViaNorte Log", due: "2026-05-20", delivered: "2026-05-20", status: "Entregue" },
      { id: "ENT-2417", client: "Amazon Market", region: "Norte", carrier: "Amazonas Frete", due: "2026-05-21", delivered: "2026-05-29", status: "Entregue" },
      { id: "ENT-2418", client: "Papelaria Brasil", region: "Sudeste", carrier: "TransBrasil", due: "2026-05-22", delivered: "2026-05-24", status: "Entregue" },
      { id: "ENT-2419", client: "Atacado Bahia", region: "Nordeste", carrier: "NordCargo", due: "2026-05-23", delivered: "2026-05-28", status: "Entregue" },
      { id: "ENT-2420", client: "FrioLog Curitiba", region: "Sul", carrier: "EntregaMax", due: "2026-05-24", delivered: "2026-05-24", status: "Entregue" },
      { id: "ENT-2421", client: "Lab Centro", region: "Centro-Oeste", carrier: "TransBrasil", due: "2026-05-25", delivered: "2026-05-31", status: "Entregue" },
      { id: "ENT-2422", client: "Varanda Norte", region: "Norte", carrier: "Amazonas Frete", due: "2026-05-27", delivered: "2026-06-03", status: "Entregue" },
      { id: "ENT-2423", client: "Rede Escolar", region: "Sudeste", carrier: "EntregaMax", due: "2026-05-28", delivered: "2026-05-29", status: "Entregue" },
      { id: "ENT-2424", client: "Max Farma Salvador", region: "Nordeste", carrier: "NordCargo", due: "2026-05-30", delivered: "2026-06-07", status: "Entregue" },
      { id: "ENT-2425", client: "Oficina Premium", region: "Sul", carrier: "RotaSul Express", due: "2026-06-01", delivered: "2026-06-04", status: "Entregue" },
      { id: "ENT-2426", client: "Sementes Brasil", region: "Centro-Oeste", carrier: "ViaNorte Log", due: "2026-06-02", delivered: "2026-06-10", status: "Entregue" },
      { id: "ENT-2427", client: "Navega Norte", region: "Norte", carrier: "Amazonas Frete", due: "2026-06-03", delivered: "2026-06-04", status: "Entregue" },
      { id: "ENT-2428", client: "Express Moda", region: "Sudeste", carrier: "TransBrasil", due: "2026-06-04", delivered: "2026-06-04", status: "Entregue" },
      { id: "ENT-2429", client: "Hiper Nordeste", region: "Nordeste", carrier: "NordCargo", due: "2026-06-06", delivered: "2026-06-13", status: "Entregue" },
      { id: "ENT-2430", client: "Casa & Obra", region: "Sul", carrier: "EntregaMax", due: "2026-06-07", delivered: "2026-06-09", status: "Entregue" },
      { id: "ENT-2431", client: "Distribuidora Planalto", region: "Centro-Oeste", carrier: "ViaNorte Log", due: "2026-06-08", delivered: "2026-06-12", status: "Entregue" },
      { id: "ENT-2432", client: "Belem Foods", region: "Norte", carrier: "Amazonas Frete", due: "2026-06-09", delivered: "2026-06-17", status: "Em atraso" },
      { id: "ENT-2433", client: "Importadora Leste", region: "Sudeste", carrier: "TransBrasil", due: "2026-06-10", delivered: "2026-06-15", status: "Entregue" },
      { id: "ENT-2434", client: "Saude Recife", region: "Nordeste", carrier: "EntregaMax", due: "2026-06-11", delivered: "2026-06-11", status: "Entregue" },
      { id: "ENT-2435", client: "Bio Sul", region: "Sul", carrier: "RotaSul Express", due: "2026-06-12", delivered: "2026-06-18", status: "Em atraso" },
      { id: "ENT-2436", client: "Campo Forte", region: "Centro-Oeste", carrier: "ViaNorte Log", due: "2026-06-13", delivered: "2026-06-14", status: "Entregue" },
      { id: "ENT-2437", client: "Norte Med", region: "Norte", carrier: "Amazonas Frete", due: "2026-06-14", delivered: "2026-06-22", status: "Em atraso" },
      { id: "ENT-2438", client: "Loja Avenida", region: "Sudeste", carrier: "EntregaMax", due: "2026-06-15", delivered: "2026-06-16", status: "Entregue" },
      { id: "ENT-2439", client: "Ativa Alimentos", region: "Nordeste", carrier: "NordCargo", due: "2026-06-15", delivered: "2026-06-21", status: "Em atraso" },
      { id: "ENT-2440", client: "Central Sul", region: "Sul", carrier: "RotaSul Express", due: "2026-06-16", delivered: "2026-06-16", status: "Entregue" }
    ];

    const today = new Date("2026-06-16T00:00:00");
    const enriched = deliveries.map((item) => {
      const due = parseDate(item.due);
      const delivered = parseDate(item.delivered);
      const delay = Math.max(0, Math.round((delivered - due) / 86400000));
      const delayed = delivered > due;
      return {
        ...item,
        delay,
        delayed,
        priority: getPriority(delay),
        calculatedStatus: delayed ? "Atrasada" : "No prazo"
      };
    });

    const filters = {
      region: document.querySelector("#regionFilter"),
      carrier: document.querySelector("#carrierFilter"),
      status: document.querySelector("#statusFilter"),
      priority: document.querySelector("#priorityFilter"),
      start: document.querySelector("#startDate"),
      end: document.querySelector("#endDate")
    };

    function parseDate(value) {
      return new Date(value + "T00:00:00");
    }

    function formatDate(value) {
      return parseDate(value).toLocaleDateString("pt-BR", { timeZone: "UTC" });
    }

    function getPriority(delay) {
      if (delay > 5) return "Alta";
      if (delay >= 3) return "Media";
      if (delay >= 1) return "Baixa";
      return "No prazo";
    }

    function labelPriority(priority) {
      return priority === "Media" ? "MÃ©dia" : priority;
    }

    function priorityClass(priority) {
      return { "No prazo": "ok", "Baixa": "low", "Media": "mid", "Alta": "high" }[priority] || "neutral";
    }

    function fillSelect(select, values, label) {
      select.innerHTML = `<option value="">${label}</option>` + values
        .map((value) => `<option value="${value}">${labelPriority(value)}</option>`)
        .join("");
    }

    function unique(field) {
      return [...new Set(enriched.map((item) => item[field]))].sort();
    }

    function initializeFilters() {
      fillSelect(filters.region, unique("region"), "Todas");
      fillSelect(filters.carrier, unique("carrier"), "Todas");
      fillSelect(filters.status, ["No prazo", "Atrasada"], "Todos");
      fillSelect(filters.priority, ["No prazo", "Baixa", "Media", "Alta"], "Todas");
      filters.start.value = "2026-05-01";
      filters.end.value = "2026-06-30";
      Object.values(filters).forEach((filter) => filter.addEventListener("input", render));
      document.querySelector("#clearFilters").addEventListener("click", () => {
        filters.region.value = "";
        filters.carrier.value = "";
        filters.status.value = "";
        filters.priority.value = "";
        filters.start.value = "2026-05-01";
        filters.end.value = "2026-06-30";
        render();
      });
    }

    function currentData() {
      return enriched.filter((item) => {
        const due = parseDate(item.due);
        return (!filters.region.value || item.region === filters.region.value)
          && (!filters.carrier.value || item.carrier === filters.carrier.value)
          && (!filters.status.value || item.calculatedStatus === filters.status.value)
          && (!filters.priority.value || item.priority === filters.priority.value)
          && (!filters.start.value || due >= parseDate(filters.start.value))
          && (!filters.end.value || due <= parseDate(filters.end.value));
      });
    }

    function groupBy(items, key) {
      return items.reduce((acc, item) => {
        const value = typeof key === "function" ? key(item) : item[key];
        acc[value] = acc[value] || [];
        acc[value].push(item);
        return acc;
      }, {});
    }

    function worstRegion(data) {
      const rows = Object.entries(groupBy(data.filter((item) => item.delayed), "region"))
        .map(([name, items]) => ({ name, value: items.length, days: sum(items, "delay") }))
        .sort((a, b) => b.value - a.value || b.days - a.days);
      return rows[0] || { name: "-", value: 0, days: 0 };
    }

    function carrierRates(data) {
      return Object.entries(groupBy(data, "carrier"))
        .map(([name, items]) => {
          const delayed = items.filter((item) => item.delayed).length;
          return {
            name,
            total: items.length,
            delayed,
            rate: items.length ? delayed / items.length : 0,
            avgDelay: avg(items.filter((item) => item.delayed), "delay")
          };
        })
        .sort((a, b) => b.rate - a.rate || b.delayed - a.delayed);
    }

    function sum(items, field) {
      return items.reduce((total, item) => total + item[field], 0);
    }

    function avg(items, field) {
      return items.length ? sum(items, field) / items.length : 0;
    }

    function metrics(data) {
      const delayed = data.filter((item) => item.delayed);
      const region = worstRegion(data);
      const worstCarrier = carrierRates(data)[0] || { name: "-", rate: 0 };
      return {
        total: data.length,
        delayed: delayed.length,
        percent: data.length ? delayed.length / data.length : 0,
        averageDelay: avg(delayed, "delay"),
        region,
        worstCarrier
      };
    }

    function renderKpis(data) {
      const m = metrics(data);
      document.querySelector("#kpis").innerHTML = [
        ["Total de entregas", m.total, "Volume dentro do filtro aplicado"],
        ["Entregas atrasadas", m.delayed, `${m.delayed} ocorrÃªncia(s) precisam de atenÃ§Ã£o`],
        ["Percentual de atraso", percent(m.percent), "Atrasadas sobre o total"],
        ["MÃ©dia de dias de atraso", `${m.averageDelay.toFixed(1)} dias`, "MÃ©dia entre entregas atrasadas"],
        ["RegiÃ£o mais crÃ­tica", m.region.name, `${m.region.value} atraso(s) acumulados`],
        ["Transportadora crÃ­tica", m.worstCarrier.name, `${percent(m.worstCarrier.rate)} de atraso`]
      ].map(([title, value, detail]) => `
        <article class="card">
          <span>${title}</span>
          <strong>${value}</strong>
          <small>${detail}</small>
        </article>
      `).join("");
    }

    function renderAlerts(data) {
      const m = metrics(data);
      const high = data.filter((item) => item.delay > 5).length;
      document.querySelector("#alerts").innerHTML = `
        <div class="alert">
          <b>AtenÃ§Ã£o: regiÃ£o com maior concentraÃ§Ã£o de atrasos</b>
          <p>${m.region.name === "-" ? "Nenhuma regiÃ£o crÃ­tica no filtro atual." : `${m.region.name} concentra ${m.region.value} entrega(s) atrasada(s).`}</p>
        </div>
        <div class="alert">
          <b>Transportadora com maior Ã­ndice de atraso</b>
          <p>${m.worstCarrier.name === "-" ? "Sem dados suficientes no filtro atual." : `${m.worstCarrier.name} lidera o risco com ${percent(m.worstCarrier.rate)} de atraso.`}</p>
        </div>
        <div class="alert">
          <b>Entregas crÃ­ticas acima de 5 dias</b>
          <p>${high} entrega(s) aparecem como prioridade alta e devem ser tratadas primeiro.</p>
        </div>
      `;
    }

    function percent(value) {
      return `${Math.round(value * 100)}%`;
    }

    function renderBarChart(svg, rows, options = {}) {
      const width = 680;
      const height = 280;
      const left = 140;
      const right = 34;
      const top = 22;
      const rowHeight = 38;
      const max = Math.max(1, ...rows.map((row) => row.value));
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
      if (!rows.length) {
        svg.innerHTML = `<text x="${width / 2}" y="${height / 2}" text-anchor="middle" class="axis">Sem dados para exibir</text>`;
        return;
      }
      svg.innerHTML = rows.slice(0, 6).map((row, index) => {
        const y = top + index * rowHeight;
        const barWidth = ((width - left - right) * row.value) / max;
        const color = options.colors ? options.colors[index % options.colors.length] : "#246bfe";
        return `
          <text x="0" y="${y + 22}" class="bar-label">${row.name}</text>
          <rect x="${left}" y="${y}" width="${width - left - right}" height="24" rx="6" fill="#e9eff7"></rect>
          <rect x="${left}" y="${y}" width="${Math.max(3, barWidth)}" height="24" rx="6" fill="${color}"></rect>
          <text x="${left + barWidth + 8}" y="${y + 17}" class="axis">${row.value}</text>
        `;
      }).join("");
    }

    function renderTimeline(svg, data) {
      const delayedByDate = Object.entries(groupBy(data.filter((item) => item.delayed), "due"))
        .map(([date, items]) => ({ date, value: items.length }))
        .sort((a, b) => parseDate(a.date) - parseDate(b.date));
      const width = 680;
      const height = 280;
      const pad = 42;
      const max = Math.max(1, ...delayedByDate.map((row) => row.value));
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
      if (!delayedByDate.length) {
        svg.innerHTML = `<text x="${width / 2}" y="${height / 2}" text-anchor="middle" class="axis">Sem atrasos no perÃ­odo filtrado</text>`;
        return;
      }
      const points = delayedByDate.map((row, index) => {
        const x = pad + (index * (width - pad * 2)) / Math.max(1, delayedByDate.length - 1);
        const y = height - pad - (row.value * (height - pad * 2)) / max;
        return { ...row, x, y };
      });
      const path = points.map((point, index) => `${index ? "L" : "M"} ${point.x} ${point.y}`).join(" ");
      svg.innerHTML = `
        <line x1="${pad}" y1="${height - pad}" x2="${width - pad}" y2="${height - pad}" stroke="#d8e0ea"></line>
        <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${height - pad}" stroke="#d8e0ea"></line>
        <path d="${path}" fill="none" stroke="#0c8f91" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
        ${points.map((point) => `
          <circle cx="${point.x}" cy="${point.y}" r="6" fill="#0c8f91"></circle>
          <text x="${point.x}" y="${point.y - 12}" text-anchor="middle" class="line-label">${point.value}</text>
        `).join("")}
        <text x="${pad}" y="${height - 10}" class="axis">${formatDate(points[0].date)}</text>
        <text x="${width - pad}" y="${height - 10}" text-anchor="end" class="axis">${formatDate(points[points.length - 1].date)}</text>
      `;
    }

    function renderCharts(data) {
      const delayed = data.filter((item) => item.delayed);
      const carrierRows = Object.entries(groupBy(delayed, "carrier"))
        .map(([name, items]) => ({ name, value: items.length }))
        .sort((a, b) => b.value - a.value);
      const regionRows = Object.entries(groupBy(delayed, "region"))
        .map(([name, items]) => ({ name, value: items.length }))
        .sort((a, b) => b.value - a.value);
      renderBarChart(document.querySelector("#carrierChart"), carrierRows, { colors: ["#246bfe", "#0c8f91", "#e06d23", "#c93838"] });
      renderBarChart(document.querySelector("#regionChart"), regionRows, { colors: ["#c93838", "#e06d23", "#d7a400", "#0c8f91"] });
      renderTimeline(document.querySelector("#timelineChart"), data);
    }

    function renderRanking(data) {
      const rows = carrierRates(data);
      const maxRate = Math.max(0.01, ...rows.map((row) => row.rate));
      document.querySelector("#ranking").innerHTML = rows.length ? rows.map((row, index) => `
        <div class="rank-item">
          <span class="rank-no">${index + 1}</span>
          <div>
            <b>${row.name}</b>
            <div class="rank-meter"><i style="width:${(row.rate / maxRate) * 100}%"></i></div>
          </div>
          <strong>${percent(row.rate)}</strong>
        </div>
      `).join("") : `<div class="empty">Sem dados para ranking.</div>`;
    }

    function renderTable(data) {
      const critical = data
        .filter((item) => item.delayed)
        .sort((a, b) => b.delay - a.delay || a.region.localeCompare(b.region))
        .slice(0, 12);
      document.querySelector("#criticalTable").innerHTML = critical.length ? critical.map((item) => `
        <tr>
          <td><b>${item.id}</b></td>
          <td>${item.client}</td>
          <td>${item.region}</td>
          <td>${item.carrier}</td>
          <td>${formatDate(item.due)}</td>
          <td>${formatDate(item.delivered)}</td>
          <td>${item.delay}</td>
          <td><span class="pill ${item.delayed ? "high" : "ok"}">${item.calculatedStatus}</span></td>
          <td><span class="pill ${priorityClass(item.priority)}">${labelPriority(item.priority)}</span></td>
        </tr>
      `).join("") : `<tr><td colspan="9" class="empty">Nenhuma entrega crÃ­tica encontrada para os filtros atuais.</td></tr>`;
    }

    function render() {
      const data = currentData();
      renderKpis(data);
      renderAlerts(data);
      renderCharts(data);
      renderRanking(data);
      renderTable(data);
    }

    initializeFilters();
    render();

