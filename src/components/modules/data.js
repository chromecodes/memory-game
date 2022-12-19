export const infoApi = (() => {
  const api = (() => {
    let data = [];

    const resetData = () => {
      api.data = [];
    };

    return { data, resetData };
  })();

  const limit = (() => {
    let val = 6;

    const lvlUp = () => {
      val = val + 3;
    };

    const lvlDown = () => {
      val = val - 3;
    };

    return { val, lvlUp, lvlDown };
  })();

  const offset = (() => {
    let val = Math.round(Math.random() * 1000);

    const resetVal = () => {
      offset.val = Math.round(Math.random() * 1000);
    };

    return { val, resetVal };
  })();

  async function fetchData() {
    const Pokedex = require("pokeapi-js-wrapper");
    const P = new Pokedex.Pokedex();

    api.resetData();
    offset.resetVal();

    for (let i = 1; i <= limit.val; i++) {
      const temp = await P.getPokemonByName(offset.val + i);
      api.data.push(temp);
    }

    console.log(api.data);
  }

  return { api, offset, limit, fetchData };
})();
