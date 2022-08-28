document.title = "Pepole";

const h1 = document.createElement("h1");
h1.innerText = "Pepole";

document.body.append(h1);

import("showPepole")
  .then(({ default: showPepole }) => {
    showPepole();
  })
  .catch((err) => "An error occurred while loading the component");

setTimeout(() => {
  import("slowPepole")
    .then(({ default: slowPepole }) => {
      slowPepole("Mohammad Javad Chakipoor");
    })
    .catch((err) => "An error occurred while loading the component");
}, 5000);
