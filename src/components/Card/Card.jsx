import React, { useState } from 'react';
import {
  CardContainer, CardImg, CardCard, CardTitle, CardText,
} from './Card.styles';

const Card = (props) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(true);
  };

  const handleRevert = () => {
    setFlipped(false);
  };

  return (
    <CardContainer isFlipped={flipped} flipDirection="horizontal">
      <CardCard onClick={handleFlip}>
        <CardImg src={props.img} alt={props.title} />
      </CardCard>
      <CardCard onClick={handleRevert}>
        <CardTitle>
          {props.title}
        </CardTitle>
        <CardText>
          {props.text}
        </CardText>
      </CardCard>
    </CardContainer>
  );
};

export { Card };
