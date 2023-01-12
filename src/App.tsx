import { About } from './ui/about/About';
import { Equipe } from './ui/equipe/Equipe';
import { Footer } from './ui/footer/Footer';
import { Header } from './ui/header/Header';

function App() {
  return (
    <div style={{ color: "white" }}>
      <div className="content">
        <Header />
      </div>
      <div className="content">
        <About />
      </div>
      <div className="content">
        <Equipe />
      </div>
      <Footer />
    </div>
  );
}

export default App;
