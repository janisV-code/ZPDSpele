const vards=document.getElementById("vards");
const jaunaKartsBtn=document.getElementById("enter");
console.log("strada js")
jaunaKartsBtn.addEventListener("click", jaunaKarts);
const saktBtn=document.getElementById("sakt");
saktBtn.addEventListener("click", jaunaKarts);
const velreiz=document.getElementById("vel");
velreiz.addEventListener("click", jaunaKarts);
let rezElement = document.getElementById("rez");
let jautElement=document.getElementById("jaut");
let spele=document.getElementById("nos");
let end=document.getElementById("viss");
let atbilde=document.getElementById("atb");
let punkti=0;
let isPunkti=0;
let ilgPunkti=0;
let procenti=0;
let isProcenti=0;
let ilgProcenti=0;
//paslēpt
jaunaKartsBtn.style.display="none";
const div=document.getElementById("card-container");
div.style.display="none";
const uzd=document.getElementById("uzd");
uzd.style.display="none";
velreiz.style.display="none";
jautElement.style.display="none";
end.style.display="none";
atbilde.style.display="none";

const kartis=[
    {
        id: "1",
        nr: "Swedbank",
        text: "Termiņš: 8 mēneši\nProcentu likme: 2.3%\nVeids: fiksēti\nKapitāls: 500 EUR",
        term: "8 mēneši",
        rate: "2.3%",
        capital: 500,
        value: 509 // Aprēķināts: 500 * (1 + 0.023 * (8/12))
    },
    {
        id: "2",
        nr: "Citadele",
        text: "Termiņš: 3 gadi\nProcentu likme: 3.2%\nVeids: fiksēti\nKapitāls: 440 EUR",
        term: "3 gadi",
        rate: "3.2%",
        capital: 440,
        value: 483 // Aprēķināts: 440 * (1 + 0.032)^3
    },
    {
        id: "3",
        nr: "SEB",
        text: "Termiņš: 14 mēneši\nProcentu likme: 2.7%\nVeids: fiksēti\nKapitāls: 480 EUR",
        term: "14 mēneši",
        rate: "2.7%",
        capital: 480,
        value: 495 // Aprēķināts: 480 * (1 + 0.027 * (14/12))
    },
    {
        id: "4",
        nr: "Luminor",
        text: "Termiņš: 1 gads\nProcentu likme: 3%\nVeids: fiksēti\nKapitāls: 490 EUR",
        term: "1 gads",
        rate: "3%",
        capital: 490,
        value: 505 // Aprēķināts: 490 * (1 + 0.03)
    },
    {
        id: "5",
        nr: "BlueOrange Bank",
        text: "Termiņš: 9 mēneši\nProcentu likme: 2.2%\nVeids: fiksēti\nKapitāls: 475 EUR",
        term: "9 mēneši",
        rate: "2.2%",
        capital: 475,
        value: 484 // Aprēķināts: 475 * (1 + 0.022 * (9/12))
    },
    {
        id: "6",
        nr: "Revolut Bank",
        text: "Termiņš: 2 gadi\nProcentu likme: 2.9%\nVeids: fiksēti\nKapitāls: 460 EUR",
        term: "2 gadi",
        rate: "2.9%",
        capital: 460,
        value: 501 // Aprēķināts: 460 * (1 + 0.029)^2
    },
    {
        id: "7",
        nr: "PrivatBank",
        text: "Termiņš: 18 mēneši\nProcentu likme: 3.1%\nVeids: fiksēti\nKapitāls: 455 EUR",
        term: "18 mēneši",
        rate: "3.1%",
        capital: 455,
        value: 495 // Aprēķināts: 455 * (1 + 0.031 * (18/12))
    },
    {
        id: "8",
        nr: "Citadele",
        text: "Termiņš: 2.5 gadi\nProcentu likme: 3.5%\nVeids: fiksēti\nKapitāls: 430 EUR",
        term: "2.5 gadi",
        rate: "3.5%",
        capital: 430,
        value: 500 // Aprēķināts: 430 * (1 + 0.035)^2.5
    },
    {
        id: "9",
        nr: "Swedbank",
        text: "Termiņš: 10 mēneši\nProcentu likme: 2.6%\nVeids: fiksēti\nKapitāls: 480 EUR",
        term: "10 mēneši",
        rate: "2.6%",
        capital: 480,
        value: 493 // Aprēķināts: 480 * (1 + 0.026 * (10/12))
    },
    {
        id: "10",
        nr: "SEB",
        text: "Termiņš: 4 gadi\nProcentu likme: 3.8%\nVeids: fiksēti\nKapitāls: 410 EUR",
        term: "4 gadi",
        rate: "3.8%",
        capital: 410,
        value: 508 // Aprēķināts: 410 * (1 + 0.038)^4
    }
];
const isKartis=[
    { id: "1", nr: "BanKrap", text: "Termiņš: 12 mēneši\nProcentu likme: 5.5%\nVeids: fiksēti\nKapitāls: 500 EUR", term: "12 mēneši", rate: "5.5%", capital: 500, value: 634.99 },
    { id: "2", nr: "PupiņuBank", text: "Termiņš: 8 mēneši\nProcentu likme: 6%\nVeids: fiksēti\nKapitāls: 550 EUR", term: "8 mēneši", rate: "6%", capital: 550, value: 643.34 },
    { id: "3", nr: "SkrūvjuBank", text: "Termiņš: 10 mēneši\nProcentu likme: 7%\nVeids: fiksēti\nKapitāls: 600 EUR", term: "10 mēneši", rate: "7%", capital: 600, value: 642.81 },
    { id: "4", nr: "JānisBank", text: "Termiņš: 15 mēneši\nProcentu likme: 8%\nVeids: fiksēti\nKapitāls: 650 EUR", term: "15 mēneši", rate: "8%", capital: 650, value: 688.98 },
    { id: "5", nr: "BananaBank", text: "Termiņš: 6 mēneši\nProcentu likme: 5%\nVeids: fiksēti\nKapitāls: 500 EUR", term: "6 mēneši", rate: "5%", capital: 500, value: 609.61 },
    { id: "6", nr: "PūpēdiBank", text: "Termiņš: 11 mēneši\nProcentu likme: 6.5%\nVeids: fiksēti\nKapitāls: 550 EUR", term: "11 mēneši", rate: "6.5%", capital: 550, value: 601.75 },
    { id: "7", nr: "DizainBank", text: "Termiņš: 14 mēneši\nProcentu likme: 7.5%\nVeids: fiksēti\nKapitāls: 600 EUR", term: "14 mēneši", rate: "7.5%", capital: 600, value: 646.84 },
    { id: "8", nr: "TukšoBank", text: "Termiņš: 9 mēneši\nProcentu likme: 6.2%\nVeids: fiksēti\nKapitāls: 550 EUR", term: "9 mēneši", rate: "6.2%", capital: 550, value: 624.79 },
    { id: "9", nr: "BērzBank", text: "Termiņš: 13 mēneši\nProcentu likme: 8%\nVeids: fiksēti\nKapitāls: 650 EUR", term: "13 mēneši", rate: "8%", capital: 650, value: 683.96 },
    { id: "10", nr: "ČiliBank", text: "Termiņš: 7 mēneši\nProcentu likme: 5.7%\nVeids: fiksēti\nKapitāls: 500 EUR", term: "7 mēneši", rate: "5.7%", capital: 500, value: 613.24 },
    { id: "11", nr: "TukšāBank", text: "Termiņš: 5 mēneši\nProcentu likme: 6.3%\nVeids: fiksēti\nKapitāls: 550 EUR", term: "5 mēneši", rate: "6.3%", capital: 550, value: 602.83 },
    { id: "12", nr: "BārduBank", text: "Termiņš: 16 mēneši\nProcentu likme: 9%\nVeids: fiksēti\nKapitāls: 600 EUR", term: "16 mēneši", rate: "9%", capital: 600, value: 691.88 },
    { id: "13", nr: "SaldāBank", text: "Termiņš: 8 mēneši\nProcentu likme: 6.4%\nVeids: fiksēti\nKapitāls: 550 EUR", term: "8 mēneši", rate: "6.4%", capital: 550, value: 607.64 },
    { id: "14", nr: "SviestaBank", text: "Termiņš: 10 mēneši\nProcentu likme: 7.2%\nVeids: fiksēti\nKapitāls: 600 EUR", term: "10 mēneši", rate: "7.2%", capital: 600, value: 634.38 },
    { id: "15", nr: "VāverBank", text: "Termiņš: 14 mēneši\nProcentu likme: 7.8%\nVeids: fiksēti\nKapitāls: 650 EUR", term: "14 mēneši", rate: "7.8%", capital: 650, value: 687.57 },
    { id: "16", nr: "KūkuBank", text: "Termiņš: 6 mēneši\nProcentu likme: 5.2%\nVeids: fiksēti\nKapitāls: 500 EUR", term: "6 mēneši", rate: "5.2%", capital: 500, value: 609.48 },
    { id: "17", nr: "ZiloņBank", text: "Termiņš: 9 mēneši\nProcentu likme: 6.1%\nVeids: fiksēti\nKapitāls: 550 EUR", term: "9 mēneši", rate: "6.1%", capital: 550, value: 615.73 },
    { id: "18", nr: "RadošāBank", text: "Termiņš: 12 mēneši\nProcentu likme: 6.8%\nVeids: fiksēti\nKapitāls: 600 EUR", term: "12 mēneši", rate: "6.8%", capital: 600, value: 644.80 },
    { id: "19", nr: "KardioBank", text: "Termiņš: 13 mēneši\nProcentu likme: 8.5%\nVeids: fiksēti\nKapitāls: 650 EUR", term: "13 mēneši", rate: "8.5%", capital: 650, value: 696.74 },
    { id: "20", nr: "SīpoliBank", text: "Termiņš: 7 mēneši\nProcentu likme: 6.3%\nVeids: fiksēti\nKapitāls: 500 EUR", term: "7 mēneši", rate: "6.3%", capital: 500, value: 609.48 }
]
const ilgKartis=[
    {
        "id": 1,
        "nr": "SapņuSeifs",
        "text": "Termiņš: 6 gadi\nProcentu likme: 2.3%\nVeids: fiksēti\nKapitāls: 345 EUR",
        "term": 6,
        "rate": 2.3,
        "capital": 345,
        "value": 371.89  // Aprēķins: 345 * (1 + 0.023)^6
    },
    {
        "id": 2,
        "nr": "NaudasNam",
        "text": "Termiņš: 5 gadi\nProcentu likme: 3.4%\nVeids: fiksēti\nKapitāls: 322 EUR",
        "term": 5,
        "rate": 3.4,
        "capital": 322,
        "value": 377.08  // Aprēķins: 322 * (1 + 0.034)^5
    },
    {
        "id": 3,
        "nr": "DrošībaMaks",
        "text": "Termiņš: 7 gadi\nProcentu likme: 1.9%\nVeids: fiksēti\nKapitāls: 365 EUR",
        "term": 7,
        "rate": 1.9,
        "capital": 365,
        "value": 393.16  // Aprēķins: 365 * (1 + 0.019)^7
    },
    {
        "id": 4,
        "nr": "BankasSapnis",
        "text": "Termiņš: 8 gadi\nProcentu likme: 1.5%\nVeids: fiksēti\nKapitāls: 375 EUR",
        "term": 8,
        "rate": 1.5,
        "capital": 375,
        "value": 398.82  // Aprēķins: 375 * (1 + 0.015)^8
    },
    {
        "id": 5,
        "nr": "ZeltaGlabātava",
        "text": "Termiņš: 6 gadi\nProcentu likme: 2.2%\nVeids: fiksēti\nKapitāls: 346 EUR",
        "term": 6,
        "rate": 2.2,
        "capital": 346,
        "value": 376.84  // Aprēķins: 346 * (1 + 0.022)^6
    },
    {
        "id": 6,
        "nr": "IenesīgsFonds",
        "text": "Termiņš: 7 gadi\nProcentu likme: 2.4%\nVeids: fiksēti\nKapitāls: 345 EUR",
        "term": 7,
        "rate": 2.4,
        "capital": 345,
        "value": 397.21  // Aprēķins: 345 * (1 + 0.024)^7
    },
    {
        "id": 7,
        "nr": "FinanšuOsta",
        "text": "Termiņš: 5 gadi\nProcentu likme: 3.1%\nVeids: fiksēti\nKapitāls: 335 EUR",
        "term": 5,
        "rate": 3.1,
        "capital": 335,
        "value": 387.27  // Aprēķins: 335 * (1 + 0.031)^5
    },
    {
        "id": 8,
        "nr": "DrošsPieaugums",
        "text": "Termiņš: 6 gadi\nProcentu likme: 1.8%\nVeids: fiksēti\nKapitāls: 359 EUR",
        "term": 6,
        "rate": 1.8,
        "capital": 359,
        "value": 377.05 // Aprēķins: 359 * (1 + 0.018)^6
    },
    {
        "id": 9,
        "nr": "KapitālaPlūsma",
        "text": "Termiņš: 8 gadi\nProcentu likme: 1.4%\nVeids: fiksēti\nKapitāls: 358 EUR",
        "term": 8,
        "rate": 1.4,
        "capital": 358,
        "value": 374.16  // Aprēķins: 358 * (1 + 0.014)^8
    },
    {
        "id": 10,
        "nr": "NaudasKalns",
        "text": "Termiņš: 7 gadi\nProcentu likme: 2.2%\nVeids: fiksēti\nKapitāls: 355 EUR",
        "term": 7,
        "rate": 2.2,
        "capital": 355,
        "value": 389.89  // Aprēķins: 355 * (1 + 0.022)^7
    },
    {
        "id": 11,
        "nr": "NaudasStraume",
        "text": "Termiņš: 6 gadi\nProcentu likme: 2.4%\nVeids: fiksēti\nKapitāls: 340 EUR",
        "term": 6,
        "rate": 2.4,
        "capital": 340,
        "value": 383.21  // Aprēķins: 340 * (1 + 0.024)^6
    },
    {
        "id": 12,
        "nr": "IeguldījumaKalns",
        "text": "Termiņš: 8 gadi\nProcentu likme: 1.3%\nVeids: fiksēti\nKapitāls: 350 EUR",
        "term": 8,
        "rate": 1.3,
        "capital": 350,
        "value": 374.62  // Aprēķins: 350 * (1 + 0.013)^8
    },
    {
        "id": 13,
        "nr": "StabilaBanka",
        "text": "Termiņš: 7 gadi\nProcentu likme: 1.7%\nVeids: fiksēti\nKapitāls: 375 EUR",
        "term": 7,
        "rate": 1.7,
        "capital": 375,
        "value": 389.91  // Aprēķins: 375 * (1 + 0.017)^7
    },
    {
        "id": 14,
        "nr": "NaudasKrātuve",
        "text": "Termiņš: 5 gadi\nProcentu likme: 2.9%\nVeids: fiksēti\nKapitāls: 320 EUR",
        "term": 5,
        "rate": 2.9,
        "capital": 320,
        "value": 374.94  // Aprēķins: 320 * (1 + 0.029)^5
    },
    {
        "id": 15,
        "nr": "PieaugumaKlubs",
        "text": "Termiņš: 6 gadi\nProcentu likme: 2.1%\nVeids: fiksēti\nKapitāls: 340 EUR",
        "term": 6,
        "rate": 2.1,
        "capital": 340,
        "value": 373.66  // Aprēķins: 340 * (1 + 0.021)^6
    },
    {
        "id": 16,
        "nr": "ProcentuParadīze",
        "text": "Termiņš: 7 gadi\nProcentu likme: 2.0%\nVeids: fiksēti\nKapitāls: 339 EUR",
        "term": 7,
        "rate": 2.0,
        "capital": 339,
        "value": 377.95  //Aprēķins: 339 * (1 + 0.02)^7
    },
    {
        "id": 17,
        "nr": "PeļņasPortfelis",
        "text": "Termiņš: 5 gadi\nProcentu likme: 3.4%\nVeids: fiksēti\nKapitāls: 325 EUR",
        "term": 5,
        "rate": 3.4,
        "capital": 325,
        "value": 377.38  // Aprēķins: 325 * (1 + 0.034)^5
    },
    {
        "id": 18,
        "nr": "StabilaGlabātava",
        "text": "Termiņš: 8 gadi\nProcentu likme: 1.5%\nVeids: fiksēti\nKapitāls: 353 EUR",
        "term": 8,
        "rate": 1.5,
        "capital": 353,
        "value": 374.55  // Aprēķins: 353 * (1 + 0.015)^8
    },
    {
        "id": 19,
        "nr": "PeļņasTilts",
        "text": "Termiņš: 6 gadi\nProcentu likme: 2.3%\nVeids: fiksēti\nKapitāls: 329 EUR",
        "term": 6,
        "rate": 2.3,
        "capital": 329,
        "value": 372.34  // Aprēķins: 329 * (1 + 0.023)^6
    },
    {
        "id": 20,
        "nr": "ProcentuDrošība",
        "text": "Termiņš: 5 gadi\nProcentu likme: 3.2%\nVeids: fiksēti\nKapitāls: 340 EUR",
        "term": 5,
        "rate": 3.2,
        "capital": 340,
        "value": 388.91  // Aprēķins: 340 * (1 + 0.032)^5
    }
]
//definē ārpus funkcijas vēlākai izmantošanai
let cardValue;
let cardValue1;
let questionNr=1;
function jaunaKarts(){
    spele.style.display="none";
    velreiz.style.display="none";
    end.style.display="none";
    rezElement.style.display="none";
    atbilde.style.display="none";
        console.log("spēlētāja vārds ir ",vards.value);
    vards.style.display="none";
    saktBtn.style.display="none";
        //nosaka spēles beigas
    if(questionNr>15){
        console.log("spēle beigusies");
        alert("spēle beigusies");
        velreiz.style.display="flex";
        uzd.style.display="none";
        div.style.display="none";
        jautElement.style.display="none";
        jaunaKartsBtn.style.display="none";
        end.style.display="block";
        rez = "Iegūto punktu skaits: "+ punkti;
        rezElement.style.display="block";
        rezElement.innerText = rez; 
        procenti=(punkti/15)*100;
        isProcenti=(isPunkti/5)*100;
        ilgProcenti=(ilgPunkti/5)*100;
        savetoDb();
        questionNr=1;
         punkti=0;
         isPunkti=0
         ilgPunkti=0
        return;
    }
    else {
        console.log("questionNr: ", questionNr);
        jautElement.style.display = "flex";
        uzd.style.display = "flex";
        jaut = "Jautājums NR " + questionNr;
        jautElement.innerText = jaut;
        uzd.style.display = "flex";
        div.style.display = "flex";
    
        if (questionNr == 1) {
            console.log("sākas jautājumi par īstermiņa noguldījumiem");
        }
    
        if (questionNr < 6) {
            // kārts 1
            let rnd = Math.floor(Math.random() * isKartis.length);
            const cardInView = isKartis[rnd];
            cardValue = cardInView.value;
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
            let rnd = Math.floor(Math.random() * kartis.length);
            const cardInView = kartis[rnd];
            cardValue = cardInView.value;
            console.log("1. kārts vērtība: ", cardValue);
            let virsraksts = document.getElementById("card-title");
            virsraksts.innerText = cardInView.nr;
            let teksts = document.getElementById("card-text");
            teksts.innerText = cardInView.text;
    
            // kārts 2
            let rnd1;
            do {
                rnd1 = Math.floor(Math.random() * kartis.length);
            } while (rnd1 === rnd);
            const cardInView1 = kartis[rnd1];
            cardValue1 = cardInView1.value;
            console.log("2. kārts vērtība: ", cardValue1);
            let virsraksts1 = document.getElementById("card-title1");
            virsraksts1.innerText = cardInView1.nr;
            let teksts1 = document.getElementById("card-text1");
            teksts1.innerText = cardInView1.text;
    
            jaunaKartsBtn.style.display = "flex";
        }
    
        questionNr = questionNr + 1;
    }
}

let pienBtn=document.getElementById("pienemt");
let pienBtn1=document.getElementById("pienemt1");
pienBtn.addEventListener("click", pienemt);
function pienemt(){
    if (cardValue>cardValue1){
        console.log("tu saproti ko dari")
        //alert("tu saproti ko dari");
        punkti=punkti + 1;
        if(questionNr<6){
            isPunkti=isPunkti+1;
        }
        if(questionNr<11){
            ilgPunkti=ilgPunkti+1;
        }
        console.log("Iegūto punktu skaits: "+punkti);
        console.log("Iegūto ispunktu skaits: "+isPunkti);
        div.style.display="none";
        atb= "Atbilde ir pareiza";
        atbilde.innerText = atb; 
        atbilde.style.display="flex";
        if(questionNr>15){
            console.log("spēle beigusies");
            alert("spēle beigusies");
            velreiz.style.display="flex";
            uzd.style.display="none";
            div.style.display="none";
            jautElement.style.display="none";
            jaunaKartsBtn.style.display="none";
            end.style.display="block";
            rez = "Iegūto punktu skaits: "+ punkti;
            rezElement.style.display="block";
            rezElement.innerText = rez; 
            procenti=(punkti/15)*100;
            isProcenti=(isPunkti/5)*100;
            ilgProcenti=(ilgPunkti/5)*100;
            savetoDb();
            questionNr=1;
            punkti=0;
            isPunkti=0
            ilgPunkti=0
            return;
        }
    }
    else{
        console.log("tu nesaproti ko dari!")
        console.log("Iegūto punktu skaits: "+punkti)
        //alert("tu nesaproti ko dari!");
        div.style.display="none";
        if(questionNr>15){
            console.log("spēle beigusies");
            alert("spēle beigusies");
            velreiz.style.display="flex";
            uzd.style.display="none";
            div.style.display="none";
            jautElement.style.display="none";
            jaunaKartsBtn.style.display="none";
            end.style.display="block";
            rez = "Iegūto punktu skaits: "+ punkti;
            rezElement.style.display="block";
            rezElement.innerText = rez; 
            procenti=(punkti/15)*100;
            isProcenti=(isPunkti/5)*100;
            ilgProcenti=(ilgPunkti/5)*100;
            savetoDb();
            questionNr=1;
            punkti=0;
            isPunkti=0
            ilgPunkti=0
            return;
        }
    }
div.style.display="none";
//console.log("pienemts");
}
pienBtn1.addEventListener("click", pienemt1);
function pienemt1(){
    if (cardValue1>cardValue){
        console.log("tu saproti ko dari")
        //alert("tu saproti ko dari");
        punkti=punkti + 1;
        if(questionNr<6){
            isPunkti=isPunkti+1;
        }
        if(questionNr<11){
            ilgPunkti=ilgPunkti+1;
        }
        console.log("Iegūto punktu skaits: "+punkti);
        console.log("Iegūto ispunktu skaits: "+isPunkti);
        div.style.display="none";
        if(questionNr>15){
            console.log("spēle beigusies");
            alert("spēle beigusies");
            velreiz.style.display="flex";
            uzd.style.display="none";
            div.style.display="none";
            jautElement.style.display="none";
            jaunaKartsBtn.style.display="none";
            end.style.display="block";
            rez = "Iegūto punktu skaits: "+ punkti;
            rezElement.style.display="block";
            rezElement.innerText = rez; 
            procenti=(punkti/15)*100;
            isProcenti=(isPunkti/5)*100;
            ilgProcenti=(ilgPunkti/5)*100;
            savetoDb();
            questionNr=1;
            punkti=0;
            isPunkti=0
            ilgPunkti=0
            return;
        }
    }

    // }
    else{
        console.log("tu nesaproti ko dari!")
        //alert("tu nesaproti ko dari!");
        div.style.display="none";
        if(questionNr>15){
            console.log("spēle beigusies");
            alert("spēle beigusies");
            velreiz.style.display="flex";
            uzd.style.display="none";
            div.style.display="none";
            jautElement.style.display="none";
            jaunaKartsBtn.style.display="none";
            end.style.display="block";
            rez = "Iegūto punktu skaits: "+ punkti;
            rezElement.style.display="block";
            rezElement.innerText = rez; 
            procenti=(punkti/15)*100;
            isProcenti=(isPunkti/5)*100;
            ilgProcenti=(ilgPunkti/5)*100;
            savetoDb();
            questionNr=1;
            punkti=0;
            isPunkti=0
            ilgPunkti=0
            return;
        }
    }
//console.log("pienemts");
}
function savetoDb() {
    saveObj = {
        vards: vards.value,
        rezultats: punkti,
        procenti: procenti,
        isTermProcenti: isProcenti,
        ilgTermProcenti: ilgProcenti,
    };
    console.log("Saglabātie dati: ", saveObj);
}
