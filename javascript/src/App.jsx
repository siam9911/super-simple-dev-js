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
    show("c2", (1850 + 750 * 2) / 100);
    show("d2", 33.5 * 0.1);
    show("e2", ((1850 + 750 * 2) * 0.2) / 100);
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
    show("e3", `Total cost: $${5 + 3}`);
    click("f3", () => {
      alert(`Total cost: $${5 + 3}`);
    });
    show("g3", "Total cost: " + (599+295)/100);
    show("h3", `Total cost: $${(599+295)/100}`);
    click("i3", () => {
      alert(`Total cost: $${(599+295)/100}`)
    })
    click("j3", () => {
      alert(`Total cost: $${(599+295)/100}
Thank you, come again!`)
    })
    show("k3",`Items(${(2+2)}):${(2095+2095+799+799)/100}`)
    show("l3",`Shipping and handling: $${(499+499)/100}`)
    show("m3",`Total before tax: $${(5788+998)/100}`)
    show("n3",`Estimated tax(10%):$${Math.round(6786*0.1)/100}`)
  }, []);

  return (
    <>
      <Header text="JavaScript" />
      <main className="container">
        {/* Lesson 1 */}
        <section>
          <h2 className="section-title">Lesson 1</h2>
          <div className="section-container">
            {/* Page 2 */}
            <button
              id="a1"
              className="mx-auto block border rounded px-3 py-1 mt-3 cursor-pointer"
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

            {/* Page 2 */}
            <button
              id="f1"
              className="mx-auto block border border-red-500 rounded px-3 py-1 mt-3 cursor-pointer"
            >
              1f. Erase Page & Show Good Morning
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
              className="mx-auto block border border-red-500 rounded px-3 py-1 my-3 cursor-pointer"
            >
              1j. Make Web Page Blank
            </button>
          </div>
        </section>

        {/* Lesson 2 */}
        <section>
          <h2 className="section-title">Lesson 2</h2>
          <div className="section-container">
            {/* Page 3 */}
            <p className="border px-3 py-1 m-3 rounded">
              2a. Cost of my Order is: $
              <span id="a2" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              2b. Cost of each Friend: $
              <span id="b2" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              2c. Total cost of a toaster and 2 shirts: $
              <span id="c2" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              2d. 10% Tax of Total Cost: $
              <span id="d2" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              2e. 20% Tax of Total Cost: $
              <span id="e2" className="font-bold"></span>
            </p>

            {/* Page 4 */}
            <p className="border px-3 py-1 m-3 rounded">
              2f. Cost without Tax and Shipping: $
              <span id="f2" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              2g. Cost without Tax: $<span id="g2" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              2h. Tax: $<span id="h2" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              2i. Total Payable Amount: $
              <span id="i2" className="font-bold"></span>
            </p>

            {/* Page 5 */}
            <p className="border px-3 py-1 m-3 rounded">
              2j. Rounding a number down (2.8):{" "}
              <span id="j2" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              2k. Rounding a number up (2.2):{" "}
              <span id="k2" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              2l. 25°C = <span id="l2" className="font-bold"></span>°F
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              2m. 86°F = <span id="m2" className="font-bold"></span>°C
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              2n. -5°C = <span id="n2" className="font-bold"></span>°F
            </p>
          </div>
        </section>

        {/* Lesson 3 */}
        <section>
          <h2 className="section-title">Lesson 3</h2>
          <div className="section-container">
            {/* Page 6 */}
            <p className="border px-3 py-1 m-3 rounded">
              3a. Creating a string :{" "}
              <span id="a3" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              3b. Creating Name as a string :{" "}
              <span id="b3" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              3c. Concatenating 3a and 3b :{" "}
              <span id="c3" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              3d. Created Text : <span id="d3" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              3e. Created Text using template string :{" "}
              <span id="e3" className="font-bold"></span>
            </p>
            <button
              id="f3"
              className="mx-auto block cursor-pointer border px-3 py-1 m-3 rounded"
            >
              3f. Show in Alert
            </button>
            
            {/* Page 7 */}
            <p className="border px-3 py-1 m-3 rounded">
              3g. Created Text2 : <span id="g3" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              3h. Created Text2 using template string :{" "}
              <span id="h3" className="font-bold"></span>
            </p>
            <button
              id="i3"
              className="mx-auto block cursor-pointer border px-3 py-1 m-3 rounded"
            >
              3i. Show in Alert
            </button>
            <button
              id="j3"
              className="mx-auto block cursor-pointer border px-3 py-1 m-3 rounded"
            >
              3j. Show Multiline String
            </button>

            {/* Page 8 */}
            <p className="border px-3 py-1 m-3 rounded">
              3k. First Line : <span id="k3" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              3l. Second Line : <span id="l3" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              3m. Third Line : <span id="m3" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              3n. Fourth Line : <span id="n3" className="font-bold"></span>
            </p>
          </div>
        </section>

        {/* Lesson 4 */}
        <section>
          <h2 className="section-title">Lesson 4</h2>
          <div className="section-container">
            {/* Page 9 */}
            <button className="mx-auto block cursor-pointer border px-3 py-1 m-3 rounded">
              4a. Click
            </button>
            <div className="mx-auto w-fit">
              <button className="cursor-pointer border px-3 py-1 m-3 rounded">
                4b. Nuru
              </button>
              <button className="cursor-pointer border px-3 py-1 m-3 rounded">
                4b. Biriyani
              </button>
            </div>
            <p className="border px-3 py-1 m-3 rounded">4c. Hello, world!</p>
            <div className="border px-3 py-1 m-3 rounded">
              <p className="py-1">4d. Hello, world!</p>
              <p className="py-1">
                4d. Today I woke up in the morning and started writing code.
              </p>
            </div>

            {/* Page 10 */}
            <div className="mx-auto w-fit">
              <button className="cursor-pointer border px-3 py-1 m-3 rounded bg-yellow-300">
                4e. Add to cart
              </button>
              <button className="cursor-pointer border px-3 py-1 m-3 rounded bg-orange-500">
                4e. Buy now
              </button>
            </div>
            <p className="border px-3 py-1 m-3 rounded">4f. Already Done !!</p>
            <p className="border px-3 py-1 m-3 rounded">4g. Already Done !!</p>
            <button
              id="h4"
              className="mx-auto block cursor-pointer border px-3 py-1 m-3 rounded"
            >
              4h. Show in Console
            </button>

            {/* Page 11 */}
            <div className="border px-3 py-1 m-3 rounded">
              <p className="py-1">4i. Adults Plain Cotton T-shirt</p>
              <p className="py-1">4i. Price: $7.99</p>
              <button
                className="cursor-pointer border px-3 py-2 my-3 rounded bg-yellow-300"
                onClick={() => {
                  alert("Added!");
                }}
              >
                4j. Add to cart
              </button>
              <button
                className="cursor-pointer border px-3 py-2 m-3 rounded bg-orange-500"
                onClick={() => {
                  console.log("Loading...");
                  alert("Purchased!");
                }}
              >
                4j. Buy now
              </button>
            </div>
          </div>
        </section>

        {/* Lesson 5 */}
        <section>
          <h2 className="section-title">Lesson 5</h2>
          <div className="section-container">
            {/* Page 12 */}
            <p className="border px-3 py-1 m-3 rounded">
              5a. Variable Created !!
            </p>
            <button
              id="b5"
              className="mx-auto block cursor-pointer border px-3 py-1 m-3 rounded"
            >
              5b. Display in the console
            </button>
            <p className="border px-3 py-1 m-3 rounded">
              5c. Saved in variable !!
            </p>
            <button
              id="d5"
              className="mx-auto block cursor-pointer border px-3 py-1 m-3 rounded"
            >
              5d. Show in the console
            </button>
            <p className="border px-3 py-1 m-3 rounded">
              5e. Saved in variable !!
            </p>

            {/* Page 13: Lesson 5 */}
          </div>
        </section>

        <section>
          <h2 className="section-title">Lesson 6</h2>
          <div className="section-container">
            <h4>Up Next...</h4>
            <h4>Up Next...</h4>
            <h4>Up Next...</h4>
          </div>
        </section>
      </main>
      <Footer name="Siam" />
    </>
  );
}
