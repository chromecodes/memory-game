import Game from "./components/Game";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { infoApi } from "./components/modules/data";

infoApi.fetchData();

function App() {
  return (
    <div className='app'>
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
