let score = document.getElementById("score")

let donut = document.getElementById("donut")


let prixMulti = document.getElementById("prix-multi")

let boutonMulti = document.getElementById("-btn-multi")

let valeurMultiplicateur = document.getElementById("multi")




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




console.log("test")
