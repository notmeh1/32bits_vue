import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export default new Vuex.Store({
  state: {
    filterInput: "",
    successAdd: {
      snackbar: false,
      text: "El producto se agregó al carrito",
      timeout: 2500,
    },
    successSell: {
      snackbar: false,
      text: "El producto se vendió exitosamente",
      timeout: 2500,
    },
    checkoutSuccess: {
      overlay: false,
      opacity: 1,
    },
    cart: [],
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
      },
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
      }, 0);
    },
    searchByName(state) {
      return state.gameList.filter((game) =>
        game.nombre.toLowerCase().includes(state.filterInput.toLowerCase())
      );
    },
    filterByStock(state) {
      return state.gameList.filter((game) => game.stock > 0);
    },
  },
  mutations: {
    SET_FILTER(state, newFilter) {
      state.filterInput = newFilter;
    },
    ADD_GAME(state, gameData) {
      this.state.successAdd.snackbar = true;
      state.cart.push(this.state.gameList[gameData]);
      return state.gameList[gameData].stock--;
    },
    async CHECKOUT(state) {
      this.state.checkoutSuccess.overlay = true
      await delay(5000)
      this.state.gamesSelled.push(...this.state.cart)
      console.log(this.state.gamesSelled)
      state.cart.splice(0, state.cart.length)
      this.state.checkoutSuccess.overlay = false
      router.push("/cart/success")

    },
    SELL_GAME(state, gameIndex) {
      this.state.successSell.snackbar = true;
      return state.gameList[gameIndex].stock--;
    },
    ADD_SELL(state, gameData) {
      state.gamesSelled.push(this.state.gameList[gameData]);
      console.log(this.state.gamesSelled);
    },
  },
  actions: {
    getFilter(context, newFilter) {
      context.commit("SET_FILTER", newFilter);
    },
    async addCart(context, game) {
      await context.dispatch("addGame", game);
    },
    async checkOut(context, game) {
      context.commit("CHECKOUT", game)
    },
    async addGame(context, newGame) {
      context.commit("ADD_GAME", newGame);
    },
    async sellGame(context, game) {
      await context.dispatch("delGame", game);
      await context.dispatch("addSell", game);
    },
    async delGame(context, newDel) {
      await delay(2000);
      context.commit("SELL_GAME", newDel);
    },
    async addSell(context, newSell) {
      await delay(1000);
      context.commit("ADD_SELL", newSell);
    },
  },
  modules: {},
});
