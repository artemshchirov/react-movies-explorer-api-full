import './ErrorText.css';

function ErrorText({ children }) {
  return (
    <span className="error-text" id="movie-error">
      {children}
    </span>
  );
}

export default ErrorText;
