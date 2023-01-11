import React from 'react';
import { About } from './ui/about/About';
import { Header } from './ui/header/Header';

function App() {
  return (
    <div style={{ color: "white" }}>
      <Header />
      {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, ducimus culpa? Non iste qui aliquam nihil, sed dolorum beatae adipisci labore autem ipsum tenetur impedit aliquid ratione, nulla eaque reprehenderit.</p> */}
      <About />
    </div>
  );
}

export default App;
