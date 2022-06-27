import styled from 'styled-components';

export const Button = styled.button<{ width: number, bgColor?: string}>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: 40px;
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors?.red};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  cursor: pointer;

  :hover{
    opacity: 0.8;
  }
`;

export const Text = styled.p<{ color?: string}>`
  color: ${({ color, theme }) => color || theme.colors?.white};
  font-size: 18px;
  font-weight: 900;
`;
