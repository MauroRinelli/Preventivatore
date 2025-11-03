/**
 * LISTINI TARIFFE SPEDIZIONI
 *
 * Struttura professionale per la gestione dei prezzi di spedizione.
 * Facilmente modificabile e aggiornabile.
 *
 * IMPORTANTE: Questi sono dati di esempio realistici.
 * Aggiorna i prezzi in base ai tuoi listini effettivi.
 */

// ============================================================================
// ITALIA - Zone A, B, C (basate su CAP)
// ============================================================================

const zoneItaliaCAP = {
  A: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "50", "51", "52", "53", "54", "55", "56", "57", "59"],
  B: ["58", "60", "61", "62", "63", "64", "65", "66", "67", "70", "71", "72", "73", "74", "75", "76", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89"],
  C: ["90", "91", "92", "93", "94", "95", "96", "97", "98"]
};

// Tariffe Italia per scaglioni di peso (in kg)
const tariffeItalia = {
  A: [
    { pesoMax: 1, prezzo: 6.50 },
    { pesoMax: 3, prezzo: 8.00 },
    { pesoMax: 5, prezzo: 9.50 },
    { pesoMax: 10, prezzo: 12.00 },
    { pesoMax: 15, prezzo: 15.50 },
    { pesoMax: 20, prezzo: 18.00 },
    { pesoMax: 30, prezzo: 24.00 },
    { pesoMax: 50, prezzo: 35.00 },
    { pesoMax: 70, prezzo: 48.00 },
    { pesoMax: Infinity, prezzo: 65.00 } // oltre 70kg
  ],
  B: [
    { pesoMax: 1, prezzo: 7.50 },
    { pesoMax: 3, prezzo: 9.50 },
    { pesoMax: 5, prezzo: 11.50 },
    { pesoMax: 10, prezzo: 15.00 },
    { pesoMax: 15, prezzo: 19.50 },
    { pesoMax: 20, prezzo: 23.00 },
    { pesoMax: 30, prezzo: 30.00 },
    { pesoMax: 50, prezzo: 45.00 },
    { pesoMax: 70, prezzo: 60.00 },
    { pesoMax: Infinity, prezzo: 80.00 }
  ],
  C: [
    { pesoMax: 1, prezzo: 9.00 },
    { pesoMax: 3, prezzo: 12.00 },
    { pesoMax: 5, prezzo: 15.00 },
    { pesoMax: 10, prezzo: 20.00 },
    { pesoMax: 15, prezzo: 26.00 },
    { pesoMax: 20, prezzo: 32.00 },
    { pesoMax: 30, prezzo: 42.00 },
    { pesoMax: 50, prezzo: 60.00 },
    { pesoMax: 70, prezzo: 80.00 },
    { pesoMax: Infinity, prezzo: 110.00 }
  ]
};

// ============================================================================
// EUROPA - Zone 1, 2, 3
// ============================================================================

const paesiEuropa = {
  zona1: ["Austria", "Belgio", "Francia", "Germania", "Lussemburgo", "Paesi Bassi", "Slovenia"],
  zona2: ["Danimarca", "Spagna", "Portogallo", "Croazia", "Repubblica Ceca", "Slovacchia", "Ungheria", "Polonia"],
  zona3: ["Svezia", "Finlandia", "Estonia", "Lettonia", "Lituania", "Bulgaria", "Romania", "Grecia", "Irlanda", "Norvegia", "Svizzera", "Regno Unito"]
};

const tariffeEuropa = {
  zona1: [
    { pesoMax: 1, prezzo: 14.00 },
    { pesoMax: 3, prezzo: 18.00 },
    { pesoMax: 5, prezzo: 22.00 },
    { pesoMax: 10, prezzo: 32.00 },
    { pesoMax: 15, prezzo: 42.00 },
    { pesoMax: 20, prezzo: 52.00 },
    { pesoMax: 30, prezzo: 72.00 },
    { pesoMax: 50, prezzo: 110.00 },
    { pesoMax: 70, prezzo: 145.00 },
    { pesoMax: Infinity, prezzo: 190.00 }
  ],
  zona2: [
    { pesoMax: 1, prezzo: 16.00 },
    { pesoMax: 3, prezzo: 21.00 },
    { pesoMax: 5, prezzo: 26.00 },
    { pesoMax: 10, prezzo: 38.00 },
    { pesoMax: 15, prezzo: 50.00 },
    { pesoMax: 20, prezzo: 62.00 },
    { pesoMax: 30, prezzo: 85.00 },
    { pesoMax: 50, prezzo: 130.00 },
    { pesoMax: 70, prezzo: 170.00 },
    { pesoMax: Infinity, prezzo: 220.00 }
  ],
  zona3: [
    { pesoMax: 1, prezzo: 18.00 },
    { pesoMax: 3, prezzo: 24.00 },
    { pesoMax: 5, prezzo: 30.00 },
    { pesoMax: 10, prezzo: 45.00 },
    { pesoMax: 15, prezzo: 58.00 },
    { pesoMax: 20, prezzo: 72.00 },
    { pesoMax: 30, prezzo: 98.00 },
    { pesoMax: 50, prezzo: 150.00 },
    { pesoMax: 70, prezzo: 195.00 },
    { pesoMax: Infinity, prezzo: 250.00 }
  ]
};

// ============================================================================
// EXTRA-UE - Zone 1, 2, 3, 4
// ============================================================================

const zoneExtraUE = {
  zona1: ["Albania", "Bosnia-Erzegovina", "Macedonia del Nord", "Montenegro", "Serbia", "Turchia"],
  zona2: ["Russia", "Ucraina", "Bielorussia", "Moldavia"],
  zona3: ["Cina", "Giappone", "Corea del Sud", "India", "Thailandia", "Singapore", "Australia", "Nuova Zelanda"],
  zona4: ["Brasile", "Argentina", "Cile", "Messico", "Canada", "Sud Africa", "Emirati Arabi Uniti", "Arabia Saudita"]
};

const tariffeExtraUE = {
  zona1: [
    { pesoMax: 1, prezzo: 22.00 },
    { pesoMax: 3, prezzo: 30.00 },
    { pesoMax: 5, prezzo: 38.00 },
    { pesoMax: 10, prezzo: 55.00 },
    { pesoMax: 15, prezzo: 72.00 },
    { pesoMax: 20, prezzo: 88.00 },
    { pesoMax: 30, prezzo: 120.00 },
    { pesoMax: 50, prezzo: 180.00 },
    { pesoMax: 70, prezzo: 240.00 },
    { pesoMax: Infinity, prezzo: 310.00 }
  ],
  zona2: [
    { pesoMax: 1, prezzo: 28.00 },
    { pesoMax: 3, prezzo: 38.00 },
    { pesoMax: 5, prezzo: 48.00 },
    { pesoMax: 10, prezzo: 70.00 },
    { pesoMax: 15, prezzo: 92.00 },
    { pesoMax: 20, prezzo: 112.00 },
    { pesoMax: 30, prezzo: 155.00 },
    { pesoMax: 50, prezzo: 230.00 },
    { pesoMax: 70, prezzo: 305.00 },
    { pesoMax: Infinity, prezzo: 395.00 }
  ],
  zona3: [
    { pesoMax: 1, prezzo: 35.00 },
    { pesoMax: 3, prezzo: 48.00 },
    { pesoMax: 5, prezzo: 62.00 },
    { pesoMax: 10, prezzo: 92.00 },
    { pesoMax: 15, prezzo: 122.00 },
    { pesoMax: 20, prezzo: 150.00 },
    { pesoMax: 30, prezzo: 205.00 },
    { pesoMax: 50, prezzo: 310.00 },
    { pesoMax: 70, prezzo: 410.00 },
    { pesoMax: Infinity, prezzo: 530.00 }
  ],
  zona4: [
    { pesoMax: 1, prezzo: 32.00 },
    { pesoMax: 3, prezzo: 44.00 },
    { pesoMax: 5, prezzo: 56.00 },
    { pesoMax: 10, prezzo: 82.00 },
    { pesoMax: 15, prezzo: 108.00 },
    { pesoMax: 20, prezzo: 132.00 },
    { pesoMax: 30, prezzo: 180.00 },
    { pesoMax: 50, prezzo: 270.00 },
    { pesoMax: 70, prezzo: 360.00 },
    { pesoMax: Infinity, prezzo: 465.00 }
  ]
};

// ============================================================================
// USA - Zone 1, 2, 3
// ============================================================================

const zoneUSA = {
  zona1: ["East Coast", "New York", "Boston", "Philadelphia", "Washington DC", "Miami", "Atlanta"],
  zona2: ["Central", "Chicago", "Dallas", "Houston", "Minneapolis", "Detroit"],
  zona3: ["West Coast", "Los Angeles", "San Francisco", "Seattle", "San Diego", "Las Vegas"]
};

const tariffeUSA = {
  zona1: [
    { pesoMax: 1, prezzo: 38.00 },
    { pesoMax: 3, prezzo: 52.00 },
    { pesoMax: 5, prezzo: 68.00 },
    { pesoMax: 10, prezzo: 98.00 },
    { pesoMax: 15, prezzo: 128.00 },
    { pesoMax: 20, prezzo: 158.00 },
    { pesoMax: 30, prezzo: 215.00 },
    { pesoMax: 50, prezzo: 325.00 },
    { pesoMax: 70, prezzo: 430.00 },
    { pesoMax: Infinity, prezzo: 555.00 }
  ],
  zona2: [
    { pesoMax: 1, prezzo: 42.00 },
    { pesoMax: 3, prezzo: 58.00 },
    { pesoMax: 5, prezzo: 75.00 },
    { pesoMax: 10, prezzo: 108.00 },
    { pesoMax: 15, prezzo: 142.00 },
    { pesoMax: 20, prezzo: 175.00 },
    { pesoMax: 30, prezzo: 238.00 },
    { pesoMax: 50, prezzo: 360.00 },
    { pesoMax: 70, prezzo: 475.00 },
    { pesoMax: Infinity, prezzo: 615.00 }
  ],
  zona3: [
    { pesoMax: 1, prezzo: 45.00 },
    { pesoMax: 3, prezzo: 62.00 },
    { pesoMax: 5, prezzo: 80.00 },
    { pesoMax: 10, prezzo: 115.00 },
    { pesoMax: 15, prezzo: 152.00 },
    { pesoMax: 20, prezzo: 188.00 },
    { pesoMax: 30, prezzo: 255.00 },
    { pesoMax: 50, prezzo: 385.00 },
    { pesoMax: 70, prezzo: 510.00 },
    { pesoMax: Infinity, prezzo: 660.00 }
  ]
};

// ============================================================================
// FUNZIONI DI UTILITÀ
// ============================================================================

/**
 * Trova il prezzo in base al peso tassabile e alla tabella tariffe
 * @param {number} peso - Peso tassabile in kg
 * @param {Array} tabellaTariffe - Array di scaglioni {pesoMax, prezzo}
 * @returns {number} - Prezzo della spedizione
 */
function trovaPrezzoPerPeso(peso, tabellaTariffe) {
  for (let scaglione of tabellaTariffe) {
    if (peso <= scaglione.pesoMax) {
      return scaglione.prezzo;
    }
  }
  // Fallback: ultimo prezzo della tabella
  return tabellaTariffe[tabellaTariffe.length - 1].prezzo;
}

/**
 * Determina la zona Italia in base al CAP
 * @param {string} cap - Codice di Avviamento Postale
 * @returns {string|null} - Zona (A, B, C) o null se non trovato
 */
function getZonaItalia(cap) {
  const prefix = cap.substring(0, 2);
  if (zoneItaliaCAP.A.includes(prefix)) return "A";
  if (zoneItaliaCAP.B.includes(prefix)) return "B";
  if (zoneItaliaCAP.C.includes(prefix)) return "C";
  return null;
}

/**
 * Determina la zona Europa in base alla nazione
 * @param {string} nazione - Nome della nazione
 * @returns {string|null} - Zona (zona1, zona2, zona3) o null
 */
function getZonaEuropa(nazione) {
  for (const [zona, paesi] of Object.entries(paesiEuropa)) {
    if (paesi.some(p => nazione.toLowerCase().includes(p.toLowerCase()) || p.toLowerCase().includes(nazione.toLowerCase()))) {
      return zona;
    }
  }
  return null;
}

/**
 * Determina la zona Extra-UE in base alla nazione
 * @param {string} nazione - Nome della nazione
 * @returns {string|null} - Zona (zona1, zona2, zona3, zona4) o null
 */
function getZonaExtraUE(nazione) {
  for (const [zona, paesi] of Object.entries(zoneExtraUE)) {
    if (paesi.some(p => nazione.toLowerCase().includes(p.toLowerCase()) || p.toLowerCase().includes(nazione.toLowerCase()))) {
      return zona;
    }
  }
  return null;
}

/**
 * Determina la zona USA in base alla città/stato
 * @param {string} citta - Città o stato USA
 * @returns {string} - Zona (zona1, zona2, zona3), default zona2
 */
function getZonaUSA(citta) {
  for (const [zona, cittaList] of Object.entries(zoneUSA)) {
    if (cittaList.some(c => citta.toLowerCase().includes(c.toLowerCase()) || c.toLowerCase().includes(citta.toLowerCase()))) {
      return zona;
    }
  }
  return "zona2"; // default zona centrale
}

/**
 * Calcola il prezzo per spedizione Italia
 * @param {number} pesoTassabile - Peso tassabile in kg
 * @param {string} zona - Zona (A, B, C)
 * @returns {number} - Prezzo in euro
 */
function calcolaPrezzoItalia(pesoTassabile, zona) {
  const tabella = tariffeItalia[zona];
  if (!tabella) return 0;
  return trovaPrezzoPerPeso(pesoTassabile, tabella);
}

/**
 * Calcola il prezzo per spedizione Europa
 * @param {number} pesoTassabile - Peso tassabile in kg
 * @param {string} zona - Zona (zona1, zona2, zona3)
 * @returns {number} - Prezzo in euro
 */
function calcolaPrezzoEuropa(pesoTassabile, zona) {
  const tabella = tariffeEuropa[zona];
  if (!tabella) return 0;
  return trovaPrezzoPerPeso(pesoTassabile, tabella);
}

/**
 * Calcola il prezzo per spedizione Extra-UE
 * @param {number} pesoTassabile - Peso tassabile in kg
 * @param {string} zona - Zona (zona1, zona2, zona3, zona4)
 * @returns {number} - Prezzo in euro
 */
function calcolaPrezzoExtraUE(pesoTassabile, zona) {
  const tabella = tariffeExtraUE[zona];
  if (!tabella) return 0;
  return trovaPrezzoPerPeso(pesoTassabile, tabella);
}

/**
 * Calcola il prezzo per spedizione USA
 * @param {number} pesoTassabile - Peso tassabile in kg
 * @param {string} zona - Zona (zona1, zona2, zona3)
 * @returns {number} - Prezzo in euro
 */
function calcolaPrezzoUSA(pesoTassabile, zona) {
  const tabella = tariffeUSA[zona];
  if (!tabella) return 0;
  return trovaPrezzoPerPeso(pesoTassabile, tabella);
}
