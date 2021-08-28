import styled from 'styled-components';

export const Container = styled.div<{isEnded: boolean}>`
  min-height: 100vh;
  padding-bottom: 70px;

  header {
    padding: 24px;
    border-bottom: 1px solid var(--header-border);

    > section {
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > img {
        max-height: 45px;
        margin-right: 30px;
      }

      article {
        display: flex;
        gap: 20px;
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

          > button {
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

export const UserDropMenu = styled.div<{isOpen: boolean}>`
  position: relative;
  display: inline-block;

  > img {
    border-radius: 100%;
    width: 40px;
    border: 2px solid var(--purple);
    cursor: pointer;

    &:hover {
      border: 2px solid var(--pink);
    }
  }

  section {
    position: absolute;
    display: ${props => props.isOpen ? "flex" : "none"};
    flex-direction: column;
    z-index: 11;
    background-color: var(--input);
    width: 300px;
    box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.2);
    padding: 30px 0px;
    right: 0;
    top: 65px;

    border-radius: 8px;

    article {
      border-bottom: 1px solid rgb(100,100,100,0.5);

      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      img {
        width: 80px;
        border: none;
        border-radius: 100%;
      }

      p {
        white-space: nowrap; 
        width: 80%; 
        overflow: hidden;
        text-overflow: ellipsis; 
        margin-bottom: 30px;
        text-align: center;
      }

      a {
        text-decoration: none;
        color: var(--text-100);
        text-align: center;
        padding: 30px 45px;
        border-radius: 8px;
        font-size: 0.9rem;
        width: 100%;
        
        &:hover {
          background: var(--input-button-transparent-hover);
        }
      }
    }

    > button {
      /* margin-top: 30px; */
      margin: 30px 80px 0px 80px;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      color: var(--background);
      background: var(--input-button-2);
      cursor: pointer;
    }
  }
`;