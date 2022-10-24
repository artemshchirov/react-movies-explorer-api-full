import './Section.css';

function Section({ children, className }) {
  return <section className={className}>{children}</section>;
}

export default Section;
