import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

import MainHeader from '../../components/Header/MainHeader/MainHeader';
import MoviesHeader from '../../components/Header/MoviesHeader/MoviesHeader';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../../components/Footer/Footer';

import './Main.css';

function Main({ languageLocal }) {
  const { authorized } = useContext(UserContext);

  return (
    <>
      <div className="content-wrapper">
        {authorized ? (
          <MoviesHeader languageLocal={languageLocal} />
        ) : (
          <MainHeader languageLocal={languageLocal} />
        )}
        <main>
          <Promo />
          <NavTab />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Main;
