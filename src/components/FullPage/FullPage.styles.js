import styled from 'styled-components';

export const FullPageContainer = styled.div`
  height: 100vh;
  max-width: 100vw;
  color: white;
  font-family: 'Azeret Mono', monospace;
  background: ${(props) => props.$img};
  background-size: cover;
  background-position: center;
  text-transform: uppercase;
`;

export const FullPageTransparent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const FullPageTitle = styled.div`
  font-size: 5em;
  text-align: center;
  word-spacing: -0.3em;
  overflow-wrap: anywhere;
  @media (max-width: 480px) {
    line-height: 1.0em;
    margin-bottom: 0.5em;
  }
`;

export const FullPageSubtitle = styled.div`
  font-size: 3.5em;
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
