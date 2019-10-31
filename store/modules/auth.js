import router from '@/router';
import Vue from 'vue';

const state = {
    email: null,
    token: null,
};

const mutations = {
    authUser(state, userData) {
        state.email = userData.email;
        state.token = userData.token;
    },
    clearAuthData(state) {
        state.email = null;
        state.token = null;
    },
};

const getters = {
    isAuthenticated(state) {
        return state.token !== null;
    },
};

const actions = {
    login: ({ commit }, authData) => {

        const data_json = JSON.stringify({
            email: authData.email,
            password: authData.password
        });
        Vue.http.post("http://localhost:5000/Feather/signin", data_json, {
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(response => {
                console.log(response.body.token);
                if (response.body.token) {
                    commit('authUser', { email: authData.email, token: response.body.token });
                    localStorage.setItem('token', response.body.token);
                    localStorage.setItem('email', authData.email);
                    router.replace('dashboard'); 

                }
                else {
                    console.log('Login error');
                }
            })
            .catch(error => {
                console.log(`error: ${error}`);
            });

    },
    autoLogin({ commit }) {
        let token = localStorage.getItem('token');
        let username = localStorage.getItem('username');

        if (!token || !username) {
            return;
        }

        commit('authUser', { username: username, token: token });
    },
    logout: ({ commit }) => {
        commit('clearAuthData');
        localStorage.removeItem('email');
        localStorage.removeItem('token');
        router.replace('');
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}