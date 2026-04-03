import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { TextContainer, QuoteSymbol } from './Text.styles';

const Text = (props) => (
  <TextContainer>
    {props.quote ? <QuoteSymbol icon={faQuoteLeft} /> : null}
    {props.text}
  </TextContainer>
);

export { Text };
