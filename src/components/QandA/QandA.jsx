import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import useResizeAware from 'react-resize-aware';
import { animated, useSpring } from 'react-spring';
import { StyledFaq } from './QandA.styles';

const QandA = (props) => {
  const [isOpen, toggleOpen] = useState(false);
  const [resizeListener, { height }] = useResizeAware();
  return (
    <StyledFaq onClick={() => toggleOpen(!isOpen)}>
      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} onClick={toggleOpen} style={{ fontSize: '1.5em', marginRight: '0.5em' }} />
        <Question question={props.question} id={props.id} />
      </div>
      <Answer
        answer={props.answer}
        id={props.id}
        height={height}
        open={isOpen}
        resize={resizeListener}
      />
    </StyledFaq>
  );
};

const Question = (props) => (
  <>
    <div className="FAQ__question" style={{ fontSize: '2em' }}>{props.question}</div>
  </>
);

const Answer = (props) => {
  const animProps = useSpring({
    height: props.open ? props.height : 0,
    opacity: props.open ? 1 : 0,
    marginBottom: '2em',
  });
  return (
    <>
      <animated.div className="FAQ_answer" style={animProps}>
        <span style={{ position: 'relative', padding: '2.5em', fontSize: '1.5em' }}>
          {props.resize}
          {props.answer}
        </span>
      </animated.div>
    </>
  );
};

export { QandA };
