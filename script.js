const vards=document.getElementById("vards");
const kl=document.getElementById("select");
let klase="nav";
kl.addEventListener("change",()=>{
    klase = kl.value;
});
kl.style.display="block";
const formula=document.getElementById("formula");
formula.style.display="none";
const jaunaKartsBtn=document.getElementById("enter");
console.log("strada js")
jaunaKartsBtn.addEventListener("click", jaunaKarts);
const saktBtn=document.getElementById("sakt");
saktBtn.addEventListener("click", jaunaKarts);
const velreiz=document.getElementById("vel");
velreiz.addEventListener("click", jaunaKarts);
let rezElement = document.getElementById("rez");
let rez2Element=document.getElementById("rez2");
let jautElement=document.getElementById("jaut");
let spele=document.getElementById("nos");
let end=document.getElementById("viss");
let atbilde=document.getElementById("atb");
let statuss=document.getElementById("statuss");
const popup=document.getElementById("popup");
const overlay=document.getElementById("overlay");
let punkti=0;
let isPunkti=0;
let ilgPunkti=0;
let procenti=0;
let isProcenti=0;
let ilgProcenti=0;
//table
let table=document.getElementById("table");
let tNr=document.getElementById("tNr");
let maxV=document.getElementById("maxV");
let iegV=document.getElementById("iegV");
table.style.display="none";
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
rezElement.style.display="none";
rez2Element.style.display="none";

 let summa=0;
 let maxSumma=0;
const isKartis=[
    {
        id: 1,
        nr: "Finanšu Pavasaris",
        text: "Termiņš: 9 mēneši\nProcentu likme: 5,0%\nVeids: fiksēti\nKapitāls: 340 EUR",
        term: 9,
        rate: 5.0,
        capital: 340,
        value: 352.67 // Aprēķins: 340 * (1 + 0.05)^(9/12)
    },
    {
        id: 2,
        nr: "Procentu Pērle",
        text: "Termiņš: 6 mēneši\nProcentu likme: 7,5%\nVeids: fiksēti\nKapitāls: 362 EUR",
        term: 6,
        rate: 7.5,
        capital: 362,
        value: 375.33 // Aprēķins: 362 * (1 + 0.075)^(6/12)
    },
    {
        id: 3,
        nr: "Noguldījumu Zvaigzne",
        text: "Termiņš: 8 mēneši\nProcentu likme: 6,0%\nVeids: fiksēti\nKapitāls: 384 EUR",
        term: 8,
        rate: 6.0,
        capital: 384,
        value: 399.21 // Aprēķins: 384 * (1 + 0.06)^(8/12)
    },
    {
        id: 4,
        nr: "Naudas medības",
        text: "Termiņš: 10 mēneši\nProcentu likme: 8,5%\nVeids: fiksēti\nKapitāls: 341 EUR",
        term: 10,
        rate: 8.5,
        capital: 341,
        value: 364.99 // Aprēķins: 341 * (1 + 0.085)^(10/12)
    },
    {
        id: 5,
        nr: "Loterija",
        text: "Termiņš: 12 mēneši\nProcentu likme: 10,0%\nVeids: fiksēti\nKapitāls: 347 EUR",
        term: 12,
        rate: 10.0,
        capital: 347,
        value: 375.68 // Aprēķins: 347 * (1 + 0.10)^(10/12)
    },
    {
        id: 6,
        nr: "Zelta Banka",
        text: "Termiņš: 7 mēneši\nProcentu likme: 9,5%\nVeids: fiksēti\nKapitāls: 351 EUR",
        term: 7,
        rate: 9.5,
        capital: 351,
        value: 370.08 // Aprēķins: 351 * (1 + 0.095)^(7/12)
    },
    {
        id: 7,
        nr: "Plūstošais Finansists",
        text: "Termiņš: 9 mēneši\nProcentu likme: 11,0%\nVeids: fiksēti\nKapitāls: 361 EUR",
        term: 9,
        rate: 11.0,
        capital: 361,
        value: 390.39 // Aprēķins: 361 * (1 + 0.11)^(9/12)
    },
    {
        id: 8,
        nr: "Fonds, ko nevari atrast",
        text: "Termiņš: 5 mēneši\nProcentu likme: 10,5%\nVeids: fiksēti\nKapitāls: 345 EUR",
        term: 5,
        rate: 10.5,
        capital: 345,
        value: 359.66 // Aprēķins: 345 * (1 + 0.105)^(5/12)
    },
    {
        id: 9,
        nr: "Fiksētais Ekonomists",
        text: "Termiņš: 11 mēneši\nProcentu likme: 12,5%\nVeids: fiksēti\nKapitāls: 339 EUR",
        term: 11,
        rate: 12.5,
        capital: 339,
        value: 377.65 // Aprēķins: 339 * (1 + 0.125)^(11/12)
    },
    {
        id: 10,
        nr: "Uzticies man, brāl",
        text: "Termiņš: 8 mēneši\nProcentu likme: 5,5%\nVeids: fiksēti\nKapitāls: 378 EUR",
        term: 8,
        rate: 5.5,
        capital: 378,
        value: 391.74 // Aprēķins: 378 * (1 + 0.055)^(8/12)
    },
    {
        id: 11,
        nr: "Noguldījumu Eksperts",
        text: "Termiņš: 7 mēneši\nProcentu likme: 8,5%\nVeids: fiksēti\nKapitāls: 348 EUR",
        term: 7,
        rate: 8.5,
        capital: 348,
        value: 364.96 // Aprēķins: 348 * (1 + 0.085)^(7/12)
    },
    {
        id: 12,
        nr: "Procentu Dinamika",
        text: "Termiņš: 8 mēneši\nProcentu likme: 9,0%\nVeids: fiksēti\nKapitāls: 353 EUR",
        term: 8,
        rate: 9.0,
        capital: 353,
        value: 373.87 // Aprēķins: 353 * (1 + 0.09)^(8/12)
    },
    {
        id: 13,
        nr: "Caurā krājkase",
        text: "Termiņš: 9 mēneši\nProcentu likme: 9,5%\nVeids: fiksēti\nKapitāls: 362 EUR",
        term: 9,
        rate: 9.5,
        capital: 362,
        value: 387.5 // Aprēķins: 362 * (1 + 0.095)^(9/12)
    },
    {
        id: 14,
        nr: "Ienesīgā Kase",
        text: "Termiņš: 10 mēneši\nProcentu likme: 10,0%\nVeids: fiksēti\nKapitāls: 332 EUR",
        term: 10,
        rate: 10.0,
        capital: 332,
        value: 359.44 // Aprēķins: 332 * (1 + 0.10)^(10/12)
    },
    {
        id: 15,
        nr: "Zvaigžņu Finanšu Plāns",
        text: "Termiņš: 6 mēneši\nProcentu likme: 10,5%\nVeids: fiksēti\nKapitāls: 376 EUR",
        term: 6,
        rate: 10.5,
        capital: 376,
        value: 395.25 // Aprēķins: 376 * (1 + 0.105)^(6/12)
    },
    {
        id: 16,
        nr: "Tūlītējais Peļņas Rezervāts",
        text: "Termiņš: 7 mēneši\nProcentu likme: 7,0%\nVeids: fiksēti\nKapitāls: 353 EUR",
        term: 7,
        rate: 7.0,
        capital: 353,
        value: 367.21 // Aprēķins: 353 * (1 + 0.07)^(7/12)
    },
    {
        id: 17,
        nr: "Finanšu Stūrakmens",
        text: "Termiņš: 8 mēneši\nProcentu likme: 7,5%\nVeids: fiksēti\nKapitāls: 362 EUR",
        term: 8,
        rate: 7.5,
        capital: 362,
        value: 379.88 // Aprēķins: 362 * (1 + 0.075)^(8/12)
    },
    {
        id: 18,
        nr: "Mazumiņa fonds",
        text: "Termiņš: 9 mēneši\nProcentu likme: 8,0%\nVeids: fiksēti\nKapitāls: 377 EUR",
        term: 9,
        rate: 8.0,
        capital: 377,
        value: 399.4 // Aprēķins: 377 * (1 + 0.08)^(9/12)
    },
    {
        id: 19,
        nr: "Peļņas Perspektīva",
        text: "Termiņš: 10 mēneši\nProcentu likme: 8,5%\nVeids: fiksēti\nKapitāls: 333 EUR",
        term: 10,
        rate: 8.5,
        capital: 333,
        value: 356.43 // Aprēķins: 333 * (1 + 0.085)^(10/12)
    },
    {
        id: 20,
        nr: "Gada Dārgakmens",
        text: "Termiņš: 6 mēneši\nProcentu likme: 9,0%\nVeids: fiksēti\nKapitāls: 356 EUR",
        term: 6,
        rate: 9.0,
        capital: 356,
        value: 371.67 // Aprēķins: 356 * (1 + 0.09)^(6/12)
    }
    //Pārbaudīts, value atbilst patiesībai.
]
const ilgKartis=[
    {
        id: 1,
        nr: "SapņuSeifs",
        text: "Termiņš: 6 gadi\nProcentu likme: 2,3%\nVeids: fiksēti\nKapitāls: 345 EUR",
        term: 6,
        rate: 2.3,
        capital: 345,
        value: 395.43  // Aprēķins: 345 * (1 + 0.023)^6 
    },
    {
        id: 2,
        nr: "NaudasNams",
        text: "Termiņš: 5 gadi\nProcentu likme: 3,4%\nVeids: fiksēti\nKapitāls: 300 EUR",
        term: 5,
        rate: 3.4,
        capital: 300,
        value: 354.59// Aprēķins: 300 * (1 + 0.034)^5
    },
    {
        id: 3,
        nr: "DrošībaMax",
        text: "Termiņš: 3 gadi\nProcentu likme: 1,9%\nVeids: fiksēti\nKapitāls: 360 EUR",
        term: 3,
        rate: 1.9,
        capital: 360,
        value: 380.91  // Aprēķins: 360 * (1 + 0.019)^3
    },
    {
        id: 4,
        nr: "Bankas Sapnis",
        text: "Termiņš: 3 gadi\nProcentu likme: 1,5%\nVeids: fiksēti\nKapitāls: 375 EUR",
        term: 3,
        rate: 1.5,
        capital: 375,
        value: 392.13 // Aprēķins: 375 * (1 + 0.015)^3 NEDER
    },
    {
        id: 5,
        nr: "Zelta Glabātava",
        text: "Termiņš: 6 gadi\nProcentu likme: 2,2%\nVeids: fiksēti\nKapitāls: 336 EUR",
        term: 6,
        rate: 2.2,
        capital: 336,
        value: 382.86  // Aprēķins: 336 * (1 + 0.022)^6
    },
    {
        id: 6,
        nr: "Ienesīgs Fonds",
        text: "Termiņš: 2 gadi\nProcentu likme: 2,4%\nVeids: fiksēti\nKapitāls: 345 EUR",
        term: 2,
        rate: 2.4,
        capital: 345,
        value: 361.76  // Aprēķins: 345 * (1 + 0.024)^2
    },
    {
        id: 7,
        nr: "Finanšu Osta",
        text: "Termiņš: 5 gadi\nProcentu likme: 3,1%\nVeids: fiksēti\nKapitāls: 335 EUR",
        term: 5,
        rate: 3.1,
        capital: 335,
        value: 390.25  // Aprēķins: 335 * (1 + 0.031)^5
    },
    {
        id: 8,
        nr: "Drošs Pieaugums",
        text: "Termiņš: 6 gadi\nProcentu likme: 1,8%\nVeids: fiksēti\nKapitāls: 359 EUR",
        term: 6,
        rate: 1.8,
        capital: 359,
        value: 399.56 // Aprēķins: 359 * (1 + 0.018)^6
    },
    {
        id: 9,
        nr: "Kapitāla Plūsma",
        text: "Termiņš: 7 gadi\nProcentu likme: 1,4%\nVeids: fiksēti\nKapitāls: 358 EUR",
        term: 7,
        rate: 1.4,
        capital: 358,
        value: 394.59  // Aprēķins: 358 * (1 + 0.014)^7
    },
    {
        id: 10,
        nr: "Naudas Kalns",
        text: "Termiņš: 5 gadi\nProcentu likme: 2,2%\nVeids: fiksēti\nKapitāls: 355 EUR",
        term: 5,
        rate: 2.2,
        capital: 355,
        value: 395.81  // Aprēķins: 355 * (1 + 0.022)^5
    },
    {
        id: 11,
        nr: "Naudas Straume",
        text: "Termiņš: 5 gadi\nProcentu likme: 2,4%\nVeids: fiksēti\nKapitāls: 340 EUR",
        term: 5,
        rate: 2.4,
        capital: 340,
        value: 382.81 // Aprēķins: 340 * (1 + 0.024)^5
    },
    {
        id: 12,
        nr: "Naudas Vērtības Augstkalne",
        text: "Termiņš: 8 gadi\nProcentu likme: 1,3%\nVeids: fiksēti\nKapitāls: 350 EUR",
        term: 8,
        rate: 1.3,
        capital: 350,
        value: 388.10  // Aprēķins: 350 * (1 + 0.013)^8
    },
    {
        id: 13,
        nr: "Gadsimta noguldījums",
        text: "Termiņš: 2 gadi\nProcentu likme: 1,7%\nVeids: fiksēti\nKapitāls: 365 EUR",
        term: 2,
        rate: 1.7,
        capital: 365,
        value: 377.52  // Aprēķins: 365 * (1 + 0.017)^2
    },
    {
        id: 14,
        nr: "Zelta Rezervju Fonds",
        text: "Termiņš: 5 gadi\nProcentu likme: 2,9%\nVeids: fiksēti\nKapitāls: 320 EUR",
        term: 5,
        rate: 2.9,
        capital: 320,
        value: 369.17  // Aprēķins: 320 * (1 + 0.029)^5
    },
    {
        id: 15,
        nr: "Drosmīgais Noguldījums",
        text: "Termiņš: 6 gadi\nProcentu likme: 2,1%\nVeids: fiksēti\nKapitāls: 340 EUR",
        term: 6,
        rate: 2.1,
        capital: 340,
        value: 385.15 // Aprēķins: 340 * (1 + 0.021)^6
    },
    {
        id: 16,
        nr: "Procentu Paradīze",
        text: "Termiņš: 7 gadi\nProcentu likme: 2,0%\nVeids: fiksēti\nKapitāls: 339 EUR",
        term: 7,
        rate: 2.0,
        capital: 339,
        value: 389.40  // Aprēķins: 339 * (1 + 0.02)^7
    },
    {
        id: 17,
        nr: "Peļņas Portfelis",
        text: "Termiņš: 5 gadi\nProcentu likme: 3,4%\nVeids: fiksēti\nKapitāls: 315 EUR",
        term: 5,
        rate: 3.4,
        capital: 315,
        value: 372.32 // Aprēķins: 315 * (1 + 0.034)^5
    },
    {
        id: 18,
        nr: "Stabila Glabātava",
        text: "Termiņš: 8 gadi\nProcentu likme: 1,5%\nVeids: fiksēti\nKapitāls: 353 EUR",
        term: 8,
        rate: 1.5,
        capital: 353,
        value: 397.65  // Aprēķins: 353 * (1 + 0.015)^8
    },
    {
        id: 19,
        nr: "Laimīgās Rezervācijas",
        text: "Termiņš: 6 gadi\nProcentu likme: 2,3%\nVeids: fiksēti\nKapitāls: 329 EUR",
        term: 6,
        rate: 2.3,
        capital: 329,
        value: 377.09  // Aprēķins: 329 * (1 + 0.023)^6
    },
    {
        id: 20,
        nr: "Noguldījumu Oāze",
        text: "Termiņš: 3 gadi\nProcentu likme: 3,2%\nVeids: fiksēti\nKapitāls: 340 EUR",
        term: 3,
        rate: 3.2,
        capital: 340,
        value: 373.70  // Aprēķins: 340 * (1 + 0.032)^3
    }
    //Value vērtības pārbaudītas, atbilst patiesībai
]
//definē ārpus funkcijas vēlākai izmantošanai
let cardValue;
let cardValue1;
let questionNr=-1;
let capital;
let capital1;
let uzdevums;
function jaunaKarts(){
    const vardsVal=vards.value;
    if (vardsVal.trim().length === 0) {
        alert("Lūdzu ievadi savu vārdu!");
        return;
    }
    if(klase=="nav"){
        alert("Lūdzu ievadi klasi kurā mācies!");
        return;
    }
    spele.style.display="none";
    velreiz.style.display="none";
    rezElement.style.display="none";
    rez2Element.style.display="none";
    table.style.display="none";
    end.style.display="none";
    //popup
    popup.style.display = 'none';
    overlay.style.display = 'none';
    atbilde.style.display="none";
    
    vards.style.display="none";
    kl.style.display="none";
    saktBtn.style.display="none";
        //nosaka spēles beigas
    if(questionNr>10){
        beigas();
        return;
    }
    else {
        console.log("questionNr: ", questionNr);
        jautElement.style.display = "flex";
        jaut = "Investīcija NR " + questionNr;
        jautElement.innerText = jaut;
        if(questionNr==0){
            jautElement.style.display = "none";
            uzd.style.display = "none";
            div.style.display = "none";
            //popup
            popup.style.display="block";
            popup.style.overflowY="scroll";
            overlay.style.display="block";

            par="Formulas skaidrojums";
            statuss.style.color="rgb(166, 146, 32)";
            statuss.innerText=par;

            atb= "A - Iegūtā naudas summa no noguldījuma\n S - Sākotnējais kapitāls\n r - Procentu likme\n n - Noguldījuma termiņš (gados)";
            atbilde.innerText = atb; 
            atbilde.style.display="flex";

            jaunaKartsBtn.style.display="flex";
            jaunaKartsBtn.innerText="Sākt";
            jaunaKartsBtn.style.backgroundColor="#218838";
            jaunaKartsBtn.style.color="white";

            questionNr = 1;
        }
        else if(questionNr ==-1) {
            jautElement.style.display = "none";
            uzd.style.display = "none";
            div.style.display = "none";
            //popup
            popup.style.overflowY="hidden";
            popup.style.display="block";
            popup.style.overflowY="scroll";
            overlay.style.display="block";

            par="Spēles noteikumi";
            statuss.style.color="rgb(166, 146, 32)";
            statuss.innerText=par;

            atb= "Izmantojot datus un salikto procentu formulu, nosaki un izvēlies ienesīgāko investīciju! Par katru pareizu atbildi – 1 punkts. Spēles beigās uzzināsi iegūtos punktus, naudas summu un maksimālo iegūstamo naudas summu par noguldījumiem. Veiksmi!";
            atbilde.innerText = atb; 
            atbilde.style.display="flex";

            jaunaKartsBtn.style.display="flex";
            jaunaKartsBtn.innerText="Turpināt";
            jaunaKartsBtn.style.backgroundColor="#218838";
            jaunaKartsBtn.style.color="white";

            questionNr = 0;
        }
        else if(questionNr===1){
            jaunaKartsBtn.innerText="Jauna kārts";
            jaunaKartsBtn.style.backgroundColor= "#ffc107";
            jaunaKartsBtn.style.color="initial";
            uzd.style.display = "flex";
            uzd.style.display = "flex";
            div.style.display = "flex";
            formula.style.display="flex";
            console.log("spēlētāja vārds ir ",vards.value);
            console.log("sākas jautājumi par ilgtermiņa noguldījumiem");
            console.log("spēlētājs ir ",klase," skolnieks/ce");
        }
        if (questionNr>=1 && questionNr < 6) {
            uzdevums="Izvēlies ienesīgāko ilgtermiņa noguldījumu, balstoties uz doto informāciju!";
            uzd.innerText=uzdevums;
            // kārts 1
            let rnd = Math.floor(Math.random() * ilgKartis.length);
            const cardInView = ilgKartis[rnd];
            cardValue = cardInView.value;
            capital=cardInView.capital;
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
            capital1=cardInView1.capital;
            console.log("2. kārts vērtība: ", cardValue1);
            let virsraksts1 = document.getElementById("card-title1");
            virsraksts1.innerText = cardInView1.nr;
            let teksts1 = document.getElementById("card-text1");
            teksts1.innerText = cardInView1.text;
    
            jaunaKartsBtn.style.display = "flex";
        }
    
        if (questionNr == 6) {
            console.log("sākas jautājumi par īstermiņa noguldījumiem");
        }

        if (questionNr > 5) {
            uzdevums="Izvēlies ienesīgāko īstermiņa noguldījumu, balstoties uz doto informāciju!";
            uzd.innerText=uzdevums;
            // kārts 1
            let rnd = Math.floor(Math.random() * isKartis.length);
            const cardInView = isKartis[rnd];
            cardValue = cardInView.value;
            capital=cardInView.capital;
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
            capital1=cardInView1.capital;
            console.log("2. kārts vērtība: ", cardValue1);
            let virsraksts1 = document.getElementById("card-title1");
            virsraksts1.innerText = cardInView1.nr;
            let teksts1 = document.getElementById("card-text1");
            teksts1.innerText = cardInView1.text;
    
            jaunaKartsBtn.style.display = "flex";
        }
    }
}


let pienBtn=document.getElementById("pienemt");
let pienBtn1=document.getElementById("pienemt1");
let selectedVal;
let maxVal;
pienBtn.addEventListener("click", pienemt);
function pienemt(){
    selectedVal=cardValue;
    if (cardValue>cardValue1){
        console.log("Atbilde ir pareiza");
        //alert("tu saproti ko dari");
        //max value
        maxVal=cardValue;
        tableRez();

        summa=summa+cardValue;
        maxSumma=maxSumma+cardValue;
        console.log("summa:"+summa);
        console.log("Max summa:"+maxSumma);
        punkti=punkti + 1;
        if(questionNr<6){
            ilgPunkti=ilgPunkti+1;
            console.log("Iegūto ilgpunktu skaits: "+ilgPunkti);
        }
        if(5<questionNr&&questionNr<11){
            isPunkti=isPunkti+1;
            console.log("Iegūto ispunktu skaits: "+isPunkti);
        }
        console.log("Iegūto punktu skaits: "+punkti);
        //popup
        popup.style.display="block";
        overlay.style.display="block";
        par="Atbilde ir pareiza!";
        statuss.style.color="green";
        statuss.innerText=par;
        if(questionNr==5){
            atb= "Pamatojums: "+cardValue+" > "+cardValue1+" \n Iegūtais punktu skaits: "+punkti+"\nTurpmākās investīcijas būs īstermiņa noguldījumi!\n Ņem vērā, ka noguldījuma termiņa vērtība jāizsaka gados!";
        }
        else{
        atb= "Pamatojums: "+cardValue+" > "+cardValue1+" \n Iegūtais punktu skaits: "+punkti;
        }
        atbilde.innerText = atb; 
        atbilde.style.display="flex";
        questionNr = questionNr + 1;
        if(questionNr>11){
            beigas();
            return;
        }
    }
    else{
        console.log("Atbilde ir nepareiza");
        console.log("Iegūto punktu skaits: "+punkti)
        //alert("tu nesaproti ko dari!");
        //max value
        maxVal=cardValue1;
        tableRez();

        maxSumma=maxSumma+cardValue1;
        console.log("Max summa:"+maxSumma);
        //popup
        popup.style.display="block";
        overlay.style.display="block";
        par="Atbilde nav pareiza!";
        statuss.style.color="rgb(208, 22, 22)";
        statuss.innerText=par;
        if(questionNr==5){
            atb= "Pamatojums: "+cardValue+" < "+cardValue1+" \n Iegūtais punktu skaits: "+punkti+"\nTurpmākās investīcijas būs īstermiņa noguldījumi!\n Ņem vērā, ka noguldījuma termiņa vērtība jāizsaka gados!";
        }
        else if(questionNr>5){
            atb= "Pamatojums: "+cardValue+" < "+cardValue1+" \n Iegūtais punktu skaits: "+punkti+"\n Pārliecinies, ka noguldījuma termiņa vērtība izteikta gados (Term/12)!";
        }
        else{
        atb= "Pamatojums: "+cardValue+" < "+cardValue1+" \n Iegūtais punktu skaits: "+punkti;
        }
        atbilde.innerText = atb; 
        atbilde.style.display="flex";
        questionNr = questionNr + 1;
        if(questionNr>11){
            beigas();
            return;
        }
    }
//console.log("pienemts");
}
pienBtn1.addEventListener("click", pienemt1);
function pienemt1(){
    selectedVal=cardValue1;
    if (cardValue1>cardValue){
        console.log("Atbilde ir pareiza");
        //alert("tu saproti ko dari");
        //max value
        maxVal=cardValue1;
        tableRez();

        summa=summa+cardValue1;
        maxSumma=maxSumma+cardValue1;
        console.log("summa:"+summa);
        console.log("Max summa:"+maxSumma);
        punkti=punkti + 1;
        if(questionNr<6){
            ilgPunkti=ilgPunkti+1;
            console.log("Iegūto ilgpunktu skaits: "+ilgPunkti);
        }
        if(5<questionNr&&questionNr<11){
            isPunkti=isPunkti+1;
            console.log("Iegūto ispunktu skaits: "+isPunkti);
        }
        console.log("Iegūto punktu skaits: "+punkti);
        console.log("Iegūto ispunktu skaits: "+isPunkti);
        //popup
        popup.style.display="block";
        overlay.style.display="block";
        par="Atbilde ir pareiza!";
        statuss.style.color="green";
        statuss.innerText=par;
        if(questionNr==5){
            atb= "Pamatojums: "+cardValue1+" > "+cardValue+" \n Iegūtais punktu skaits: "+punkti+"\nTurpmākās investīcijas būs īstermiņa noguldījumi!\n Ņem vērā, ka noguldījuma termiņa vērtība jāizsaka gados!";
        }
        else{
        atb= "Pamatojums: "+cardValue1+" > "+cardValue+" \n Iegūtais punktu skaits: "+punkti;
        }
        atbilde.innerText = atb; 
        atbilde.style.display="flex";
        questionNr = questionNr + 1;
        if(questionNr>11){
            beigas();
            return;
        }
    }

    // }
    else{
        console.log("Atbilde ir nepareiza");
        //alert("tu nesaproti ko dari!");
        //max value
        maxVal=cardValue;
        tableRez();

        maxSumma=maxSumma+cardValue;
        console.log("Max summa:"+maxSumma);
        //popup
        popup.style.display="block";
        overlay.style.display="block";
        par="Atbilde nav pareiza!";
        statuss.style.color="rgb(208, 22, 22)";
        statuss.innerText=par;
        if(questionNr==5){
            atb= "Pamatojums: "+cardValue1+" < "+cardValue+" \n Iegūtais punktu skaits: "+punkti+"\n Pārliecinies, ka noguldījuma termiņa vērtība izteikta gados (Term/12)!";
        }
        else if(questionNr>5){
            atb= "Pamatojums: "+cardValue1+" < "+cardValue+" \n Iegūtais punktu skaits: "+punkti+"\n Pārliecinies, ka noguldījuma termiņa vērtība izteikta gados (Term/12)!";
        }
        else{
        atb= "Pamatojums: "+cardValue1+" < "+cardValue+" \n Iegūtais punktu skaits: "+punkti;
        }
        atbilde.innerText = atb; 
        atbilde.style.display="flex";
        questionNr = questionNr + 1;
        if(questionNr>11){
            beigas();
            return;
        }
    }
//console.log("pienemts");
}
let columnCounter = 0;  // Tracks how many columns have been added

// Function to add new columns every 3 values
function tableRez() {
    let table = document.getElementById("table");  // Get the table by ID
    
    // Add a new column after every 3 values
    if (columnCounter % 3 === 0) {
        // Add a new column header in the first row (Question number)
        let lastHeader = table.querySelector("thead tr");  // Get the header row
        let newHeader = document.createElement("th");
        newHeader.scope = "col";
        newHeader.innerText = questionNr;  // Set the dynamic question number
        lastHeader.appendChild(newHeader);

        // Add a new cell for "Iegūtais" in the first row of the body
        let iegRow = table.querySelector("tbody tr:first-child");
        let newCell = document.createElement("td");
        newCell.innerText = selectedVal;  // Set the dynamic value for "Iegūtais"
        if(selectedVal==maxVal){
            newCell.style.backgroundColor="#218838";
            newCell.style.color="white";
        }
        if(selectedVal<maxVal){
            newCell.style.backgroundColor="#dc3545";
            newCell.style.color="white";
        }
        iegRow.appendChild(newCell);

        // Add a new cell for "Maksimālais" in the second row of the body
        let maxRow = table.querySelector("tbody tr:nth-child(2)");  // Second row is for "Maksimālais"
        newCell = document.createElement("td");
        newCell.innerText = maxVal;  // Set the dynamic value for "Maksimālais"
        if(selectedVal==maxVal){
            newCell.style.backgroundColor="#218838";
            newCell.style.color="white";
        }
        if(selectedVal<maxVal){
            newCell.style.backgroundColor="#218838";
            newCell.style.color="white";
        }
        maxRow.appendChild(newCell);
    } else {
        // If we've added a header, just add new cells to the existing rows
        let lastHeader = table.querySelector("thead tr");  // Get the header row
        let newHeader = document.createElement("th");
        newHeader.innerText = questionNr;  // Set the dynamic question number
        lastHeader.appendChild(newHeader);  // Add the new header

        // Add the "Iegūtais" value to the existing row (first row)
        let iegRow = table.querySelector("tbody tr:first-child");
        let newCell = document.createElement("td");
        newCell.innerText = selectedVal;  // Set the dynamic value for "Iegūtais"
        if(selectedVal==maxVal){
            newCell.style.backgroundColor="#218838";
            newCell.style.color="white";
        }
        if(selectedVal<maxVal){
            newCell.style.backgroundColor="#dc3545";
            newCell.style.color="white";
        }
        iegRow.appendChild(newCell);

        // Add the "Maksimālais" value to the existing row (second row)
        let maxRow = table.querySelector("tbody tr:nth-child(2)");  // Second row is for "Maksimālais"
        newCell = document.createElement("td");
        newCell.innerText = maxVal;  // Set the dynamic value for "Maksimālais"
        if(selectedVal==maxVal){
            newCell.style.backgroundColor="#218838";
            newCell.style.color="white";
        }
        if(selectedVal<maxVal){
            newCell.style.backgroundColor="#218838";
            newCell.style.color="white";
        }
        maxRow.appendChild(newCell);
    }

    // Increment the column counter
    columnCounter++;
}
function beigas(){
    console.log("spēle beigusies");
    velreiz.style.display="flex";
    uzd.style.display="none";
    div.style.display="none";
    jautElement.style.display="none";
    jaunaKartsBtn.style.display="none";
    atbilde.style.display="none";
    popup.style.display="none";
    overlay.style.display="none";
    formula.style.display="none";
    summa=parseFloat(summa.toFixed(2));
    maxSumma=parseFloat(maxSumma.toFixed(2));
    rez = "Iegūto punktu skaits: "+ punkti+"\n Rezultāti:";
    rezElement.style.display="block";
    rezElement.innerText = rez; 
    rez2 ="Spēles laikā iegūti "+summa+" EUR no iespējamiem "+maxSumma+" EUR";
    rez2Element.style.display="block";
    rez2Element.innerText = rez2; 
    procenti=(punkti/10)*100;
    procenti=procenti.toFixed(2);
    isProcenti=(isPunkti/5)*100;
    ilgProcenti=(ilgPunkti/5)*100;
    table.style.overflowX="scroll";
    table.style.display="block";
    end.style.display="block";
    savetoDb();
    questionNr=1;
    punkti=0;
    isPunkti=0;
    ilgPunkti=0;
    summa=0;
    maxSumma=0;
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
