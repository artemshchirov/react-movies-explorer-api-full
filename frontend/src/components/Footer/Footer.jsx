import { useTranslation } from 'react-i18next';

import CustomLink from '../CustomLink/CustomLink';

import './Footer.css';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__companies">{t('footer__companies')}</p>
      </div>
      <div className="footer__wrapper">
        <CustomLink
          className="footer__copyright"
          path="https://github.com/artemshchirov"
        >
          {t('footer__copyright')}
        </CustomLink>
        <div className="footer__nav">
          <CustomLink
            className="footer__nav-link"
            path="https://practicum.com/en-isr/"
          >
            {t('footer__nav-link')}
          </CustomLink>
          <CustomLink
            className="footer__nav-link"
            path="https://github.com/artemshchirov/movies-explorer-frontend"
          >
            Github
          </CustomLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
