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
    height: 100%;
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: block;
      transition: height 0.3s, width 0.3s;
    }

    svg {
      display: none;
      transition: height 0.3s, width 0.3s;
    }
  }

  span {
    display: block;
    color: var(--text-100);
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 260px;
    font-size: 0.875rem;
    font-weight: 500;
  }

  @media (max-width: 500px) {
    span {
      width: 140px;
      word-break: break-all;
    }
  }
`;