
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

rain();
function rain() {
  const numRain = 3;
  const rainItems = [
    "angular.png",
    "code.webp",
    "html.png",
    "html2.png",
    "js.png",
    "node.webp",
    "react.png",
    "sql.png",
  ];
  const body = document.querySelector("body");
  rainItems.forEach((element) => {
    for (let index = 0; index < numRain; index++) {
      let rainElement = document.createElement("img");
      rainElement.classList.add("rainElement");
      rainElement.src = "assets/rain/" + element;
      rainElement.alt = "";
      rainElement.style.top = Math.random() * 100 + "%";
      rainElement.style.animation =
        "rainAnimation " + randomIntFromInterval(13, 35) + "s 2";
      rainElement.style.animationIterationCount = "infinite";
      body.appendChild(rainElement);
    }
  });
}


