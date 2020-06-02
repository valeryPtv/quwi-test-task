import createPersistedState from 'vuex-persistedstate';
import * as Cookie from 'js-cookie';
console.log('localStorage plugin');

export default ({store}) => {
  createPersistedState({
    key: 'quwi'
  })(store)
}

// import createPersistedState from 'vuex-persistedstate';
// import * as Cookies from 'js-cookie';
//
// let cookieStorage = {
//   getItem: function(key) {
//     return Cookies.getJSON(key);
//   },
//   setItem: function(key, value) {
//     console.log('setItem cookie');
//     return Cookies.set(key, value, {expires: 3, secure: false});
//   },
//   removeItem: function(key) {
//     return Cookies.remove(key);
//   }
// };
//
// export default (context) => {
//   createPersistedState({
//     storage: cookieStorage,
//     getState: cookieStorage.getItem,
//     setState: cookieStorage.setItem
//   })(context.store);
// };
