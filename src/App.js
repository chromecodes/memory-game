import Game from "./components/Game";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Pokedex = require("pokeapi-js-wrapper");

const P = new Pokedex.Pokedex();

(async () => {
  const golduck = await P.getPokemonByName("golduck");
  console.log(golduck);
})();

P.getBerryByName(["cheri", "chesto", 5]).then(function (response) {
  // `response` will be an Array containing 3 Objects
  // response.forEach((item) => {console.log(item.size)}) // 80,50,20
  console.log(response);
});

const interval = {
  offset: 34,
  limit: 10,
};
P.getPokemonsList(interval).then(function (response) {
  console.log(response);
});

// const customOptions = {
//   protocol: "https",
//   hostName: "localhost:443",
//   versionPath: "/api/v2/",
//   cache: true,
//   timeout: 5 * 1000, // 5s
//   cacheImages: true,
// };
// const P = new Pokedex.Pokedex(customOptions);

// P.getPokemonByName("eevee").then(function (response) {
//   console.log(response);
// });

// P.getPokemonSpeciesByName(25).then(function (response) {
//   console.log(response);
// });

// P.getBerryByName(["cheri", "chesto", 5]).then(function (response) {
//   // `response` will be an Array containing 3 Objects
//   // response.forEach((item) => {console.log(item.size)}) // 80,50,20
//   console.log(response);
// });

// P.getMachineById(3).then(function (response) {
//   console.log(response);
// });

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
