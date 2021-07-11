import styled from 'styled-components';

export const Container = styled.div<{verticalScroll: boolean}>`
  min-height: 100vh;
  padding-bottom: 30px;
  padding: 0 20px 30px 20px;
  overflow-y: ${props => props.verticalScroll ? "hidden" : "auto"};

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
        color: var(--text-100);
      }

      > span {
        margin-left: 16px;
        background: var(--pink);
        border-radius: 8px;
        padding: 8px 16px;
        color: #fff;
        font-weight: 500;
        font-size: 14px;
      }

      .ended-room-shield {
        margin-left: 16px;
        background: var(--red);
        border-radius: 8px;
        padding: 8px 16px;
        color: #fff;
        font-weight: 500;
        font-size: 14px;
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
        color: var(--text-300);
      }
    }

    .question-list {
      margin-top: 32px;
      
    }
  }
`;