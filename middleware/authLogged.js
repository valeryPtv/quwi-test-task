export default ({  store, redirect, $auth }) => {
  console.log('middleware accessToken', store.state.accessToken);
  if (!store.state.accessToken) {
    return redirect('/sign-in');
  }
}
