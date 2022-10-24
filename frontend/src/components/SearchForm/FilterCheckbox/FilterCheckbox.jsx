import { useTranslation } from 'react-i18next';

import './FilterCheckbox.css';

function FilterCheckbox({ checked, onChange }) {
  const { t } = useTranslation();
  return (
    <div className="filter-checkbox">
      <input
        className="filter-checkbox__input"
        type="checkbox"
        id="filter-checkbox-id"
        checked={checked}
        onChange={onChange}
      />
      <label className="filter-checkbox__label" htmlFor="filter-checkbox-id" />
      <label
        className="filter-checkbox__description"
        htmlFor="filter-checkbox-id"
      >
        {t('checkbox__description')}
      </label>
    </div>
  );
}

export default FilterCheckbox;
