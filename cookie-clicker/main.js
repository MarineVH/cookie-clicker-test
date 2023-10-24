let score = document.getElementById("score")

let donut = document.getElementById("donut")


let prixMulti = document.getElementById("prix-multi")

let boutonMulti = document.getElementById("btn-multi")

let valeurMultiplicateur = document.getElementById("multi")


let boutonBonus = document.getElementById("btn-bonus")

let flagBonus = false

let valeurAuto = document.getElementById("auto")

let prixAuto = document.getElementById("clic-auto")

let boutonAuto = document.getElementById("btn-auto")


score.innerHTML = 0

prixMulti.innerHTML = 20

prixAuto.innerHTML = 30

valeurMultiplicateur.innerHTML = 1

score.innerHTML = localStorage.getItem("score") || 0

valeurMultiplicateur.innerHTML = localStorage.getItem("multiplicateur") || 1

prixMulti.innerHTML = localStorage.getItem("prixMulti") || 30

valeurAuto.innerHTML = localStorage.getItem("valeurAuto") || 0


donut.addEventListener("click", function () {
  console.log("donut")
  score.innerHTML = (+score.innerHTML) + 1 * (+valeurMultiplicateur.innerHTML)
})

boutonMulti.addEventListener("click", () => {
  if ((+score.innerHTML) >= (+prixMulti.innerHTML)) {
    score.innerHTML = (+score.innerHTML) - (+prixMulti.innerHTML)
    valeurMultiplicateur.innerHTML = (+valeurMultiplicateur.innerHTML) * 2
    prixMulti.innerHTML = (+prixMulti.innerHTML) * 2
    console.log("yes")

  }
})


boutonAuto.addEventListener("click", () => {
  if ((+score.innerHTML) >= (+prixAuto.innerHTML)) {
    valeurAuto.innerHTML = (+valeurAuto.innerHTML) + 1
    score.innerHTML = (+score.innerHTML) - 30
  }
})

setInterval(() => {
  score.innerHTML = (+score.innerHTML) + (+valeurAuto.innerHTML)
}, 1000)



/* Si le score est supérieur au prix d'achat du click automatique, 
celui-ci change de couleur et de pointeur*/

setInterval(() => {
  if ((+score.innerHTML) >= (+prixAuto.innerHTML)) {
    boutonAuto.style.backgroundColor = "#98FF98"
    boutonAuto.style.cursor = "pointer"
    boutonAuto.addEventListener('mouseover', function () {
      boutonAuto.style.transform = 'scale(1.2)';
    })
    boutonAuto.addEventListener('mouseout', function () {
      boutonAuto.style.transform = 'scale(1)';
    });

  }
  else {
    boutonAuto.style.backgroundColor = "#888888"
    boutonAuto.style.cursor = "not-allowed"
    boutonAuto.addEventListener('mouseover', function () {
      boutonAuto.style.transform = 'scale(1)';
    })
    boutonAuto.addEventListener('mouseout', function () {
      boutonAuto.style.transform = 'scale(1)';
    });
  }
}, 10)


/* Si le score est supérieur au prix d'achat du multiplicateur, 
celui-ci change de couleur et de pointeur*/

setInterval(() => {
  if ((+score.innerHTML) >= (+prixMulti.innerHTML)) {
    boutonMulti.style.backgroundColor = "#98FF98"
    boutonMulti.style.cursor = "pointer"
    boutonMulti.addEventListener('mouseover', function () {
      boutonMulti.style.transform = 'scale(1.2)';
    })
    boutonMulti.addEventListener('mouseout', function () {
      boutonMulti.style.transform = 'scale(1)';
    });

  }
  else {
    boutonMulti.style.backgroundColor = "#888888"
    boutonMulti.style.cursor = "not-allowed"
    boutonMulti.addEventListener('mouseover', function () {
      boutonMulti.style.transform = 'scale(1)';
    })
    boutonMulti.addEventListener('mouseout', function () {
      boutonMulti.style.transform = 'scale(1)';
    });
  }
}, 10)


function timerBonus() {
  flagBonus = false
  boutonBonus.style.backgroundColor = "#888888"
  boutonBonus.style.cursor = "not-allowed"
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
  }, 1000)
}





function attachBonusClickListener() {
  if (flagBonus == true) {
    console.log("TRUE")
    boutonBonus.addEventListener("click", () => {
      while (flagBonus == true) {
        valeurMultiplicateur.innerHTML = (+valeurMultiplicateur.innerHTML) * 7;


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
            valeurMultiplicateur.innerHTML = (+valeurMultiplicateur.innerHTML) / 7;
            timerBonus()
          }
        }, 1000)
        flagBonus = false
      }
    })
  }
}

timerBonus()


setInterval(() => {
  let scoreSauvegarde = parseInt(score.innerHTML, 10);
  localStorage.setItem("score", scoreSauvegarde)

  let multiSauvegarde = parseInt(valeurMultiplicateur.innerHTML, 10)
  localStorage.setItem("multiplicateur", multiSauvegarde)

  let prixMultiSauvegarde = parseInt(prixMulti.innerHTML, 10)
  localStorage.setItem("prixMulti", prixMultiSauvegarde)

  let valeurAutoSauvegarde = parseInt(valeurAuto.innerHTML, 10)
  localStorage.setItem("valeurAuto", valeurAutoSauvegarde)
}, 10)
