import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import './SelectLang.css';

function SelectLang({ languageLocal }) {
  const { i18n } = useTranslation();
  const { lng } = languageLocal.load();
  const [currentLang, setCurrentLang] = useState(lng);

  const handleChangeLang = (evt) => {
    const { value } = evt.target;
    i18n.changeLanguage(value);
    languageLocal.save({ lng: value });
    setCurrentLang(value);
  };

  return (
    <select
      className="select-lang"
      value={currentLang}
      onChange={(evt) => handleChangeLang(evt)}
    >
      <option value="en">EN</option>
      <option value="ru">RU</option>
    </select>
  );
}

export default SelectLang;
