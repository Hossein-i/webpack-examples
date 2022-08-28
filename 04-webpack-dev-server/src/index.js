const pepole = require("./pepole");

document.title = "Pepole";
document.body.append("Pepole:");

const ul = document.createElement("ul");
pepole.forEach((person) => {
  const li = document.createElement("li");
  li.innerText = person;
  ul.append(li);
});

document.body.append(ul);
