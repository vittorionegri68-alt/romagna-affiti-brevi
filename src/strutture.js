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

// ── Importa immagini locali (decommenta quando hai il file fisico su GitHub) ──
// import casaCavourCover from './assets/Strutture/casa-cavour/cover.jpg'

import casaCavourCover from './assets/Strutture/casa-cavour/cover.jpg'
import perlacover from './assets/Strutture/perla/cover.jpg'
import scalinocover from './assets/Strutture/Teatro/cover.jpg'
import garibaldinacover from './assets/Strutture/garibaldina/cover.jpg'
import samillacover from './assets/Strutture/samilla/cover.jpg'

export const strutture = [
  {
    id: "casa-cavour",
    nome: "Casa Cavour",
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
    rating: 4.5,
    recensioni: 10,
    prezzo_da: 85,
    url: "https://casa-cavour.vercel.app/",
    airbnb: "https://airbnb.com/h/casacavour-bertinoro",
    attivo: true,
  },
  {
    id: "La-Perla-del-Mare",
    nome: "La Perla del Mare",
    cover: perlacover,
    localita: "Cesenatico (FC)",
    regione: "Emilia-Romagna",
    tipologia: "Appartamento",
    ospiti: 6,
    camere: 2,
    bagni: 1,
    animali: true,
    descrizione: "Nel cuore di Cesenatico, vicino al mare. Perla del Mare alloggio con ascensore balconi e garagelo rendono perfetto per famiglie, gruppi di amici e anche per chi lavora in smart grazie al Wi-fi veloce.",
    tag: ["WiFi fibra", "Cucina completa", "A/C","Ascensore","Biciclette","Box Auto Privato","Self check-in"],
    distanze: [
      { luogo: "Parco di Levante", tempo: "4 min" },
      { luogo: "Mare", tempo: "400 mt" },
      { luogo: "Cesena", tempo: "15 min" },
      { luogo: "San Marino", tempo: "35 min" },
      { luogo: "Rimini", tempo: "40 min" },
      { luogo: "Bologna", tempo: "60 min" },
    ],
    rating: 5.0,
    recensioni: 26,
    prezzo_da: 120,
    url: "https://laperla-seven.vercel.app/",
    airbnb: "https://www.airbnb.it/rooms/1310946139319199865",
    attivo: false,
  },
 {
    id: "Scalino-66",
    nome: "Scalino 66",
    cover: scalinocover,
    localita: "Cesena (FC)",
    regione: "Emilia-Romagna",
    tipologia: "Appartamento",
    ospiti: 2,
    camere: 1,
    bagni: 1,
    animali: true,
    descrizione: "Luminoso bilocale appena ristrutturato al terzo piano senza ascensore, nel centro storico di Cesena, a pochi passi da bar, ristoranti e servizi pubblici. Scalino 66 prende il nome dal numero di scalini che è necessario salire per arrivare all'appartamento.",
    tag: ["WiFi", "Cucina completa", "A/C","Luminoso","Centro Storio","Self check-in"],
    distanze: [
      { luogo: "Cesenatico", tempo: "25 min" },
      { luogo: "San Marino", tempo: "45 min" },
      { luogo: "Rimini", tempo: "30 min" },
      
    ],
    rating: 5.0,
    recensioni: 12,
    prezzo_da: 125,
    url: "https://scalino66.vercel.app/",
    airbnb: "https://www.airbnb.it/rooms/1388960535225462602",
    attivo: false,
  },
 {
  id: 'garibaldina-75',
  nome: 'Garibaldina 75',
  cover: garibaldinacover,
  localita: 'Cesena, FC',
  regione: 'Emilia-Romagna',
  tipologia: 'Appartamento',
  ospiti: 4,
  camere: 1,
  bagni: 1,
  animali: true,
  descrizione: 'Appartamento luminoso e accogliente nel cuore di Cesena. Negozi, locali e bellezze storiche a portata di mano. WiFi veloce, cucina completa, self check-in con serratura smart.',
  tag: ['Centro storico', 'WiFi', 'Cucina attrezzata', 'Self check-in', 'Aria condizionata'],
  distanze: [
    { luogo: 'Rocca Malatestiana', tempo: '8 min a piedi' },
    { luogo: 'Stazione FS Cesena', tempo: '10 min a piedi' },
    { luogo: 'Cesenatico (mare)', tempo: '30 min in auto' },
    { luogo: 'San Marino', tempo: '35 min in auto' },
    { luogo: 'Rimini', tempo: '40 min in auto' },
    { luogo: 'Bologna Aeroporto', tempo: '60 min in auto' },
  ],
  rating: 5,
  recensioni: 2,
  prezzo_da: 105,
  url: "https://garibaldina-75.romagna-affitti-brevi.it",      
  airbnb: "https://www.airbnb.it/rooms/1558562623962692060",
  attivo: true,
},
{
    id: 'samilla-loft',
    nome: 'Samilla Loft',
    cover: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1618206280550914997/original/2916e3d6-8aa4-4503-b605-29f860066e90.jpeg',
    localita: 'Rimini (RN)',
    regione: 'Emilia-Romagna',
    tipologia: 'Appartamento',
    ospiti: 3,
    camere: 1,
    bagni: 1,
    animali: null,
    descrizione: 'Loft moderno e luminoso nel cuore di Rimini, a pochi passi dalla spiaggia adriatica. Vista sulla spiaggia, Wi-Fi, aria condizionata e biciclette incluse. Ideale per 2-3 ospiti.',
    tag: ['Vista mare', 'Biciclette incluse', 'Wi-Fi', 'Aria condizionata', 'Self check-in'],
    distanze: [
      { luogo: 'Spiaggia di Rimini', tempo: '2 min a piedi' },
      { luogo: 'Centro di Rimini', tempo: '10 min a piedi' },
      { luogo: 'Cesena', tempo: '30 min in auto' },
      { luogo: 'San Marino', tempo: '35 min in auto' },
      { luogo: 'Ravenna', tempo: '40 min in auto' },
      { luogo: 'Bologna', tempo: '80 min in auto' },
    ],
    rating: 4.88,
    recensioni: 0,
    prezzo_da: null,
    url: 'https://samilla.romagna-affitti-brevi.it/',
    airbnb: 'https://www.airbnb.it/rooms/1618206280550914997',
    attivo: true,
  },
];
