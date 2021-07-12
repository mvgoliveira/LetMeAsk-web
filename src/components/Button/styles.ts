import styled from 'styled-components';

export const ButtonStyle = styled.button<{ isOutlined: boolean }>`
  height: 40px;
  border-radius: 8px;
  font-weight: 500px;
  background: ${ props => props.isOutlined ? "var(--background)" : "#835afd"};
  
  color: ${ props => props.isOutlined ? "var(--purple-white)" : "#fff"};
  padding: 0 33px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: ${ props => props.isOutlined ? "1px solid #835afd" : "none"};

  transition: filter 0.2s;

  &:not(:disabled):hover {
    filter: brightness(0.95);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;  
  }
`;