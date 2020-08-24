import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  items: ReactNode[][];
}

export const List = ({ items }: Props) => (
  <Container col={items.length}>
    {items.map((c, cKey) => (
      <Column key={cKey}>
        {c.map((i, iKey) => (
          <React.Fragment key={iKey}>{i}</React.Fragment>
        ))}
      </Column>
    ))}
  </Container>
);

const Container = styled.div<{ col: number }>`
  display: grid;
  grid-template-columns: ${(p) => `repeat(${p.col}, 1fr)`};
  grid-gap: 24px;
`;

const Column = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 12px;
`;
