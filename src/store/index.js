import Vue from 'vue';
import Vuex from 'vuex';
// #ifdef H5
import createPersistedState from 'vuex-persistedstate';
// #endif

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
    },
    mutations: {

    },
    actions: {

    },
    // #ifdef H5
    /* vuex数据持久化配置 */
    plugins: [
        createPersistedState({
            // 存储方式：localStorage、sessionStorage、cookies
            storage: window.localStorage,
            // 存储的 key 的key值
            key: 'store',
        }),
    ],
    // #endif
});

export default store;
