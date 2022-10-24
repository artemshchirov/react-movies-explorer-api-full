export default class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _handleResponse = (response) =>
    response.ok
      ? response.json()
      : Promise.reject(Error(`Error, code: ${response.status}`));

  getMovies() {
    return fetch(this._baseUrl, {
      method: 'GET',
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }
}
