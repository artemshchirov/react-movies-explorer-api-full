import { useTranslation } from 'react-i18next';

import Title from '../../../components/Title/Title';

import './Promo.css';

function Promo() {
  const { t } = useTranslation();
  return (
    <section className="promo">
      <Title Tag="h1" className="promo__title">
        {t('promo__title')}
      </Title>
    </section>
  );
}

export default Promo;
