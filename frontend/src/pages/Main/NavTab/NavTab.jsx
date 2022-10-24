import { useTranslation } from 'react-i18next';

import LinkContainer from '../../../components/LinkContainer/LinkContainer';
import CustomLink from '../../../components/CustomLink/CustomLink';

import './NavTab.css';

function NavTab() {
  const { t } = useTranslation();
  return (
    <section className="navtab">
      <nav>
        <ul className="nav__links">
          <LinkContainer>
            <CustomLink className="nav__link" path="#about">
              {t('nav__link_about')}
            </CustomLink>
          </LinkContainer>
          <LinkContainer>
            <CustomLink className="nav__link" path="#techs">
              {t('nav__link_techs')}
            </CustomLink>
          </LinkContainer>
          <LinkContainer>
            <CustomLink className="nav__link nav__link_last" path="#profile">
              {t('nav__link_profile')}
            </CustomLink>
          </LinkContainer>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
