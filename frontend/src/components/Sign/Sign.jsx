import './Sign.css';
import SignHeader from '../Header/SignHeader/SignHeader';

function Sign({ children, title }) {
  return (
    <div className="sign__content">
      <SignHeader title={title} />
      {children}
    </div>
  );
}

export default Sign;
