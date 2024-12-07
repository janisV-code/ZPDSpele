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
class KarsuKava{
    bija;//lietota kārts
    nebija;//vēl neizspēlēta kārts

}
const kartis=[
{
    id:"1",
    nr:  "noguldījums 1",
    value:100,
    text: "Te kaut kas būs",
},
{
    id:"2",
    nr:  "noguldījums 2",
    value:10,
    text: "Te kaut kas būs",
},
{
    id:"3",
    nr:  "noguldījums 3",
    value:100,
    text: "Te kaut kas būs",
},
{
    id:"4",
    nr: "noguldījums 4",
    value:50,
    text: "Te kaut kas būs",
},
{
    id:"5",
    nr: "noguldījums 5",
    value:70,
    text: "Te kaut kas būs",
},
{
    id:"6",
    nr: "noguldījums 6",
    value:50,
    text: "Te kaut kas būs",
},
{
    id:"7",
    nr:"noguldījums 7",
    value:400,
    text: "Te kaut kas būs",
},
{
    id:"8",
    nr:"noguldījums 8",
    value:300,
    text: "Te kaut kas būs",
},
{
    id:"9",
    nr:"noguldījums 9",
    value:1,
    text: "Te kaut kas būs",
},
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

