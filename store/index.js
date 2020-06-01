import { signin } from '@/services'

export const state = () => ({
  accessToken: ''
})

export const mutations = {
  setAccessToken (state, accessToken) {
    state.accessToken = accessToken;
  }
}

export const actions = {
  async signin ({ commit }, credentials) {
    try {
      const { data } = await signin (credentials);
      console.log('signin action', data);
      commit('setAccessToken', data.token);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
