import AvatarImg from '../../assets/avatar.jpg'

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineTwitter
} from 'react-icons/ai';

import {
  Container,
  Wrapper,
  AvatarContainer,
  Title
} from './styles';

export function Home() {
  return (
    <Container>
      <Wrapper>
        <AvatarContainer>
          <img src={AvatarImg} alt="" />
        </AvatarContainer>

        <h4>
          Paulo Braz
        </h4>

        <h5>
          Desenvolvedor Frontend <br />
          HTML | CSS | Javascript | React | React Native <br />
          Tucuruí-Pa
        </h5>     

        <a href="https://github.com/paulobr4z" target="_blank" rel="noreferrer">
          <AiFillGithub style={{ fontSize:40 }} />
          <Title>Github</Title>
        </a>
        <a href="https://www.linkedin.com/in/paulobr4z/" target="_blank" rel="noreferrer">
          <AiFillLinkedin style={{ fontSize:40 }} />
          <Title>Linkedin</Title>
        </a>
        <a href="mailto:paulobrazaraujo@gmail.com" target="_blank" rel="noreferrer">
          <AiOutlineMail style={{ fontSize:40 }} />
          <Title>E-mail</Title>
        </a>
        <a href="https://www.instagram.com/paulobr4z/" target="_blank" rel="noreferrer">
          <AiOutlineInstagram style={{ fontSize:40 }} />
          <Title>Instagram</Title>
        </a>
        <a href="https://twitter.com/paulobr4z/" target="_blank" rel="noreferrer">
          <AiOutlineTwitter style={{ fontSize:40 }} />
          <Title>Twitter</Title>
        </a>

      </Wrapper>


    </Container>
  );
};