import styled from 'styled-components';

export const Container = styled.section<{isLiked: boolean}>`
  display: grid;
  grid-template-columns: 35px 1fr;

  .answer-line {
    border-left: 3px solid var(--answer-line);
    height: 100%;
    margin-left: 15px;
  }

  :last-child {
    .answer-line {
      height: 75%;
      border-bottom: 3px solid var(--answer-line);
    }
  }

  button {
    display: flex;
    background: transparent;
    border: none;
    cursor: pointer;
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

  article {
    display: flex;
    flex: 1;
    flex-direction: column;
    background: var(--input);
    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    padding: 24px;
    margin-top: 20px;

    & + .question {
      margin-top: 10px;
    }

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
        display: flex;
        justify-content: center;
        align-items: center;

        &:last-child {
          display: flex;
          gap: 25px;
        }
      }
    }  
  }
`;