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
        <a href="https://github.com/paulobr4z" target="_blank" rel="noreferrer">
          <AiFillGithub style={{ fontSize:40 }} />
        </a>
        <a href="https://www.linkedin.com/in/paulobr4z/" target="_blank" rel="noreferrer">
          <AiFillLinkedin style={{ fontSize:40 }} />
        </a>
        <a href="mailto:paulobrazaraujo@gmail.com" target="_blank" rel="noreferrer">
          <AiOutlineMail style={{ fontSize:40 }} />
        </a>
        <a href="https://wa.me/5594981147978" target="_blank" rel="noreferrer">
          <AiOutlineWhatsApp style={{ fontSize:40 }} />
        </a>
        <a href="https://www.instagram.com/paulobr4z/" target="_blank" rel="noreferrer">
          <AiOutlineInstagram style={{ fontSize:40 }} />
        </a>
      </div>
    </Container>
  );
};

export default Home;
