import styled from 'styled-components';

export const Container = styled.div<{isOpen: boolean}>`
  position: fixed;
  z-index: 2;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(2px);
  
  display: ${props => props.isOpen ? "flex" : "none"};
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 590px;
  height: 362px;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  
  img {
    height: 48px;
  }

  span {
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 24px;
    margin-top: 24px;
  }

  p {
    font-size: 16px;
    margin-top: 12px;
  }

  .buttonsContainer {
    display: flex;
    margin-top: 40px;
    gap: 8px;

    button {
      border: none;
      padding: 15px 30px;
      border-radius: 8px;
      cursor: pointer;

      &:last-child {
        background: #E73F5D;
        color: #fff;
      }
    }
  }
`;