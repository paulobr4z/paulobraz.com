import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: white;
  background: #155799;
  background: -webkit-linear-gradient(to right, #155799, #0082c8, #0082c8, #155799);
  background: linear-gradient(to right, #155799, #0082c8, #0082c8, #155799);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  max-width: 560px; 
  padding: 20px;

  h4 {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  h5 {
    margin-bottom: 40px;
  }

  a {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 50px;
    border: 1px solid white;
    margin: 16px 0px;
    padding: 8px 8px;
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      background-color: white;
      color: #292E49;
      transition: all .3s linear;
    }
  }
`;

export const AvatarContainer = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  border: 3px solid white;
  margin-top: 40px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-decoration: none;
`;