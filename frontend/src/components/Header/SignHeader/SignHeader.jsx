import './SignHeader.css';
import Header from '../Header';
import Logo from '../../Logo/Logo';
import Title from '../../Title/Title';

function SignHeader({ title }) {
  return (
    <Header className="header_sign">
      <Logo />
      <Title Tag="p" className="title_type_main">
        {title}
      </Title>
    </Header>
  );
}

export default SignHeader;
