import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: var(--purple);
    color: #fff;
    
    padding: 120px 80px;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 2.25rem 'Poppins', sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p {
      font-size: 1.5rem;
      line-height: 32px;
      margin-top: 16px;
      color: #f8f8f8;
    }
  }

  main {
    flex: 12;

    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: center;
    }

    h2 {
      font-size: 1.5rem;
      margin: 64px 0 24px;
      font-family: 'Poppins', sans-serif;
    }

    form {
      input {
        height: 50px;
        border-radius: 8px;
        padding: 0 16px;
        background: var(--input);
        color: var(--input-text);
        border: 1px solid var(--input-border);
      }

      button {
        margin-top: 16px;
      }

      button, input {
        width: 100%;
      }
    }

    p {
      padding-top: 16px;
      font-size: 0.875rem;
      font-family: "Roboto", sans-serif; 
      color: var(--text-300);

      a {
        color: var(--pink);
      }
    }
  }

  .create-room {
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500px;
    background: #ea4335;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
      margin-right: 8px;
    }

    &:hover {
      filter: brightness(0.95);
    }
  }

  .separator {
    font-size: 0.875rem;
    color: var(--separator-text);

    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--separator);
      margin-right: 16px;
    }

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--separator);
      margin-left: 16px;
    }
  }

  @media(max-width: 800px) {
    aside {
      display: none;
    }
  }

  @media(max-width: 325px) {
    .create-room {

    }
  }
`;