import { ProfileContainer, ProfileName, ProfilePicture } from './Profile.styles';

const Profile = (props) => {
  const changeModal = () => {
    const { profile } = props;
    profile.pledgeClass = props.pledgeClass;
    props.setModal(profile);
  };

  return (
    <ProfileContainer onClick={changeModal}>
      <ProfilePicture $pledgeClass={props.pledgeClass} $image={props.profile.image} />
      <ProfileName>{props.profile.name}</ProfileName>
    </ProfileContainer>
  );
};

export { Profile };
