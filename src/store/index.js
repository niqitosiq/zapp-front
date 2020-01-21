import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
function builder(data){
  return new Vuex.Store({
    state: {
      aboutId: 0,
      html: data,
      type: 1,
      server: 1,
      Items: [],
    },
    mutations: {
    },
    actions: {
      setType: function({state, dispatch}, payload){
        state.type = payload.id;
        dispatch("changeItems");
      },
      setServer: function({state, dispatch}, payload){
        state.server = payload.id;
        dispatch("changeItems");
      },
      changeItems: function({state}){
        let type = state.type;
        let server = state.server;
        state.Items = state.html.items[type][server];
      }
    },
    modules: {}
  });
}


export default builder;