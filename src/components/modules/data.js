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
      if (limit.val <= 12) {
        limit.val = limit.val + 3;
      }
    };

    const lvlDown = () => {
      if (limit.val >= 3) {
        limit.val = limit.val - 3;
      }
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
    console.log(limit.val);
    for (let i = 1; i <= limit.val; i++) {
      console.log(i);
      const temp = await P.getPokemonByName(offset.val + i);
      api.data.push(temp);
    }
    console.log(api.data);
    return api.data;
  }

  return { api, offset, limit, fetchData };
})();
