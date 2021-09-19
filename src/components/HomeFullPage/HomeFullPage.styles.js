import styled from 'styled-components';
import Typist from 'react-typist';

export const FullPageContainer = styled(Typist)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
  font-family: 'Azeret Mono', monospace;
  background: url(${process.env.PUBLIC_URL}/static/home/home.png);
  background-color: #4c0000;
  background-size: 160vw;
  @media (max-width: 480px) {
    background-size: 100vw;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const FullPageTitle = styled.div`
  font-size: 5em;
  text-align: center;
  word-spacing: -0.3em;
  @media (max-width: 480px) {
      line-height: 1.0em;
      margin-bottom: 0.5em;
  }
`;

export const FullPageText = styled.div`
  font-size: 2em;
  margin-bottom: 2em;
  text-align: center;
  max-width: 40%;
  @media (max-width: 480px) {
      font-size: 2em;
      max-width: 100vw;
  }
`;
