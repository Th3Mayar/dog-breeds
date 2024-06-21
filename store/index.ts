// store/index.js
export const state = () => ({
  token: null
});

export const mutations = {
  setToken(state: { token: any; }, token: any) {
    state.token = token;
  }
};

export const actions = {
  nuxtServerInit({ }, { }) {
    // Initialize token if necessary
  },
  setToken({ commit }: { commit: any }, token: any) {
    commit('setToken', token);
  }
}
