import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

import Section from '../../components/Section/Section';
import Sign from '../../components/Sign/Sign';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import CustomLink from '../../components/CustomLink/CustomLink';
import ErrorText from '../../components/ErrorText/ErrorText';

import useFormAndValidation from '../../hooks/useFormAndValidation';
import { VALIDATION_CONFIGS, VALIDATION_PARAMS } from '../../utils/constants';

import './Register.css';

function Register({ handleRegister }) {
  const { t } = useTranslation();
  const { loading } = useContext(UserContext);

  const initValues = { name: '', email: '', password: '' };
  const { values, errors, isValid, handleChange } = useFormAndValidation(
    initValues,
    VALIDATION_CONFIGS.USER_DATA
  );

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    handleRegister(values);
  };

  return (
    <Section className="sign">
      <Sign title={t('sign_type_register')}>
        <Form className="form form_type_sign" onSubmit={handleSubmitForm}>
          <fieldset className="form__fieldset">
            <label htmlFor="name" className="form__title">
              {t('form__title_name')}
            </label>
            <Input
              name="name"
              value={values.name || ''}
              onChange={handleChange}
              className={`form__input ${
                errors.name ? 'form__input_type_error' : ''
              }`}
              disabled={loading}
            />
            <span id="name-error" className="form__input-error">
              {errors.name && (
                <ErrorText type="auth">
                  {VALIDATION_PARAMS.MESSAGES.NAME.EN}
                </ErrorText>
              )}
            </span>

            <label className="form__title">E-mail</label>
            <Input
              name="email"
              value={values.email}
              type="email"
              onChange={handleChange}
              className={`form__input ${
                errors.email ? 'form__input_type_error' : ''
              }`}
              disabled={loading}
            />
            {errors.email && (
              <ErrorText type="auth">
                {VALIDATION_PARAMS.MESSAGES.EMAIL.EN}
              </ErrorText>
            )}

            <label className="form__title">{t('form__title_password')}</label>
            <Input
              name="password"
              value={values.password || ''}
              type="password"
              onChange={handleChange}
              className={`form__input ${
                errors.password ? 'form__input_type_error' : ''
              }`}
              disabled={loading}
            />
            {errors.password && (
              <ErrorText type="auth">
                {VALIDATION_PARAMS.MESSAGES.PASSWORD.EN}
              </ErrorText>
            )}
          </fieldset>

          <Button
            className="form__btn"
            title={loading ? `${t('link_type_signup')}...` : t('form__btn_reg')}
            btnType="submit"
            btnDisabled={
              !isValid || errors.email || !values.password || loading
            }
          />
        </Form>
        <CustomLink path="/signin" className="link_sign">
          {t('link_sign_reg_1')}
          <span className="link_sign link_sign_type_colored">
            {t('link_type_signin')}
          </span>
        </CustomLink>
      </Sign>
    </Section>
  );
}

export default Register;
