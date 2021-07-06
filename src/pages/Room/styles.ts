import styled from 'styled-components';

export const Container = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;

    section {
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > img {
        max-height: 45px;
      }
    }
  }

  main {
    max-width: 800px;
    margin: 0 auto;

    .room-title {
      margin: 32px 0 24px;
      display: flex;
      align-items: center;
      
      h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        color: #29292E;
      }

      > span {
        margin-left: 16px;
        background: #e559f9;
        border-radius: 8px;
        padding: 8px 16px;
        color: #fff;
        font-weight: 500;
        font-size: 14px;
      }
    }

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        background: #fefefe;
        box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        resize: vertical;
        min-height: 130px;
      }

      section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;

        > span {
          margin-left: 0;
          padding: 0;
          font-size: 14px;
          color: #737380;
          font-weight: 500;
          background: transparent;

          button {
            background: transparent;
            border: 0;
            color: #835AFD;
            text-decoration: underline;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
          }
        }
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
    color: #29292e;
    font-weight: 500;
    font-size: 14px;
  }
`;

export const likeButton = styled.button<{isLiked: boolean}>`
  
`