import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

import Main from '../../pages/Main/Main';
import Alert from '../Alert/Alert';
import Login from '../../pages/Login/Login';
import Movies from '../../pages/Movies/Movies';
import Profile from '../../pages/Profile/Profile';
import Register from '../../pages/Register/Register';
import NotFound from '../../pages/NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import ProtectedRoute from '../../hocs/ProtectedRoute';

import MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi';
import LocalStorage from '../../utils/LocalStorage';
import { configMainApi, configMoviesApi } from '../../utils/configApi';
import { PAGES, ALERT_MESSAGES } from '../../utils/constants';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preloader, setPreloader] = useState(true);
  const [token, setToken] = useState('');

  const [messageAlert, setMessageAlert] = useState(null);
  const [isActiveAlert, setIsActiveAlert] = useState(false);

  const navigate = useNavigate();

  const mainApi = new MainApi(configMainApi);
  const moviesApi = new MoviesApi(configMoviesApi);

  const jwtLocal = new LocalStorage('jwt');
  const moviesLocal = new LocalStorage('movies');
  const languageLocal = new LocalStorage('lng');
  const searchQueryLocal = new LocalStorage('search-query-movies', {
    movies: '',
    short: false,
  });
  const searchQuerySavedMoviesLocal = new LocalStorage(
    'search-query-saved-movies',
    { movies: '', short: false }
  );

  useEffect(() => {
    handleLoginToken();
  }, []);

  const handleLoginToken = () => {
    const jwt = jwtLocal.load();
    if (jwt) {
      getUserData(jwt);
      setToken(jwt);
    } else {
      clearLocal();
      setPreloader(false);
      setLoading(false);
    }
  };

  const handleLogin = (user) => {
    setLoading(true);
    mainApi
      .signin(user)
      .then((res) => {
        const jwt = res.token;
        setToken(jwt);
        setAuthorized(true);
        jwtLocal.save(jwt);
        getUserData(jwt);
        navigate(PAGES.MOVIES);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        showAlert(ALERT_MESSAGES.ERROR.AUTH.EN);
      })
  };

  const handleRegister = ({ name, email, password }) => {
    setLoading(true);
    mainApi
      .signup({ name, email, password })
      .then(() => {
        handleLogin({ email, password });
      })
      .catch(() => {
        setLoading(false);
        showAlert(ALERT_MESSAGES.ERROR.AUTH.EN);
      });
  };

  const handleLogout = () => {
    setAuthorized(false);
    setToken('');
    setCurrentUser({});
    clearLocal();
    navigate(PAGES.MAIN);
  };

  const getUserData = (jwt) => {
    mainApi
      .getUserInfo(jwt)
      .then((user) => {
        if (!authorized) setAuthorized(true);
        setCurrentUser(user);
      })
      .catch(() => {
        clearLocal();
        showAlert(ALERT_MESSAGES.ERROR.GET_USER.EN);
        throw new Error();
      })
      .finally(() => {
        setPreloader(false);
      });
  };

  const handleUpdateUser = (user) =>
    mainApi
      .updateUserInfo(user, token)
      .then((newData) => {
        setCurrentUser(newData);
        showAlert(ALERT_MESSAGES.SUCCESSFULLY.UPDATE_PROFILE.EN);
      })
      .catch(() => {
        showAlert(ALERT_MESSAGES.ERROR.UPDATE_PROFILE.EN);
        throw new Error();
      });

  const handleLikeMovieClick = (movieId, movie) =>
    movieId
      ? mainApi.deleteLikeMovie(movieId, token).catch(() => {
          showAlert(ALERT_MESSAGES.ERROR.DELETE_FILM.EN);
          throw new Error();
        })
      : mainApi.addLikeMovie(movie, token).catch(() => {
          showAlert(ALERT_MESSAGES.ERROR.ADD_FILM.EN);
          throw new Error();
        });

  const clearLocal = () => {
    jwtLocal.delete();
    moviesLocal.delete();
    searchQueryLocal.delete();
    searchQuerySavedMoviesLocal.delete();
  };

  const showAlert = (message) => {
    setMessageAlert(message);
    setIsActiveAlert(true);
    setTimeout(() => {
      setIsActiveAlert(false);
    }, 3000);
  };

  const requestAllMovies = () => moviesApi.getMovies();
  const requestLikeMovies = () => mainApi.fetchLikeMovies(token);

  if (preloader) return <Preloader />;

  return (
    <div className="page">
      <div className="page__container">
        <UserContext.Provider value={{ currentUser, authorized, loading }}>
          <Routes>
            {!authorized && (
              <Route
                path={PAGES.SIGNUP}
                element={<Register handleRegister={handleRegister} />}
              />
            )}
            {!authorized && (
              <Route
                path={PAGES.SIGNIN}
                element={<Login handleLogin={handleLogin} />}
              />
            )}
            <Route path="/" element={<Main languageLocal={languageLocal} />} />
            <Route
              path={PAGES.MOVIES}
              element={
                <ProtectedRoute path={PAGES.MOVIES}>
                  <Movies
                    moviesLocal={moviesLocal}
                    languageLocal={languageLocal}
                    searchQueryLocal={searchQueryLocal}
                    requestAllMovies={requestAllMovies}
                    requestLikeMovies={requestLikeMovies}
                    handleLikeMovieClick={handleLikeMovieClick}
                    showAlert={showAlert}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path={PAGES.SAVED_MOVIES}
              element={
                <ProtectedRoute path={PAGES.SAVED_MOVIES}>
                  <SavedMovies
                    languageLocal={languageLocal}
                    searchQuerySavedMoviesLocal={searchQuerySavedMoviesLocal}
                    requestLikeMovies={requestLikeMovies}
                    handleLikeMovieClick={handleLikeMovieClick}
                    showAlert={showAlert}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path={PAGES.PROFILE}
              element={
                <ProtectedRoute path={PAGES.PROFILE}>
                  <Profile
                    languageLocal={languageLocal}
                    handleLogout={handleLogout}
                    handleUpdateUser={handleUpdateUser}
                  />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Alert messageAlert={messageAlert} isActiveAlert={isActiveAlert} />
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;
