import { useTranslation } from 'react-i18next';

import LinkContainer from '../LinkContainer/LinkContainer';
import CustomLink from '../CustomLink/CustomLink';

import './BurgerMenu.css';

function BurgerMenu({ isOpen }) {
  const { t } = useTranslation();
  return (
    <>
      <ul className="burger-btn">
        <div className="burger-btn__row burger-btn__row_order_first" />
        <div className="burger-btn__row burger-btn__row_order_second" />
        <div className="burger-btn__row burger-btn__row_order_third" />
      </ul>

      <style jsx="true">
        {`
          .burger-btn__row_order_first {
            transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
          }

          .burger-btn__row_order_second {
            transform: ${isOpen ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${isOpen ? 0 : 1};
          }

          .burger-btn__row_order_third {
            transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
          }
        `}
      </style>

      <div className={`burger-menu ${isOpen ? 'opened' : ''}`}>
        <ul className="burger-menu__links ">
          <LinkContainer className="burger-menu__item">
            <CustomLink className="burger-menu__link" path="/">
              {t('burger__link_1')}
            </CustomLink>
          </LinkContainer>
          <LinkContainer className="burger-menu__item">
            <CustomLink className="burger-menu__link" path="/movies">
              {t('burger__link_2')}
            </CustomLink>
          </LinkContainer>
          <LinkContainer className="burger-menu__item">
            <CustomLink className="burger-menu__link" path="/saved-movies">
              {t('burger__link_3')}
            </CustomLink>
          </LinkContainer>
        </ul>
        <CustomLink className="burger-menu__account-btn" path="/profile">
          {t('burger__account_btn')}
          <span className="burger-menu__account-icon" />
        </CustomLink>
      </div>

      <div className={`overlay ${isOpen ? 'visible' : ''}`} />
    </>
  );
}

export default BurgerMenu;
