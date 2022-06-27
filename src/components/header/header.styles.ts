import styled from 'styled-components';

export const Container = styled.div<{ isHome: boolean }>`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 50px;
  position: absolute;
`;

export const Logo = styled.img<{ isHome: boolean }>`
  height: 50px;

  opacity: ${({ isHome }) => (isHome ? 1 : 0)};
`;
