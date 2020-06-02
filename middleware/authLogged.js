import { getAccessTokenFromCookie } from "@/utilities";

export default ({ req, store, redirect }) => {
  const accessToken = store.state.accessToken || getAccessTokenFromCookie(req);

  if (!accessToken) {
    return redirect('/sign-in');
  }
}
