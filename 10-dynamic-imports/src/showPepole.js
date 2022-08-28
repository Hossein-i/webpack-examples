module.exports = function showPepole() {
  import("pepole")
    .then(({ default: pepole }) => {
      document.body.append("show pepole:");

      const ul = document.createElement("ul");
      pepole.forEach((person) => {
        const li = document.createElement("li");
        li.innerText = person;
        ul.append(li);
      });

      document.body.append(ul);
    })
    .catch((err) => "An error occurred while loading the component");
};
