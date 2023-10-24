let score = document.getElementById("score")

let donut = document.getElementById("donut")


let prixMulti = document.getElementById("prix-multi")

let boutonMulti = document.getElementById("btn-multi")

let valeurMultiplicateur = document.getElementById("multi")


let boutonBonus = document.getElementById("btn-bonus")

let flagBonus = false

let valeurClick = 1;



let valeurAuto = document.getElementById("auto")

let prixAuto = document.getElementById("clic-auto")

let boutonAuto = document.getElementById("btn-auto")



prixMulti.innerHTML = 20

prixAuto.innerHTML = 30


valeurMultiplicateur.innerHTML = 1




donut.addEventListener("click", function(){
  console.log("donut")
  score.innerHTML = (+score.innerHTML)+1*(valeurClick)
})

boutonMulti.addEventListener("click", ()=>{
  if ((+score.innerHTML)>=(+prixMulti.innerHTML)){
    score.innerHTML = (+score.innerHTML)-(+prixMulti.innerHTML)
    valeurClick = valeurClick*2
    valeurMultiplicateur.innerHTML = (+valeurMultiplicateur.innerHTML)+1
    prixMulti.innerHTML = (+prixMulti.innerHTML)*2
    console.log("yes")

  }
  else{
    alert("Vous n'avez pas assez de points")
  }
})


boutonAuto.addEventListener("click", ()=>{
  if ((+score.innerHTML)>=(+prixAuto.innerHTML)){
    valeurAuto.innerHTML = (+valeurAuto.innerHTML)+1
    score.innerHTML = (+score.innerHTML)-30
  }
  else{
    alert("Vous n'avez pas assez de points")
  }
})

setInterval( ()=>{
  score.innerHTML = (+score.innerHTML)+(+valeurAuto.innerHTML)
}, 1000)

setInterval( ()=>{
  if ((+score.innerHTML)>=(+prixAuto.innerHTML)){
  boutonAuto.style.backgroundColor = "#98FF98"
  boutonAuto.style.cursor = "pointer"

}
else{
  boutonAuto.style.backgroundColor = "#888888"
  boutonAuto.style.cursor = "not-allowed"
}
}, 10)

setInterval( ()=>{
  if ((+score.innerHTML)>=(+prixMulti.innerHTML)){
  boutonMulti.style.backgroundColor = "#98FF98"
  boutonMulti.style.cursor = "pointer"

}
else{
  boutonMulti.style.backgroundColor = "#888888"
  boutonMulti.style.cursor = "not-allowed"
}
}, 10)


function timerBonus(){
  flagBonus = false
  boutonBonus.style.backgroundColor = "#888888"
  boutonBonus.style.cursor="not-allowed"
  let timerElement = document.getElementById("timer");
  let remainingTime = 60;
  timerElement.textContent = remainingTime + " secondes jusqu'à activation";
  timerInterval = setInterval(() => {
    remainingTime -= 1;
    timerElement.textContent = remainingTime + " secondes jusqu'à activation";

    if (remainingTime <= 0) {

      clearInterval(timerInterval);
      timerElement.textContent = "";
      boutonBonus.style.backgroundColor = "#98FF98"
      boutonBonus.style.cursor = "pointer"
      flagBonus = true;
      attachBonusClickListener()
    }
}, 1000)}




function attachBonusClickListener(){
if (flagBonus == true){
boutonBonus.addEventListener("click", () => {
  while (flagBonus==true){
  valeurClick = valeurClick * 7;
  

  console.log("BONUS TIME");
  const timerElement = document.getElementById("timer");
  let remainingTime = 30;
  timerElement.textContent = remainingTime + " secondes";
  timerInterval = setInterval(() => {
    remainingTime -= 1;
    timerElement.textContent = remainingTime + " secondes";

    if (remainingTime <= 0) {

      clearInterval(timerInterval);
      timerElement.textContent = "";
      valeurClick = valeurClick / 7;
      timerBonus()
    }
  }, 1000)
  flagBonus = false}
})}}

timerBonus()

console.log("test")
