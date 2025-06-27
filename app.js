const id = (id) => document.getElementById(id);
const show = (place, msg) => {
  const element = id(place);
  if (element && msg) {
    element.innerHTML = msg;
  }
};
const click = (btn, code) => {
  const element = id(btn);
  if (element && code) {
    element.addEventListener("click", code);
  }
};
const clickShow = (btn, place, msg) => {
  const btnEl = id(btn);
  const placeEl = id(place);
  if (btnEl && placeEl && msg) {
    btnEl.addEventListener("click", () => {
      placeEl.innerHTML = msg;
    });
  }
};
// Showing Functions;
click("a1", () => {
  alert("Started JavaScript :)))");
});
click("b1", () => {
  alert("MD Siam Ahmed !!!");
});
click("c1", () => {
  console.log(10 + 5);
});
click("d1", () => {
  console.log(20 - 5);
});
click("e1", () => {
  console.log(2 + 2 - 5);
});
click("f1", () => {
  document.body.innerHTML = "Starting Date:27 june 2025,NIGHT 9:50";
});
click("g1", () => {
  document.body.innerHTML = "MD Siam Ahmed";
});
click("h1", () => {
  console.log(10 + 8 + 20);
});
click("i1", () => {
  console.log(100 - 20 - 50 + 200);
});
click("j1", () => {
    document.body.innerHTML = "";
});
