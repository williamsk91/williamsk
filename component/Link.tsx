import React from "react";
import NextLink, { LinkProps } from "next/link";
import { Color, colors } from "../styles/colors";
import styled from "styled-components";
import { typography } from "./Text";

interface Props
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    LinkProps {
  href: string;
  active?: boolean;
  color?: Color;
  size?: number;
}

export const Link = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  ...anchorProps
}: Props) => (
  <NextLink
    href={href}
    as={as}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
    passHref
    prefetch={prefetch}
  >
    <Anchor {...anchorProps}>{children}</Anchor>
  </NextLink>
);

export const Anchor = styled.a<{
  color?: Color;
  active?: boolean;
  size?: number;
}>`
  color: ${(p) => (p.active && p.color ? colors[p.color] : "#444444")};
  font-size: ${(p) => (p.size ? `${typography.main.size}px` : "inherit")};
  overflow-wrap: break-word;

  :hover {
    color: ${(p) => (p.color ? colors[p.color] : "initial")};
  }
`;
