// @ts-nocheck
import React, { FC } from 'react';

import { ButtonProps } from './button.types';
import { Button as Container, Text } from './button.styles';
import Loader from '../loader';

const Button: FC<ButtonProps> = ({
  text, loading, color, ...rest
}) => {
  const children = rest.children || <Text color={color}>{text}</Text>;

  return (
    <Container {...rest}>
      {loading
        ? (
          <Loader />
        )
        : children}
    </Container>
  );
};

export default Button;
