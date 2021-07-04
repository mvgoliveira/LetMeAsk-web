import styled from 'styled-components';

export const ButtonStyle = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500px;
  background: #835afd;
  color: #fff;
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.95);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;  
  }
`;

export const ButtonRoomCode = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  
  background: #FFF;
  border: 1px solid #835AFD;
  cursor: pointer;

  display: flex;

  div {
    background: #835AFD;
    padding: 0 12px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 230px;
    font-size: 14px;
    font-weight: 500;
  }
`;