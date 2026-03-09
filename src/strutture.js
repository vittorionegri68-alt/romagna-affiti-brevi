// ─────────────────────────────────────────────────────────────────────────────
// STRUTTURE.JS — Dati delle strutture per Romagna Affitti Brevi
//
// HOW TO ADD A NEW STRUTTURA:
// 1. Add a folder in src/assets/strutture/<nome-struttura>/
// 2. Place cover.jpg (main photo) in that folder
// 3. Add the import at the top of this file
// 4. Copy a block below, fill in all fields, and add it to the array
//
// NOTA: finché non hai ancora il file cover.jpg locale, puoi usare un URL
// esterno come stringa (es. da Airbnb o Google Photos) — vedi esempio sotto.
// ─────────────────────────────────────────────────────────────────────────────

// ── Importa immagini locali (decommenta quando hai il file fisico su GitHub) ──
// import casaCavourCover from './assets/Strutture/casa-cavour/cover.jpg'
import casaCavourCover from './assets/Strutture/casa-cavour/cover.jpg'
export const strutture = [
  {
    id: "casa-cavour",
    nome: "Casa Cavour",
    // ── USA UN URL ESTERNO finché non hai cover.jpg locale ───────────────────
    // Sostituisci questo URL con una tua foto (Airbnb, Google Photos, ecc.)
    // Quando hai il file locale, sostituisci questa riga con: cover: casaCavourCover,
    // Quando hai il file locale, sostituisci con: cover: casaCavourCover,
    cover: casaCavourCover,
    localita: "Bertinoro (FC)",
    regione: "Emilia-Romagna",
    tipologia: "Appartamento",
    ospiti: 4,
    camere: 2,
    bagni: 1,
    animali: true,
    descrizione: "Appartamento di design nel centro storico di Bertinoro — il \"Balcone della Romagna\". Arredamento curato, cucina completa, WiFi fibra. Ideale per coppie, famiglie e smart workers.",
    tag: ["WiFi fibra", "Cucina completa", "A/C", "Parcheggio pubblico", "Self check-in"],
    distanze: [
      { luogo: "Cesena", tempo: "15 min" },
      { luogo: "Cesenatico", tempo: "30 min" },
      { luogo: "San Marino", tempo: "35 min" },
      { luogo: "Rimini", tempo: "40 min" },
      { luogo: "Bologna", tempo: "60 min" },
    ],
    rating: 5.0,
    recensioni: 24,
    prezzo_da: 85,
    url: "https://casa-cavour.vercel.app/",
    airbnb: "https://airbnb.com/h/casacavour-bertinoro",
    attivo: true,
  },

  // ── TEMPLATE — Copia questo blocco per aggiungere una nuova struttura ────────
  // {
  //   id: "nome-struttura",
  //   nome: "Nome della Struttura",
  //   cover: "https://...",           // URL esterno OPPURE import locale
  //   localita: "Città (PR)",
  //   regione: "Emilia-Romagna",
  //   tipologia: "Villa",             // Appartamento / B&B / Villa / Agriturismo
  //   ospiti: 8,
  //   camere: 4,
  //   bagni: 2,
  //   animali: true,
  //   descrizione: "Breve descrizione...",
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
