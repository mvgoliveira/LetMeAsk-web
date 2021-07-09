import styled from 'styled-components';

export const Container = styled.div<{verticalScroll: boolean}>`
  min-height: 100vh;
  padding-bottom: 30px;
  padding: 0 20px 30px 20px;
  overflow-y: ${props => props.verticalScroll ? "hidden" : "auto"};

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
        margin-right: 30px;
      }

      > div {
        display: flex;
        align-items: center;
        gap: 16px;

        button {
          height: 40px;
        }
      }
    }
  }

  main {
    max-width: 800px;
    margin: 0 auto;
    height: 100%;

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

      .ended-room-shield {
        margin-left: 16px;
        background: #E73F5D;
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

    .emptyQuestions {
      justify-self: flex-end;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 150px;
      text-align: center;

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
        font-size: 14px;
        color: #737380;
      }
    }

    .question-list {
      margin-top: 32px;
      
    }
  }
`;