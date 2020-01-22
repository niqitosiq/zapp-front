import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);
function builder(data){
  return new Vuex.Store({
    state: {
      aboutId: 0,
      html: 0,
      type: 1,
      server: 1,
      Items: [],
      Types: [],
      Servers: [],
      banner: '',
      link: 'http://localhost:1337',
      loading: 0,
      scrollToTop: 0,
    },
    mutations: {
      addLoading(state){
        state.loading++;
      },
      removeLoading(state){
        state.loading--;
      },
      scroll(state){
        state.scrollToTop++;
      }
    },
    actions: {
      getTypes: function({state,dispatch,commit}){
        commit("addLoading");
        axios.get('types').then((resp)=>{
          state.Types = resp.data;
          state.type = resp.data[0];
          dispatch("setServers");
          commit("removeLoading");
        })
      },
      setServers: function({state, dispatch}){
        state.Servers = state.type.servers;
        state.server = state.type.servers[0];
        dispatch("setItems");
      },
      setItems: function({state}){
        let serverId = state.server.id;
        let items = (state.type.items).filter((item)=>{
          return item.server == serverId;
        });
        state.Items = items;
      },
      changeServer: function({state, dispatch}, payload){
        let items = (state.type.servers).filter((item)=>{
          return item.id == payload.id;
        });
        state.server = items[0];
        console.log(state.server);
        dispatch("setItems");
      },
      changeType: function({state,dispatch}, payload){
        let items = (state.Types).filter((item)=>{
          return item.id == payload.id;
        });
        state.type = items[0];
        dispatch("setServers");
      },
      getBanner: function(){
        return new Promise((resolve)=>{
          axios.get("banners?visible=true").then(resp=>{
            resolve(resp.data[0]);
          })

        })
      },
    },
    modules: {}
  });
}


export default builder;