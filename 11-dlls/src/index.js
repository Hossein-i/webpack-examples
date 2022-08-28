const $ = require("jquery");

const pepole = require("./pepole");

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
