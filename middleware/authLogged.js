export default ({  store, redirect }) => {
  console.log('middleware', store.state);
  if (!store.state.accessToken) {
    return redirect('/sign-in');
  }
}
