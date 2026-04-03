import React from 'react';
import {
  FullPageContainer, FullPageTransparent, FullPageTitle, FullPageSubtitle, FullPageText,
} from './FullPage.styles';

const FullPage = (props) => (
  <FullPageContainer $img={props.img ? `url(${props.img})` : 'none'} color={props.color ? props.color : 'white'}>
    <FullPageTransparent>
      <FullPageTitle>
        {props.title}
      </FullPageTitle>
      <FullPageSubtitle>
        {props.subtitle}
      </FullPageSubtitle>
      <FullPageText>
        {props.subtext}
      </FullPageText>
    </FullPageTransparent>
  </FullPageContainer>
);

export { FullPage };
