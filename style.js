"use strict";

let gold = 0;

//Pres for Gold Button
document.querySelector(".goldbutton").addEventListener("click", function () {
  if (gold < 100000000) {
    gold++;
    document.querySelector(".gold").textContent = gold;
  }
  console.log(gold);
  console.log(theme.getAttribute("href"));
});

document.querySelector(".goldbutton1").addEventListener("click", function () {
  if (gold >= 0) {
    gold = 100000000;
    console.log(gold);
    document.querySelector(".gold").textContent = gold;
  }
  console.log(gold);
  console.log(theme.getAttribute("href"));
});

// background blue button
document
  .querySelector(".backgroundBlue")
  .addEventListener("click", function () {
    if (gold >= 1) {
      document.querySelector("body").style.backgroundColor = "blue";
      gold--;
      console.log(gold);
      document.querySelector(".gold").textContent = gold;
      document.querySelector(".getmoregold").style.display = "none";
    } else {
      document.querySelector(".getmoregold").style.display = "unset";
    }
  });

//background green button
document
  .querySelector(".backgroundGreen")
  .addEventListener("click", function () {
    if (gold >= 1) {
      document.querySelector("body").style.backgroundColor = "green";
      gold--;
      console.log(gold);
      document.querySelector(".gold").textContent = gold;
    } else {
      document.querySelector(".getmoregold").style.display = "unset";
    }
  });
//background red button
document.querySelector(".backgroundRed").addEventListener("click", function () {
  if (gold >= 1) {
    document.querySelector("body").style.backgroundColor = "red";
    gold--;
    console.log(gold);
    document.querySelector(".gold").textContent = gold;
  } else {
    document.querySelector(".getmoregold").style.display = "unset";
  }
});

//h1 show
document.querySelector(".h1show").addEventListener("click", function () {
  if (gold >= 1) {
    document.querySelector("h1").style.visibility = "visible";
    gold--;
    console.log(gold);
    document.querySelector(".gold").textContent = gold;
  } else {
    document.querySelector(".getmoregold").style.display = "unset";
  }
});
//h1 heighlight-on
document.querySelector(".h1heighlight").addEventListener("click", function () {
  document.querySelector("h1").style.backgroundColor = "aqua";
});
//h1 heighlight-off
document
  .querySelector(".h1heighlightoff")
  .addEventListener("click", function () {
    document.querySelector("h1").style.backgroundColor = "#ffffff00";
  });
//h1 1rem
document.querySelector(".h1rem").addEventListener("click", function () {
  if (gold >= 1) {
    document.querySelector("h1").style.fontSize = "1rem";
    gold--;
    console.log(gold);
    document.querySelector(".gold").textContent = gold;
  } else {
    document.querySelector(".getmoregold").style.display = "unset";
  }
});

//h1 2rem
document.querySelector(".h12rem").addEventListener("click", function () {
  if (gold >= 1) {
    document.querySelector("h1").style.fontSize = "2rem";
    gold--;
    console.log(gold);
    document.querySelector(".gold").textContent = gold;
  } else {
    document.querySelector(".getmoregold").style.display = "unset";
  }
}); //h1 3rem
document.querySelector(".h13rem").addEventListener("click", function () {
  if (gold >= 1) {
    document.querySelector("h1").style.fontSize = "3rem";
    gold--;
    console.log(gold);
    document.querySelector(".gold").textContent = gold;
  } else {
    document.querySelector(".getmoregold").style.display = "unset";
  }
});

//p show
document.querySelector(".pshow").addEventListener("click", function () {
  if (gold >= 1) {
    document.querySelector("p").style.visibility = "visible";
    gold--;
    console.log(gold);
    document.querySelector(".gold").textContent = gold;
  } else {
    document.querySelector(".getmoregold").style.display = "unset";
  }
});
//p 1rem
document.querySelector(".p1rem").addEventListener("click", function () {
  if (gold >= 1) {
    document.querySelector("p").style.fontSize = "1rem";
    gold--;
    console.log(gold);
    document.querySelector(".gold").textContent = gold;
  } else {
    document.querySelector(".getmoregold").style.display = "unset";
  }
});

//p 2rem
document.querySelector(".p2rem").addEventListener("click", function () {
  if (gold >= 1) {
    document.querySelector("p").style.fontSize = "2rem";
    gold--;
    console.log(gold);
    document.querySelector(".gold").textContent = gold;
  } else {
    document.querySelector(".getmoregold").style.display = "unset";
  }
});
//p 3rem
document.querySelector(".p3rem").addEventListener("click", function () {
  if (gold >= 1) {
    document.querySelector("p").style.fontSize = "3rem";
    gold--;
    console.log(gold);
    document.querySelector(".gold").textContent = gold;
  } else {
    document.querySelector(".getmoregold").style.display = "unset";
  }
});

// h2 show
document.querySelector(".h2show").addEventListener("click", function () {
  if (gold >= 1) {
    document.querySelector("h2").style.visibility = "visible";
    gold--;
    console.log(gold);
    document.querySelector(".gold").textContent = gold;
  } else {
    document.querySelector(".getmoregold").style.display = "unset";
  }
});
//h2 1rem
document.querySelector(".h21rem").addEventListener("click", function () {
  if (gold >= 1) {
    document.querySelector("h2").style.fontSize = "1rem";
    gold--;
    console.log(gold);
    document.querySelector(".gold").textContent = gold;
  } else {
    document.querySelector(".getmoregold").style.display = "unset";
  }
});
//p 3rem
document.querySelector(".h22rem").addEventListener("click", function () {
  if (gold >= 1) {
    document.querySelector("h2").style.fontSize = "2rem";
    gold--;
    console.log(gold);
    document.querySelector(".gold").textContent = gold;
  } else {
    document.querySelector(".getmoregold").style.display = "unset";
  }
});
//h2 3rem
document.querySelector(".h23rem").addEventListener("click", function () {
  if (gold >= 1) {
    document.querySelector("h2").style.fontSize = "3rem";
    gold--;
    document.querySelector(".gold").textContent = gold;
    console.log(gold);
  } else {
    document.querySelector(".getmoregold").style.display = "unset";
  }
});

document.querySelector(".preset1").addEventListener("click", function () {
  if (gold >= 0) {
    document.querySelector("h1").style.visibility = "visible";
    document.querySelector("h2").style.visibility = "visible";
    document.querySelector("p").style.visibility = "visible";

    document.querySelector("body").style.backgroundColor = "#0A192F";
    document.querySelector("body").style.fontFamily = "Raleway";
    document.querySelector("body").style.letterSpacing = "1.5px";
    document.querySelector("body").style.lineHeight = "1.5";
    document.querySelector("html").style.paddingLeft = "15%";
    document.querySelector("html").style.paddingRight = "15%";
    document.querySelector("h1").style.color = "#CCD6F6";
    document.querySelector("h1").style.fontSize = "6rem";
    document.querySelector("h1").style.marginBottom = "15px";
    document.querySelector("h1").style.fontWeight = "700";
    document.querySelector("p").style.color = "#76819E";
    document.querySelector("h2").style.color = "#76819E";
    // document.querySelector("#").style.# = "#";
    // document.querySelector("#").style.# = "#";
    // document.querySelector("#").style.# = "#";
    // document.querySelector("#").style.# = "#";
    // document.querySelector("#").style.# = "#";

    gold--;
    document.querySelector(".gold").textContent = gold;
    console.log(gold);
  } else {
    document.querySelector(".getmoregold").style.display = "unset";
  }
});

//reset all

document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector("h1").style.visibility = "hidden";
  document.querySelector("h2").style.visibility = "hidden";
  document.querySelector("p").style.visibility = "hidden";

  document.querySelector("body").style.backgroundColor = "unset";
  document.querySelector("body").style.fontFamily = "unset";
  document.querySelector("body").style.letterSpacing = "unset";
  document.querySelector("body").style.lineHeight = "unset";
  document.querySelector("html").style.paddingLeft = "unset";
  document.querySelector("html").style.paddingRight = "unset";
  document.querySelector("h1").style.color = "#ffffff00";
  document.querySelector("h1").style.fontSize = "unset";
  document.querySelector("h1").style.marginBottom = "unset";
  document.querySelector("h1").style.fontWeight = "unset";
  document.querySelector("p").style.color = "#ffffff00";
  document.querySelector("h2").style.color = "#ffffff00";
  // document.querySelector("#").style.# = "#";
  // document.querySelector("#").style.# = "#";
  // document.querySelector("#").style.# = "#";
  // document.querySelector("#").style.# = "#";
  // document.querySelector("#").style.# = "#";
  gold = 0;
  document.querySelector(".gold").textContent = gold;
  console.log(gold);
});

document.querySelector(".miner1").addEventListener("click", function () {
  gold--;
  document.querySelector(".gold").textContent = gold;
  setInterval(function () {
    ++gold;
    console.log(gold);
    document.querySelector(".gold").textContent = gold;
  }, 3000);
  document.querySelector(".gold").textContent = gold;
});
