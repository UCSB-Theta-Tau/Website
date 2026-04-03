import { useState } from 'react';
import { Class, ActiveModal } from '../../components';
import { AlumniContainer } from './Alumni.styles';
import classes from './alumni_list.json';

const Alumni = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [pledgeClass, setPledgeClass] = useState('');
  const [hometown, setHometown] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [img, setImg] = useState('');

  const setModal = (profile) => {
    setShow(true);
    setName(profile.name);
    setYear(profile.year);
    setPledgeClass(profile.pledgeClass);
    setHometown(profile.hometown);
    setLinkedin(profile.linkedin);
    setImg(profile.image);
  };

  return (
    <>
      {show ? (
        <ActiveModal
          setShow={setShow}
          name={name}
          year={year}
          pledgeClass={pledgeClass}
          hometown={hometown}
          linkedin={linkedin}
          img={img}
        />
      ) : null}
      <AlumniContainer>
        {classes.map((c) => (
          <Class
            name={c.class}
            actives={c.actives}
            setModal={setModal}
          />
        ))}
      </AlumniContainer>
    </>
  );
};

export { Alumni };
