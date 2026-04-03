import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  Modal, ModalInner, ModalCloseContainer, ModalClose, ModalSubtitle, ModalText, LinkedinButton,
  ModalProfile, ModalProfileImage, ModalProfileImageContainer,
} from './Modal.styles';

const ActiveModal = (props) => {
  const hideModal = () => {
    props.setShow(false);
  };

  return (
    <Modal>
      <ModalInner>
        <ModalCloseContainer>
          <ModalClose icon={faTimes} onClick={hideModal} />
        </ModalCloseContainer>
        <ModalProfile>
          <div style={{ width: '100%' }}>
            {props.year && (
              <>
                <ModalSubtitle>Year/Major</ModalSubtitle>
                <ModalText>{props.year}</ModalText>
              </>
            )}
            {props.pleedgeClass && (
              <>
                <ModalSubtitle>Pledge Class</ModalSubtitle>
                <ModalText>
                  {props.pledgeClass.charAt(0).toUpperCase() + props.pledgeClass.slice(1)}
                </ModalText>
              </>
            )}
            {props.hometown && (
              <>
                <ModalSubtitle>Hometown</ModalSubtitle>
                <ModalText>{props.hometown}</ModalText>
              </>
            )}
            {props.why && (
              <>
                <ModalSubtitle>Why I joined Theta Tau</ModalSubtitle>
                <ModalText>{props.why}</ModalText>
              </>
            )}
            {props.what && (
              <>
                <ModalSubtitle>What I enjoy about Theta Tau</ModalSubtitle>
                <ModalText>{props.what}</ModalText>
              </>
            )}
            {props.about && (
              <>
                <ModalSubtitle>About me</ModalSubtitle>
                <ModalText>{props.about}</ModalText>
              </>
            )}
          </div>
          <ModalProfileImageContainer>
            <ModalProfileImage src={`/static/profiles/${props.pledgeClass}/${props.img}`} alt={props.name} loading="lazy" />
            <ModalSubtitle>{props.name}</ModalSubtitle>
            <a target="_blank" href={props.linkedin} rel="noreferrer">
              <LinkedinButton icon={faLinkedin} />
            </a>
          </ModalProfileImageContainer>
        </ModalProfile>
      </ModalInner>
    </Modal>
  );
};

export { ActiveModal };
