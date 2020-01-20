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
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
