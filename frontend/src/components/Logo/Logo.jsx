import './Logo.css';
import logo from '../../images/logo.svg';
import CustomLink from '../CustomLink/CustomLink';

function Logo() {
  return (
    <CustomLink path="/">
      <img className="logo" src={logo} alt="logo 'Movies Explorer" />
    </CustomLink>
  );
}

export default Logo;
