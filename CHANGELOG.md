# 8.3-alpha — Blocco 1
Base: ZIP 8.2 originale, copia separata. Nessuna pubblicazione.

| Punto | Stato | Intervento e limite |
|---|---|---|
| 1 | Fatto nel codice | Manifest e icone originali recuperati dal primo pacchetto; icona maskable aggiunta; cache accessori facoltativa. Offline reale da verificare. |
| 2 | Fatto nel codice | Nessuna aggiunta di stelle; attività con istruzioni o età singola lasciate intatte. Differenziazione avanzata rinviata al blocco 2. |
| 3 | Parziale | Prime 48 schede, altre 48 a richiesta, ricerca ritardata 300 ms, cuore aggiornato senza ricostruzione. Mostra altre ricostruisce le schede già visibili; rimozione da preferiti non riempie automaticamente lo spazio liberato. |
| 4 | Fatto nel codice | Pulizia afterprint e timeout 180 secondi; messaggio durante preparazione. Stampa mobile da verificare. |
| 5 | Fatto nel codice | File PNG/PDF preparati prima del tocco; share chiamato direttamente, download alternativo. Salvataggio effettivo dipende dal browser; non viene dichiarato completato. |
| 6 | Fatto nel codice | Caricamento immagini tramite onload/onerror, senza decode. |
| 7 | Parziale | Fallback overlay sui dialog esistenti con chiusura e focus iniziale; non implementato isolamento completo del focus e dello sfondo. |

Punti 8–26: non affrontati, riservati ai blocchi successivi. Versioni visibili legacy non uniformate (punto 13). Chiavi localStorage e schema IndexedDB invariati; migrazione reale non verificata. Nessuna nuova libreria o servizio.

Verifiche eseguite: node --check su tutti gli script inline estratti e sul service worker; controllo integrità ZIP. Nessun test browser o dispositivo reale. Non è una release di produzione.

## Collaudo alpha richiesto
- Installare su ambiente separato HTTPS; verificare avvio online, riapertura in modalità aereo e installazione con asset opzionale assente.
- Verificare attività cinque stelle con filtro 5 anni; ricerca, paginazione, preferiti e navigazione.
- Verificare stampa A4/A5/A6, annullamento, seconda stampa; condivisione PNG/PDF e salvataggio offline.
- Verificare dialog e chiusura, anche simulando showModal assente; verificare creazioni e preferiti preesistenti.
- Ripetere su Safari/iOS e Chrome/Android, browser e PWA installata.

## 8.3-alpha2 — completamento 3 e 7
- 3: implementato nel codice: append di massimo 48 elementi con DocumentFragment; reset su filtri e ricerca; cache SVG per ID e fascia d'età, riutilizzata anche nel visualizzatore. Nessun test browser eseguito.
- 7: implementato nel codice: focus iniziale, ciclo Tab/Maiusc+Tab, Esc, isolamento dei fratelli del dialog e dei suoi antenati tramite inert oppure aria-hidden e pointer-events, ripristino degli attributi e del focus. Da verificare con tastiera e tecnologie assistive reali.
- Gli stati parziali sopra descrivono alpha1 e sono superati dalle modifiche alpha2, non da un collaudo reale.

### Punto 2 — estratti 8.2 / alpha2
Prima (estratto del ramo finale di ageArt):
```js
return `<g transform="translate(24 12) scale(.84)">${d[3]}</g>`+star(28,270)+star(272,270);
```
Dopo (estratti):
```js
if(!a||d[4]||d[2].length===1)return d[3];
// ... rami 3 e 4 ...
return d[3];
```
### Punto 4 — estratti 8.2 / alpha2
Prima:
```js
im.decode().then(()=>{window.print();style.remove();document.body.classList.remove('print8')});
```
Dopo (estratti di printReady):
```js
window.addEventListener('afterprint',clean);
timer=setTimeout(clean,180000);
try{window.print()}catch(e){clean();alert('Stampa non disponibile')}
```
### Punto 1 — precache esatto
Obbligatori: `./`, `./index.html`. Se uno fallisce, l'installazione del nuovo worker fallisce; il precedente worker attivo non viene sostituito.
Facoltativi: `./manifest.webmanifest`, `./icon-192.png`, `./icon-512.png`, `./icon-maskable.png`. Un errore di download viene ignorato individualmente; il worker può installarsi, ma l'asset mancante non sarà disponibile offline e può compromettere l'installabilità PWA. Cache: teresa-v83-alpha2.
### Punto 14 — compatibilità dati
Verificato staticamente: lettura JSON da localStorage `teresa-fav`, apertura IndexedDB `teresa-personal` versione 1, store `images` con keyPath `id` e autoIncrement. Nessuna migrazione o modifica dello schema. La lettura di dati reali preesistenti non è stata collaudata. La migrazione ID resta nel blocco 2.
### Inventario (byte, dimensioni non compresse)
- icon-192.png: 1313 byte
- icon-512.png: 3668 byte
- icon-maskable.png: 9456 byte
- index.html: 59523 byte
- manifest.webmanifest: 576 byte
- sw.js: 839 byte
- CHANGELOG.md: 4588 byte

## 8.3-alpha3 — correzioni 2, 5 e 7
- 2: filtro 3 anni: stroke-width 5 per istruzioni che iniziano con Colora e schede senza istruzione; anche il tratto esplicito 6 delle attività viene portato a 5. Nessuna aggiunta di elementi per 5 anni. Conteggi invariati.
- 5: debounce 300 ms per titolo, istruzione, data e nomi; invalidazione immediata dei file precedenti e delle generazioni asincrone in corso. Le opzioni non testuali restano immediate. Condivisione file consentita anche offline se canShare lo permette; messaggio aggiuntivo offline senza dichiarare un salvataggio non confermato.
- 7: dialog:not([open]) nascosto via CSS; eliminati display inline in apertura/chiusura fallback. Viewer aperto mantiene flex. Gestione focus alpha2 invariata.
- Cache incrementata a teresa-v83-alpha3 per distribuire la correzione. Nessuna modifica alle chiavi dati.
- Verificato: sintassi JavaScript degli script e del worker, integrità ZIP. Da verificare: resa SVG, debounce e condivisione offline, dialog fallback su browser e dispositivi reali. Nessun collaudo mobile eseguito.
