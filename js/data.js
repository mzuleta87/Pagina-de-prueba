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

  // "historial" son precios intradía de referencia (apertura -> cierre) para
  // dibujar el sparkline de cada fila. En producción esto va a venir de la
  // serie horaria que devuelva la API de mercado, mismo patrón que el resto.
  cotizaciones: [
    { ticker: "GGAL", tipo: "Acción", precio: "6.850", variacion: "+2.4%", volumen: "4.820 M", up: true,
      historial: [6690,6705,6680,6720,6760,6740,6780,6810,6795,6830,6850] },
    { ticker: "YPFD", tipo: "Acción", precio: "41.200", variacion: "-0.8%", volumen: "1.900 M", up: false,
      historial: [41540,41480,41510,41390,41340,41410,41280,41250,41310,41230,41200] },
    { ticker: "PAMP", tipo: "Acción", precio: "3.120", variacion: "+0.6%", volumen: "1.230 M", up: true,
      historial: [3101,3095,3108,3090,3112,3105,3118,3110,3125,3115,3120] },
    { ticker: "AAPL", tipo: "CEDEAR", precio: "9.410", variacion: "+1.1%", volumen: "3.150 M", up: true,
      historial: [9310,9325,9300,9340,9360,9345,9375,9390,9380,9400,9410] },
    { ticker: "TSLA", tipo: "CEDEAR", precio: "18.300", variacion: "-1.5%", volumen: "2.040 M", up: false,
      historial: [18580,18560,18490,18520,18440,18400,18420,18350,18310,18330,18300] },
    { ticker: "S31L6", tipo: "Letra", precio: "98.40", variacion: "+0.1%", volumen: "2.410 M", up: true,
      historial: [98.30,98.28,98.32,98.31,98.35,98.33,98.36,98.38,98.37,98.39,98.40] },
    { ticker: "YMCXO", tipo: "Oblig. Neg.", precio: "101.20", variacion: "+0.2%", volumen: "980 M", up: true,
      historial: [101.00,100.95,101.05,100.98,101.10,101.05,101.12,101.08,101.15,101.18,101.20] },
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

  // Carteras sugeridas: combinación de activos por perfil de riesgo. "peso"
  // en % debe sumar 100 dentro de cada cartera. Basado en criterios que
  // vienen recomendando las mesas de asesoramiento locales para el mes;
  // conviene revisar y actualizar este objeto periódicamente.
  // Fuentes consultadas para armar y justificar las 3 carteras sugeridas.
  // Conviene revisar/actualizar este listado cada vez que se actualicen
  // los activos o pesos de "carteras".
  fuentesCarteras: [
    { nombre: "IOL invertironline — Portafolios sugeridos, agosto 2026", url: "https://www.invertironline.com/posts/reportes/portafolios-sugeridos-argentina-agosto-03-08-2026" },
    { nombre: "Ámbito — En qué invertir en agosto: bonos, CEDEARs y cobertura cambiaria", url: "https://www.ambito.com/finanzas/en-que-invertir-agosto-las-apuestas-del-mercado-bonos-cedears-y-activos-cubrirse-del-dolar-n6303697" },
    { nombre: "Bloomberg Línea — Estrategias en CEDEAR para 2026", url: "https://www.bloomberglinea.com/latinoamerica/argentina/en-que-invertir-en-argentina-las-estrategias-en-cedear-para-2026/" },
    { nombre: "Alfy Inversiones — Riesgo país en baja: ¿CEDEARs o acciones argentinas?", url: "https://alfyinversiones.com.ar/blog/cartera-global-o-riesgo-argentino-donde-invertir-tras-la-baja-del-riesgo-pais/" },
    { nombre: "Rankia — CEDEAR para invertir en agosto 2026", url: "https://www.rankia.com.ar/blog/cedear/7416409-3-cedear-invertir-agosto-2026" },
    { nombre: "iProUp — Ranking de CEDEAR y acciones que recomiendan analistas", url: "https://www.iproup.com/economia-digital/62851-en-que-puedo-invertir-hoy-ranking-de-cedear-y-acciones-que-recomiendan-analistas" },
  ],

  carteras: [
    {
      id: "conservadora",
      nombre: "Conservadora",
      horizonte: "6-12 meses",
      volatilidad: "Baja",
      resumen: "Prioriza la preservación de capital y la cobertura cambiaria por sobre el rédito. Baja exposición a renta variable.",
      activos: [
        { ticker: "BRKB", tipo: "CEDEAR", peso: 25, analisis: "Holding diversificado de Warren Buffett; históricamente exhibe menor volatilidad que el promedio del mercado tecnológico, buena forma de dolarizar sin asumir riesgo de un solo sector." },
        { ticker: "D30S6", tipo: "Bono", peso: 20, analisis: "Bono dólar-linked; cobertura cambiaria ante la posibilidad de que el tipo de cambio oficial converja hacia los dólares financieros." },
        { ticker: "TLCPO", tipo: "Oblig. Neg.", peso: 20, analisis: "ON hard-dollar de corta duración; menor exposición al riesgo de tasa y buen perfil crediticio del emisor." },
        { ticker: "KO", tipo: "CEDEAR", peso: 15, analisis: "Consumo defensivo con flujo de dividendos estable; baja sensibilidad al ciclo económico." },
        { ticker: "S31L6", tipo: "Letra", peso: 20, analisis: "Instrumento de corto plazo en pesos; aporta liquidez inmediata y estabilidad al conjunto de la cartera." },
      ],
    },
    {
      id: "moderada",
      nombre: "Moderada",
      horizonte: "2-4 años",
      volatilidad: "Media",
      resumen: "Combina dolarización estructural vía CEDEARs con una porción acotada de renta variable local y renta fija en pesos.",
      activos: [
        { ticker: "MELI", tipo: "CEDEAR", peso: 25, analisis: "Líder regional de e-commerce y fintech; crecimiento estructural con exposición diversificada en toda Latinoamérica." },
        { ticker: "AAPL", tipo: "CEDEAR", peso: 20, analisis: "Blue chip global de beta relativamente bajo dentro del sector tecnológico, con ingresos muy diversificados por geografía." },
        { ticker: "YPFD", tipo: "Acción", peso: 20, analisis: "Energía argentina; perfil algo menos volátil que el sector bancario local, con impulso de largo plazo por Vaca Muerta." },
        { ticker: "PLC4O", tipo: "Oblig. Neg.", peso: 20, analisis: "ON de duración media; balance razonable entre rendimiento ofrecido y riesgo crediticio asumido." },
        { ticker: "S31L6", tipo: "Letra", peso: 15, analisis: "Instrumento de corto plazo en pesos; aporta liquidez y amortigua la volatilidad del resto de la cartera." },
      ],
    },
    {
      id: "agresiva",
      nombre: "Agresiva",
      horizonte: "4+ años",
      volatilidad: "Alta",
      resumen: "Busca maximizar el retorno apostando a la compresión del riesgo país y a sectores de alto crecimiento global. Mayor exposición a volatilidad.",
      activos: [
        { ticker: "GGAL", tipo: "Acción", peso: 25, analisis: "Banco líder del panel, alta sensibilidad a la compresión del riesgo país; suele ser de los papeles de mayor beta del Merval." },
        { ticker: "PAMP", tipo: "Acción", peso: 20, analisis: "Exposición a energía; sector con fuerte potencial de expansión pero más volátil ante cambios regulatorios." },
        { ticker: "NVDA", tipo: "CEDEAR", peso: 20, analisis: "Líder en semiconductores para inteligencia artificial; alto crecimiento pero con múltiplos exigentes." },
        { ticker: "TSLA", tipo: "CEDEAR", peso: 20, analisis: "Alta volatilidad histórica; apuesta a movilidad eléctrica y disrupción tecnológica de largo plazo." },
        { ticker: "VSCVO", tipo: "Oblig. Neg.", peso: 15, analisis: "ON de mayor rendimiento relativo dentro del panel, asumiendo más riesgo crediticio que emisores de primera línea." },
      ],
    },
  ],
};
