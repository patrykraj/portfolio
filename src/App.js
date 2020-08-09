import React, { useState } from "react";
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
