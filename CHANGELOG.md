# Il mondo creativo di Teresa — 8.3-beta5

Base: 8.3-beta4. Cache `teresa-v83-beta5`. Il repository ufficiale non è stato modificato.

| Novità | Dettagli |
|---|---|
| 50 illustrazioni gratuite | Generate con **Cloudflare Workers AI** (modello FLUX.1 schnell), nella quota gratuita giornaliera: costo 0 €. Ripulite in bianco e nero. |
| Temi | Mestieri, mezzi di trasporto, fiabe classiche (Cappuccetto Rosso, i tre porcellini, castello, draghetto, principessa), frutta e verdura, insetti, giochi, **i 12 mesi dell'anno** (Carnevale, festa del papà e della mamma, mare, montagna, castagne, letterina di Natale…), altri animali. |
| Controllo qualità | 9 immagini rigenerate: scritte («SCHOOL»), una firma, anatomie strane, colori rosati, e 2 richieste bloccate per errore dal filtro di Cloudflare. |
| Totale | 3.305 schede, di cui 155 disegni illustrati (50 Gemini, 55 Openclipart, 50 Cloudflare). Gli ID precedenti non cambiano. |
| Offline | 155 immagini, circa 5 MB, salvate alla prima apertura. |

---

# Il mondo creativo di Teresa — 8.3-beta4

Base: 8.3-beta3. Cache `teresa-v83-beta4`. Il repository ufficiale non è stato modificato.

| Novità | Dettagli |
|---|---|
| 55 disegni gratuiti | Scelti a mano tra 310 candidati di **Openclipart**, tutti di pubblico dominio (CC0: uso libero, anche nell'app). Scaricati in formato vettoriale, convertiti ad alta risoluzione e ripuliti in bianco e nero. Scartati quelli con scritte, colori, temi non adatti, o il cui file non corrispondeva all'anteprima. |
| Categorie | Animali, Natale, Stagioni, Festività, Lavoretti, Emozioni, Numeri e forme. Ci sono anche 6 numeri decorati (dal 2 al 7) e un «unisci i puntini». |
| Totale | 3.255 schede, di cui 105 disegni illustrati (50 Gemini + 55 Openclipart). Le schede e gli ID precedenti non cambiano. |
| Offline | Le 105 immagini (3 MB) vengono salvate alla prima apertura. |
| Costo | 0 €. |

Crediti: disegni da openclipart.org, pubblico dominio (CC0).

---

# Il mondo creativo di Teresa — 8.3-beta3

Base: 8.3-beta2. Cache `teresa-v83-beta3`. Il repository ufficiale non è stato modificato.

| Novità | Dettagli |
|---|---|
| 50 illustrazioni da colorare | Generate con Gemini 2.5 Flash Image tramite la chiave del progetto. Pulite automaticamente: bianco e nero netto, colori trasformati in bianco, linee più spesse, margini rifilati. 1.6 MB in tutto. |
| Nuova categoria «🖍 Illustrazioni» | Prima delle categorie, con riquadro in home e sezione «✨ Nuove illustrazioni» al posto di «Disegni consigliati». Età: 3–5 anni per i disegni semplici e medi, 4–5 anni per le scene ricche. |
| Stampa, PNG, preferiti, link | Le illustrazioni usano tutte le funzioni delle schede: stampa A4/A5/A6 con nomi e data, PDF, PNG, preferiti, link. |
| Offline | Il service worker salva le 50 illustrazioni alla prima apertura. |
| Compatibilità | Le illustrazioni sono aggiunte dopo le 3.150 schede: gli ID e i preferiti esistenti non cambiano. Totale: 3.200 schede. |
| Revisione | 2 immagini rigenerate: la 31, perché aveva scritte in inglese, e la 35, per evitare un personaggio somigliante a uno famoso. |
| Costo stimato della generazione | 52 immagini × 0,039 $ ≈ 2 $, più le prove iniziali (≤ 0,30 $). |

---

# Il mondo creativo di Teresa — 8.3-beta2

Base: 8.3-beta, pubblicata sul sito di prova. Cache `teresa-v83-beta2`. Il repository ufficiale non è stato modificato.

| Novità | Stato | Dettagli |
|---|---|---|
| «Le mie immagini» (prima «Creazioni») | Fatto | Pulsante «📥 Aggiungi immagini» e messaggio quando la sezione è vuota. Ogni immagine ha: Stampa e personalizza, Rendi da colorare, Visualizza, Scarica, Elimina. Le immagini restano solo sul dispositivo. |
| Stampa personalizzata delle proprie immagini | Fatto | Stesso motore delle schede: titolo (preso dal nome del file), istruzione, data, nomi dei bambini, 1×A4, 2×A5, 4×A6, PDF/PNG, condivisione. «Schede differenti» viene disattivato. |
| Rendi da colorare | Fatto | Trasforma un'immagine (anche a colori o con sfondo grigio) in bianco e nero netto. Livello di nero regolabile, opzione «Linee più spesse». Salva una nuova copia e conserva l'originale. |
| Cerca idee su Pinterest | Fatto | Apre Pinterest sulla ricerca «disegni da colorare <tema> scuola infanzia». L'app non preleva immagini da Pinterest: Teresa le scarica e le aggiunge lei. |
| Condividi → Teresa (Android) | Fatto nel codice, verificato in Chromium | Dalla Galleria si può condividere un'immagine direttamente all'app installata, che la salva in «Le mie immagini». Un link condiviso da solo (per esempio da Pinterest) mostra come procedere. Su iPhone non è supportato dal sistema. |
| Assistente AI per Gemini | Fatto | Collegamento «Apri Gemini». Richieste riscritte in stile «libro da colorare», con dettaglio diverso per 3, 4 e 5 anni e personaggi originali. |

---

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
