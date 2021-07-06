import styled from 'styled-components';

export const Container = styled.div<{ isLiked?: boolean }>`
  display: flex;
  flex-direction: column;
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + .question {
    margin-top: 8px;
  }

  p {
    color: #29292e
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
        color: #737380;
        font-size: 14px;
      }
    }

    button {
      border: none;
      background: transparent;
      cursor: pointer;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: ${ props => props.isLiked ? "#835AFD" : "#737380"};
        gap: 8px;
        transition: filter 0.1s;

        svg path {
          stroke: ${ props => props.isLiked ? "#835AFD" : "#737380"};
        }

        &:hover {
          filter: brightness(0.85);
        }
      }
    }
  }
`;