// ─────────────────────────────────────────────────────────────────────────────
// STRUTTURE.JS — Dati delle strutture per Romagna Affitti Brevi
//
// HOW TO ADD A NEW STRUTTURA:
// 1. Add a folder in src/assets/strutture/<nome-struttura>/
// 2. Place cover.jpg (main photo) and logo.png (optional) in that folder
// 3. Copy a block below, fill in all fields, and add it to the array
// ─────────────────────────────────────────────────────────────────────────────

// ── Importa le immagini di Casa Cavour ────────────────────────────────────────
// Aggiungi qui le tue import quando aggiungi nuove strutture:
import casaCavourCover from './assets/strutture/casa-cavour/cover.jpg'
// import casaCavourLogo from './assets/strutture/casa-cavour/logo.png'

// ── Esempio struttura aggiuntiva (decommentare e personalizzare):
// import villaRomagnacover from './assets/strutture/villa-romagna/cover.jpg'

export const strutture = [
  {
    id: "casa-cavour",
    nome: "Casa Cavour",
    // logo: casaCavourLogo,      // opzionale — se hai un logo
    cover: casaCavourCover,
    localita: "Bertinoro (FC)",
    regione: "Emilia-Romagna",
    tipologia: "Appartamento",   // Appartamento / B&B / Villa / Agriturismo / Casa vacanze
    ospiti: 4,
    camere: 1,
    bagni: 1,
    animali: false,
    descrizione: "Appartamento di design nel centro storico di Bertinoro — il \"Balcone della Romagna\". Arredamento curato, cucina completa, WiFi fibra. Ideale per coppie, famiglie e smart workers.",
    tag: ["WiFi fibra", "Cucina completa", "A/C", "Parcheggio", "Self check-in"],
    distanze: [
      { luogo: "Cesena", tempo: "15 min" },
      { luogo: "Cesenatico", tempo: "30 min" },
      { luogo: "San Marino", tempo: "35 min" },
      { luogo: "Rimini", tempo: "40 min" },
      { luogo: "Bologna", tempo: "60 min" },
    ],
    rating: 5.0,
    recensioni: 24,
    prezzo_da: 85,          // € per notte (indicativo)
    url: "https://casa-cavour.vercel.app/",
    airbnb: "https://airbnb.com/h/casacavour-bertinoro",
    attivo: true,
  },

  // ── TEMPLATE — Copia questo blocco per aggiungere una nuova struttura ────────
  // {
  //   id: "nome-struttura",           // slug unico, es. "villa-adriatica"
  //   nome: "Nome della Struttura",
  //   cover: villaRomagnaCover,        // import in cima a questo file
  //   // logo: villaRomagna Logo,      // opzionale
  //   localita: "Città (PR)",
  //   regione: "Emilia-Romagna",
  //   tipologia: "Villa",
  //   ospiti: 8,
  //   camere: 4,
  //   bagni: 2,
  //   animali: true,
  //   descrizione: "Breve descrizione della struttura...",
  //   tag: ["Piscina", "WiFi", "Barbecue"],
  //   distanze: [
  //     { luogo: "Rimini", tempo: "10 min" },
  //     { luogo: "San Marino", tempo: "25 min" },
  //   ],
  //   rating: 4.9,
  //   recensioni: 12,
  //   prezzo_da: 150,
  //   url: "https://tuo-sito.vercel.app/",
  //   airbnb: "https://airbnb.com/h/...",
  //   attivo: true,
  // },
];
