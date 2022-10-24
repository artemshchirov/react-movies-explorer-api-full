import './LinkContainer.css';

function LinkContainer({ className = '', children }) {
  return <li className={className}>{children}</li>;
}

export default LinkContainer;
