import styled from 'styled-components';

export const ButtonRoomCode = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  
  background: var(--input);
  border: 1px solid var(--purple);
  cursor: pointer;

  display: flex;

  transition: filter 0.1s;

  &:hover {
    div {
      filter: brightness(0.95);
    }
  }

  div {
    background: var(--purple);
    width: 50px;
    padding: 0 12px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 20px;
      width: 20px;
      transition: height 0.3s, width 0.3s;
    }

    svg {
      height: 0;
      width: 0;
      transition: height 0.3s, width 0.3s;
    }
  }

  span {
    color: var(--text-100);
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 260px;
    font-size: 14px;
    font-weight: 500;
  }
`;