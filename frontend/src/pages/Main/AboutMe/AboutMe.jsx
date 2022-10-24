import { useTranslation } from 'react-i18next';

import Title from '../../../components/Title/Title';
import CustomLink from '../../../components/CustomLink/CustomLink';
import profileImage from '../../../images/profile-img.jpg';

import './AboutMe.css';

function AboutMe() {
  const { t } = useTranslation();
  return (
    <section className="profile" id="profile">
      <Title className="profile__subject">{t('profile__subject')}</Title>
      <div className="profile__about">
        <img className="profile__image" src={profileImage} alt="student" />
        <div className="profile__container">
          <Title Tag="h3" className="profile__title">
            {t('profile__title')}
          </Title>
          <p className="profile__subtitle">{t('profile__subtitle')}</p>
          <p className="profile__description">{t('profile__description')}</p>
          <CustomLink
            path="https://github.com/artemshchirov"
            className="profile__link"
          >
            Github
          </CustomLink>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
