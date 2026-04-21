// ─────────────────────────────────────────────────────────────────────────────
// posts.jsx — Articoli blog per Romagna Affitti Brevi (versione italiana)
//
// Come aggiungere un nuovo articolo:
// 1. Copia il blocco template qui sotto
// 2. Compila tutti i campi
// 3. Salva — l'articolo appare automaticamente nella sezione blog
//
// Struttura contenuto:
//   { tipo: "paragrafo", testo: "..." }
//   { tipo: "titoletto", testo: "..." }
//   { tipo: "link", testo: "URL", etichetta: "testo link" }
// ─────────────────────────────────────────────────────────────────────────────

export const posts = [
  {
    id: "dove-affittare-romagna-2026",
    titolo: "Dove affittare in Romagna: guida agli affitti brevi tra mare e colline",
    data: "2026-04-21",
    categoria: "Guide alla Romagna",
    sommario: "La Romagna offre alcune delle destinazioni più belle d'Italia per un affitto breve di qualità. Dal mare di Rimini e Cesenatico alle colline di Bertinoro e Longiano, ogni angolo ha la sua identità. Ecco come scegliere la base giusta per il tuo soggiorno.",
    contenuto: [
      {
        tipo: "paragrafo",
        testo: "Scegliere dove affittare in Romagna non è semplice come sembra. La regione è piccola ma straordinariamente varia: in un raggio di 40 chilometri puoi passare dalla Riviera adriatica alle colline coperte di vigneti, dai centri storici medievali ai borghi silenziosi dell'entroterra. Ogni zona ha un carattere diverso, e la scelta della base giusta può fare la differenza tra una vacanza anonima e un'esperienza autentica.",
      },
      {
        tipo: "titoletto",
        testo: "La costa: Rimini, Cesenatico e Cervia",
      },
      {
        tipo: "paragrafo",
        testo: "La Riviera romagnola è la destinazione classica per chi cerca il mare. Rimini è la più grande e vivace — ideale per chi vuole movida, spiagge attrezzate e una vita notturna intensa. Cesenatico, con il suo porto canale progettato da Leonardo da Vinci, ha un carattere più raccolto e una tradizione culinaria di pesce straordinaria. Cervia, con le sue saline e la pineta, è perfetta per chi cerca una Riviera più tranquilla e a misura di famiglia. Secondo Emilia-Romagna Turismo, la Riviera ospita oltre 12 milioni di presenze turistiche ogni anno — ma scegliendo un appartamento invece di un hotel, puoi vivere la costa come un locale.",
      },
      {
        tipo: "titoletto",
        testo: "Le colline: Bertinoro, Longiano e i borghi dell'entroterra",
      },
      {
        tipo: "paragrafo",
        testo: "A soli 20-30 minuti dalla costa, le colline romagnole offrono un'esperienza completamente diversa. Bertinoro è chiamata il Balcone della Romagna — dalla sua rocca medievale si vedono sia le colline che il mare. Longiano conserva intatto il suo castello malatestiano. Meldola, Predappio e Civitella di Romagna sono borghi autentici dove la vita scorre ancora ai ritmi della campagna. Per chi cerca silenzio, aria pulita e una cucina non ancora contaminata dal turismo di massa, le colline sono la scelta più intelligente.",
      },
      {
        tipo: "titoletto",
        testo: "Le città d'arte: Ravenna, Cesena e Forlì",
      },
      {
        tipo: "paragrafo",
        testo: "Chi viene in Romagna per la cultura non può mancare Ravenna — otto monumenti UNESCO, i mosaici più belli del mondo occidentale, e un centro storico che si esplora comodamente a piedi. Cesena, con la sua Biblioteca Malatestiana (la prima biblioteca pubblica d'Europa) e la Rocca, è una città universitaria vivace e underrated. Forlì ha una collezione di arte del Novecento di livello nazionale e un centro storico di impianto romano perfettamente leggibile. Un appartamento in posizione centrale in una di queste città è la base ideale per un itinerario culturale.",
      },
      {
        tipo: "titoletto",
        testo: "Come scegliere la base giusta",
      },
      {
        tipo: "paragrafo",
        testo: "La risposta dipende da cosa vuoi fare. Se il mare è la priorità, scegli Rimini, Cesenatico o Cervia. Se vuoi combinare mare e cultura, un appartamento a Ravenna ti permette di raggiungere la spiaggia in 15 minuti e i mosaici a piedi. Se cerchi autenticità e tranquillità, le colline sono imbattibili. E se vuoi esplorare tutto — mare, colline e città — scegli una base centrale come Cesena o Forlì, da dove raggiungi ogni angolo della Romagna in meno di 40 minuti.",
      },
      {
        tipo: "link",
        testo: "https://www.romagna-affitti-brevi.it/",
        etichetta: "Scopri le strutture in directory",
      },
      {
        tipo: "titoletto",
        testo: "Leggi anche",
      },
      {
        tipo: "paragrafo",
        testo: "Sul blog di Romagna Affitti Brevi trovi guide al territorio, consigli per scegliere l'alloggio giusto e racconti autentici sulla Romagna. Ogni articolo è scritto da chi conosce davvero questa terra.",
      },
      {
        tipo: "link",
        testo: "https://www.romagna-affitti-brevi.it/#blog",
        etichetta: "Tutti gli articoli",
      },
    ],
    attivo: true,
  },
];
