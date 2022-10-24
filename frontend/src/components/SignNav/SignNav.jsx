import { useTranslation } from 'react-i18next';

import Nav from '../Nav/Nav';
import LinkContainer from '../LinkContainer/LinkContainer';
import CustomLink from '../CustomLink/CustomLink';

import './SignNav.css';

function SignNav() {
  const { t } = useTranslation();
  return (
    <Nav>
      <LinkContainer className="nav__link-item">
        <CustomLink className="link_main link_type_signup" path="/signup">
          {t('link_type_signup')}
        </CustomLink>
      </LinkContainer>
      <LinkContainer className="nav__link-item">
        <CustomLink className="link_main link_type_signin" path="/signin">
          {t('link_type_signin')}
        </CustomLink>
      </LinkContainer>
    </Nav>
  );
}

export default SignNav;
