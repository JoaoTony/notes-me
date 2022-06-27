import { FC } from 'react';

import LogoImage from '@/assets/images/logo.png';

import {
  Container, Content, Logo,
} from './sign-in.styles';
import Form from './sign-in.form';

const SignIn: FC = () => (
  <Container>
    <Content>
      <Logo src={LogoImage} />

      <Form />
    </Content>
  </Container>
);

export default SignIn;
