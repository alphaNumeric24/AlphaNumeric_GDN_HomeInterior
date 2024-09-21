const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector(" [data-cursor-outline]");
window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});

let searchhidden1 = true;
let SearchIcon1 = document.querySelector("header .nav1 ul li .fa-search");
let NavSearch1 = document.querySelector("header .nav1 ul input");
SearchIcon1.addEventListener("click", () => {
  if (searchhidden1 == true) {
    NavSearch1.style.visibility = "visible";
    searchhidden1 = false;
  } else {
    NavSearch1.style.visibility = "hidden";
    searchhidden1 = true;
  }
});



let NavBars = document.querySelector("header .nav1 ul .fa-bars");
let NavTimes = document.querySelector("header .nav1 ul .fa-times");
let Nav2 = document.querySelector("header .nav2");

NavBars.addEventListener("click", () => {
  Nav2.style.display = "flex";
  NavBars.style.display = "none";
  NavTimes.style.display = "flex";
});
NavTimes.addEventListener("click", () => {
  Nav2.style.display = "none";
  NavBars.style.display = "flex";
  NavTimes.style.display = "none";
});





const data = [
  { name: "Sofa 1" },
  { name: "Sofa 2" },
  { name: "Sofa 3" },
  { name: "Sofa 4" },
  { name: "Sofa 5" }
];

const searchBar = document.getElementById('searchBar');
const resultsContainer = document.getElementById('results');

searchBar.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  resultsContainer.innerHTML = '';

  const filteredData = data.filter(item => 
      item.name.toLowerCase().includes(searchTerm)
  );

  filteredData.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.name;
      resultsContainer.appendChild(li);
  });
});

