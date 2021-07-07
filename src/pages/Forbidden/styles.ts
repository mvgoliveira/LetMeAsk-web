import styled from 'styled-components';

export const Container = styled.div`  
  display: flex;
  gap: 60px;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  .imgContainer {
    flex: 1;
    display: flex;
    justify-content: flex-end;

    img {
      height: 250px;
    }
  }
  
  .textContainer {
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: flex-start;

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      

      h1 {
        font-family: "Poppins", sans-serif;
        font-size: 7rem;
      }

      span {
        font-size: 1.8rem;
        text-align: center;
      }
    }
  }
`;