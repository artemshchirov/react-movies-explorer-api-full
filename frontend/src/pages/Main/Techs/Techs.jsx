import { useTranslation } from 'react-i18next';

import Title from '../../../components/Title/Title';

import './Techs.css';

function Techs() {
  const { t } = useTranslation();
  return (
    <section className="techs" id="techs">
      <Title className="techs__subject">{t('about__subject')}</Title>
      <Title Tag="h3" className="techs__title">
        {t('techs__title')}
      </Title>
      <p className="techs__subtitle">{t('techs__subtitle')}</p>

      <ul className="techs__grid">
        <li className="techs__grid-item">HTML</li>
        <li className="techs__grid-item">CSS</li>
        <li className="techs__grid-item">JS</li>
        <li className="techs__grid-item">React</li>
        <li className="techs__grid-item">Git</li>
        <li className="techs__grid-item">Express.js</li>
        <li className="techs__grid-item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
