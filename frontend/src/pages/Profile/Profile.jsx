import { useTranslation } from 'react-i18next';
import { useEffect, useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';

import MoviesHeader from '../../components/Header/MoviesHeader/MoviesHeader';
import Title from '../../components/Title/Title';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import ErrorText from '../../components/ErrorText/ErrorText';

import useFormAndValidation from '../../hooks/useFormAndValidation';
import { VALIDATION_PARAMS } from '../../utils/constants';

import './Profile.css';

function Profile({ languageLocal, handleUpdateUser, handleLogout }) {
  const { t } = useTranslation();
  const { currentUser, loading } = useContext(UserContext);

  const startValues = {
    name: currentUser.name,
    email: currentUser.email,
  };

  const { values, isValid, handleChange, setIsValid } =
    useFormAndValidation(startValues);

  const [isValidUserName, setIsValidUserName] = useState(true);
  const [isValidUserEmail, setIsValidUserEmail] = useState(true);

  // Check if user info was changed and valid
  useEffect(() => {
    const isValidName = VALIDATION_PARAMS.REGEX.NAME.test(values.name);
    const isValidEmail = VALIDATION_PARAMS.REGEX.EMAIL.test(values.email);
    const isChangeName = values.name !== currentUser.name;
    const isChangeEmail = values.email !== currentUser.email;

    setIsValidUserName(isValidName);
    setIsValidUserEmail(isValidEmail);

    if (isValidName && isValidEmail && (isChangeName || isChangeEmail))
      setIsValid(true);
    else setIsValid(false);
  }, [values]);

  const clickUpdateUserButton = () => {
    handleUpdateUser(values).then(() => setIsValid(false));
  };

  return (
    <>
      <MoviesHeader languageLocal={languageLocal} />
      <section className="account">
        <div className="account__container">
          <Title Tag="p" className="title_type_profile">
            {`${t('title_type_profile')}, ${values.name}!`}
          </Title>

          <Form className="form account__form">
            <div className="account__input-container">
              <label className="account__label">{t('account__label')}</label>
              <Input
                className="account__input"
                type="text"
                value={values.name}
                name="name"
                onChange={handleChange}
                placeholder={t('account__input_name')}
                disabled={loading}
              />
            </div>
            {!isValidUserName && (
              <ErrorText>{VALIDATION_PARAMS.MESSAGES.NAME.EN}</ErrorText>
            )}
            <div className="account__divider" />
            <div className="account__input-container">
              <label className="account__label">E-mail</label>
              <Input
                className="account__input"
                placeholder={t('account__input_email')}
                type="email"
                value={values.email}
                name="email"
                onChange={handleChange}
                disabled={loading}
              />
            </div>
            {!isValidUserEmail && (
              <ErrorText>{VALIDATION_PARAMS.MESSAGES.EMAIL.EN}</ErrorText>
            )}
          </Form>

          <div className="account__btns">
            <Button
              className="account__btn"
              title={
                loading
                  ? `${t('account__btn_update_2')}...`
                  : t('account__btn_update_1')
              }
              btnType="submit"
              btnDisabled={!isValid}
              onClick={clickUpdateUserButton}
              disabled={loading}
            />
            <Button
              className="account__btn account__btn_last"
              title={
                loading
                  ? `${t('account__btn_logout_2')}...`
                  : t('account__btn_logout_1')
              }
              onClick={handleLogout}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
