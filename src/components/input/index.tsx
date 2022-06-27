// @ts-nocheck
import { FC } from 'react';

import { Input as Container } from './input.styles';
import { InputPorps } from './input.types';

const Input: FC<InputPorps> = ({ width, ...rest }) => (
  <Container width={width} {...rest} />
);

export default Input;
