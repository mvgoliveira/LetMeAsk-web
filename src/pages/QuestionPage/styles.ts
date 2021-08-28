import styled from 'styled-components';

export const Container = styled.div `
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

  > main {
    max-width: 820px;
    margin: 0 auto;
    padding: 0 10px;

    .room-title {
      margin: 32px 0 24px;
      display: flex;
      align-items: center;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border-radius: 8px;
        border: 0;
        
        text-decoration: underline;
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
        margin-right: 20px;

        transition: background-color 0.1s linear;
        
        :hover { 
          background-color: rgba(0,0,0,0.2);
          svg {
            color: var(--purple);
          }
        }

        svg {
          margin: 5px;
          padding: 0;
          color: var(--input-text);
        }
      }
      
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
        min-width: 106px;
        text-align: center;
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
  }
`;

export const UserInfoContainer = styled.article`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  > span {
    color: var(--text-200);
    font-weight: 500;
    font-size: 0.875rem;
  }
`;

export const Form = styled.form<{isAnswerFormOpen: boolean}>`
  position: fixed;
  display: none;
  bottom: ${props => props.isAnswerFormOpen ? "0%" : "-50%"};
  right: 0;
  z-index: 999;

  transition: bottom 0.2s linear;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  height: 40vh;
  width: 100vw;
  margin-top: 20px;
  padding: 30px;
  
  background: var(--answered-question);
  
  textarea {
    max-width: 800px;
    width: 100%;
    border: 0;
    padding: 16px;
    border-radius: 8px;
    background: var(--input);
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    resize: none;
    min-height: 50px;
    height: 200px;
    color: var(--text-200);

    &::placeholder {
      color: var(--text-300);
    }
  }

  > section {
    max-width: 800px;
    width: 100%;
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

    article {
      display: flex;
      gap: 15px;

      button {
        border: none;
        padding: 0px 30px;
        border-radius: 8px;
        cursor: pointer;

        &:first-child {
          background: var(--red);
          color: #fff;
        }
    }
    }
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

      > p {
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis; 
        margin-bottom: 30px;
        text-align: center;
      }

      a {
        display: flex;
        text-decoration: none;
        color: var(--text-100);
        text-align: center;
        padding: 30px 10px;
        border-radius: 8px;
        font-size: 0.9rem;
        width: 100%;
        justify-content: center;
        align-items: center;
        
        &:hover {
          background: var(--input-button-transparent-hover);
        }

        svg {
          height: 20px;
          width: 20px;
          margin-right: 8px;
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