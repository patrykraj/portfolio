import React, { useState } from "react";
import "./App.css";

import Front from "./components/sections/Front";
import Projects from "./components/sections/Projects";
import Navigation from "./components/navigation/Navigation";

function App() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
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
      </main>
      <footer>FOOTER</footer>
    </div>
  );
}

export default App;
