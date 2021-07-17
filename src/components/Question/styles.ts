import styled from 'styled-components';

export const Container = styled.div<{ isLiked?: boolean, isHighlighted: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: var(--input);
  border: ${props => props.isHighlighted ? "1px solid var(--purple)" : "none"};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;
  
  & + .question {
    margin-top: 10px;
  }

  a {
    color: var(--text-200);
    text-decoration: none;

    :hover {
      color: var(--purple-white);
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      span {
        margin-left: 8px;
        color: var(--text-300);
        font-size: 14px;
      }
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      &:last-child {
        display: flex;
        gap: 25px;
      }

      .answer-button {
        display: flex;
        gap: 10px;

        :hover {
          filter: brightness(1.1);
        }

        span {
          color: var(--text-300);
          line-height: 23px;
        }

        svg {
          margin-top: 5px;
        }
      }      
    }

    button {
      border: none;
      background: transparent;
      cursor: pointer;

      svg {
        height: 24px;
      }

      &.highlight-button {
        svg path {
          stroke: ${props => props.isHighlighted ? "var(--purple)" : ""};
        }
        svg circle {
          stroke: ${props => props.isHighlighted ? "var(--purple)" : ""};
        }
      }

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: ${ props => props.isLiked ? "var(--purple)" : "var(--text-300)"};
        gap: 8px;
        transition: filter 0.1s;

        svg path {
          stroke: ${ props => props.isLiked ? "var(--purple)" : "var(--text-300)"};
        }

        &:hover {
          filter: brightness(0.85);
        }
      }

      &.answer-button {
        display: flex;
        align-items: flex-end;
        color: var(--text-300);
        transition: filter 0.1s;
        padding-top: 2px;

        svg {
          height: 22px;
          width: 22px;
        }
      }
    }
  }
`;