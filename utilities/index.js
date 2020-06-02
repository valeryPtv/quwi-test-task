export const parseCookies = (cookies) => cookies.split('; ').reduce((prev, current) => {
  const [name, value] = current.split('=');
  prev[name] = value;
  return prev;
}, {});

export const getAccessTokenFromCookie = (req) => {
  return req ? req && parseCookies(req.headers.cookie).accessToken : '';
}
