import Header from '../Header';
import Logo from '../../Logo/Logo';
import SignNav from '../../SignNav/SignNav';
import SelectLang from '../../SelectLang/SelectLang';

import './MainHeader.css';

function MainHeader({ languageLocal }) {
  return (
    <Header className="header_main">
      <Logo />
      <SelectLang languageLocal={languageLocal} />
      <SignNav />
    </Header>
  );
}

export default MainHeader;
