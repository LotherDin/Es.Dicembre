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


//3.Aggiungi un elemento HTML:Inserisci un nuovo elemento HTML (come un paragrafo o un'immagine) in una posizione specifica del DOM.

let daInserire = document.getElementById('daInserire');
let noRepeatLogo = 0;
function inserisci() {


    if (noRepeatLogo == 0) {
        noRepeatLogo = 1;
        const nuovoElemento = document.createElement('img');
        nuovoElemento.setAttribute('src', 'img/icons8-trash-dove-48.png')

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


// 14. Contatore di click su un bottone:Implementa un contatore che tiene traccia del numero di volte che un bottone viene cliccato.


let contatore = document.getElementById('clickContatore');
let conteggio = document.getElementById('counter');

function clickConta() {
    conteggio.innerHTML = parseInt(conteggio.innerHTML) + 1;




}

contatore.addEventListener('click', clickConta);

//15. Cambia colore di sfondo al mouseout:Cambia il colore di sfondo di un elemento quando il cursore lascia l'area dell'elemento.
let quadrato = document.getElementById('passaMouse');
function mouseFuori() {
    quadrato.style.backgroundColor = 'yellow';
}

quadrato.addEventListener('mouseout', mouseFuori);


// 16. Modifica immagine al passaggio del mouse su un'altra:Cambia un'immagine visualizzata quando l'utente passa il mouse su un'altra immagine.
let oldFoto = document.getElementById('vecchiaFoto');
function nuovaFoto() {
    const foto = document.createElement('img');
    foto.setAttribute('src', 'img/icons8-meme-64.png');
    oldFoto.parentNode.replaceChild(foto, oldFoto);


}

oldFoto.addEventListener('mouseover', nuovaFoto);


// 17. Menu a tendina:Crea un menu che mostra o nasconde contenuti quando selezionato.

let menuTendina = document.getElementById('menu');
let menuUl = document.getElementById('frutta');

function menu() {
    if (menuUl.style.display == 'none') {
        menuUl.style.background = 'green';
        menuUl.style.display = 'flex';
    } else {
        menuUl.style.display = 'none';

    }


}

menuTendina.addEventListener('click', menu);

//18. Animazione di un div:Muovi un div orizzontalmente nella pagina utilizzando un bottone.

let moviment = document.getElementById('movimento');
let btnMove = document.getElementById('mover');
function movimentoOrizzontale() {
    moviment.style.transform = 'translateX(500px)';
    btnMove.style.display = 'none';


}

moviment.addEventListener('click', movimentoOrizzontale);

//19. Cambia testo con input:Modifica il testo di un elemento HTML in base a ciò che l'utente digita in un campo di input.

let tasto = document.getElementById('modif');

function cambiaTestoInput() {
    let inputCambiaT = document.getElementById('cambiaTestoInput').value;
    tasto.innerHTML = inputCambiaT;


}

tasto.addEventListener('click', cambiaTestoInput);




//20. Controllo visibilità con checkbox:Usa una checkbox per controllare la visibilità di un elemento HTML.
let mioDiv = document.getElementById("mioDivCheck");
let check = document.getElementById("check");
let checkSpan = document.getElementById("checkSpan");
function checkVisibility() {
    if (checkSpan.style.display == "none") {
        check.checked = false;
    } else {
        check.checked = true;
    }
}
function hideCheckSpan() {
    if (checkSpan.style.display == "flex") {
        checkSpan.style.display = "none";
    } else {
        checkSpan.style.display = "flex";
    }

}

mioDiv.addEventListener("click", hideCheckSpan);
//21. Cambia stile con cambio testo input:Modifica lo stile di un elemento quando cambia il testo all'interno di un campo di input.

let cambiaStile = document.getElementById('cambiaStileInput');
let btnDifferente = document.getElementById('sonoDifferente');
function cambiaS() {
    cambiaStile.style.color = 'green';
    btnDifferente.style.color = 'blue';
}

cambiaStile.addEventListener('change', cambiaS);

//22. Carosello di immagini:Crea un carosello di immagini con bottoni per scorrere avanti e indietro tra le immagini.
let btnAvanti = document.getElementById("scorriAvanti");
let totaleSlide = document.getElementsByClassName("slide");
let btnIndietro = document.getElementById("scorriIndietro");
let slideCorrente = 0;

const slides = ["img/icons8-trash-dove-48.png", "img/icons8-pogchamp-48.png", "img/icons8-monaci-48.png", "img/icons8-meme-64.png", "img/icons8-emoji-32.png"]
let img = document.createElement("img");

img.setAttribute('src', slides[slideCorrente]);
img.classList.add('slide');
let foto = document.getElementById('immagini');

foto.appendChild(img);


function incremento() {

    if (slideCorrente < slides.length - 1) {
        slideCorrente++;
        img.setAttribute('src', slides[slideCorrente]);


    }

}
btnAvanti.addEventListener('click', incremento);

function decremento() {
    if (slideCorrente > 0) {
        slideCorrente--;
        img.setAttribute('src', slides[slideCorrente]);


    }

}
btnIndietro.addEventListener('click', decremento);

//23. Effetto dissolvenza al clic:Aggiungi un effetto di dissolvenza a un elemento quando viene cliccato.

let dissolvenza = document.getElementById('dissolvenza');
let scritta = document.getElementById('scritta');
function dissolvenzaEffetto() {
    scritta.classList.add('transition')
}

dissolvenza.addEventListener('click', dissolvenzaEffetto);
//24. Timer semplice:Costruisci un timer con funzioni di avvio e arresto.

let timer = document.getElementById('timer');
let btnStart = document.getElementById('startButton');
let btnStop = document.getElementById('stop');
let timerSpan = document.getElementById('timerDisplay');
let seconds = 0;
let timerInterval;

function startTimer() {
    timerInterval = setInterval(motoreDellaFunz, 100); // 1000 milliseconds = 1 second
}
function motoreDellaFunz() {
    seconds = seconds + 1;
    timerSpan.innerHTML = seconds;
}

btnStart.addEventListener('click', startTimer);

function stopTimer() {
    clearInterval(timerInterval);

}
btnStop.addEventListener('click', stopTimer);
//25. Visualizza coordinate del mouse:Rileva e mostra le coordinate del mouse quando si sposta sopra un elemento specifico.
let quadrati = document.querySelectorAll('.piccolino')
let x = 0;
let y = 0;
let aSchermo = document.querySelector('.coordinate');

function porcaPuttana(event) {
    x = event.clientX;
    y = event.clientY;
    aSchermo.innerHTML = 'x:' + x + 'y:' + y;



}
for (let i = 0; i < quadrati.length; i++) {
    quadrati[i].addEventListener('mousemove', porcaPuttana);
}
//26. Cambia immagine di sfondo:Cambia l'immagine di sfondo di un div in base alla selezione effettuata in un dropdown.
let selector = document.getElementById('immagine');
let imgMeme = document.createElement('img');
let mioDivUno = document.getElementById("provaUno");
function changeMeme(event) {
    imgMeme.setAttribute('src', event.target.value);
    mioDivUno.appendChild(imgMeme);
}

selector.addEventListener('change', (event) => changeMeme(event));

//27.Barra di progresso con bottone:Realizza una barra di progresso che si aggiorna ogni volta che un bottone viene premuto.
// Funzione per aggiornare la barra di progresso

let bottoneBarra = document.getElementById("btnUpdate");
function updateProgressBar() {
    // Ottieni l'elemento della barra di progresso
    let progressBar = document.getElementById('progress');

    // Ottieni il valore corrente della barra di progresso (senza il simbolo "%")
    let currentProgress = parseInt(progressBar.style.width) || 0;

    // Aggiorna il valore della barra di progresso
    currentProgress += 10; // Incremento del 10% ad ogni pressione del bottone
    if (currentProgress > 100) {
        currentProgress = 100; // Limita il valore massimo al 100%
    }

    // Aggiorna la larghezza della barra di progresso
    progressBar.style.width = currentProgress + '%';

    // Aggiorna il testo della barra di progresso
    progressBar.innerHTML = currentProgress + '%';
}

bottoneBarra.addEventListener('click', updateProgressBar);

//28. Form con validazione dati:Crea un form con la validazione dei dati inseriti in tempo reale.
let btnInvioForm = document.getElementById("btnInvioForm");
function modulo() {
    let nome = document.modulo.nome.value;
    let cognome = document.modulo.cognome.value;
    let nickname = document.modulo.nickname.value;


    if ((nome == "") || (nome == "undefined")) {
        alert("Il campo Nome è obbligatorio.");
        document.modulo.nome.focus();
        return false;
    }
    //Effettua il controllo sul campo COGNOME ~`|| operatore logico OR che restituisce true se almeno una delle condizioni e' vera`~
    else if ((cognome == "") || (cognome == "undefined")) {
        alert("Il campo Cognome è obbligatorio.");
        document.modulo.cognome.focus();
        return false;
    }
    //Effettua il controllo sul campo NICKNAME
    else if ((nickname == "") || (nickname == "undefined")) {
        alert("Il campo Nickname è obbligatorio.");
        document.modulo.nickname.focus();
        return false;

    }
    else {
        document.modulo.action = "elabora_dati.asp";
        document.modulo.submit();
    }

}

btnInvioForm.addEventListener('click', modulo);

//29. Tooltip personalizzati:Mostra dei tooltip personalizzati quando l'utente passa

//QUESTO L'HO FATTO IN HTML E CSS


//il mouse sopra gli elementi.  


//30. Drag and drop:Permetti agli utenti di trascinare elementi in un'area designata.
let dragArea = document.getElementById("drag-area");

// Aggiungi gli eventi di trascinamento all'area di trascinamento
dragArea.ondrop = function (event) {
    drop(event);
};

dragArea.ondragover = function (event) {
    allowDrop(event);
};

// Creazione dinamica degli elementi
for (let i = 1; i <= 3; i++) {
    var draggableElement = createDraggableElement("Elemento " + i);
    dragArea.appendChild(draggableElement);
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.innerText);
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    let draggableElement = createDraggableElement(data);

    // Aggiungi l'elemento trascinato all'area di trascinamento
    event.target.appendChild(draggableElement);
}

function createDraggableElement(text) {
    let draggableElement = document.createElement("div");
    draggableElement.className = "draggable";
    draggableElement.draggable = true;
    draggableElement.innerText = text;

    // Aggiungi l'evento di trascinamento
    draggableElement.ondragstart = function (event) {
        drag(event);
    };

    return draggableElement;
}
//31. Genera numero casuale:Al clic di un bottone, genera un numero casuale e visualizzalo.
let generaNumero = document.getElementById("generaNumero");

// Aggiungi l'evento di click al bottone
generaNumero.addEventListener('click', genera);

function genera() {
    // Ottieni l'elemento con id "numeroCasuale"
    let numeroCasuale = document.getElementById("numeroCasuale");

    // Genera un numero casuale compreso tra 1 e 100
    let numeroGenerato = Math.floor(Math.random() * 100) + 1;

    // Mostra il numero casuale nell'elemento con id "numeroCasuale"
    numeroCasuale.innerText = "Numero : " + numeroGenerato;
}

//32. Animazione colore e dimensione:Crea un'animazione che cambia colore e dimensione di un elemento.
let grandezzaDiv = document.getElementById("dimensione");
let btnAnimazione = document.getElementById("animazione");
function cambiaColore() {
    grandezzaDiv.style.backgroundColor = "yellow";
    grandezzaDiv.style.width = "60px";
    grandezzaDiv.style.height = "60px";


}

btnAnimazione.addEventListener('click', cambiaColore);

//33. Orologio digitale:Visualizza l'ora corrente in un orologio digitale.
let orologio = document.getElementById("ora");
function orario() {
    let ora = new Date();
    orologio.innerText = ora.getHours() + ":" + ora.getMinutes() + ":" + ora.getSeconds();


}

setInterval(orario, 1000);
//34. Ridimensiona immagine con slider:Usa uno slider per ridimensionare dinamicamente un'immagine.

let slider = document.getElementById("slider");
let pog = document.getElementById("pog");
function sliderEffect() {

    let scaleFactor = slider.value / 100;
    pog.style.width = scaleFactor * 100 + "%";
}
slider.addEventListener('input', sliderEffect);
//35. Sistema di tab:Crea un sistema di tab che mostra e nasconde contenuti diversi.

// Aggiungi gli eventi onclick alle schede tramite JavaScript
document.getElementById('tab1Button').onclick = function () {
    mostraContenuto('tab1');
};

document.getElementById('tab2Button').onclick = function () {
    mostraContenuto('tab2');
};

document.getElementById('tab3Button').onclick = function () {
    mostraContenuto('tab3');
};

function mostraContenuto(tabId) {
    // Nascondi tutti i contenuti delle tab
    let tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    // Mostra solo il contenuto della tab selezionata
    let selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
}

//36. Cambio layout con bottoni:Cambia il layout di una pagina (ad esempio da griglia a lista) utilizzando diversi bottoni.
let btnGrid = document.getElementById("btnGrid");
let btnList = document.getElementById("btnList");
function cambiaLayout(layoutType) {
    const container36 = document.querySelector('.container36');
    if (layoutType === 'grid') {
        container36.style.flexDirection = 'row';
        container36.style.flexWrap = 'wrap';

    } else if (layoutType === 'list') {
        container36.style.flexDirection = 'column';
        container36.style.flexWrap = 'nowrap';
    }


}

btnGrid.addEventListener('click', function () {
    cambiaLayout('grid');
});

btnList.addEventListener('click', function () {
    cambiaLayout('list');
});
//37. Gioco 'Indovina il numero':Realizza un semplice gioco dove l'utente deve indovinare un numero.
const secretNumber = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const user = parseInt(guessInput.value);
    if (isNaN(user) || user < 1 || user > 100) {
        message.textContent = "Il numero deve essere compreso tra 1 e 100.";
    } else {
        if (user === secretNumber) {
            message.textContent = "Hai vinto!";

        } else {
            message.textContent = 'Il numero corretto era:' + secretNumber + '';

        }
    }
}
const btnCercaNumero = document.getElementById("btnCercaNumero");

btnCercaNumero.addEventListener('click', checkGuess);
//38. Lightbox per immagini:Crea un lightbox per visualizzare le immagini in grande.


function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    lightboxImage.src = imageSrc;
    lightbox.style.display = "flex";
}
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}
// --SE VOLESSI IL CLICK DIRETTAMENTE IN JS E NO IN LINEA IN HTML--


// const galleryImages = document.querySelectorAll('#galleria img');

// Aggiungere un gestore di eventi di clic a ciascuna immagine nella galleria

// galleryImages.forEach(image => {
// image.addEventListener('click', function() {
//       openLightbox(image.src);
//  });
//  });


//40. Editor di testo semplice:Costruisci un editor di testo con opzioni di formattazione base.
const inputEditor = document.getElementById("inputEditor");
const grassetto = document.getElementById("bold");
const italic = document.getElementById("italic");
const underline = document.getElementById("underline");

function boldPulsante() {
    inputEditor.style.fontWeight = "bold";
    inputEditor.style.fontStyle = "normal";
    inputEditor.style.textDecoration = "none";
}
bold.addEventListener("click", boldPulsante)

function italicPulsante() {
    inputEditor.style.fontWeight = "normal";
    inputEditor.style.fontStyle = "italic";
    inputEditor.style.textDecoration = "none";
}
italic.addEventListener("click", italicPulsante)

function underlinePulsante() {
    inputEditor.style.fontWeight = "normal";
    inputEditor.style.fontStyle = "normal";
    inputEditor.style.textDecoration = "underline";
}
underline.addEventListener("click", underlinePulsante)









//46. Sistema di filtraggio elementi:Implementa un sistema per filtrare un elenco di elementi.
const items = [
    { name: 'bulbasour', type: 'monster' },
    { name: 'vulpix', type: 'monster' },
    { name: 'raggio', type: 'spell' },
    { name: 'stun', type: 'spell' },
    { name: 'erba', type: 'energia' },
    { name: 'fuoco', type: 'energia' },
];
function renderitems(filterType) {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';

    items.forEach(item => {
        if (filterType === 'all' || filterType === item.type) {
            const itemElement = document.createElement('div');
            itemElement.className = 'item';
            itemElement.textContent = item.name;
            itemList.appendChild(itemElement);
        }
    });
}
renderitems('all');
document.getElementById('filterType').addEventListener('change', function () {
    const selectedFilter = this.value;
    renderitems(selectedFilter);

});


//47. Galleria immagini con zoom:Crea una galleria di immagini che permette di zoomare al clic.
let classeImmagini = document.getElementsByClassName("zoomImg")
for (let i = 0; i < classeImmagini.length; i++) {
    classeImmagini[i].addEventListener("click", function () {
        this.style.transform = "scale(2.0)";
    });
}


//49. Applicazione todo-list:Sviluppa un'applicazione per gestire una lista di cose da fare.
let inputAdd = document.getElementById("inputAdd");
let buttonAdd = document.getElementById("buttonAdd");
let list = document.getElementById("list");

function aggiungi() {
    let taskName = inputAdd.value;
    let newListItems = document.createElement("li");
    newListItems.textContent = taskName;
    list.appendChild(newListItems)
}
buttonAdd.addEventListener("click", aggiungi);





















































































