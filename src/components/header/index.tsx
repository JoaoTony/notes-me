import { FC, useState } from 'react';
import Switch from 'react-switch';

import LogoImage from '@/assets/images/logo.png';

import { Container, Logo } from './header.styles';

const Header: FC = () => {
  const [changeThme, setChangeTheme] = useState(false);

  return (
    <Container isHome={false}>
      <Logo src={LogoImage} isHome={false} />
      <Switch
        checked={changeThme}
        onChange={() => setChangeTheme((prev) => !prev)}
        onColor="#8359BD"
        offColor="#E8E6E7"
        onHandleColor="#110420"
        offHandleColor="#8359BD"
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </Container>
  );
};

export default Header;
