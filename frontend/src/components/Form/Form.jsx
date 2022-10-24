import './Form.css';

function Form({ className, children, onSubmit }) {
  return (
    <form className={className} onSubmit={onSubmit} noValidate required>
      {children}
    </form>
  );
}

export default Form;
