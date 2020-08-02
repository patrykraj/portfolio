import React from "react";
import "./App.css";

import Front from "./components/sections/Front";
import Projects from "./components/sections/Projects";

function App() {
  return (
    <div className="App">
      <nav>NAV</nav>
      <header>
        <Front />
      </header>
      <main>
        <section>
          <Projects />
        </section>
      </main>
      <footer>FOOTER</footer>
    </div>
  );
}

export default App;
