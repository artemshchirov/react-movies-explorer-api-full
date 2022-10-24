import './Button.css';

function Button({
  title,
  className,
  btnType = 'button',
  onClick = (f) => f,
  btnDisabled,
}) {
  let finalClassName = 'button';
  if (className) {
    finalClassName += ` ${className} ${btnDisabled ? 'button_disabled' : ''}`;
  }

  return (
    <button
      className={finalClassName}
      type={btnType}
      onClick={onClick}
      disabled={btnDisabled}
    >
      {title}
    </button>
  );
}
export default Button;
