import { signin } from '@/services';
import * as Cookies from 'js-cookie';

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
      Cookies.set('accessToken', data.token, {expires: 3, secure: false});
      return data;
    } catch (error) {
      throw error;
    }
  }
}
