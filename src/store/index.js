import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export default new Vuex.Store({
  state: {
    filterInput: "",
    gamesSelled: [],
    gameList: [
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: true,
      },
      {
        codigo: "0002",
        nombre: "Fifa 21",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0003",
        nombre: "Gears of War 4",
        stock: 100,
        precio: 15000,
        color: "green",
        destacado: true,
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: false,
      },
      {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: 100,
        precio: 10000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20000,
        color: "red",
        destacado: true,
      },
      {
        codigo: "0007",
        nombre: "Call of Duty",
        stock: 0,
        precio: 50000,
        color: "purple",
        destacado: false,
      }
    ],
  },
  getters: {
    stockTotal(state) {
      return state.gameList.reduce((accumulator, game) => {
        accumulator = accumulator + game.stock;
        return accumulator;
      }, 0);
    },
    sellTotal(state) {
      return state.gamesSelled.reduce((accumulator, sell) => {
        accumulator = accumulator + sell.precio;
        return accumulator;
      }, 0)
    },
    searchByName(state) {
      return state.gameList.filter(game =>
        game.nombre.toLowerCase().includes(state.filterInput.toLowerCase())
      );
    },
    filterByStock(state) {
      return state.gameList.filter(game =>
        game.stock > 0)
    },

  },
  mutations: {
    SET_FILTER(state, newFilter) {
      state.filterInput = newFilter;
    },
    SELL_GAME(state, gameIndex) {
      return state.gameList[gameIndex].stock--
    },
    ADD_SELL(state, gameData) {
      state.gamesSelled.push(this.state.gameList[gameData])

      console.log(this.state.gameList[gameData])
    },
  },
  actions: {
    getFilter(context, newFilter) {
      context.commit("SET_FILTER", newFilter);
    },
    async sellGame(context, game) {
      await context.dispatch("delGame", game)
      await context.dispatch("addSell", game)
    },
    async delGame(context, newDel) {
      await delay(2000)
      context.commit("SELL_GAME", newDel)
    },
    async addSell(context, newSell) {
      await delay(1000)
      context.commit("ADD_SELL", newSell)
    }
  },
  modules: {},
});
