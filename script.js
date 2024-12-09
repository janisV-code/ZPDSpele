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
let punkti=0;
//paslēpt
jaunaKartsBtn.style.display="none";
const div=document.getElementById("card-container");
div.style.display="none";
const uzd=document.getElementById("uzd");
uzd.style.display="none";
velreiz.style.display="none";
jautElement.style.display="none";
end.style.display="none";
class KarsuKava{
    bija;//lietota kārts
    nebija;//vēl neizspēlēta kārts

}
const kartis=[
{
    id: "1",
    nr: "Swedbank",
    text: "Termiņš: 1 gads\nProcentu likme 2.5%\nVeids: fiksēti",
    term: "1 gads",
    rate: "2.5%",
    capital: 12,
    value:100,
},
{
    id:"2",
    nr:  "Citadele",
    text: "Termiņš: 6 mēneši\n Procentu likme 2%\nveids: fiksēti",
    term:"6 mēneši",
    rate:"2%",
    value:10,
},
{
    id:"3",
    nr: "SEB",
    text: "Termiņš: 3 mēneši\nProcentu likme 1.5%\nVeids: fiksēti",
    term: "3 mēneši",
    rate: "1.5%",
    value:4,
},
{
    id:"4",
    nr: "Luminor",
    text: "Termiņš: 2 gadi\nProcentu likme 3%\nVeids: fiksēti",
    term: "2 gadi",
    rate: "3%",
    value:50,

},
{
    id:"5",
    nr: "BlueOrange Bank",
    text: "Termiņš: 9 mēneši\nProcentu likme 2.2%\nVeids: fiksēti",
    term: "9 mēneši",
    rate: "2.2%",
    value:70,
},
{
    id:"6",
    nr: "Revolut Bank",
    text: "Termiņš: 1 gads\nProcentu likme 2.8%\nVeids: fiksēti",
    term: "1 gads",
    rate: "2.8%",
    value:50,
},
{
    id:"7",
    nr: "PrivatBank",
    text: "Termiņš: 18 mēneši\nProcentu likme 2.9%\nVeids: fiksēti",
    term: "18 mēneši",
    rate: "2.9%",
    value:400,
},
{
    id:"8",
    nr: "Citadele",
    text: "Termiņš: 5 gadi\nProcentu likme 4%\nVeids: fiksēti",
    term: "5 gadi",
    rate: "4%",
    value:300,
},
{
    id:"9",
    nr: "Swedbank",
    text: "Termiņš: 2 gadi\nProcentu likme 3.5%\nVeids: fiksēti",
    term: "2 gadi",
    rate: "3.5%",
    value:1,
},
{
    id:"10",
    nr: "SEB",
    text: "Termiņš: 6 mēneši\nProcentu likme 2.3%\nVeids: fiksēti",
    term: "6 mēneši",
    rate: "2.3%",
    value:180,
}
];
//definē ārpus funkcijas vēlākai izmantošanai
let cardValue;
let cardValue1;
let questionNr=1;
function jaunaKarts(){
    spele.style.display="none";
    velreiz.style.display="none";
    end.style.display="none";
    rezElement.style.display="none";
    jautElement.style.display="flex";
    uzd.style.display="flex";
        console.log("spēlētāja vārds ir ",vards.value);
    vards.style.display="none";
    saktBtn.style.display="none";
    jaut = "Jautājums NR "+ questionNr;
    jautElement.innerText = jaut; 
    uzd.style.display="flex";
        //nosaka spēles beigas
    if(questionNr>3){
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
        savetoDb();
        questionNr=1;
        punkti=0;
        return;
    }
    else{
        console.log("questionNr: ",questionNr)
    }
    questionNr=questionNr+1;
    div.style.display="flex";
    //karts1
    let rnd = Math.floor(Math.random()*kartis.length);
    const cardInView = kartis[rnd];
    cardValue=cardInView.value;
  console.log("1. kārts vērtība: ",cardValue);
  let virsraksts=document.getElementById("card-title");
  virsraksts.innerText=cardInView.nr;
  let teksts=document.getElementById("card-text");
  teksts.innerText=cardInView.text;
//karts 2
  let rnd1 = Math.floor(Math.random()*kartis.length);
  do {
    rnd1 = Math.floor(Math.random() *kartis.length);
} while (rnd1 == rnd);
 const cardInView1 = kartis[rnd1];
 cardValue1=cardInView1.value;
console.log("2. kārts vērtība: ",cardValue1);
let virsraksts1=document.getElementById("card-title1");
virsraksts1.innerText=cardInView1.nr;
let teksts1=document.getElementById("card-text1");
teksts1.innerText=cardInView1.text;
jaunaKartsBtn.style.display="flex";
    }

let pienBtn=document.getElementById("pienemt");
let pienBtn1=document.getElementById("pienemt1");
pienBtn.addEventListener("click", pienemt);
function pienemt(){
    if (cardValue>cardValue1){
        console.log("tu saproti ko dari")
        //alert("tu saproti ko dari");
        punkti=punkti + 1;
        console.log("Iegūto punktu skaits: "+punkti);
        div.style.display="none";
        if(questionNr>3){
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
            savetoDb();
            questionNr=1;
            punkti=0;
            return;
        }
    }
    else{
        console.log("tu nesaproti ko dari!")
        console.log("Iegūto punktu skaits: "+punkti)
        //alert("tu nesaproti ko dari!");
        div.style.display="none";
        if(questionNr>3){
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
            savetoDb();
            questionNr=1;
            punkti=0;
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
        console.log("Iegūto punktu skaits: "+punkti);
        div.style.display="none";
        if(questionNr>3){
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
            savetoDb();
            questionNr=1;
            punkti=0;
            return;
        }
    }

    // }
    else{
        console.log("tu nesaproti ko dari!")
        //alert("tu nesaproti ko dari!");
        div.style.display="none";
        if(questionNr>3){
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
            savetoDb();
            questionNr=1;
            punkti=0;
            return;
        }
    }
//console.log("pienemts");
}

function savetoDb() {
    saveObj = {
        vards: vards.value,
        rezultats: punkti,
    };
    console.log("Saglabātie dati: ", saveObj);
}

