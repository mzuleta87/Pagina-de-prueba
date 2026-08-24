// Renderiza el contenido de las páginas a partir de DATA (js/data.js).
// Cuando esto pase a producción, DATA se va a llenar con fetch() a los
// JSON generados por los scripts de Python — el resto del render queda igual.

function el(html){
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

// ---- logos de empresa (con fallback a monograma) ----
// Intenta el logo real vía Financial Modeling Prep; si no existe (o el
// ticker no es una acción/CEDEAR de empresa, ej. letras u ONs), cae a un
// monograma de color estable generado a partir del ticker.
const LOGO_PALETTE = ['#2E7D5B','#B5652E','#4A5850','#6E8F7C','#A6693C','#2F5C46'];

function tickerColor(ticker){
  let hash = 0;
  for (let i = 0; i < ticker.length; i++){
    hash = ticker.charCodeAt(i) + ((hash << 5) - hash);
  }
  return LOGO_PALETTE[Math.abs(hash) % LOGO_PALETTE.length];
}

function buildLogo(ticker){
  const wrap = el('<span class="logo-wrap"></span>');
  const img = document.createElement('img');
  img.className = 'logo-img';
  img.alt = ticker;
  img.loading = 'lazy';
  img.src = `https://financialmodelingprep.com/image-stock/${ticker}.png`;
  img.onerror = () => {
    wrap.innerHTML = '';
    const mono = el(`<span class="logo-mono" style="background:${tickerColor(ticker)}">${ticker.slice(0,2)}</span>`);
    wrap.appendChild(mono);
  };
  wrap.appendChild(img);
  return wrap;
}

// ---- sparkline diario ----
// values: array de precios intradía (apertura -> último). Dibuja una
// polyline simple normalizada al rango de la serie.
function buildSparkline(values, up){
  const w = 64, h = 26, pad = 3;
  const min = Math.min(...values), max = Math.max(...values);
  const range = (max - min) || 1;
  const step = (w - pad * 2) / (values.length - 1);
  const points = values.map((v, i) => {
    const x = pad + i * step;
    const y = pad + (1 - (v - min) / range) * (h - pad * 2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  const color = up ? '#2E7D5B' : '#B5652E';
  const svgHtml = `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" class="spark" aria-hidden="true">
    <polyline points="${points}" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  return el(svgHtml);
}

// ---- ticker (todas las páginas) ----
const tickerEl = document.getElementById('ticker');
if (tickerEl){
  const items = DATA.ranking.map(r =>
    `<span>${r.categoria} más operado: <strong>${r.ticker}</strong> · ${r.volumen}</span>`
  ).join('');
  tickerEl.innerHTML = items + items; // duplicado para el loop continuo
}

// ---- fecha de actualización (cualquier elemento .updated con id upd*) ----
document.querySelectorAll('[id^="upd"]').forEach(elm => {
  elm.textContent = "Actualizado " + DATA.actualizado;
});

// ---- ranking cards (home + financiera) ----
const rankingCards = document.getElementById('rankingCards');
if (rankingCards){
  DATA.ranking.forEach(r => {
    rankingCards.appendChild(el(`
      <div class="card">
        <div class="label">Más operado · ${r.categoria}</div>
        <div class="value">${r.ticker}</div>
        <div class="muted mono" style="font-size:0.75rem;margin-top:4px">${r.volumen}</div>
      </div>
    `));
  });
}

// ---- home: preview cotizaciones ----
const cotizPreview = document.getElementById('cotizPreview');
if (cotizPreview){
  DATA.cotizacionesDestacadas.forEach(c => {
    cotizPreview.appendChild(el(`
      <div style="display:flex;justify-content:space-between;font-size:0.88rem">
        <span>${c.ticker}</span>
        <span class="mono">${c.precio} <span style="color:${c.up ? '#2E7D5B' : '#B5652E'}">${c.variacion}</span></span>
      </div>
    `));
  });
}

// ---- home: preview banco (mejor plazo fijo + mejor billetera) ----
const bancoPreview = document.getElementById('bancoPreview');
if (bancoPreview){
  const mejorPF = DATA.plazoFijo[0];
  const mejorBV = DATA.billeterasTop3[0];
  bancoPreview.appendChild(el(`
    <div style="display:flex;justify-content:space-between;font-size:0.88rem">
      <span>Mejor plazo fijo: ${mejorPF.banco}</span>
      <span class="mono">${mejorPF.tna}</span>
    </div>
  `));
  bancoPreview.appendChild(el(`
    <div style="display:flex;justify-content:space-between;font-size:0.88rem">
      <span>Mejor billetera: ${mejorBV.nombre}</span>
      <span class="mono">${mejorBV.tna}</span>
    </div>
  `));
}

// ---- financiera: tabla de cotizaciones ----
const cotizTable = document.getElementById('cotizTable');
if (cotizTable){
  DATA.cotizaciones.forEach(c => {
    const row = el(`
      <tr>
        <td class="empresa-cell"></td>
        <td>${c.tipo}</td>
        <td>${c.precio}</td>
        <td style="color:${c.up ? '#2E7D5B' : '#B5652E'}">${c.variacion}</td>
        <td class="spark-cell"></td>
        <td>${c.volumen}</td>
      </tr>
    `);
    const empresaCell = row.querySelector('.empresa-cell');
    empresaCell.appendChild(buildLogo(c.ticker));
    empresaCell.appendChild(el(`<span>${c.ticker}</span>`));

    const sparkCell = row.querySelector('.spark-cell');
    if (c.historial && c.historial.length > 1){
      sparkCell.appendChild(buildSparkline(c.historial, c.up));
    }

    cotizTable.appendChild(row);
  });
}

// ---- bancaria: plazo fijo ----
const pfTable = document.getElementById('pfTable');
if (pfTable){
  DATA.plazoFijo.forEach((p, i) => {
    pfTable.appendChild(el(`
      <tr class="${i === 0 ? 'top' : ''}">
        <td>${p.banco}</td><td>${p.tna}</td><td>${p.tea}</td>
      </tr>
    `));
  });
}

// ---- bancaria: billeteras top 3 + tabla completa ----
const bvTop3 = document.getElementById('bvTop3');
if (bvTop3){
  DATA.billeterasTop3.forEach(b => {
    bvTop3.appendChild(el(`
      <div class="card highlight">
        <div class="label">${b.nombre}</div>
        <div class="value">${b.tna}</div>
      </div>
    `));
  });
}
const bvTable = document.getElementById('bvTable');
if (bvTable){
  DATA.billeterasTodas.forEach((b, i) => {
    bvTable.appendChild(el(`
      <tr class="${i < 2 ? 'top' : ''}">
        <td>${b.nombre}</td><td>${b.tna}</td><td>${b.rindeDiario}</td>
      </tr>
    `));
  });
}

// ---- financiera: panorama macro ----
const macroCards = document.getElementById('macroCards');
if (macroCards){
  DATA.indicadoresMacro.forEach(m => {
    macroCards.appendChild(el(`
      <div class="card">
        <div class="label">${m.nombre} <span class="pill" style="margin-left:4px">${m.ambito}</span></div>
        <div class="value">${m.valor}</div>
      </div>
    `));
  });
}
const noticiasList = document.getElementById('noticiasList');
if (noticiasList){
  DATA.noticias.forEach(n => {
    noticiasList.appendChild(el(`
      <div class="noticia">
        <span class="tag ${n.ambito.toLowerCase()}">${n.ambito}</span>
        <span class="titulo">${n.titulo}</span>
        <span class="fuente">${n.fuente}</span>
      </div>
    `));
  });
}

// ---- bancaria: préstamos personales ----
const prestPersonalesTable = document.getElementById('prestPersonalesTable');
if (prestPersonalesTable){
  DATA.prestamosPersonales.forEach((p, i) => {
    prestPersonalesTable.appendChild(el(`
      <tr class="${i === 0 ? 'top' : ''}">
        <td>${p.banco}</td><td>${p.tna}</td>
      </tr>
    `));
  });
}

// ---- bancaria: préstamos hipotecarios ----
const prestHipotecariosTable = document.getElementById('prestHipotecariosTable');
if (prestHipotecariosTable){
  DATA.prestamosHipotecarios.forEach((p, i) => {
    prestHipotecariosTable.appendChild(el(`
      <tr class="${i === 0 ? 'top' : ''}">
        <td>${p.banco}</td><td>${p.tasa}</td><td>${p.modalidad}</td>
      </tr>
    `));
  });
}

// ---- financiera: fuentes consultadas para carteras sugeridas ----
const fuentesCarteras = document.getElementById('fuentesCarteras');
if (fuentesCarteras && DATA.fuentesCarteras){
  fuentesCarteras.appendChild(el(`<div class="fuentes-titulo">Fuentes consultadas</div>`));
  const list = el(`<ul class="fuentes-list"></ul>`);
  DATA.fuentesCarteras.forEach(f => {
    list.appendChild(el(`<li><a href="${f.url}" target="_blank" rel="noopener">${f.nombre}</a></li>`));
  });
  fuentesCarteras.appendChild(list);
}

// ---- financiera: carteras sugeridas ----
const carteraTabs = document.getElementById('carteraTabs');
const carteraPanels = document.getElementById('carteraPanels');
if (carteraTabs && carteraPanels && DATA.carteras){
  DATA.carteras.forEach((cartera, i) => {
    carteraTabs.appendChild(el(`
      <button class="${i === 0 ? 'active' : ''}" data-cartera="${cartera.id}">${cartera.nombre}</button>
    `));

    const panel = el(`<div class="tab-panel ${i === 0 ? 'active' : ''}" id="panel-${cartera.id}"></div>`);

    panel.appendChild(el(`
      <div class="grid-3" style="margin-bottom:14px">
        <div class="card"><div class="label">Perfil</div><div class="value" style="font-size:1rem">${cartera.nombre}</div></div>
        <div class="card"><div class="label">Horizonte sugerido</div><div class="value" style="font-size:1rem">${cartera.horizonte}</div></div>
        <div class="card"><div class="label">Volatilidad esperada</div><div class="value" style="font-size:1rem">${cartera.volatilidad}</div></div>
      </div>
    `));
    panel.appendChild(el(`<p class="muted" style="font-size:0.85rem;margin-bottom:6px">${cartera.resumen}</p>`));
    panel.appendChild(el(`<p class="no-recomendacion">No es una recomendación de inversión — ver aclaración completa arriba.</p>`));

    // composición: donut (conic-gradient) + leyenda, reutilizando tickerColor()
    let acc = 0;
    const slices = cartera.activos.map(a => {
      const color = tickerColor(a.ticker);
      const start = acc;
      acc += a.peso;
      return `${color} ${start}% ${acc}%`;
    }).join(',');

    const compWrap = el(`<div class="composicion"></div>`);
    compWrap.appendChild(el(`<div class="donut" style="background:conic-gradient(${slices})"></div>`));

    const legend = el(`<div class="legend"></div>`);
    cartera.activos.forEach(a => {
      legend.appendChild(el(`
        <div class="legend-item">
          <span class="legend-dot" style="background:${tickerColor(a.ticker)}"></span>
          <span>${a.ticker}</span>
          <span class="muted mono" style="margin-left:auto">${a.peso}%</span>
        </div>
      `));
    });
    compWrap.appendChild(legend);
    panel.appendChild(compWrap);

    // tabla de activos: logo + tipo + calificación + peso + análisis
    const table = el(`
      <table class="data" style="margin-top:22px">
        <thead><tr><th>Activo</th><th>Tipo</th><th>Calificación</th><th>Peso</th><th>Análisis</th></tr></thead>
        <tbody></tbody>
      </table>
    `);
    const tbody = table.querySelector('tbody');
    cartera.activos.forEach(a => {
      const row = el(`
        <tr>
          <td class="empresa-cell"></td>
          <td>${a.tipo}</td>
          <td class="mono">${a.calificacion || '—'}</td>
          <td>${a.peso}%</td>
          <td class="analisis-cell">${a.analisis}</td>
        </tr>
      `);
      row.querySelector('.empresa-cell').appendChild(buildLogo(a.ticker));
      row.querySelector('.empresa-cell').appendChild(el(`<span>${a.ticker}</span>`));
      tbody.appendChild(row);
    });
    panel.appendChild(table);

    carteraPanels.appendChild(panel);
  });

  carteraTabs.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      carteraTabs.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      carteraPanels.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('panel-' + btn.dataset.cartera).classList.add('active');
    });
  });
}

// ---- bancaria: atención al cliente ----
const redesTable = document.getElementById('redesTable');
if (redesTable && DATA.atencionCliente){
  DATA.atencionCliente.redes.forEach(r => {
    redesTable.appendChild(el(`
      <tr><td>${r.nombre}</td><td class="mono">${r.telefono}</td><td>${r.horario}</td></tr>
    `));
  });
}

const tarjetasTable = document.getElementById('tarjetasTable');
if (tarjetasTable && DATA.atencionCliente){
  DATA.atencionCliente.tarjetas.forEach(t => {
    tarjetasTable.appendChild(el(`
      <tr><td>${t.nombre}</td><td class="mono">${t.telefono}</td><td style="font-family:'Inter',sans-serif;font-size:0.84rem">${t.detalle}</td></tr>
    `));
  });
}

const requisitosCajaList = document.getElementById('requisitosCajaList');
if (requisitosCajaList && DATA.atencionCliente){
  DATA.atencionCliente.requisitosCaja.forEach(req => {
    requisitosCajaList.appendChild(el(`<li>${req}</li>`));
  });
}

const bancosContactoTable = document.getElementById('bancosContactoTable');
if (bancosContactoTable && DATA.atencionCliente){
  DATA.atencionCliente.bancos.forEach(b => {
    bancosContactoTable.appendChild(el(`
      <tr><td>${b.nombre}</td><td class="mono">${b.telefono}</td><td>${b.horario}</td><td><a href="${b.web}" target="_blank" rel="noopener" class="pill">Sitio oficial →</a></td></tr>
    `));
  });
}

const fuentesAtc = document.getElementById('fuentesAtc');
if (fuentesAtc && DATA.atencionCliente){
  fuentesAtc.appendChild(el(`<div class="fuentes-titulo">Fuentes consultadas</div>`));
  const list = el(`<ul class="fuentes-list"></ul>`);
  DATA.atencionCliente.fuentes.forEach(f => {
    list.appendChild(el(`<li><a href="${f.url}" target="_blank" rel="noopener">${f.nombre}</a></li>`));
  });
  fuentesAtc.appendChild(list);
}

const mepCards = document.getElementById('mepCards');
if (mepCards){
  DATA.mep.forEach(m => {
    mepCards.appendChild(el(`
      <div class="card ${m.top ? 'highlight' : ''}">
        <div class="label">${m.plataforma}</div>
        <div style="display:flex;flex-direction:column;gap:2px;margin-top:2px">
          <div><span class="muted" style="font-size:0.7rem">Compra</span> <span class="value" style="font-size:0.98rem">$ ${m.compra}</span></div>
          <div><span class="muted" style="font-size:0.7rem">Venta</span> <span class="value" style="font-size:0.98rem">$ ${m.venta}</span></div>
        </div>
      </div>
    `));
  });
}

// ---- bancaria: promociones y tiendas online por banco ----
const promosGrid = document.getElementById('promosGrid');
if (promosGrid && DATA.promocionesBancos){
  DATA.promocionesBancos.forEach(b => {
    const card = el(`<div class="banco-card"></div>`);
    card.appendChild(el(`<h3>${b.banco}</h3>`));

    if (b.tienda.url){
      card.appendChild(el(`<a href="${b.tienda.url}" target="_blank" rel="noopener" class="tienda-link">${b.tienda.nombre} →</a>`));
    } else {
      card.appendChild(el(`<span class="tienda-link" style="background:none;padding-left:0">${b.tienda.nombre}</span>`));
    }

    const list = el(`<ul></ul>`);
    b.destacados.forEach(d => list.appendChild(el(`<li>${d}</li>`)));
    card.appendChild(list);

    card.appendChild(el(`
      <div class="sitio-verificado">
        <span class="lock">🔒</span>
        <span>
          <a href="${b.sitioOficial}" target="_blank" rel="noopener">Sitio oficial de ${b.banco} →</a>
          <span class="leyenda">Dominio https verificado. Vas a salir de Cartera hacia el sitio del banco.</span>
        </span>
      </div>
    `));

    promosGrid.appendChild(card);
  });
}
