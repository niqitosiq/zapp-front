import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  	loading: 0,
  	types: [
  		{
  			"icon": "crown",
  			"name": "Привелегии",
  			"id": 1
  		},
  		{
  			"icon": "judge",
  			"name": "Разбан",
  			"id": 2
  		},
  		{
  			"icon": "money",
  			"name": "Вещи и деньги",
  			"id": 3
  		}
  	],
    servers: [
      {id: 1, name: "Survival"}, {id: 2, name: "Skyblock"},
    ],
    shopList: [
      {dir: "1", name: "Премиум", id: 1, price: 300, discount: 50},
      {dir: "1", name: "Премиум2", id: 2, price: 500, discount: 30},
      {dir: "1", name: "Премиум3", id: 3, price: 600, discount: 70},
      {dir: "1", name: "Премиум4", id: 4, price: 900, discount: 10},
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
