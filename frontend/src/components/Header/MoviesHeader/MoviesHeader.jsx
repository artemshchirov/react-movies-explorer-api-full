import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import BurgerMenu from '../../BurgerMenu/BurgerMenu';
import Header from '../Header';
import Logo from '../../Logo/Logo';
import CustomLink from '../../CustomLink/CustomLink';
import MoviesNav from '../../MoviesNav/MoviesNav';
import SelectLang from '../../SelectLang/SelectLang';

import './MoviesHeader.css';

function MoviesHeader({ languageLocal }) {
  const { t } = useTranslation();
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleHamburger = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  return (
    <Header>
      <Logo />
      <SelectLang languageLocal={languageLocal} />
      <MoviesNav />
      <CustomLink className="link_movies link_type_profile" path="/profile">
        {t('link_type_profile')} <span className="link_icon" />
      </CustomLink>
      <div className="header__burger-menu" onClick={toggleHamburger}>
        <BurgerMenu languageLocal={languageLocal} isOpen={burgerMenuOpen} />
      </div>
    </Header>
  );
}

export default MoviesHeader;
