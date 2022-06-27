import styled from 'styled-components';

export const Input = styled.input<{ width: number}>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: 40px;
  
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors?.background};
  border: 1px solid ${({ theme }) => `${theme.colors?.inputBorder}`};
  padding: 0 10px;
  color: ${({ theme }) => theme.colors?.text};
  font-size: 15px;
  &.placeholder{
    color: ${({ theme }) => theme.colors?.text};
  }
`;
