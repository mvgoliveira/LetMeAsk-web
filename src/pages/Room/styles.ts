import styled from 'styled-components';

export const Container = styled.div<{isEnded: boolean}>`
  min-height: 100vh;
  padding-bottom: 70px;

  header {
    padding: 24px;
    border-bottom: 1px solid var(--header-border);

    section {
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > img {
        max-height: 45px;
        margin-right: 30px;
      }
    }
  }

  main {
    max-width: 820px;
    margin: 0 auto;
    padding: 0 10px;

    .room-title {
      margin: 32px 0 24px;
      display: flex;
      align-items: center;
      
      h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;
        color: var(--text-100);
      }

      > span {
        margin-left: 16px;
        background: var(--pink);
        border-radius: 8px;
        padding: 8px 16px;
        color: #fff;
        font-weight: 500;
        font-size: 0.875rem;
      }

      .ended-room-shield {
        margin-left: 16px;
        background: var(--red);
        border-radius: 8px;
        padding: 8px 16px;
        color: #fff;
        font-weight: 500;
        font-size: 0.875rem;
      }
    }

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        background: var(--input);
        box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        resize: ${props => props.isEnded ? "none" : "vertical"};
        min-height: 130px;
        color: var(--text-200);

        &::placeholder {
          color: var(--text-300);
          text-align: ${props => props.isEnded && "center"};
          line-height: ${props => props.isEnded && "95px"};
        }
      }

      section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;

        > span {
          margin-left: 0;
          padding: 0;
          font-size: 0.875rem;
          color: var(--text-300);
          font-weight: 500;
          background: transparent;

          button {
            background: transparent;
            border: 0;
            color: var(--purple);
            text-decoration: underline;
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
          }
        }
      }
    }

    .emptyQuestions {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 100px;
      text-align: center;
      color: var(--text-100);

      img {
        width: 150px;
        height: 150px;
      }
      span {
        font-family: "Poppins";
        font-weight: 600;
        margin-top: 16px;
      }
      
      p {
        width: 284px;
        margin-top: 8px;
        font-size: 0.875rem;
        color: #737380;
      }
    }

    .question-list {
      margin-top: 32px;
    }
  }
`;

export const UserInfoContainer = styled.article `
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    margin-left: 8px;
    color: var(--text-200);
    font-weight: 500;
    font-size: 0.875rem;
  }
`;

export const likeButton = styled.button<{isLiked: boolean}>`
  
`