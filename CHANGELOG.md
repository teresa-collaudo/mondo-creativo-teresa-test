# Il mondo creativo di Teresa — 8.3-beta

Base: **8.3-alpha4** presa dal repository ufficiale in sola lettura (cache `teresa-v83-alpha4`).
Lavoro svolto su una copia isolata. Il repository ufficiale non è stato modificato e non è stato pubblicato nulla.
Cache del service worker: `teresa-v83-beta`.

| # | Richiesta | Stato | Cosa è cambiato |
|---|---|---|---|
| 1 | Differenziazione reale 3/4/5 anni | Fatto | Le schede vengono generate per l'età scelta, non ritoccate dopo. Tratto 6,5 / 4,5 / 3,25. Conta: 1–3 / 3–5 / 5–10 figure. Coppie: 2 / 3 / 4. Intruso tra 3 / 5 / 6. Sequenze AB / AB-AAB-ABB / ABC-AAB-ABB. Percorsi: una strada semplice / onde e zig-zag / curve, gradini e riccioli. Grande e piccolo: 2 / 3 / 4 misure (a 5 anni si numerano). Linee da ripassare: 1 / 3 / 4. Schede "per età": a 5 anni la lettera iniziale da ripassare. Ritaglia e Ripassa il contorno restano per 4–5 anni. Le 1.000 cornici cambiano solo per tratto e numero di decorazioni (4 / 8 / 12). |
| 2 | Giochi migliorati, risposte deterministiche | Fatto | Posizione della risposta giusta nei conteggi e dell'intruso variabile, ma fissa per ogni scheda (seme ricavato dall'ID e dall'età). Coppie con colonna destra mescolata e punti di partenza/arrivo per la linea. Sequenze con 2–3 scelte in basso invece di "disegna". Tolti i puntini inutili al centro. |
| 3 | Anteprima di stampa adattata allo schermo | Fatto | Finestra a tutta altezza: pagina intera visibile, comandi sempre visibili in basso, pulsanti − / Adatta / +. Con lo zoom si può scorrere. Su PC e tablet le opzioni stanno a destra. Sul telefono sono chiuse in "⚙ Opzioni" e si aprono a richiesta, così il foglio occupa quasi tutto lo schermo. Risoluzione di stampa invariata (A4 a 1240×1754, A5 a 1754×1240). Anche il visualizzatore mostra la scheda intera. |
| 4 | PNG, condivisione, date | Fatto | "⬇ PNG" scarica un'immagine di 1600 px (su iPhone usa il pannello di condivisione). "↗ Link" e "↗" sulle schede condividono il link `?scheda=<ID>` (funzionano anche i vecchi link numerici). Data stampata come "Data: 25/11/2026". |
| 5 | ID permanenti e migrazione preferiti | Fatto | 3.150 ID univoci, indipendenti dai titoli (es. `mot-14-ripassa-il-contorno`). Alla prima apertura gli indici di `teresa-fav` vengono convertiti nella nuova chiave `teresa-favorites`. Copia di sicurezza in `teresa-fav-v82`. `teresa-fav` resta intatta: tornando alla alpha4 i vecchi preferiti ci sono ancora. Indici senza corrispondenza conservati in `teresa-fav-unmapped`. |
| 6 | Protezione creazioni (IndexedDB) | Fatto | Database `teresa-personal` versione 1 e store `images` invariati. Viene richiesta la memoria persistente (`navigator.storage.persist`), in modo silenzioso. |
| 7 | Titoli semplici, diciture 8.3-beta | Fatto | Titoli come "Gatto · conta" e "Gatto · conta · 2", senza "laboratorio 46". Home: "8.3 beta" e "3.150 schede create da 66 disegni originali". Il contatore mostra l'età attiva. Tolto "· 8.1" dalla finestra di stampa. |
| 8 | Installazione, offline, dedica, funzioni esistenti | Fatto nel codice | Schermata di benvenuto con installazione, dedica, pulsante Esci, AI, creazioni e stampa multipla sono invariati. Il service worker è identico salvo il nome della cache. L'offline non è stato provato qui: vedi il rapporto dei test. |
| 9 | Cache `teresa-v83-beta` | Fatto | |

## Come funziona la migrazione dei preferiti
L'ordine delle 3.150 schede è lo stesso della 8.2 e della alpha4 (verificato automaticamente), quindi l'indice *i* della 8.2 corrisponde a `data[i].id`. Esempi verificati:

| Indice 8.2 | Titolo 8.2 | Nuovo ID | Titolo beta |
|---|---|---|---|
| 0 | Albero di Natale | `base-01` | Albero di Natale |
| 25 | Pallina grande | `nat-14` | Pallina grande |
| 200 | Coccinella – ripassa il contorno | `mot-14-ripassa-il-contorno` | Coccinella · ripassa il contorno |
| 1500 | Riccio tra le foglie – Collega le coppie 4 · laboratorio 4 | `lab-04-28` | Riccio tra le foglie · coppie · 4 |
| 3149 | Farfalla – attività 5 anni | `eta-50-5` | Farfalla · scheda 5 anni |

## Cambiamenti da conoscere
- Contare, coppie, intruso, sequenze, percorsi, grande e piccolo, tavolozza e decora ora valgono anche per 3 anni, con quantità adatte. Con il filtro 3 anni le schede passano da 1.817 a 2.788. Con 4 e 5 anni restano 3.050.
- Le schede di una stessa voce cambiano aspetto a seconda dell'età scelta nel filtro. Con "Tutte le età" si vede la versione per 4 anni.
- Funzioni rimosse perché inutilizzate: `legacyPrintSheet` e la vecchia `ageArt`.
