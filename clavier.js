let numero = document.querySelectorAll('.nombre');
let keybord = document.querySelector ('.clavier');
let textesurecran = document.querySelector('p');

for (let i=0;i<numero.length;i++){

numero[i].addEventListener ("click", function touche() {

    console.log (textesurecran.innerHTML);
    textesurecran.innerHTML += numero[i].innerHTML
    if (textesurecran.innerHTML=="1234" ) {
        textesurecran.style.backgroundColor="green"
        console.log("code bon");
        
    }
    else if(textesurecran.innerHTML != "1234" && textesurecran.innerHTML.length >=4){
        textesurecran.style.backgroundColor ="red"
    }
    if (textesurecran.innerHTML.length ===5) {
        textesurecran.style.backgroundColor = "yellow"
        textesurecran.innerHTML =""
        
    }
    
})
}let x = 0
function aleatoire() {
    x=Math.floor(Math.random() * (10 - 1) + 1);
    console.log(x)
  }
  aleatoire()
