const pepole = require("./pepole");
const imgSrc = require("./assets/images/img-1.jpg").default;

// import styles
require("./index.css");

document.title = "Pepole";
const h1 = document.createElement("h1");
h1.innerText = "Pepole";
document.body.append(h1);

const ul = document.createElement("ul");
pepole.forEach((person) => {
  const li = document.createElement("li");
  li.innerText = person;
  ul.append(li);
});

document.body.append(ul);

const img = document.createElement("img");
img.src = imgSrc;

document.body.append(img);
