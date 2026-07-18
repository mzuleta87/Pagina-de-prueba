// Renderiza el contenido de las páginas a partir de DATA (js/data.js).
// Cuando esto pase a producción, DATA se va a llenar con fetch() a los
// JSON generados por los scripts de Python — el resto del render queda igual.

function el(html){
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
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
    cotizTable.appendChild(el(`
      <tr>
        <td>${c.ticker}</td>
        <td>${c.tipo}</td>
        <td>${c.precio}</td>
        <td style="color:${c.up ? '#2E7D5B' : '#B5652E'}">${c.variacion}</td>
        <td>${c.volumen}</td>
      </tr>
    `));
  });
}

// ---- bancaria: tabs ----
document.querySelectorAll('.tabs button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

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

// ---- bancaria: MEP ----
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
