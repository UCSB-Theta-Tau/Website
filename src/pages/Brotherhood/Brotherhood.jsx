import { FullPage, About, Gallery } from '../../components';

const Brotherhood = () => (
  <>
    <FullPage title="Family" img="/static/brotherhood/brotherhood.jpg" />
    <About title="Our Family" text="As members of Theta Tau, we strive to maintain a strong family through social activities and events, personal talks, or just simply hanging out and studying together." />
    <Gallery imageDir="/static/brotherhood/brothers" size={23} />
  </>
);

export { Brotherhood };
