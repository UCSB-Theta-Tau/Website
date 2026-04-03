import { useState, useEffect } from 'react';
import { FullPageContainer, FullPageTitle, FullPageText } from './HomeFullPage.styles';

const useTypewriter = (text, speed = 70, delay = 0, enabled = true) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!enabled) return undefined;

    let charIndex = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        charIndex += 1;
        setDisplayedText(text.slice(0, charIndex));
        if (charIndex >= text.length) {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, delay, enabled]);

  return [displayedText, isComplete];
};

const HomeFullPage = () => {
  const [title, titleDone] = useTypewriter('UCSB Theta Tau', 70, 500);
  const [subtitle] = useTypewriter(
    'The Largest and Oldest Co-Ed Engineering Fraternity',
    70,
    500,
    titleDone,
  );

  return (
    <FullPageContainer>
      <FullPageTitle>{title}</FullPageTitle>
      <FullPageText>{subtitle}</FullPageText>
    </FullPageContainer>
  );
};

export { HomeFullPage };
