import {
  About, HomeFullPage, Deck,
} from '../../components';

const Home = () => (
  <>
    <HomeFullPage />
    <About title="Theta Tau" quote text="The purpose of Theta Tau is to develop and maintain a high standard of professional interest among its members, and to unite them in a strong bond of fraternal fellowship." />
    <Deck
      title="pillars"
      dark
      cards={[{
        img: '/static/home/pillars/service.png',
        title: 'service',
        text: 'The surrounding communities are very important to us. We believe that giving back to the community not only benefits the communities, but our members as well! Working alongside with our brothers creates a strong bond and allows us to grow and get involved.',
      },
      {
        img: '/static/home/pillars/professionalism.png',
        title: 'professionalism',
        text: 'At Theta Tau, we assist all of our members develop the professional skills needed in life after graduation. From resume workshops to company info sessions, our chapter strives to provide the tools needed for any career path. With the variety of skills and mentorship available from our network of engineers, one has the support needed to achieve the high level of professionalism we see in our members.',
      }, {
        img: '/static/home/pillars/brotherhood.png',
        title: 'Family',
        text: 'Promoting friendship and collaboration between fraternity members, family is one of the three key pillars of Theta Tau. Actives of Theta Tau forge tightly-knit relationships through various social events, including hangouts, retreats, and friendly competition.',
      }]}
    />
  </>
);

export { Home };
