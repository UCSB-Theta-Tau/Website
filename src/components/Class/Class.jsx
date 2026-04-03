import { ClassContainer, ClassName, ProfilesContainer } from './Class.styles';
import { Profile } from '..';

const Class = (props) => (
  <ClassContainer>
    <ClassName>
      {`${props.name} Class`}
    </ClassName>
    <ProfilesContainer>
      {
        props.actives.map((profile) => {
          if (profile.hide) return null;
          return (
            <Profile
              profile={profile}
              pledgeClass={props.name}
              setModal={props.setModal}
            />
          );
        })
    }
    </ProfilesContainer>
  </ClassContainer>
);

export { Class };
