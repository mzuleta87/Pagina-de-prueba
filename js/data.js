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
        { ticker: "S31L6", tipo: "Letra", peso: 40, analisis: "Letra del Tesoro de corto plazo, baja volatilidad y buena previsibilidad de flujo." },
        { ticker: "YMCXO", tipo: "Oblig. Neg.", peso: 30, analisis: "ON corporativa con flujo de renta en dólares, riesgo crediticio moderado." },
        { ticker: "GGAL", tipo: "Acción", peso: 15, analisis: "Exposición acotada a renta variable local, sector financiero." },
        { ticker: "AAPL", tipo: "CEDEAR", peso: 15, analisis: "Cobertura dolarizada con baja correlación al riesgo argentino." },
      ],
    },
    {
      id: "moderado",
      nombre: "Moderado",
      horizonte: "1-3 años",
      volatilidad: "Media",
      resumen: "Balance entre renta fija corporativa y renta variable, buscando crecimiento con volatilidad controlada.",
      activos: [
        { ticker: "YMCXO", tipo: "Oblig. Neg.", peso: 25, analisis: "Base de renta en dólares con riesgo crediticio moderado." },
        { ticker: "PNXCO", tipo: "Oblig. Neg.", peso: 20, analisis: "Complementa duration y diversifica emisor." },
        { ticker: "GGAL", tipo: "Acción", peso: 20, analisis: "Banco líder local, sensible al ciclo de tasas y actividad." },
        { ticker: "PAMP", tipo: "Acción", peso: 15, analisis: "Exposición al sector energético argentino." },
        { ticker: "AAPL", tipo: "CEDEAR", peso: 20, analisis: "Diversificación internacional y cobertura cambiaria." },
      ],
    },
    {
      id: "agresivo",
      nombre: "Agresivo",
      horizonte: "3+ años",
      volatilidad: "Alta",
      resumen: "Foco en crecimiento de capital vía renta variable local e internacional, asumiendo mayor volatilidad de corto plazo.",
      activos: [
        { ticker: "GGAL", tipo: "Acción", peso: 25, analisis: "Principal apuesta al sector financiero local." },
        { ticker: "YPFD", tipo: "Acción", peso: 20, analisis: "Exposición a energía, alta sensibilidad a precios de commodities." },
        { ticker: "PAMP", tipo: "Acción", peso: 15, analisis: "Generación eléctrica, componente cíclico." },
        { ticker: "AAPL", tipo: "CEDEAR", peso: 20, analisis: "Tecnología global, ancla de crecimiento en dólares." },
        { ticker: "TSLA", tipo: "CEDEAR", peso: 20, analisis: "Alta volatilidad, componente de mayor riesgo/retorno." },
      ],
    },
  ],
};
