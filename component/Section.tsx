import React, { FC, ReactNode, HTMLProps, AllHTMLAttributes } from "react";
import { Color, colors } from "../styles/colors";
import { Text, Colored } from "./Text";
import { Spacer } from "./Spacer";
import styled from "styled-components";

interface Props extends HTMLProps<HTMLDivElement> {
  title: string;
  subtitle?: string;
  info?: string;
  desc?: ReactNode;
  color: Color;
}

export const Section: FC<Props> = ({
  title,
  subtitle,
  info,
  desc,
  color,
  children,
  ...divProps
}) => (
  <div {...divProps}>
    <Text type="title">
      <Colored color={color}>{title}</Colored>
      {subtitle ? ` - ${subtitle}` : ""}
    </Text>
    {info && (
      <>
        <Spacer spacing={6} />
        <Text type="sub">
          <Colored color="sub">{info}</Colored>
        </Text>
      </>
    )}
    {desc && (
      <>
        <Spacer spacing={18} />
        <Text type="main">{desc}</Text>
      </>
    )}
    <Spacer spacing={24} />
    <Hr color={color} />
    <Spacer spacing={24} />
    {children}
  </div>
);

export const Hr = styled.hr<{ color: Color; width?: number }>`
  width: ${(p) => (p.width ? `${p.width}px` : "120px")};
  margin-left: 0;

  border-color: ${(p) => colors[p.color]};
`;
