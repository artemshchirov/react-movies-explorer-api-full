import './Input.css';
import { memo } from 'react';

function Input({
  className,
  placeholder = '',
  name,
  value,
  onChange,
  type = 'text',
  disabled = false,
  required = true,
}) {
  let finalClassName = 'input';
  if (className) finalClassName += ` ${className}`;

  return (
    <input
      className={finalClassName}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      required={required}
      disabled={disabled}
    />
  );
}
export default memo(Input);
