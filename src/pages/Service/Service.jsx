import { FullPage, About, Gallery } from '../../components';

const Service = () => (
  <>
    <FullPage title="Service" img="/static/service/service.jpg" />
    <About title="Community Service" text="As members of Theta Tau, we strive to give back to the community by hosting science fairs at local elementary schools, putting on workshops for UCSB students, or even something as simple as a beach clean up." />
    <Gallery imageDir="/static/service/service" size={3} />
  </>
);

export { Service };
