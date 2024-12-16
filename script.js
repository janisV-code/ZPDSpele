const vards = document.getElementById("vards");
const kl = document.getElementById("select");
let klase = "nav";
kl.addEventListener("change", () => {
  klase = kl.value;
});
kl.style.display = "block";
const jaunaKartsBtn = document.getElementById("enter");
console.log("strada js");
jaunaKartsBtn.addEventListener("click", jaunaKarts);
const saktBtn = document.getElementById("sakt");
saktBtn.addEventListener("click", jaunaKarts);
const velreiz = document.getElementById("vel");
velreiz.addEventListener("click", jaunaKarts);
let rezElement = document.getElementById("rez");
let jautElement = document.getElementById("jaut");
let spele = document.getElementById("nos");
let end = document.getElementById("viss");
let atbilde = document.getElementById("atb");
let statuss = document.getElementById("statuss");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
let punkti = 0;
let isPunkti = 0;
let ilgPunkti = 0;
let procenti = 0;
let isProcenti = 0;
let ilgProcenti = 0;
//paslēpt
jaunaKartsBtn.style.display = "none";
const div = document.getElementById("card-container");
div.style.display = "none";
const uzd = document.getElementById("uzd");
uzd.style.display = "none";
velreiz.style.display = "none";
jautElement.style.display = "none";
end.style.display = "none";
atbilde.style.display = "none";
let summa = 0;
let maxSumma = 0;
const kartis = [
  //iskartis
  {
    id: 1,
    nr: "KapitalBank",
    text: "Termiņš: 9 mēneši\nProcentu likme: 5.0%\nVeids: fiksēti\nKapitāls: 340 EUR",
    term: 9,
    rate: 5.0,
    capital: 340,
    value: 352.67, // Aprēķins: 340 * (1 + 0.05)^(9/12)
  },
  {
    id: 2,
    nr: "Procentu Pērle",
    text: "Termiņš: 6 mēneši\nProcentu likme: 7.5%\nVeids: fiksēti\nKapitāls: 362 EUR",
    term: 6,
    rate: 7.5,
    capital: 362,
    value: 375.33, // Aprēķins: 362 * (1 + 0.075)^(6/12)
  },
  {
    id: 3,
    nr: "Noguldījumu Zvaigzne",
    text: "Termiņš: 8 mēneši\nProcentu likme: 6.0%\nVeids: fiksēti\nKapitāls: 384 EUR",
    term: 8,
    rate: 6.0,
    capital: 384,
    value: 399.21, // Aprēķins: 384 * (1 + 0.06)^(8/12)
  },
  {
    id: 4,
    nr: "Ātrā Pelnītāja",
    text: "Termiņš: 10 mēneši\nProcentu likme: 8.5%\nVeids: fiksēti\nKapitāls: 341 EUR",
    term: 10,
    rate: 8.5,
    capital: 341,
    value: 364.99, // Aprēķins: 341 * (1 + 0.085)^(10/12)
  },
  {
    id: 5,
    nr: "Maksimālais Laiks",
    text: "Termiņš: 12 mēneši\nProcentu likme: 10.0%\nVeids: fiksēti\nKapitāls: 347 EUR",
    term: 12,
    rate: 10.0,
    capital: 347,
    value: 381.7, // Aprēķins: 347 * (1 + 0.10)^(12/12)
  },
  {
    id: 6,
    nr: "Zelta Banka",
    text: "Termiņš: 7 mēneši\nProcentu likme: 9.5%\nVeids: fiksēti\nKapitāls: 351 EUR",
    term: 7,
    rate: 9.5,
    capital: 351,
    value: 370.08, // Aprēķins: 351 * (1 + 0.095)^(7/12)
  },
  {
    id: 7,
    nr: "Plūstošais Finansists",
    text: "Termiņš: 9 mēneši\nProcentu likme: 11.0%\nVeids: fiksēti\nKapitāls: 361 EUR",
    term: 9,
    rate: 11.0,
    capital: 361,
    value: 390.39, // Aprēķins: 361 * (1 + 0.11)^(9/12)
  },
  {
    id: 8,
    nr: "Īsais Darījums",
    text: "Termiņš: 5 mēneši\nProcentu likme: 10.5%\nVeids: fiksēti\nKapitāls: 345 EUR",
    term: 5,
    rate: 10.5,
    capital: 345,
    value: 359.66, // Aprēķins: 345 * (1 + 0.105)^(5/12)
  },
  {
    id: 9,
    nr: "Fiksētais Ekonomists",
    text: "Termiņš: 11 mēneši\nProcentu likme: 12.5%\nVeids: fiksēti\nKapitāls: 339 EUR",
    term: 11,
    rate: 12.5,
    capital: 339,
    value: 377.65, // Aprēķins: 339 * (1 + 0.125)^(11/12)
  },
  {
    id: 10,
    nr: "Vērtīgā Monēta",
    text: "Termiņš: 8 mēneši\nProcentu likme: 5.5%\nVeids: fiksēti\nKapitāls: 378 EUR",
    term: 8,
    rate: 5.5,
    capital: 378,
    value: 391.74, // Aprēķins: 378 * (1 + 0.055)^(8/12)
  },
  {
    id: 11,
    nr: "Noguldījumu Eksperts",
    text: "Termiņš: 7 mēneši\nProcentu likme: 8.5%\nVeids: fiksēti\nKapitāls: 348 EUR",
    term: 7,
    rate: 8.5,
    capital: 348,
    value: 364.96, // Aprēķins: 348 * (1 + 0.085)^(7/12)
  },
  {
    id: 12,
    nr: "Procentu Dinamika",
    text: "Termiņš: 8 mēneši\nProcentu likme: 9.0%\nVeids: fiksēti\nKapitāls: 353 EUR",
    term: 8,
    rate: 9.0,
    capital: 353,
    value: 373.87, // Aprēķins: 353 * (1 + 0.09)^(8/12)
  },
  {
    id: 13,
    nr: "Peļņas Augļotājs",
    text: "Termiņš: 9 mēneši\nProcentu likme: 9.5%\nVeids: fiksēti\nKapitāls: 362 EUR",
    term: 9,
    rate: 9.5,
    capital: 362,
    value: 387.5, // Aprēķins: 362 * (1 + 0.095)^(9/12)
  },
  {
    id: 14,
    nr: "Ienesīgā Kase",
    text: "Termiņš: 10 mēneši\nProcentu likme: 10.0%\nVeids: fiksēti\nKapitāls: 332 EUR",
    term: 10,
    rate: 10.0,
    capital: 332,
    value: 359.44, // Aprēķins: 332 * (1 + 0.10)^(10/12)
  },
  {
    id: 15,
    nr: "Kapitāla Krājējs",
    text: "Termiņš: 6 mēneši\nProcentu likme: 10.5%\nVeids: fiksēti\nKapitāls: 376 EUR",
    term: 6,
    rate: 10.5,
    capital: 376,
    value: 395.25, // Aprēķins: 376 * (1 + 0.105)^(6/12)
  },
  {
    id: 16,
    nr: "Noguldījumu Glabātājs",
    text: "Termiņš: 7 mēneši\nProcentu likme: 7.0%\nVeids: fiksēti\nKapitāls: 353 EUR",
    term: 7,
    rate: 7.0,
    capital: 353,
    value: 367.21, // Aprēķins: 353 * (1 + 0.07)^(7/12)
  },
  {
    id: 17,
    nr: "Finanšu Stūrakmens",
    text: "Termiņš: 8 mēneši\nProcentu likme: 7.5%\nVeids: fiksēti\nKapitāls: 362 EUR",
    term: 8,
    rate: 7.5,
    capital: 362,
    value: 379.88, // Aprēķins: 362 * (1 + 0.075)^(8/12)
  },
  {
    id: 18,
    nr: "Stabila Ienesība",
    text: "Termiņš: 9 mēneši\nProcentu likme: 8.0%\nVeids: fiksēti\nKapitāls: 377 EUR",
    term: 9,
    rate: 8.0,
    capital: 377,
    value: 399.4, // Aprēķins: 377 * (1 + 0.08)^(9/12)
  },
  {
    id: 19,
    nr: "Peļņas Perspektīva",
    text: "Termiņš: 10 mēneši\nProcentu likme: 8.5%\nVeids: fiksēti\nKapitāls: 333 EUR",
    term: 10,
    rate: 8.5,
    capital: 333,
    value: 356.43, // Aprēķins: 333 * (1 + 0.085)^(10/12)
  },
  {
    id: 20,
    nr: "Ienesīguma Fonds",
    text: "Termiņš: 6 mēneši\nProcentu likme: 9.0%\nVeids: fiksēti\nKapitāls: 356 EUR",
    term: 6,
    rate: 9.0,
    capital: 356,
    value: 371.67, // Aprēķins: 356 * (1 + 0.09)^(6/12)
  },
  //ilgkartis
  {
    id: 21,
    nr: "SapņuSeifs",
    text: "Termiņš: 6 gadi\nProcentu likme: 2.3%\nVeids: fiksēti\nKapitāls: 345 EUR",
    term: 6,
    rate: 2.3,
    capital: 345,
    value: 395.43, // Aprēķins: 345 * (1 + 0.023)^6
  },
  {
    id: 22,
    nr: "NaudasNams",
    text: "Termiņš: 5 gadi\nProcentu likme: 3.4%\nVeids: fiksēti\nKapitāls: 300 EUR",
    term: 5,
    rate: 3.4,
    capital: 300,
    value: 354.59, // Aprēķins: 300 * (1 + 0.034)^5
  },
  {
    id: 23,
    nr: "DrošībaMax",
    text: "Termiņš: 7 gadi\nProcentu likme: 1.9%\nVeids: fiksēti\nKapitāls: 360 EUR",
    term: 7,
    rate: 1.9,
    capital: 360,
    value: 366.84, // Aprēķins: 360 * (1 + 0.019)^7
  },
  {
    id: 24,
    nr: "BankasSapnis",
    text: "Termiņš: 8 gadi\nProcentu likme: 1.5%\nVeids: fiksēti\nKapitāls: 375 EUR",
    term: 8,
    rate: 1.5,
    capital: 375,
    value: 398.82, // Aprēķins: 375 * (1 + 0.015)^8 NEDER
  },
  {
    id: 25,
    nr: "ZeltaGlabātava",
    text: "Termiņš: 6 gadi\nProcentu likme: 2.2%\nVeids: fiksēti\nKapitāls: 336 EUR",
    term: 6,
    rate: 2.2,
    capital: 336,
    value: 382.86, // Aprēķins: 336 * (1 + 0.022)^6
  },
  {
    id: 26,
    nr: "IenesīgsFonds",
    text: "Termiņš: 2 gadi\nProcentu likme: 2.4%\nVeids: fiksēti\nKapitāls: 345 EUR",
    term: 2,
    rate: 2.4,
    capital: 345,
    value: 361.76, // Aprēķins: 345 * (1 + 0.024)^2
  },
  {
    id: 27,
    nr: "FinanšuOsta",
    text: "Termiņš: 5 gadi\nProcentu likme: 3.1%\nVeids: fiksēti\nKapitāls: 335 EUR",
    term: 5,
    rate: 3.1,
    capital: 335,
    value: 390.25, // Aprēķins: 335 * (1 + 0.031)^5
  },
  {
    id: 28,
    nr: "DrošsPieaugums",
    text: "Termiņš: 6 gadi\nProcentu likme: 1.8%\nVeids: fiksēti\nKapitāls: 359 EUR",
    term: 6,
    rate: 1.8,
    capital: 359,
    value: 399.56, // Aprēķins: 359 * (1 + 0.018)^6
  },
  {
    id: 29,
    nr: "KapitālaPlūsma",
    text: "Termiņš: 7 gadi\nProcentu likme: 1.4%\nVeids: fiksēti\nKapitāls: 358 EUR",
    term: 7,
    rate: 1.4,
    capital: 358,
    value: 394.59, // Aprēķins: 358 * (1 + 0.014)^7
  },
  {
    id: 30,
    nr: "NaudasKalns",
    text: "Termiņš: 7 gadi\nProcentu likme: 2.2%\nVeids: fiksēti\nKapitāls: 355 EUR",
    term: 7,
    rate: 2.2,
    capital: 355,
    value: 391.99, // Aprēķins: 355 * (1 + 0.022)^7
  },
  {
    id: 31,
    nr: "NaudasStraume",
    text: "Termiņš: 5 gadi\nProcentu likme: 2.4%\nVeids: fiksēti\nKapitāls: 340 EUR",
    term: 5,
    rate: 2.4,
    capital: 340,
    value: 382.81, // Aprēķins: 340 * (1 + 0.024)^5
  },
  {
    id: 32,
    nr: "IeguldījumaKalns",
    text: "Termiņš: 8 gadi\nProcentu likme: 1.3%\nVeids: fiksēti\nKapitāls: 350 EUR",
    term: 8,
    rate: 1.3,
    capital: 350,
    value: 388.1, // Aprēķins: 350 * (1 + 0.013)^8
  },
  {
    id: 33,
    nr: "StabilaBanka",
    text: "Termiņš: 2 gadi\nProcentu likme: 1.7%\nVeids: fiksēti\nKapitāls: 365 EUR",
    term: 2,
    rate: 1.7,
    capital: 365,
    value: 377.52, // Aprēķins: 365 * (1 + 0.017)^2
  },
  {
    id: 34,
    nr: "NaudasKrātuve",
    text: "Termiņš: 5 gadi\nProcentu likme: 2.9%\nVeids: fiksēti\nKapitāls: 320 EUR",
    term: 5,
    rate: 2.9,
    capital: 320,
    value: 369.17, // Aprēķins: 320 * (1 + 0.029)^5
  },
  {
    id: 35,
    nr: "PieaugumaKlubs",
    text: "Termiņš: 6 gadi\nProcentu likme: 2.1%\nVeids: fiksēti\nKapitāls: 340 EUR",
    term: 6,
    rate: 2.1,
    capital: 340,
    value: 385.15, // Aprēķins: 340 * (1 + 0.021)^6
  },
  {
    id: 36,
    nr: "ProcentuParadīze",
    text: "Termiņš: 7 gadi\nProcentu likme: 2.0%\nVeids: fiksēti\nKapitāls: 339 EUR",
    term: 7,
    rate: 2.0,
    capital: 339,
    value: 389.4, // Aprēķins: 339 * (1 + 0.02)^7
  },
  {
    id: 37,
    nr: "PeļņasPortfelis",
    text: "Termiņš: 5 gadi\nProcentu likme: 3.4%\nVeids: fiksēti\nKapitāls: 315 EUR",
    term: 5,
    rate: 3.4,
    capital: 315,
    value: 372.32, // Aprēķins: 315 * (1 + 0.034)^5
  },
  {
    id: 38,
    nr: "StabilaGlabātava",
    text: "Termiņš: 8 gadi\nProcentu likme: 1.5%\nVeids: fiksēti\nKapitāls: 353 EUR",
    term: 8,
    rate: 1.5,
    capital: 353,
    value: 397.65, // Aprēķins: 353 * (1 + 0.015)^8
  },
  {
    id: 39,
    nr: "PeļņasTilts",
    text: "Termiņš: 6 gadi\nProcentu likme: 2.3%\nVeids: fiksēti\nKapitāls: 329 EUR",
    term: 6,
    rate: 2.3,
    capital: 329,
    value: 377.09, // Aprēķins: 329 * (1 + 0.023)^6
  },
  {
    id: 40,
    nr: "ProcentuDrošība",
    text: "Termiņš: 5 gadi\nProcentu likme: 3.2%\nVeids: fiksēti\nKapitāls: 340 EUR",
    term: 4,
    rate: 3.2,
    capital: 340,
    value: 373.7, // Aprēķins: 340 * (1 + 0.032)^3
  },
];
const isKartis = [
  {
    id: 1,
    nr: "KapitalBank",
    text: "Termiņš: 9 mēneši\nProcentu likme: 5.0%\nVeids: fiksēti\nKapitāls: 340 EUR",
    term: 9,
    rate: 5.0,
    capital: 340,
    value: 352.67, // Aprēķins: 340 * (1 + 0.05)^(9/12)
  },
  {
    id: 2,
    nr: "Procentu Pērle",
    text: "Termiņš: 6 mēneši\nProcentu likme: 7.5%\nVeids: fiksēti\nKapitāls: 362 EUR",
    term: 6,
    rate: 7.5,
    capital: 362,
    value: 375.33, // Aprēķins: 362 * (1 + 0.075)^(6/12)
  },
  {
    id: 3,
    nr: "Noguldījumu Zvaigzne",
    text: "Termiņš: 8 mēneši\nProcentu likme: 6.0%\nVeids: fiksēti\nKapitāls: 384 EUR",
    term: 8,
    rate: 6.0,
    capital: 384,
    value: 399.21, // Aprēķins: 384 * (1 + 0.06)^(8/12)
  },
  {
    id: 4,
    nr: "Ātrā Pelnītāja",
    text: "Termiņš: 10 mēneši\nProcentu likme: 8.5%\nVeids: fiksēti\nKapitāls: 341 EUR",
    term: 10,
    rate: 8.5,
    capital: 341,
    value: 364.99, // Aprēķins: 341 * (1 + 0.085)^(10/12)
  },
  {
    id: 5,
    nr: "Maksimālais Laiks",
    text: "Termiņš: 12 mēneši\nProcentu likme: 10.0%\nVeids: fiksēti\nKapitāls: 347 EUR",
    term: 12,
    rate: 10.0,
    capital: 347,
    value: 381.7, // Aprēķins: 347 * (1 + 0.10)^(12/12)
  },
  {
    id: 6,
    nr: "Zelta Banka",
    text: "Termiņš: 7 mēneši\nProcentu likme: 9.5%\nVeids: fiksēti\nKapitāls: 351 EUR",
    term: 7,
    rate: 9.5,
    capital: 351,
    value: 370.08, // Aprēķins: 351 * (1 + 0.095)^(7/12)
  },
  {
    id: 7,
    nr: "Plūstošais Finansists",
    text: "Termiņš: 9 mēneši\nProcentu likme: 11.0%\nVeids: fiksēti\nKapitāls: 361 EUR",
    term: 9,
    rate: 11.0,
    capital: 361,
    value: 390.39, // Aprēķins: 361 * (1 + 0.11)^(9/12)
  },
  {
    id: 8,
    nr: "Īsais Darījums",
    text: "Termiņš: 5 mēneši\nProcentu likme: 10.5%\nVeids: fiksēti\nKapitāls: 345 EUR",
    term: 5,
    rate: 10.5,
    capital: 345,
    value: 359.66, // Aprēķins: 345 * (1 + 0.105)^(5/12)
  },
  {
    id: 9,
    nr: "Fiksētais Ekonomists",
    text: "Termiņš: 11 mēneši\nProcentu likme: 12.5%\nVeids: fiksēti\nKapitāls: 339 EUR",
    term: 11,
    rate: 12.5,
    capital: 339,
    value: 377.65, // Aprēķins: 339 * (1 + 0.125)^(11/12)
  },
  {
    id: 10,
    nr: "Vērtīgā Monēta",
    text: "Termiņš: 8 mēneši\nProcentu likme: 5.5%\nVeids: fiksēti\nKapitāls: 378 EUR",
    term: 8,
    rate: 5.5,
    capital: 378,
    value: 391.74, // Aprēķins: 378 * (1 + 0.055)^(8/12)
  },
  {
    id: 11,
    nr: "Noguldījumu Eksperts",
    text: "Termiņš: 7 mēneši\nProcentu likme: 8.5%\nVeids: fiksēti\nKapitāls: 348 EUR",
    term: 7,
    rate: 8.5,
    capital: 348,
    value: 364.96, // Aprēķins: 348 * (1 + 0.085)^(7/12)
  },
  {
    id: 12,
    nr: "Procentu Dinamika",
    text: "Termiņš: 8 mēneši\nProcentu likme: 9.0%\nVeids: fiksēti\nKapitāls: 353 EUR",
    term: 8,
    rate: 9.0,
    capital: 353,
    value: 373.87, // Aprēķins: 353 * (1 + 0.09)^(8/12)
  },
  {
    id: 13,
    nr: "Peļņas Augļotājs",
    text: "Termiņš: 9 mēneši\nProcentu likme: 9.5%\nVeids: fiksēti\nKapitāls: 362 EUR",
    term: 9,
    rate: 9.5,
    capital: 362,
    value: 387.5, // Aprēķins: 362 * (1 + 0.095)^(9/12)
  },
  {
    id: 14,
    nr: "Ienesīgā Kase",
    text: "Termiņš: 10 mēneši\nProcentu likme: 10.0%\nVeids: fiksēti\nKapitāls: 332 EUR",
    term: 10,
    rate: 10.0,
    capital: 332,
    value: 359.44, // Aprēķins: 332 * (1 + 0.10)^(10/12)
  },
  {
    id: 15,
    nr: "Kapitāla Krājējs",
    text: "Termiņš: 6 mēneši\nProcentu likme: 10.5%\nVeids: fiksēti\nKapitāls: 376 EUR",
    term: 6,
    rate: 10.5,
    capital: 376,
    value: 395.25, // Aprēķins: 376 * (1 + 0.105)^(6/12)
  },
  {
    id: 16,
    nr: "Noguldījumu Glabātājs",
    text: "Termiņš: 7 mēneši\nProcentu likme: 7.0%\nVeids: fiksēti\nKapitāls: 353 EUR",
    term: 7,
    rate: 7.0,
    capital: 353,
    value: 367.21, // Aprēķins: 353 * (1 + 0.07)^(7/12)
  },
  {
    id: 17,
    nr: "Finanšu Stūrakmens",
    text: "Termiņš: 8 mēneši\nProcentu likme: 7.5%\nVeids: fiksēti\nKapitāls: 362 EUR",
    term: 8,
    rate: 7.5,
    capital: 362,
    value: 379.88, // Aprēķins: 362 * (1 + 0.075)^(8/12)
  },
  {
    id: 18,
    nr: "Stabila Ienesība",
    text: "Termiņš: 9 mēneši\nProcentu likme: 8.0%\nVeids: fiksēti\nKapitāls: 377 EUR",
    term: 9,
    rate: 8.0,
    capital: 377,
    value: 399.4, // Aprēķins: 377 * (1 + 0.08)^(9/12)
  },
  {
    id: 19,
    nr: "Peļņas Perspektīva",
    text: "Termiņš: 10 mēneši\nProcentu likme: 8.5%\nVeids: fiksēti\nKapitāls: 333 EUR",
    term: 10,
    rate: 8.5,
    capital: 333,
    value: 356.43, // Aprēķins: 333 * (1 + 0.085)^(10/12)
  },
  {
    id: 20,
    nr: "Ienesīguma Fonds",
    text: "Termiņš: 6 mēneši\nProcentu likme: 9.0%\nVeids: fiksēti\nKapitāls: 356 EUR",
    term: 6,
    rate: 9.0,
    capital: 356,
    value: 371.67, // Aprēķins: 356 * (1 + 0.09)^(6/12)
  },
  //Pārbaudīts, value atbilst patiesībai.
];
const ilgKartis = [
  {
    id: 1,
    nr: "SapņuSeifs",
    text: "Termiņš: 6 gadi\nProcentu likme: 2.3%\nVeids: fiksēti\nKapitāls: 345 EUR",
    term: 6,
    rate: 2.3,
    capital: 345,
    value: 395.43, // Aprēķins: 345 * (1 + 0.023)^6
  },
  {
    id: 2,
    nr: "NaudasNams",
    text: "Termiņš: 5 gadi\nProcentu likme: 3.4%\nVeids: fiksēti\nKapitāls: 300 EUR",
    term: 5,
    rate: 3.4,
    capital: 300,
    value: 354.59, // Aprēķins: 300 * (1 + 0.034)^5
  },
  {
    id: 3,
    nr: "DrošībaMax",
    text: "Termiņš: 7 gadi\nProcentu likme: 1.9%\nVeids: fiksēti\nKapitāls: 360 EUR",
    term: 7,
    rate: 1.9,
    capital: 360,
    value: 366.84, // Aprēķins: 360 * (1 + 0.019)^7
  },
  {
    id: 4,
    nr: "BankasSapnis",
    text: "Termiņš: 8 gadi\nProcentu likme: 1.5%\nVeids: fiksēti\nKapitāls: 375 EUR",
    term: 8,
    rate: 1.5,
    capital: 375,
    value: 398.82, // Aprēķins: 375 * (1 + 0.015)^8 NEDER
  },
  {
    id: 5,
    nr: "ZeltaGlabātava",
    text: "Termiņš: 6 gadi\nProcentu likme: 2.2%\nVeids: fiksēti\nKapitāls: 336 EUR",
    term: 6,
    rate: 2.2,
    capital: 336,
    value: 382.86, // Aprēķins: 336 * (1 + 0.022)^6
  },
  {
    id: 6,
    nr: "IenesīgsFonds",
    text: "Termiņš: 2 gadi\nProcentu likme: 2.4%\nVeids: fiksēti\nKapitāls: 345 EUR",
    term: 2,
    rate: 2.4,
    capital: 345,
    value: 361.76, // Aprēķins: 345 * (1 + 0.024)^2
  },
  {
    id: 7,
    nr: "FinanšuOsta",
    text: "Termiņš: 5 gadi\nProcentu likme: 3.1%\nVeids: fiksēti\nKapitāls: 335 EUR",
    term: 5,
    rate: 3.1,
    capital: 335,
    value: 390.25, // Aprēķins: 335 * (1 + 0.031)^5
  },
  {
    id: 8,
    nr: "DrošsPieaugums",
    text: "Termiņš: 6 gadi\nProcentu likme: 1.8%\nVeids: fiksēti\nKapitāls: 359 EUR",
    term: 6,
    rate: 1.8,
    capital: 359,
    value: 399.56, // Aprēķins: 359 * (1 + 0.018)^6
  },
  {
    id: 9,
    nr: "KapitālaPlūsma",
    text: "Termiņš: 7 gadi\nProcentu likme: 1.4%\nVeids: fiksēti\nKapitāls: 358 EUR",
    term: 7,
    rate: 1.4,
    capital: 358,
    value: 394.59, // Aprēķins: 358 * (1 + 0.014)^7
  },
  {
    id: 10,
    nr: "NaudasKalns",
    text: "Termiņš: 7 gadi\nProcentu likme: 2.2%\nVeids: fiksēti\nKapitāls: 355 EUR",
    term: 7,
    rate: 2.2,
    capital: 355,
    value: 391.99, // Aprēķins: 355 * (1 + 0.022)^7
  },
  {
    id: 11,
    nr: "NaudasStraume",
    text: "Termiņš: 5 gadi\nProcentu likme: 2.4%\nVeids: fiksēti\nKapitāls: 340 EUR",
    term: 5,
    rate: 2.4,
    capital: 340,
    value: 382.81, // Aprēķins: 340 * (1 + 0.024)^5
  },
  {
    id: 12,
    nr: "IeguldījumaKalns",
    text: "Termiņš: 8 gadi\nProcentu likme: 1.3%\nVeids: fiksēti\nKapitāls: 350 EUR",
    term: 8,
    rate: 1.3,
    capital: 350,
    value: 388.1, // Aprēķins: 350 * (1 + 0.013)^8
  },
  {
    id: 13,
    nr: "StabilaBanka",
    text: "Termiņš: 2 gadi\nProcentu likme: 1.7%\nVeids: fiksēti\nKapitāls: 365 EUR",
    term: 2,
    rate: 1.7,
    capital: 365,
    value: 377.52, // Aprēķins: 365 * (1 + 0.017)^2
  },
  {
    id: 14,
    nr: "NaudasKrātuve",
    text: "Termiņš: 5 gadi\nProcentu likme: 2.9%\nVeids: fiksēti\nKapitāls: 320 EUR",
    term: 5,
    rate: 2.9,
    capital: 320,
    value: 369.17, // Aprēķins: 320 * (1 + 0.029)^5
  },
  {
    id: 15,
    nr: "PieaugumaKlubs",
    text: "Termiņš: 6 gadi\nProcentu likme: 2.1%\nVeids: fiksēti\nKapitāls: 340 EUR",
    term: 6,
    rate: 2.1,
    capital: 340,
    value: 385.15, // Aprēķins: 340 * (1 + 0.021)^6
  },
  {
    id: 16,
    nr: "ProcentuParadīze",
    text: "Termiņš: 7 gadi\nProcentu likme: 2.0%\nVeids: fiksēti\nKapitāls: 339 EUR",
    term: 7,
    rate: 2.0,
    capital: 339,
    value: 389.4, // Aprēķins: 339 * (1 + 0.02)^7
  },
  {
    id: 17,
    nr: "PeļņasPortfelis",
    text: "Termiņš: 5 gadi\nProcentu likme: 3.4%\nVeids: fiksēti\nKapitāls: 315 EUR",
    term: 5,
    rate: 3.4,
    capital: 315,
    value: 372.32, // Aprēķins: 315 * (1 + 0.034)^5
  },
  {
    id: 18,
    nr: "StabilaGlabātava",
    text: "Termiņš: 8 gadi\nProcentu likme: 1.5%\nVeids: fiksēti\nKapitāls: 353 EUR",
    term: 8,
    rate: 1.5,
    capital: 353,
    value: 397.65, // Aprēķins: 353 * (1 + 0.015)^8
  },
  {
    id: 19,
    nr: "PeļņasTilts",
    text: "Termiņš: 6 gadi\nProcentu likme: 2.3%\nVeids: fiksēti\nKapitāls: 329 EUR",
    term: 6,
    rate: 2.3,
    capital: 329,
    value: 377.09, // Aprēķins: 329 * (1 + 0.023)^6
  },
  {
    id: 20,
    nr: "ProcentuDrošība",
    text: "Termiņš: 5 gadi\nProcentu likme: 3.2%\nVeids: fiksēti\nKapitāls: 340 EUR",
    term: 4,
    rate: 3.2,
    capital: 340,
    value: 373.7, // Aprēķins: 340 * (1 + 0.032)^3
  },
  //Value vērtības pārbaudītas, atbilst patiesībai
];
//definē ārpus funkcijas vēlākai izmantošanai
let cardValue;
let cardValue1;
let questionNr = 0;
let capital;
let capital1;
function jaunaKarts() {
  const vardsVal = vards.value;
  // if (vardsVal.trim().length === 0) {
  //     alert("Lūdzu ievadi savu vārdu!");
  //     return;
  // }
  // if(klase=="nav"){
  //     alert("Lūdzu ievadi klasi kurā mācies!");
  //     return;
  // }
  spele.style.display = "none";
  velreiz.style.display = "none";
  end.style.display = "none";
  rezElement.style.display = "none";

  popup.style.display = "none";
  overlay.style.display = "none";
  atbilde.style.display = "none";

  vards.style.display = "none";
  kl.style.display = "none";
  saktBtn.style.display = "none";
  //nosaka spēles beigas
  if (questionNr > 15) {
    beigas();
    return;
  } else {
    console.log("questionNr: ", questionNr);
    jautElement.style.display = "flex";
    uzd.style.display = "flex";
    jaut = "Investīcija NR " + questionNr;
    jautElement.innerText = jaut;
    uzd.style.display = "flex";
    div.style.display = "flex";
    if (questionNr == 1) {
      jaunaKartsBtn.innerText = "Jauna kārts";
      jaunaKartsBtn.style.backgroundColor = "#ffc107";
      jaunaKartsBtn.style.color = "initial";
      console.log("spēlētāja vārds ir ", vards.value);
      console.log("sākas jautājumi par īstermiņa noguldījumiem");
      console.log("spēlētājs ir ", klase, " skolnieks/ce");
    }
    if (questionNr == 0) {
      jautElement.style.display = "none";
      uzd.style.display = "none";
      uzd.style.display = "none";
      div.style.display = "none";
      //popup
      popup.style.display = "block";
      overlay.style.display = "block";
      par = "Spēles noteikumi";
      statuss.style.color = "rgb(166, 146, 32)";
      statuss.innerText = par;
      atb =
        "Balstoties uz dotajiem datiem un izmantojot salikto procentu formulu, nosaki, kuras kārts darījumu pieņemt, lai pēc termiņa beigām iegūtu lielāko iespējamo naudas summu no investīcijas. Termiņš jāizsaka gados! Par katru pareizu atbildi iegūsi 1 punktu. Spēles beigās uzzināsi iegūto naudas summu no noguldījumiem un maksimālo summu, kuru varēji iegūt. Veiksmi!";
      atbilde.innerText = atb;
      atbilde.style.display = "flex";
      jaunaKartsBtn.innerText = "sākt";
      jaunaKartsBtn.style.backgroundColor = "green";
      jaunaKartsBtn.style.color = "white";
      questionNr = 1;
    }
    if (questionNr < 6) {
      // kārts 1
      let rnd = Math.floor(Math.random() * isKartis.length);
      const cardInView = isKartis[rnd];
      cardValue = cardInView.value;
      capital = cardInView.capital;
      console.log("1. kārts vērtība: ", cardValue);
      let virsraksts = document.getElementById("card-title");
      virsraksts.innerText = cardInView.nr;
      let teksts = document.getElementById("card-text");
      teksts.innerText = cardInView.text;

      // kārts 2
      let rnd1;
      do {
        rnd1 = Math.floor(Math.random() * isKartis.length);
      } while (rnd1 === rnd);
      const cardInView1 = isKartis[rnd1];
      cardValue1 = cardInView1.value;
      capital1 = cardInView1.capital;
      console.log("2. kārts vērtība: ", cardValue1);
      let virsraksts1 = document.getElementById("card-title1");
      virsraksts1.innerText = cardInView1.nr;
      let teksts1 = document.getElementById("card-text1");
      teksts1.innerText = cardInView1.text;

      jaunaKartsBtn.style.display = "flex";
    }

    if (questionNr == 6) {
      console.log("sākas jautājumi par ilgtermiņa noguldījumiem");
    }

    if (questionNr > 5 && questionNr < 11) {
      // kārts 1
      let rnd = Math.floor(Math.random() * ilgKartis.length);
      const cardInView = ilgKartis[rnd];
      cardValue = cardInView.value;
      capital = cardInView.capital;
      console.log("1. kārts vērtība: ", cardValue);
      let virsraksts = document.getElementById("card-title");
      virsraksts.innerText = cardInView.nr;
      let teksts = document.getElementById("card-text");
      teksts.innerText = cardInView.text;

      // kārts 2
      let rnd1;
      do {
        rnd1 = Math.floor(Math.random() * ilgKartis.length);
      } while (rnd1 === rnd);
      const cardInView1 = ilgKartis[rnd1];
      cardValue1 = cardInView1.value;
      capital1 = cardInView1.capital;
      console.log("2. kārts vērtība: ", cardValue1);
      let virsraksts1 = document.getElementById("card-title1");
      virsraksts1.innerText = cardInView1.nr;
      let teksts1 = document.getElementById("card-text1");
      teksts1.innerText = cardInView1.text;

      jaunaKartsBtn.style.display = "flex";
    }

    if (questionNr == 11) {
      console.log("sākas jauktie jautājumi");
    }

    if (questionNr > 10) {
      // kārts 1
      let rnd = Math.floor(Math.random() * 20) + 1;
      const cardInView = kartis[rnd];
      cardValue = cardInView.value;
      capital = cardInView.capital;
      console.log("1. kārts vērtība: ", cardValue);
      let virsraksts = document.getElementById("card-title");
      virsraksts.innerText = cardInView.nr;
      let teksts = document.getElementById("card-text");
      teksts.innerText = cardInView.text;

      // kārts 2
      let rnd1;
      do {
        rnd1 = Math.floor(Math.random() * 20) + 21;
      } while (rnd1 === rnd);
      const cardInView1 = kartis[rnd1];
      cardValue1 = cardInView1.value;
      capital1 = cardInView1.capital;
      console.log("2. kārts vērtība: ", cardValue1);
      let virsraksts1 = document.getElementById("card-title1");
      virsraksts1.innerText = cardInView1.nr;
      let teksts1 = document.getElementById("card-text1");
      teksts1.innerText = cardInView1.text;

      jaunaKartsBtn.style.display = "flex";
    }
  }
}

let pienBtn = document.getElementById("pienemt");
let pienBtn1 = document.getElementById("pienemt1");
pienBtn.addEventListener("click", pienemt);
function pienemt() {
  if (cardValue > cardValue1) {
    console.log("Atbilde ir pareiza");
    //alert("tu saproti ko dari");
    summa = summa + cardValue;
    maxSumma = maxSumma + cardValue;
    console.log("summa:" + summa);
    console.log("Max summa:" + maxSumma);
    punkti = punkti + 1;
    if (questionNr < 6) {
      isPunkti = isPunkti + 1;
      console.log("Iegūto ispunktu skaits: " + isPunkti);
    }
    if (5 < questionNr && questionNr < 11) {
      ilgPunkti = ilgPunkti + 1;
      console.log("Iegūto ilgpunktu skaits: " + ilgPunkti);
    }
    console.log("Iegūto punktu skaits: " + punkti);
    //popup
    popup.style.display = "block";
    overlay.style.display = "block";
    par = "Atbilde ir pareiza!";
    statuss.style.color = "green";
    statuss.innerText = par;
    atb =
      "Pamatojums: " +
      cardValue +
      " > " +
      cardValue1 +
      "\n Iegūtais punktu skaits: " +
      punkti;
    atbilde.innerText = atb;
    atbilde.style.display = "flex";
    questionNr = questionNr + 1;
    if (questionNr > 16) {
      beigas();
      return;
    }
  } else {
    console.log("Atbilde ir nepareiza");
    console.log("Iegūto punktu skaits: " + punkti);
    //alert("tu nesaproti ko dari!");
    maxSumma = maxSumma + cardValue1;
    console.log("Max summa:" + maxSumma);
    //popup
    popup.style.display = "block";
    overlay.style.display = "block";
    par = "Atbilde nav pareiza!";
    statuss.style.color = "rgb(208, 22, 22)";
    statuss.innerText = par;
    atb =
      "Pamatojums: " +
      cardValue +
      " < " +
      cardValue1 +
      " \n Iegūtais punktu skaits: " +
      punkti;
    atbilde.innerText = atb;
    atbilde.style.display = "flex";
    questionNr = questionNr + 1;
    if (questionNr > 16) {
      beigas();
      return;
    }
  }
  //console.log("pienemts");
}
pienBtn1.addEventListener("click", pienemt1);
function pienemt1() {
  if (cardValue1 > cardValue) {
    console.log("Atbilde ir pareiza");
    //alert("tu saproti ko dari");
    summa = summa + cardValue1;
    maxSumma = maxSumma + cardValue1;
    console.log("summa:" + summa);
    console.log("Max summa:" + maxSumma);
    punkti = punkti + 1;
    if (questionNr < 6) {
      isPunkti = isPunkti + 1;
      console.log("Iegūto ispunktu skaits: " + isPunkti);
    }
    if (5 < questionNr && questionNr < 11) {
      ilgPunkti = ilgPunkti + 1;
      console.log("Iegūto ilgpunktu skaits: " + ilgPunkti);
    }
    console.log("Iegūto punktu skaits: " + punkti);
    console.log("Iegūto ispunktu skaits: " + isPunkti);
    //popup
    popup.style.display = "block";
    overlay.style.display = "block";
    par = "Atbilde ir pareiza!";
    statuss.style.color = "green";
    statuss.innerText = par;
    atb =
      "Pamatojums: " +
      cardValue +
      " < " +
      cardValue1 +
      "\n Iegūtais punktu skaits: " +
      punkti;
    atbilde.innerText = atb;
    atbilde.style.display = "flex";
    questionNr = questionNr + 1;
    if (questionNr > 16) {
      beigas();
      return;
    }
  }

  // }
  else {
    console.log("Atbilde ir nepareiza");
    //alert("tu nesaproti ko dari!");
    maxSumma = maxSumma + cardValue1;
    console.log("Max summa:" + maxSumma);
    //popup
    popup.style.display = "block";
    overlay.style.display = "block";
    par = "Atbilde nav pareiza!";
    statuss.style.color = "rgb(208, 22, 22)";
    statuss.innerText = par;
    atb =
      "Pamatojums: " +
      cardValue +
      " > " +
      cardValue1 +
      " \n Iegūtais punktu skaits: " +
      punkti;
    atbilde.innerText = atb;
    atbilde.style.display = "flex";
    questionNr = questionNr + 1;
    if (questionNr > 16) {
      beigas();
      return;
    }
  }
  //console.log("pienemts");
}
function beigas() {
  console.log("spēle beigusies");
  velreiz.style.display = "flex";
  uzd.style.display = "none";
  div.style.display = "none";
  jautElement.style.display = "none";
  jaunaKartsBtn.style.display = "none";
  atbilde.style.display = "none";
  popup.style.display = "none";
  overlay.style.display = "none";
  summa = parseFloat(summa.toFixed(2));
  maxSumma = parseFloat(maxSumma.toFixed(2));
  rez =
    "Iegūto punktu skaits: " +
    punkti +
    "\n Spēles laikā iegūti " +
    summa +
    " EUR no iespējamiem " +
    maxSumma +
    " EUR";
  rezElement.style.display = "block";
  rezElement.innerText = rez;
  procenti = (punkti / 15) * 100;
  procenti = procenti.toFixed(2);
  isProcenti = (isPunkti / 5) * 100;
  ilgProcenti = (ilgPunkti / 5) * 100;
  savetoDb();
  end.style.display = "block";
  questionNr = 1;
  punkti = 0;
  isPunkti = 0;
  ilgPunkti = 0;
  summa = 0;
  maxSumma = 0;
}
async function savetoDb() {
  saveObj = {
    vards: vards.value,
    klase: klase,
    rezultats: punkti,
    procenti: procenti,
    ilgPunkti: ilgPunkti,
    isPunkti: isPunkti,
    isTermProcenti: isProcenti,
    ilgTermProcenti: ilgProcenti,
    iegutaNauda: summa,
    maksimalaSumma: maxSumma,
  };
  console.log("Saglabātie dati: ", saveObj);

  const host = "https://programmesana2.lv";
  //   const host = "http://localhost:3000";
  const apiUrl = `${host}/api/janis/save-to-db`;
  const url = `${apiUrl}?vards=${encodeURIComponent(
    saveObj.vards
  )}&klase=${encodeURIComponent(saveObj.klase)}&rezultats=${encodeURIComponent(
    saveObj.rezultats
  )}&procenti=${encodeURIComponent(
    saveObj.procenti
  )}&ilgPunkti=${encodeURIComponent(
    saveObj.ilgPunkti
  )}&isPunkti=${encodeURIComponent(
    saveObj.isPunkti
  )}&isTermProcenti=${encodeURIComponent(
    saveObj.isTermProcenti
  )}&ilgTermProcenti=${encodeURIComponent(
    saveObj.ilgTermProcenti
  )}&iegutaNauda=${encodeURIComponent(
    saveObj.iegutaNauda
  )}&maksimalaSumma=${encodeURIComponent(saveObj.maksimalaSumma)}&key=janis123`;

  console.log(url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Atbilde no servera:", data);
  } catch (error) {
    console.error("Kļūda nosūtot datus:", error);
  }
}
