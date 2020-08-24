import styled from "styled-components";
import { isMobile } from "./device";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  padding: 48px;
  margin: auto;

  max-width: 1240px;

  @media ${isMobile} {
    padding: 24px;
  }
`;
