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
      About: [],
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
        axios.post('graphql', {
          query: `
            {
              types {
                name
                icon
                id
                servers {
                  id
                  name
                }
              }
            }
          `
        }).then((resp)=>{
          console.log(resp.data);
          state.Types = resp.data.data.types;
          state.type = resp.data.data.types[0];
          dispatch("setServers");
          commit("removeLoading");
        })
      },
      setServers: function({state, dispatch}){
        state.Servers = state.type.servers;
        state.server = state.type.servers[0];
        dispatch("setItems");
      },
      setItems: function({state,commit}){
        let serverId = state.server.id;
        commit("addLoading");
        axios.post('graphql', {
          query: `
            {
              items(where: {server: ` +serverId + `, type: ` + state.type.id + `}) {
                name
                price
                discount
                back {
                  url
                }
                hero {
                  url
                }
                id
                server {
                  id
                }
                type {
                  id
                }
              }
            }
          `
        }).then(resp=>{
          state.Items = resp.data.data.items;
          commit("removeLoading");
        })
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
      setAbout: function({state, commit}, payload){
        let id = payload.id;
        commit("addLoading");
        return new Promise((resolve)=>{
          axios.get("items/" + id).then(resp=>{
            resolve(resp.data);
            commit("removeLoading");
          })
        })
      }
    },
    modules: {}
  });
}


export default builder;