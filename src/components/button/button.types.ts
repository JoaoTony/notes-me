import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number;
  text?: string;
  loading?: boolean;
  color?: string;
  bgColor?: string
}
