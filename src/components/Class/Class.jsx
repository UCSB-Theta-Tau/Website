import React from 'react';
import { ClassContainer, ClassName, ProfilesContainer } from './Class.styles';
import { Profile } from '..';

const Class = (props) => (
  <ClassContainer>
    <ClassName>
      {`${props.name} Class`}
    </ClassName>
    <ProfilesContainer>
      {
        props.actives.map((profile) => (
          <Profile
            profile={profile}
            pledgeClass={props.name}
            setModal={props.setModal}
          />
        ))
    }
    </ProfilesContainer>
  </ClassContainer>
);

export { Class };
