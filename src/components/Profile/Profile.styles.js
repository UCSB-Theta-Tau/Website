import styled from 'styled-components';

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5vh;
`;

export const ProfilePicture = styled.div`
    width: 10vw;
    height: 10vw;
    background-size: cover;
    background-image: url(\"${process.env.PUBLIC_URL}/static/profiles/${(props) => `${props.pledgeClass}/${props.image}`}\");
    background-position: center;
    cursor: pointer;
    color: white;
    font-family: Raleway,sans-serif;
    border: 1px solid black;
    @media (max-width: 480px) {
        width: 60vw;
        height: 60vw;
    }
`;

export const ProfileName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.5em;
    font-size: 1em;
    text-align: center;
`;
