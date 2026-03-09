# src/assets/strutture/

Questa cartella contiene le immagini delle strutture.

## Struttura delle cartelle

```
src/assets/strutture/
├── casa-cavour/
│   ├── cover.jpg      ← Foto principale (obbligatoria) — consigliato: 800×500px
│   └── logo.png       ← Logo della struttura (opzionale)
│
├── nome-struttura-2/
│   ├── cover.jpg
│   └── logo.png
│
└── ...
```

## Come aggiungere una nuova struttura

1. Crea una cartella in `src/assets/strutture/<nome-slug>/`
2. Inserisci `cover.jpg` (foto principale, rapporto 16:10 consigliato)
3. Inserisci `logo.png` se disponibile (opzionale)
4. Apri `src/strutture.js` e:
   - Aggiungi l'`import` dell'immagine in cima al file
   - Copia il blocco template e compila tutti i campi
5. Salva e fai deploy

## Dimensioni consigliate

| File      | Dimensioni      | Formato |
|-----------|-----------------|---------|
| cover.jpg | 800 × 500 px    | JPEG    |
| logo.png  | 400 × 400 px    | PNG     |
