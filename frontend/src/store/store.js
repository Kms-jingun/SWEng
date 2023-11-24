import { createApp } from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import storage from "./modules/storage";
import * as getters from "./modules/getters";
import * as mutations from "./modules/mutations";

const app = createApp();
app.use(Vuex);

export const store = new Vuex.Store({
    state: {
        // todolist 목록
        todoItems: storage.fetch(),

        // 사용자 이름
        userName: storage.fetchName(),

        // 정렬 기준
        todoOldestOrder: true,

        // 로그인 상태
        isLogin: false,

        // 회원가입 화면 렌더링 여부
        isRegister: false
    },
    getters: getters,
    mutations: mutations,
    plugins: [
        createPersistedState()
    ]
});