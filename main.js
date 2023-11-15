//CREAZIONE DEL DIV CONTAINER
const newDiv = document.createElement("div");
//<div class="container">sono un pezzo di testo</div>
newDiv.classList.add("container");
//attacco il nuovo tag div al body
document.body.appendChild(newDiv);
console.log(newDiv);

//CREAZIONE E STILIZZAZIONE DEL LABEL X IL CONTEGGIO
//creo label e l'assegno alla costante labelDiv
let labelDiv = document.createElement("label");
//aggiungo la classe "countLabel"
labelDiv.classList.add("countLabel");
//aggiungo del testo alla variabile e lo metto dentro labelDiv
const textLabel = document.createTextNode("0");
labelDiv.appendChild(textLabel);
//metto labelDiv dentro il contenitore div precedente
newDiv.appendChild(labelDiv);
console.log(labelDiv);

//CREAZIONE E STILIZZAZIONE DEI 3 BOTTONI

const divButtons = document.createElement("div");
divButtons.classList.add(".buttons");
newDiv.appendChild(divButtons);
console.log(divButtons);

//bottone incremento(+)
const bottoneIncremento = document.createElement("button");
bottoneIncremento.classList.add(".button");
const textBtnIncr = document.createTextNode("+");
bottoneIncremento.appendChild(textBtnIncr);
divButtons.appendChild(bottoneIncremento);
console.log(bottoneIncremento);

//bottone reset
const bottoneReset = document.createElement("button");
bottoneReset.classList.add(".button");
const textReset = document.createTextNode("reset");
bottoneReset.appendChild(textReset);
divButtons.appendChild(bottoneReset);
console.log(bottoneReset);


//bottone decremento(-)
const bottoneDecremento = document.createElement("button");
bottoneDecremento.classList.add(".button");
const textBtnDecr = document.createTextNode("-");
bottoneDecremento.appendChild(textBtnDecr);
divButtons.appendChild(bottoneDecremento);
console.log(bottoneDecremento);





//COUNTER

//aggiunta variabile conteggio
let count = 0;

//aumento
bottoneIncremento.addEventListener("click", 
function incremento(){
    count+=1;
    labelDiv.innerHTML = count;
});

//reset
bottoneReset.addEventListener("click", 
function reset(){
    count = 0;
    labelDiv.innerHTML = count;
}); 

//decremento
bottoneDecremento.addEventListener("click", 
function decremento(){
    count-=1;
    labelDiv.innerHTML = count;
}); 


//aggiunta di altri eventListeners

bottoneDecremento.addEventListener("onmouseover", 
function mouseOver(){
    bottoneDecremento.classList.add = ".MouseOverStyle";
});
