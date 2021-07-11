import styled from 'styled-components';

export const Container = styled.div<{ isLiked?: boolean, isAnswered: boolean, isHighlighted: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: ${props => props.isAnswered ? "var(--answered-question)" : "var(--input);"};
  border: ${props => props.isHighlighted ? "1px solid var(--purple)" : "none"};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  p {
    color: var(--text-200);
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
      &:last-child {
        display: flex;
        gap: 16px;
      }
    }

    button {
      border: none;
      background: transparent;
      cursor: pointer;

      &.highlight-button {
        svg path {
          stroke: ${props => props.isHighlighted ? "var(--purple)" : ""};
        }
        svg circle {
          stroke: ${props => props.isHighlighted ? "var(--purple)" : ""};
        }
      }

      &.answered-button{
        svg path {
          stroke: ${props => props.isAnswered ? "var(--purple)" : ""};
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
    }
  }
`;

export const QuestionContainer = styled.section<{isHighlighted: boolean}>`
  display: flex;

  & + .question {
    margin-top: 10px;
  }

  .highlight {
    background: var(--purple);
    
    margin-right: ${props => props.isHighlighted ? "5px" : "0"};
    border-radius: 8px;
  }
`;