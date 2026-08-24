// Datos de ejemplo. En producción, estos objetos van a venir de archivos
// data/*.json generados por scripts de Python en GitHub Actions (mismo
// patrón que bot-de-señales), y esta página los va a leer con fetch().

const DATA = {

  actualizado: "18/07/2026 14:32 hs",

  ranking: [
    { categoria: "Acción", ticker: "GGAL", volumen: "$ 4.820 M" },
    { categoria: "CEDEAR", ticker: "AAPL", volumen: "$ 3.150 M" },
    { categoria: "Letra", ticker: "S31L6", volumen: "$ 2.410 M" },
    { categoria: "Oblig. Neg.", ticker: "YMCXO", volumen: "$ 980 M" },
  ],

  cotizacionesDestacadas: [
    { ticker: "GGAL", precio: "6.850", variacion: "+2.4%", up: true },
    { ticker: "YPFD", precio: "41.200", variacion: "-0.8%", up: false },
    { ticker: "AAPL", precio: "9.410", variacion: "+1.1%", up: true },
  ],

  cotizaciones: [
    { ticker: "GGAL", tipo: "Acción", precio: "6.850", variacion: "+2.4%", volumen: "4.820 M", up: true },
    { ticker: "YPFD", tipo: "Acción", precio: "41.200", variacion: "-0.8%", volumen: "1.900 M", up: false },
    { ticker: "PAMP", tipo: "Acción", precio: "3.120", variacion: "+0.6%", volumen: "1.230 M", up: true },
    { ticker: "AAPL", tipo: "CEDEAR", precio: "9.410", variacion: "+1.1%", volumen: "3.150 M", up: true },
    { ticker: "TSLA", tipo: "CEDEAR", precio: "18.300", variacion: "-1.5%", volumen: "2.040 M", up: false },
    { ticker: "S31L6", tipo: "Letra", precio: "98.40", variacion: "+0.1%", volumen: "2.410 M", up: true },
    { ticker: "YMCXO", tipo: "Oblig. Neg.", precio: "101.20", variacion: "+0.2%", volumen: "980 M", up: true },
  ],

  plazoFijo: [
    { banco: "Banco Voii", tna: "24.0%", tea: "26.8%" },
    { banco: "Banco Masventas", tna: "24.0%", tea: "26.8%" },
    { banco: "Banco Meridian", tna: "23.5%", tea: "26.2%" },
    { banco: "Banco CMF", tna: "23.25%", tea: "25.9%" },
    { banco: "Banco Provincia", tna: "21.0%", tea: "23.2%" },
    { banco: "Banco Nación", tna: "20.5%", tea: "22.6%" },
  ],

  billeterasTop3: [
    { nombre: "Ualá", tna: "26.0%" },
    { nombre: "Cocos Pesos", tna: "25.4%" },
    { nombre: "Mercado Pago", tna: "24.8%" },
  ],

  billeterasTodas: [
    { nombre: "Ualá", tna: "26.0%", rindeDiario: "0.071%" },
    { nombre: "Cocos Pesos", tna: "25.4%", rindeDiario: "0.070%" },
    { nombre: "Mercado Pago", tna: "24.8%", rindeDiario: "0.068%" },
    { nombre: "Naranja X", tna: "23.9%", rindeDiario: "0.065%" },
    { nombre: "Personal Pay", tna: "23.1%", rindeDiario: "0.063%" },
    { nombre: "Prex", tna: "22.7%", rindeDiario: "0.062%" },
    { nombre: "Fiwind", tna: "22.0%", rindeDiario: "0.060%" },
  ],

  prestamosPersonales: [
    { banco: "Banco Nación", tna: "42.0%" },
    { banco: "Banco Provincia", tna: "45.5%" },
    { banco: "Banco Galicia", tna: "48.0%" },
    { banco: "Banco Santander", tna: "49.2%" },
    { banco: "Banco Macro", tna: "50.1%" },
    { banco: "BBVA", tna: "51.0%" },
  ],

  prestamosHipotecarios: [
    { banco: "Banco Nación", tasa: "4.5%", modalidad: "UVA, tasa fija" },
    { banco: "Banco Ciudad", tasa: "6.0%", modalidad: "UVA, tasa mixta" },
    { banco: "Banco Provincia", tasa: "6.5%", modalidad: "UVA, tasa fija" },
    { banco: "Banco Galicia", tasa: "8.0%", modalidad: "UVA, tasa variable" },
    { banco: "BBVA", tasa: "8.5%", modalidad: "UVA, tasa fija" },
  ],

  indicadoresMacro: [
    { nombre: "Inflación Argentina (mensual)", valor: "2.1%", ambito: "Local" },
    { nombre: "Inflación EE.UU. (interanual)", valor: "2.8%", ambito: "Internacional" },
    { nombre: "Desempleo EE.UU.", valor: "4.1%", ambito: "Internacional" },
    { nombre: "Índice de precios al productor EE.UU.", valor: "+0.3% m/m", ambito: "Internacional" },
  ],

  noticias: [
    { titulo: "El BCRA mantuvo la tasa de referencia en la última reunión", fuente: "Ámbito", ambito: "Local" },
    { titulo: "El Merval opera con subas lideradas por bancos y energéticas", fuente: "Cronista", ambito: "Local" },
    { titulo: "La Fed dejó entrever una pausa en el ciclo de tasas", fuente: "Reuters", ambito: "Internacional" },
    { titulo: "Wall Street cerró mixto tras el dato de empleo de EE.UU.", fuente: "Bloomberg", ambito: "Internacional" },
  ],

  mep: [
    { plataforma: "Mercado Pago", compra: "1.250,10", venta: "1.252,30", top: true },
    { plataforma: "IOL", compra: "1.251,90", venta: "1.254,10" },
    { plataforma: "Balanz", compra: "1.251,60", venta: "1.253,80" },
    { plataforma: "Cocos", compra: "1.252,70", venta: "1.255,00" },
    { plataforma: "Bull Market", compra: "1.252,30", venta: "1.254,50" },
  ],

  atencionCliente: {

    redes: [
      { nombre: "Red Link", telefono: "0800-888-5465", horario: "Las 24 hs, todos los días" },
      { nombre: "Banelco", telefono: "(011) 4320-2500", horario: "Las 24 hs, todos los días" },
    ],

    tarjetas: [
      { nombre: "Visa — denuncias", telefono: "0810-666-3368", detalle: "Resto del país. AMBA: (011) 4379-3333" },
      { nombre: "Mastercard — denuncias", telefono: "0810-666-2662", detalle: "Pérdida o robo de tarjeta de crédito" },
      { nombre: "Plan V (Visa) — cuotificar resumen o consumos", telefono: "0810-222-2868", detalle: "Financiar el saldo del resumen o compras puntuales en cuotas fijas" },
      { nombre: "Mastercard Cuotas — cuotificar resumen o consumos", telefono: "0800-222-3470", detalle: "Equivalente de Mastercard al Plan V de Visa. Lun a vie de 8 a 20 hs" },
    ],

    requisitosCaja: [
      "DNI vigente (original y copia)",
      "CUIL o CUIT",
      "Comprobante de domicilio si la dirección no coincide con el DNI (factura de servicio no mayor a 90 días)",
      "Comprobante de ingresos si se solicita en simultáneo una tarjeta de crédito",
      "Depósito mínimo inicial, cuando el banco lo exige (varía según entidad y tipo de cuenta)",
    ],

    bancos: [
      { nombre: "Banco Nación", telefono: "0810-666-4444", horario: "Lun a vie de 8 a 20 hs", web: "https://www.bna.com.ar" },
      { nombre: "Banco Provincia", telefono: "0810-222-2776", horario: "Lun a vie de 8 a 22 hs", web: "https://www.bancoprovincia.com.ar" },
      { nombre: "BBVA (ex Francés)", telefono: "0800-333-0303", horario: "Lun a vie de 7:30 a 21 hs", web: "https://www.bbva.com.ar" },
      { nombre: "Santander", telefono: "0810-333-2400", horario: "Lun a vie de 8 a 21 hs", web: "https://www.santander.com.ar" },
      { nombre: "Galicia", telefono: "0810-444-6500", horario: "Las 24 hs, todos los días", web: "https://www.bancogalicia.com" },
      { nombre: "ICBC", telefono: "0810-444-4652", horario: "Lun a vie de 8 a 20 hs", web: "https://www.icbc.com.ar" },
    ],

    fuentes: [
      { nombre: "Banco Provincia — Atención a usuarios", url: "https://www.bancoprovincia.com.ar/web/atencion_usuarios" },
      { nombre: "Banco Nación — Contactenos", url: "https://www.bna.com.ar/Home/Contactenos" },
      { nombre: "BBVA Argentina — Atención al cliente", url: "https://www.bbva.com.ar/personas/atencion-al-cliente.html" },
      { nombre: "Banelco — Perdí mi tarjeta", url: "https://www.banelco.com/perdi-mi-tarjeta" },
      { nombre: "Visa — Plan V", url: "https://www.bancoprovincia.com.ar/CDN/Get/Plan_V" },
    ],

  },

  promocionesBancos: [
    {
      banco: "Banco Nación",
      tienda: { nombre: "Tienda BNA+", url: "https://www.tiendabna.com.ar" },
      destacados: [
        "BNA Viajes: paquetes y pasajes con financiación en cuotas",
        "Programa Elegí+ y Aerolíneas Plus para sumar beneficios y millas",
        "Promos estacionales con tarjetas Nativa Visa/Mastercard (bonificación de comisiones por altas nuevas)",
      ],
      sitioOficial: "https://www.bna.com.ar",
    },
    {
      banco: "Banco Provincia",
      tienda: { nombre: "Provincia Compras", url: "https://www.provinciacompras.com.ar" },
      destacados: [
        "Marketplace propio con cuotas sin interés (varían según campaña)",
        "Cuenta DNI: reintegros rotativos en comercios de cercanía, ferias, supermercados y gastronomía",
        "Los porcentajes y topes cambian todos los meses — se consultan en la app Cuenta DNI",
      ],
      sitioOficial: "https://www.bancoprovincia.com.ar",
    },
    {
      banco: "BBVA",
      tienda: { nombre: "Shop (dentro de la app BBVA Go)", url: "" },
      destacados: [
        "No tiene tienda web propia: se accede desde el botón \"Shop\" en la app BBVA Go",
        "Programa Go: descuentos y cuotas sin interés en comercios adheridos",
        "Financiación de saldos y consumos de tarjeta desde la app (sin llamar a Plan V)",
      ],
      sitioOficial: "https://www.bbva.com.ar",
    },
    {
      banco: "Santander",
      tienda: { nombre: "Sin marketplace propio", url: "" },
      destacados: [
        "Programa SuperClub+: suma puntos por consumo con tarjetas, cuenta sueldo e inversión en Superfondos",
        "Los puntos se canjean por viajes, vouchers/gift cards o crédito directo en la tarjeta",
      ],
      sitioOficial: "https://www.santander.com.ar",
    },
    {
      banco: "Galicia",
      tienda: { nombre: "Tienda Galicia", url: "https://tienda.galicia.ar" },
      destacados: [
        "Marketplace propio, incluye canje de puntos del programa de beneficios",
        "Buscador de promociones por marca o rubro, con reintegros y cuotas sin interés",
      ],
      sitioOficial: "https://www.galicia.ar",
    },
    {
      banco: "ICBC",
      tienda: { nombre: "ICBC Mall", url: "https://mall.icbc.com.ar" },
      destacados: [
        "Marketplace propio con envío gratis en productos seleccionados",
        "Programa ICBC Club: puntos canjeables por productos, viajes y tarjetas de regalo",
      ],
      sitioOficial: "https://www.icbc.com.ar",
    },
  ],

  fuentesPromociones: [
    { nombre: "Provincia Compras — Preguntas frecuentes", url: "https://www.provinciacompras.com.ar/preguntas-frecuentes" },
    { nombre: "BNA — Tienda BNA+ y BNA Viajes", url: "https://bna.com.ar" },
    { nombre: "Banco Galicia — Tienda Galicia", url: "https://tienda.galicia.ar" },
    { nombre: "Santander — SuperClub+", url: "https://www.santander.com.ar/personas/superclub-mas" },
    { nombre: "ICBC — ICBC Club", url: "https://www.icbc.com.ar/personas/productos-servicios/icbc-club" },
  ],

  fuentesCarteras: [
    { nombre: "BYMA — Bolsas y Mercados Argentinos", url: "https://www.byma.com.ar" },
    { nombre: "Rava Bursátil", url: "https://www.rava.com" },
    { nombre: "IOL invertir online", url: "https://www.invertironline.com" },
  ],

  carteras: [
    {
      id: "conservador",
      nombre: "Conservador",
      horizonte: "6-12 meses",
      volatilidad: "Baja",
      resumen: "Prioriza preservar capital y cobertura frente a la inflación, con mayor peso en instrumentos de renta fija de corto plazo y baja duration.",
      activos: [
        { ticker: "S31L6", tipo: "Letra", peso: 40, calificacion: "—", analisis: "Letra del Tesoro de corto plazo, baja volatilidad y buena previsibilidad de flujo." },
        { ticker: "YMCXO", tipo: "Oblig. Neg.", peso: 30, calificacion: "AAA(arg)", analisis: "ON corporativa con flujo de renta en dólares, riesgo crediticio moderado." },
        { ticker: "GGAL", tipo: "Acción", peso: 15, calificacion: "—", analisis: "Exposición acotada a renta variable local, sector financiero." },
        { ticker: "AAPL", tipo: "CEDEAR", peso: 15, calificacion: "—", analisis: "Cobertura dolarizada con baja correlación al riesgo argentino." },
      ],
    },
    {
      id: "moderado",
      nombre: "Moderado",
      horizonte: "1-3 años",
      volatilidad: "Media",
      resumen: "Balance entre renta fija corporativa y renta variable, buscando crecimiento con volatilidad controlada.",
      activos: [
        { ticker: "YMCXO", tipo: "Oblig. Neg.", peso: 25, calificacion: "AAA(arg)", analisis: "Base de renta en dólares con riesgo crediticio moderado." },
        { ticker: "PNXCO", tipo: "Oblig. Neg.", peso: 20, calificacion: "AAA(arg)", analisis: "Complementa duration y diversifica emisor." },
        { ticker: "GGAL", tipo: "Acción", peso: 20, calificacion: "—", analisis: "Banco líder local, sensible al ciclo de tasas y actividad." },
        { ticker: "PAMP", tipo: "Acción", peso: 15, calificacion: "—", analisis: "Exposición al sector energético argentino." },
        { ticker: "AAPL", tipo: "CEDEAR", peso: 20, calificacion: "—", analisis: "Diversificación internacional y cobertura cambiaria." },
      ],
    },
    {
      id: "agresivo",
      nombre: "Agresivo",
      horizonte: "3+ años",
      volatilidad: "Alta",
      resumen: "Foco en crecimiento de capital vía renta variable local e internacional, asumiendo mayor volatilidad de corto plazo.",
      activos: [
        { ticker: "GGAL", tipo: "Acción", peso: 25, calificacion: "—", analisis: "Principal apuesta al sector financiero local." },
        { ticker: "YPFD", tipo: "Acción", peso: 20, calificacion: "—", analisis: "Exposición a energía, alta sensibilidad a precios de commodities." },
        { ticker: "PAMP", tipo: "Acción", peso: 15, calificacion: "—", analisis: "Generación eléctrica, componente cíclico." },
        { ticker: "AAPL", tipo: "CEDEAR", peso: 20, calificacion: "—", analisis: "Tecnología global, ancla de crecimiento en dólares." },
        { ticker: "TSLA", tipo: "CEDEAR", peso: 20, calificacion: "—", analisis: "Alta volatilidad, componente de mayor riesgo/retorno." },
      ],
    },
    {
      id: "cobertura-cambiaria",
      nombre: "Cobertura cambiaria",
      horizonte: "1-3 años",
      volatilidad: "Media",
      resumen: "CEDEARs de acciones y ETFs cuyo subyacente cotiza en dólares afuera, minimizando la exposición a riesgo de crédito corporativo o soberano argentino. Nota: el mecanismo del CEDEAR (liquidez, restricciones cambiarias) igual conserva cierta exposición local.",
      activos: [
        { ticker: "SPY", tipo: "CEDEAR ETF", peso: 17, calificacion: "—", analisis: "ETF S&P 500, núcleo diversificado del mercado estadounidense." },
        { ticker: "GLD", tipo: "CEDEAR ETF", peso: 17, calificacion: "—", analisis: "ETF de oro físico, cobertura y refugio ante incertidumbre." },
        { ticker: "AAPL", tipo: "CEDEAR", peso: 17, calificacion: "—", analisis: "Blue chip tecnológica de alta liquidez." },
        { ticker: "MSFT", tipo: "CEDEAR", peso: 17, calificacion: "—", analisis: "Blue chip tecnológica, diversifica de Apple." },
        { ticker: "KO", tipo: "CEDEAR", peso: 16, calificacion: "—", analisis: "Consumo básico defensivo, menor volatilidad relativa." },
        { ticker: "XLY", tipo: "CEDEAR ETF", peso: 16, calificacion: "—", analisis: "ETF de consumo discrecional, sesgo estacional al rally navideño." },
      ],
    },
    {
      id: "renta-mensual",
      nombre: "Renta mensual durante el año",
      horizonte: "Hasta 6 años",
      volatilidad: "Media",
      resumen: "Seis Obligaciones Negociables Ley Nueva York, hard dollar, con cronogramas de pago semestral complementarios entre sí para cobrar renta prácticamente todos los meses del año. Selección orientada a maximizar TIR dentro de un límite de vencimiento de 6 años.",
      activos: [
        { ticker: "TLCMO", tipo: "Oblig. Neg.", peso: 17, calificacion: "AA+(arg)", analisis: "Telecom Argentina. Paga en enero y julio. TIR aprox. 8%, vencimiento 2031." },
        { ticker: "CAC5O", tipo: "Oblig. Neg.", peso: 17, calificacion: "—", analisis: "Capex. Paga en febrero y agosto. TIR 6,94%, vencimiento agosto 2028." },
        { ticker: "YMCXO", tipo: "Oblig. Neg.", peso: 17, calificacion: "AAA(arg)", analisis: "YPF. Paga en marzo y septiembre. TIR 6,99%, vencimiento septiembre 2031." },
        { ticker: "DNC7O", tipo: "Oblig. Neg.", peso: 17, calificacion: "A(arg)", analisis: "Edenor. Paga en abril y octubre. TIR superior al 9%, vencimiento 2030." },
        { ticker: "CP38O", tipo: "Oblig. Neg.", peso: 16, calificacion: "AA-(arg)", analisis: "Cía. General de Combustibles. Paga en mayo y noviembre. TIR 11,60%, vencimiento noviembre 2030." },
        { ticker: "RUCDD", tipo: "Oblig. Neg.", peso: 16, calificacion: "AA-(arg)", analisis: "MSU Energy. Paga en junio y diciembre. Cupón 9,75%, vencimiento corto plazo (~2027-2029)." },
      ],
    },
  ],
};
