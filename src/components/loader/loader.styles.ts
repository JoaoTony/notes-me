import styled, { keyframes } from 'styled-components';

const first = keyframes`
   0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;
const second = keyframes`
 0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;
const third = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const Container = styled.div`
  display: inline-block;
  position: relative;
  margin-top: -15px;
  margin-left: -50px;

  background-color: blue;

  div {
    position: absolute;
    top: 0;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  div:nth-child(1) {
    left: 8px;
    animation: ${first} 0.6s infinite;
  }
  div:nth-child(2) {
    //left: 8px;
    animation:  ${second} 0.6s infinite;
  }
  div:nth-child(3) {
    left: 16px;
    animation:  ${second} 0.6s infinite;
  }
  div:nth-child(4) {
    left: 40px;
    animation:  ${third} 0.6s infinite;
  }

`;

// @keyframes lds-ellipsis1 {
//   0% {
//     transform: scale(0);
//   }
//   100% {
//     transform: scale(1);
//   }
// }
// @keyframes lds-ellipsis3 {
//   0% {
//     transform: scale(1);
//   }
//   100% {
//     transform: scale(0);
//   }
// }
// @keyframes lds-ellipsis2 {
//   0% {
//     transform: translate(0, 0);
//   }
//   100% {
//     transform: translate(24px, 0);
//   }
// }
