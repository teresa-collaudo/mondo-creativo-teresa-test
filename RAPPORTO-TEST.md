# Rapporto dei test — 8.3-beta3

- **Illustrazioni: 19/19 superati.**
  - Catalogo di 3.200 schede; le prime 3.150 identiche alla beta2 (ID, titolo, categoria); ID univoci; 50 file presenti.
  - Su PC e telefono: home con 6 illustrazioni, categoria con 50 schede, visualizzatore a pagina intera, anteprima di stampa disegnata, PNG scaricato.
  - Service worker: 50 illustrazioni in cache; offline visibili.
- **Regressione:** browser 85/85; telefono 18/18; «Le mie immagini», condivisione e offline 26/26.

---

# Rapporto dei test — 8.3-beta2 (26/11/2026)

**Nuove funzioni: 26/26 superati** (Chromium, telefono emulato 412×915, servizio locale con service worker attivo):
- Aggiunta di un'immagine; pulsanti presenti; messaggio a sezione vuota.
- «Rendi da colorare»: risultato solo bianco e nero, sfondo grigio diventato bianco, contorno nero conservato, finestra senza scorrimento, salvataggio come nuova immagine senza perdere l'originale.
- Stampa di un'immagine personale: titolo dal nome del file, formato 4×A6 con i nomi MARIO e GIULIA, anteprima intera.
- Pinterest: indirizzo di ricerca corretto. Richiesta per Gemini adatta a 5 anni.
- **Service worker reale:** attivo, cache `teresa-v83-beta2`. La condivisione di un'immagine arriva in «Le mie immagini» con il messaggio «1 immagine aggiunta». La condivisione di un solo link è gestita.
- **Offline reale** (rete disattivata): l'app si apre, archivio e schede disponibili, immagini personali disponibili.
- Nessun errore JavaScript.

**Regressione sulla beta2:** catalogo 17/17, browser 85/85, telefono 18/18.

**Da verificare su dispositivo:** il menu «Condividi» di Android mostra «Teresa» solo con l'app installata. Chrome può impiegare fino a un giorno ad aggiornare l'app già installata; in alternativa si disinstalla e si reinstalla. Su iPhone questa funzione non esiste.

---

# Rapporto dei test — 8.3-beta

Elenca solo test eseguiti davvero, il 25/11/2026, sulla build finale. Sono stati eseguiti in Node.js (catalogo) e in Chromium headless con Playwright, servendo la beta in locale (http://127.0.0.1).

## A. Catalogo — 17/17 superati
- 8.2 e beta hanno entrambe 3.150 schede. ID univoci 3.150/3.150, titoli univoci 3.150/3.150.
- Confronto posizione per posizione con il codice originale della 8.2: categoria identica 3.150/3.150, soggetto e sezione coerenti 3.150/3.150, tipo di attività identico 3.150/3.150.
- La alpha4 in produzione ha lo stesso ordine di titoli e categorie della 8.2: la migrazione vale anche per il telefono di Teresa.
- 8.888 combinazioni scheda×età generate senza errori.
- Nessuna istruzione in contrasto con il disegno: numero di stelle e cerchi verificato.
- Conteggi: in 798 schede le figure disegnate coincidono con la risposta corretta. Le quantità stanno sempre nell'intervallo dell'età.
- Posizione della risposta giusta distribuita su 3 posizioni (259 / 261 / 278). Intruso distribuito su 6 posizioni.
- Generazione deterministica: rigenerando, si ottiene lo stesso disegno.
- 3.000/3.000 schede multi-età hanno un disegno diverso per ogni età.

## B. Browser — 85/85 superati (più 18 prove specifiche sul telefono)
- **Migrazione:** indici [0, 25, 200, 1500, 3149, 99999] → 5 ID corretti; `teresa-fav-v82` identico all'originale; `teresa-fav` intatta; 99999 conservato in `teresa-fav-unmapped`; nessuna seconda migrazione al riavvio; aggiunta e rimozione dei preferiti salvate per ID.
- **Anteprima di stampa** su PC 1366×768, portatile basso 1280×600, monitor 1920×937, tablet 820×1180 e telefono 390×844; inoltre Android 360×640, Galaxy 412×915 e iPhone 13 (emulati), con le opzioni chiuse e aperte: A4 intero visibile; finestra contenuta nello schermo; pulsanti visibili senza scorrere; nessuno scorrimento in "Adatta"; Zoom + ingrandisce e permette di scorrere; Adatta torna alla pagina intera; 2×A5 adattato; canvas di stampa a 1240 px (invariato); chiusura con ✕.
- **Visualizzatore:** scheda intera senza scorrere sui tre schermi.
- **Archivio:** filtri 3/4/5/tutte; paginazione 48 → 96; il contatore mostra l'età.
- **Date:** "Data: 25/11/2026"; senza data, "Data: __________".
- **PNG:** download di `Teresa-albero-di-natale.png`, 1600 px, file PNG valido.
- **Link:** `?scheda=base-01` generato. `?scheda=mot-14-ripassa-il-contorno` e il vecchio `?scheda=200` aprono la stessa scheda.
- **Creazioni:** immagine importata conservata dopo il riavvio; IndexedDB `teresa-personal` versione 1, store `images`.
- **Esci:** la conferma si apre e Annulla la chiude.
- Nessun errore JavaScript in nessuna sessione.

## C. Non verificato qui (da fare su teresa-collaudo.github.io)
- **Offline e service worker:** la registrazione avviene solo in HTTPS, quindi in locale non è attiva. Va rifatta la checklist tecnica su PC (5 controlli).
- **Stampa reale e condivisione con il pannello di sistema** (WhatsApp, "Salva su File"): il browser di test non ha stampante né pannello di condivisione.
- **iPhone/iPad e un Android di fascia bassa:** nessun dispositivo reale disponibile.
- **Migrazione con i dati veri:** caricare prima la 8.2 o la alpha4 sul collaudo, aggiungere preferiti, poi sostituire con la beta.
- **Installazione PWA dalla schermata di benvenuto:** il codice è invariato rispetto alla alpha4, ma non è stato provato qui.
