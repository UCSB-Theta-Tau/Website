import { FullPage, Deck } from '../../components';

const History = () => (
  <>
    <FullPage title="Our History" img="/static/history/history.jpg" />
    <Deck
      title="Origins"
      dark
      cards={[{
        img: '/static/history/coat.png',
        title: 'Theta Tau',
        text: 'Theta Tau was founded at the University of Minnesota in 1904 by Erich J. Schrader, Elwin L. Vinal, William M. Lewis, and Isaac B. Hanks. Since then, over 40,000 have been been initiated. With emphasis on quality and a strong fraternal bond, the Fraternity has chapters only at ABET accredited schools.',
      },
      {
        img: '/static/history/ucsb.png',
        title: 'UCSB',
        text: 'The idea of bringing Theta Tau to UCSB started in Winter of 2016, when Brian Yan, Former Vice Regent, reached out to the national Fraternity to get help with creating a colony at UCSB. After a year of hard work on the petition and gathering interest on campus, the founding class of 25 was initiated on February 5th, 2017. Theta Tau is the first and only co-ed engineering Fraternity at UCSB. Theta Tau at UCSB was initiated as a chapter June 1, 2019 as Sigma Epsilon Chapter. It is the 100th chapter of Theta Tau.',
      }]}
    />
  </>
);

export { History };
