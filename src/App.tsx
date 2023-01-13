import { About } from './ui/about/About';
import { Equipe } from './ui/equipe/Equipe';
import { Footer } from './ui/footer/Footer';
import { Header } from './ui/header/Header';

import anfitras from './images/anfitras.png';

function App() {
  if ((process.env.REACT_APP_ANFITRAS ?? '0') === '1') {
    return (
      <div className='flex-row center-content anfitras'>
        <img src={anfitras} alt="H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4"/>
        <p>H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4</p>
      </div>
    );
  }

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
