import styled from "styled-components";
import { Color, colors } from "../styles/colors";
import { isMobile } from "./device";

interface Props {
  /** defaults to `main` */
  type?: Typo;
}

export const Text = styled.p.attrs<Props>((p) => {
  as: typography[p.type ?? "main"].el;
})<Props>`
  font-size: ${(p) => typography[p.type ?? "main"].size + "px"};
  line-height: 1.6em;

  margin: 0;
  padding: 0;

  @media ${isMobile} {
    font-size: ${(p) => typography[p.type ?? "main"].size - 4 + "px"};
  }
`;

export const Colored = styled.span<{ color: Color }>`
  color: ${(p) => colors[p.color]};
`;

// ------------------------- Typography -------------------------
export const typography = {
  disp: {
    size: 60,
    el: "h1",
  },

  title: {
    size: 36,
    el: "h1",
  },

  main: {
    size: 26,
    el: "p",
  },

  sub: {
    size: 20,
    el: "p",
  },
};

type Typo = keyof typeof typography;
