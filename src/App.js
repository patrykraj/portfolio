import React, { useState, useEffect } from "react";
import "./App.css";

import Navigation from "./components/navigation/Navigation";
import Front from "./components/sections/Front";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  const [imageLoaded, setImageLoaded] = useState(false);
  let scrolled = 0;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const move = window.scrollY - scrolled;
      scrolled = window.scrollY;

      if (!imageLoaded) return;

      if (move > 0 && scrolled > 200) {
        document.querySelector("nav div.active").classList.add("scroll");
      } else if (move < 0) {
        document.querySelector("nav div.active").classList.remove("scroll");
      }
    });
  }, [imageLoaded]);

  return (
    <Provider store={store}>
      <div className="App">
        <nav>
          <Navigation loaded={imageLoaded} />
        </nav>
        <header>
          <Front setLoaded={setImageLoaded} />
        </header>
        <main>
          <section>
            <Projects />
          </section>
          <section>
            <Skills />
          </section>
          <section>
            <About />
          </section>
          <section>
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
