//1. Cambia il colore di sfondo di un elemento:
const divColorato = document.getElementById('cambioColore');
function changeColor() {

    divColorato.style.backgroundColor = 'red';

}
divColorato.addEventListener('mouseover', changeColor);

//2.Inserisci il testo in un div
const cambiaTesto = document.getElementById('cambiaTesto');
function changeText() {
    cambiaTesto.innerHTML = 'Buone Feste';
}
cambiaTesto.addEventListener('click', changeText);


//Aggiungi un elemento HTML:Inserisci un nuovo elemento HTML (come un paragrafo o un'immagine) in una posizione specifica del DOM.

let daInserire = document.getElementById('daInserire');
let noRepeatLogo = 0;
function inserisci() {


    if (noRepeatLogo == 0) {
        noRepeatLogo = 1;
        const nuovoElemento = document.createElement('img');
        nuovoElemento.setAttribute('src', 'img/pngegg.png')

        daInserire.appendChild(nuovoElemento);


    }

}

daInserire.addEventListener('click', inserisci);



// 4. Rimuovi un elemento HTML:**Elimina un elemento HTML esistente dalla pagina, ad esempio rimuovendo un paragrafo specifico.
let rimuovereElemento = document.getElementById('rimuovi');
function deleteElemento() {
    rimuovereElemento.parentNode.removeChild(rimuovereElemento);

}

rimuovereElemento.addEventListener('click', deleteElemento);

//*5. Cambia stile al passaggio del mouse:Modifica lo stile di un elemento (come il colore del testo) quando il mouse passa sopra di esso.

const nuovoColore = document.getElementById('cambiaStile');
function variazioneColore() {

    nuovoColore.style.color = 'blue'
}
nuovoColore.addEventListener('mouseover', variazioneColore);

//6. Bottone per nascondere/mostrare un paragrafo:Crea un bottone che, al clic, nasconde o mostra un paragrafo.

const clickMostra = document.getElementById('mostra');
const clickP = document.getElementById('haiCliccato');

function compareP() {

    if (clickP.style.display == 'none') {
        clickP.style.display = 'flex';
    } else {
        clickP.style.display = 'none';

    }






}

clickMostra.addEventListener('click', compareP);

//7. Modifica il contenuto di un tag:Cambia il testo all'interno di un elemento utilizzando JavaScript

const cambiamento = document.getElementById('cambiaTestoUno');
function changeTextDue() {
    cambiamento.innerHTML = 'Cambia il testo';
}

cambiamento.addEventListener('click', changeTextDue);

//8. Cambia dimensione di un'immagine al clic:Modifica la dimensione di un'immagine quando viene cliccata.

let cambiamo = document.getElementById('cambiaDimensione');
function changeDimension() {
    cambiamo.style.width = '100px';
    cambiamo.style.height = '100px';
}

cambiamo.addEventListener('click', changeDimension);

//9. Cambia colore del testo al clic:Fai in modo che il colore del testo di un paragrafo cambi quando viene cliccato.

let testoCol = document.getElementById('canguro');
function voglioUnColoreNuovo() {
    testoCol.style.color = 'green';
}

testoCol.addEventListener('click', voglioUnColoreNuovo);

//10. Alert al clic su un elemento:Visualizza un messaggio di alert quando un elemento specifico viene cliccato.

let alertElemento = document.getElementById('clickAlert');
function clickElement() {
    alert('MI HAI CLICCATO');

}

alertElemento.addEventListener('click', clickElement);

//11. Aggiungi classe CSS con evento:Aggiungi una classe CSS a un elemento in risposta a un evento, come un clic.
let addClasse = document.getElementById('aggiungiClasse');
function addNewClass() {
    addClasse.classList.add('classeAggiunta');

}

addClasse.addEventListener('click', addNewClass);

//12. Evidenzia elemento al passaggio del mouse:Quando il mouse passa sopra gli elementi di un elenco, evidenzia l'elemento sotto il cursore.
// solo in CSS

//13. Lista dinamica con input e bottone:**Crea una lista nella quale gli utenti possono aggiungere elementi tramite un campo di input e un bottone.

let bottoneNew = document.getElementById('addNew');

function addClickCoso() {
    let input = document.getElementById('campo');
    let listUl = document.getElementById('lista');
    let nuovoLi = document.createElement('li');
    nuovoLi.innerHTML = input.value;
    listUl.appendChild(nuovoLi);


}

bottoneNew.addEventListener('click', addClickCoso);