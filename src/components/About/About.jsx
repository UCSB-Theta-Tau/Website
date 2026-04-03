import { Text } from '..';
import { AboutContainer, AboutTitle } from './About.styles';

const About = (props) => (
  <AboutContainer>
    <AboutTitle>
      {props.title}
    </AboutTitle>
    {props.text ? <Text quote={props.quote} text={props.text} /> : null}
  </AboutContainer>
);

export { About };
