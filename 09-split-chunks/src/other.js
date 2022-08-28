const pepole = require("./pepole");

const h1 = document.createElement("h1");
h1.innerText = "Pepole Again";

document.body.append(h1);

const ul = document.createElement("ul");
pepole.forEach((person) => {
  const li = document.createElement("li");
  li.innerText = person;
  ul.append(li);
});

document.body.append(ul);
