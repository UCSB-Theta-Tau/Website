/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { FAQ } from '../../components';
import { Banner } from './Rush.styles';

const data = [
  {
    id: '1',
    question: 'What is Theta Tau?',
    answer: 'Theta Tau is a co-ed professional engineering fraternity rooted in three pillars of service, brotherhood and professionalism. Within Theta Tau we hold various social and professional events within engineering to foster community within UCSB’s engineering community, as well as prepare members for industry. ',
  },
  {
    id: '1',
    question: 'Why should I join Theta Tau?',
    answer: 'Theta Tau holds various social and professional events -- many of our members have gone on to work for a wide variety of companies including Google, Microsoft, and Meta (formerly Facebook). We offer a dearth of resources to help procure internships and employments -- members cite resume reviews and networking opportunities as key factors in professional success. In addition, we hold a number of social events as well ranging from weekly hangouts to study jams and even occasional meetups with other chapters of Theta Tau across California!',
  },
  {
    id: '1',
    question: 'What is rush week and when does it take place?',
    answer: 'The rush process occurs during the first week of fall and spring quarter and is how UCSB students apply for Theta Tau! Theta Tau rush week consists of a series of fun activities where you get to know engineering professionals and members of Theta Tau. Activities and info sessions are open to everyone on Mondays - Wednesdays 7pm. Afterwards, if you are deemed a good fit for the fraternity and the fraternity is a good fit for you, you will receive an invitation to our events on Thursday and Friday!',
  },
  {
    id: '1',
    question: 'Am I eligible to join?',
    answer: 'Rush is open to everyone to attend! If you are interested in joining, you 1) should have a 2.5 or higher GPA, 2) majoring in College of Engineering or interested in transferring to CoE, and 3) must not be in your last quarter of instruction.',
  },
];

const Rush = () => (
  <>
    <div style={{ height: '66px' }} />
    <Banner onClick={() => { window.open('https://www.facebook.com/events/3164883810446989/'); }} />
    <FAQ title="Frequently Asked Questions" data={data} />
  </>
);

export { Rush };
