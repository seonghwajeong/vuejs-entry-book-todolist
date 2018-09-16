import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todoItems: []
  },
  getters: {
    getTodoItems(state) {
      return state.todoItems;
    }
  },
  mutations: {
    setItem(state, item) {
      state.todoItems.push(item);
    },
    removeItem(state, index) {
      state.todoItems.splice(index, 1);
    },
    clearItems(state) {
      state.todoItems = [];
    }
  }
});
