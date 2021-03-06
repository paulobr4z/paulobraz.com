import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #202124;
  color: white;

  h1 {
    margin-bottom: 35px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 320px;
    padding: 14px;
    /* border: 1px solid white; */

    a {
      color: white;
    }

    svg {
      cursor: pointer;
    }

    svg:hover {
      filter: brightness(50%);
    }
  }




`;
