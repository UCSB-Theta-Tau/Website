import { DeckContainer, DeckTitle, CardContainer } from './Deck.styles';
import { Card } from '..';

const Deck = (props) => (
  <DeckContainer dark={props.dark}>
    <DeckTitle dark={props.dark}>{props.title}</DeckTitle>
    <CardContainer>
      {props.cards.map((card) => (
        <Card img={card.img} title={card.title} text={card.text} />
      ))}
    </CardContainer>
  </DeckContainer>
);

export { Deck };
