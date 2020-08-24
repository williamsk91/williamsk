import { Spacer } from "../component/Spacer";
import { Text } from "../component/Text";
import { Link } from "../component/Link";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Spacer spacing={48} />
      <Text type="disp">Hi! I'm Williams Kwan.</Text>
      <Spacer spacing={48} />
      <Text type="title">
        I'm a{" "}
        <Link href="/about#frontend" active color="red">
          frontend
        </Link>{" "}
        engineer with{" "}
        <Link href="/about#backend" active color="green">
          backend
        </Link>
        , and{" "}
        <Link href="/about#operation" active color="blue">
          operation
        </Link>{" "}
        experience.
      </Text>
      <Spacer spacing={18} />
      <Text type="title">
        I love to{" "}
        <Link href="/project" active color="purple">
          code
        </Link>{" "}
        and{" "}
        <Link href="/about#education" active color="sky">
          study
        </Link>{" "}
        new things.
      </Text>
      <Spacer spacing={240} />
    </Container>
  );
}

const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
