import styled, { keyframes } from 'styled-components';

const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  
  p {
    font-family: "Poppins", sans-serif;
  }

  svg {
    margin-right: 20px;
    animation: ${Rotate} 1s linear infinite;
  }
`