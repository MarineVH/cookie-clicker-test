let score = document.getElementById("score")

let donut = document.getElementById("donut")


donut.addEventListener("click", function(){
  console.log("donut")
  score.innerHTML = (+score.innerHTML)+1
})

console.log("test")
