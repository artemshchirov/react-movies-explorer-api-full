import { useTranslation } from 'react-i18next';

import Title from '../../../components/Title/Title';

import './AboutProject.css';

function AboutProject() {
  const { t } = useTranslation();
  return (
    <section className="about" id="about">
      <Title className="about__subject">{t('about__subject')}</Title>
      <div className="about__articles">
        <article className="about__container">
          <Title Tag="h3" className="about__title">
            {t('about__title_1')}
          </Title>
          <p className="about__subtitle">{t('about__subtitle_1')}</p>
        </article>
        <article className="about__container">
          <Title Tag="h3" className="about__title">
            {t('about__title_2')}
          </Title>
          <p className="about__subtitle">{t('about__subtitle_2')}</p>
        </article>
      </div>
      <div className="timeline">
        <div className="timeline__container backend">
          <div className="timeline__rectangle">
            <p className="timeline__weeks">{t('timeline__weeks_1')}</p>
          </div>
          <p className="timeline__caption">Back-end</p>
        </div>
        <div className="timeline__container">
          <div className="timeline__rectangle frontend">
            <p className="timeline__weeks">{t('timeline__weeks_2')}</p>
          </div>
          <p className="timeline__caption">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
