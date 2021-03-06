import React from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
} from 'react-icons/ai';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Contato</h1>
      <div>
        <a href="https://github.com/paulobr4z" target="_blank">
          <AiFillGithub style={{ fontSize:40 }} />
        </a>
        <a href="https://www.linkedin.com/in/paulobr4z/" target="_blank">
          <AiFillLinkedin style={{ fontSize:40 }} />
        </a>
        <a href="mailto:paulobrazaraujo@gmail.com" target="_blank">
          <AiOutlineMail style={{ fontSize:40 }} />
        </a>
        <a href="https://wa.me/5594981147978" target="_blank">
          <AiOutlineWhatsApp style={{ fontSize:40 }} />
        </a>
        <a href="https://www.instagram.com/paulobr4z/" target="_blank">
          <AiOutlineInstagram style={{ fontSize:40 }} />
        </a>
      </div>
    </Container>
  );
};

export default Home;
