import styled from "styled-components";

export const isMobile = `only screen and (max-width: 630px)`;

export const MobileOnly = styled.div`
  display: none;
  @media ${isMobile} {
    display: initial;
  }
`;

export const DesktopOnly = styled.div`
  display: initial;
  @media ${isMobile} {
    display: none;
  }
`;
