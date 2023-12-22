//1. Cambia il colore di sfondo di un elemento:
const divColorato = document.getElementById('cambioColore');
function changeColor() {

    divColorato.style.backgroundColor = 'red';

}
divColorato.addEventListener('mouseover', changeColor);

//2.Inserisci il testo in un div
const cambiaTesto = document.getElementById('cambiaTesto');
function changeText() {
    cambiaTesto.innerHTML = 'Cambia il testo';
}
cambiaTesto.addEventListener('click', changeText);


//Aggiungi un elemento HTML:Inserisci un nuovo elemento HTML (come un paragrafo o un'immagine) in una posizione specifica del DOM.

let daInserire = document.getElementById('daInserire');

function inserisci() {
    const nuovoElemento = document.createElement('img');
    nuovoElemento.setAttribute('src', 'img/pngegg.png')

    daInserire.appendChild(nuovoElemento);

}

daInserire.addEventListener('click', inserisci);


