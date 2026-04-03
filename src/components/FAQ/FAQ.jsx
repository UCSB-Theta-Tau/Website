/* eslint-disable react/jsx-props-no-spreading */
import { QandA } from '../QandA';
import { FaqTitle, StyledFaqsList } from './FAQ.styles';

const FAQ = (props) => (
  <StyledFaqsList>
    <FaqTitle>{props.title}</FaqTitle>
    {props.data.map((row) => (
      <QandA {...row} />
    ))}
  </StyledFaqsList>
);

export { FAQ };
