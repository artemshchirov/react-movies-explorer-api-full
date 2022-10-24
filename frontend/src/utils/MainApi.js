export default class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _handleResponse = (response) =>
    response.ok
      ? response.json()
      : Promise.reject(Error(`Ошибка, код: ${response.status}`));

  _fetch(path, method, body, token) {
    const url = this._baseUrl + path;
    return fetch(url, {
      method,
      headers: {
        ...this._headers,
        authorization: token ? `Bearer ${token}` : '',
      },
      body,
    }).then((res) => this._handleResponse(res));
  }

  signup(user) {
    const body = JSON.stringify(user);
    return this._fetch('/signup', 'POST', body);
  }

  signin(user) {
    const body = JSON.stringify(user);
    return this._fetch('/signin', 'POST', body);
  }

  updateUserInfo(user, token) {
    const body = JSON.stringify(user);
    return this._fetch('/users/me', 'PATCH', body, token);
  }

  getUserInfo(token) {
    return this._fetch('/users/me', 'GET', null, token);
  }

  fetchLikeMovies(token) {
    return this._fetch('/movies', 'GET', null, token);
  }

  addLikeMovie(movie, token) {
    const body = JSON.stringify(movie);
    return this._fetch('/movies', 'POST', body, token);
  }

  deleteLikeMovie(movieId, token) {
    return this._fetch(`/movies/${movieId}`, 'DELETE', null, token);
  }
}
