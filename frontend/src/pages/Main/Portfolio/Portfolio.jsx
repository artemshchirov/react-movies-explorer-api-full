import { useTranslation } from 'react-i18next';

import Title from '../../../components/Title/Title';
import LinkContainer from '../../../components/LinkContainer/LinkContainer';
import CustomLink from '../../../components/CustomLink/CustomLink';

import './Portfolio.css';

function Portfolio() {
  const { t } = useTranslation();
  return (
    <section className="portfolio">
      <Title className="portfolio__title">{t('portfolio__title')}</Title>
      <ul className="portfolio__links">
        <LinkContainer className="portfolio__item">
          <CustomLink
            path="https://artemshchirov.github.io/how-to-learn/#en"
            className="portfolio__link"
          >
            {t('portfolio__link_1')}
          </CustomLink>
        </LinkContainer>
        <LinkContainer className="portfolio__item">
          <CustomLink
            path="https://artemshchirov.github.io/russian-travel/"
            className="portfolio__link"
          >
            {t('portfolio__link_2')}
          </CustomLink>
        </LinkContainer>
        <LinkContainer className="portfolio__item">
          <CustomLink
            path="https://artemshchirov.github.io/around/"
            className="portfolio__link"
          >
            {t('portfolio__link_3')}
          </CustomLink>
        </LinkContainer>
      </ul>
    </section>
  );
}

export default Portfolio;
