import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
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
    // Lesson 2
    show("a2", 10 + 3 * 8 + 5);
    show("b2", 39 / 3);
    show("c2", (1850 + 750) / 100);
    show("d2", 27 * 0.1);
    show("e2", ((1850 + 750) * 0.2) / 100);
    show("f2", (1899 + 2095 + 799) / 100);
    const total = 1899 + 2095 + 799 + 499;
    show("g2", total / 100);
    show("h2", Math.round(total * 0.1) / 100);
    show("i2", (total + Math.round(total * 0.1)) / 100);
    show("j2", Math.floor(2.8));
    show("k2", Math.ceil(2.2));
    show("l2", (25 * 9) / 5 + 32);
    show("m2", ((86 - 32) * 5) / 9);
    show("n2", (-5 * 9) / 5 + 32);
    show("a3", "My name is:");
    show("b3", "Siam");
    show("c3", "My name is:" + "Siam");
    show("d3", "Total cost: $" + (5 + 3));
  }, []);

  return (
    <>
      <Header text="JavaScript" />
      <main className="container">
        <section>
          <h2 className="section-title">Lesson 1</h2>

          <div className="section-container">
            <button
              id="a1"
              className="mx-auto block border rounded px-3 py-1 cursor-pointer"
            >
              1a. Show Alert
            </button>
            <button
              id="b1"
              className="mx-auto block border rounded px-3 py-1 mt-3 cursor-pointer"
            >
              1b. Show Name
            </button>
            <button
              id="c1"
              className="mx-auto block border rounded px-3 py-1 mt-3 cursor-pointer"
            >
              1c. Show 10 + 5 in Console
            </button>
            <button
              id="d1"
              className="mx-auto block border rounded px-3 py-1 mt-3 cursor-pointer"
            >
              1d. Show 20 - 5 in Console
            </button>
            <button
              id="e1"
              className="mx-auto block border rounded px-3 py-1 mt-3 cursor-pointer"
            >
              1e. Show 2 + 2 - 5 in Console
            </button>

            <button
              id="f1"
              className="mx-auto block border border-red-500 rounded px-3 py-1 mt-3 cursor-pointer"
            >
              1f. Erase Page & Show Starting Date
            </button>
            <button
              id="g1"
              className="mx-auto block border border-red-500 rounded px-3 py-1 mt-3 cursor-pointer"
            >
              1g. Erase Page & Show Name
            </button>
            <button
              id="h1"
              className="mx-auto block border rounded px-3 py-1 mt-3 cursor-pointer"
            >
              1h. Show Total Cost
            </button>
            <button
              id="i1"
              className="mx-auto block border rounded px-3 py-1 mt-3 cursor-pointer"
            >
              1i. Show Balance
            </button>
            <button
              id="j1"
              className="mx-auto block border border-red-500 rounded px-3 py-1 mt-3 cursor-pointer"
            >
              1j. Make Web Page Blank
            </button>
          </div>
        </section>
        <section>
          <h2 className="section-title">Lesson 2</h2>
          <div className="section-container"></div>
        </section>
        <section>
          <h2 className="section-title">Lesson 3</h2>
          <div className="section-container"></div>
        </section>
      </main>
      <Footer name="Siam" />
    </>
  );
}
