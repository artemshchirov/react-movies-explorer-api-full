import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Form from '../Form/Form';
import Input from '../Input/Input';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import Button from '../Button/Button';

import useFormAndValidation from '../../hooks/useFormAndValidation';
import { ALERT_MESSAGES, PAGES } from '../../utils/constants';

import './SearchForm.css';

function SearchForm({
  loading,
  handleFindMovies,
  searchQueryLocal,
  showAlert,
}) {
  const { t } = useTranslation();
  const { movie, short } = searchQueryLocal.load();
  const startValue = {
    movie,
    short,
  };
  const { values, setValues, isValid, setIsValid, handleChange } =
    useFormAndValidation(startValue);

  const isSavedMovies = useLocation().pathname === PAGES.SAVED_MOVIES;

  useEffect(() => {
    if (isSavedMovies && !values.movie) {
      setIsValid(true);
      handleFindMovies({ movie: '', short });
    } else if (!isValid && !values.movie) {
      showAlert(ALERT_MESSAGES.ERROR.SEARCH_QUERY.EN);
    }
  }, [values]);

  useEffect(() => {
    const searchQuery = searchQueryLocal.load();

    setValues(searchQuery);
    if (searchQuery) setIsValid(true);
    else setIsValid(false);
  }, []);

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    searchQueryLocal.save(values);

    if (!values.movie) {
      setIsValid(false);
      showAlert(ALERT_MESSAGES.ERROR.SEARCH_QUERY.EN);
    } else {
      handleFindMovies(values);
    }
  };

  const handleChangeCheckbox = (evt) => {
    if (values.movie || isSavedMovies) {
      const newValues = { ...values, short: evt.target.checked };
      searchQueryLocal.save(newValues);
      handleChange(evt);
      setValues(newValues);
      handleFindMovies(newValues);
    } else {
      showAlert(ALERT_MESSAGES.ERROR.SEARCH_QUERY.EN);
    }
  };

  return (
    <section className="movies-search">
      <Form className="form movies-search__form" onSubmit={handleSubmitForm}>
        <span className="movies-search__icon" />
        <Input
          name="movie"
          type="text"
          placeholder={t('movies_search__input')}
          value={values.movie || ''}
          onChange={handleChange}
          className={`movies-search__input ${
            !isValid ? 'movies-search__input-error' : ''
          }`}
          disabled={loading}
        />
        <Button
          className="movies-search__btn"
          title={t('search__btn')}
          btnType="submit"
          btnDisabled={!isValid}
        />
      </Form>
      <div className="movies-search__checkbox">
        <div className="movies-search__divider" />
        <FilterCheckbox
          checked={values.short}
          onChange={handleChangeCheckbox}
        />
      </div>
    </section>
  );
}
export default SearchForm;
