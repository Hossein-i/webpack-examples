module.exports = function slowPepole(name) {
  const p = document.createElement("p");
  p.innerText = `${name} was really slow to arrive!!!`;
  document.body.append(p);
};
