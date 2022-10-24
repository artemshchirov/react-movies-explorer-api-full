import { useTranslation } from 'react-i18next';

import Nav from '../Nav/Nav';
import LinkContainer from '../LinkContainer/LinkContainer';
import CustomLink from '../CustomLink/CustomLink';

import './MoviesNav.css';

function MoviesNav() {
  const { t } = useTranslation();
  return (
    <Nav className="nav_movies">
      <LinkContainer className="nav__link-item">
        <CustomLink className="link_movies link_order_first" path="/movies">
          {t('link_movies')}
        </CustomLink>
      </LinkContainer>
      <LinkContainer className="nav__link-item">
        <CustomLink className="link_movies" path="/saved-movies">
          {t('link_saved_movies')}
        </CustomLink>
      </LinkContainer>
    </Nav>
  );
}

export default MoviesNav;
