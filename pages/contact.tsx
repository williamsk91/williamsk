import { Spacer } from "../component/Spacer";
import { Section } from "../component/Section";
import { Anchor } from "../component/Link";
import { Text } from "../component/Text";

export default function Contact() {
  return (
    <div>
      <Spacer spacing={120} />
      <Section title="Email" color="purple">
        <Text type="main">
          <Anchor href="mailto:williams.work.job@gmail.com" color="purple">
            williams.work.job@gmail.com
          </Anchor>
        </Text>
      </Section>
      <Spacer spacing={120} />
      <Section title="Github" color="sky">
        <Text type="main">
          <Anchor
            href="https://github.com/williamsk91"
            color="sky"
            target="_blank"
          >
            github.com/williamsk91
          </Anchor>
        </Text>
      </Section>
      <Spacer spacing={120} />
      <Section title="LinkedIn" color="yellow">
        <Text type="main">
          <Anchor
            href="https://www.linkedin.com/in/williams-kwan-3a984414a"
            color="yellow"
            target="_blank"
          >
            linkedin.com/in/williams-kwan-3a984414a
          </Anchor>
        </Text>
      </Section>
      <Spacer spacing={120} />
      <Section title="Resume" color="red">
        <Text type="main">
          <Anchor href="resume.pdf" color="red" download>
            Click to download
          </Anchor>
        </Text>
      </Section>
      <Spacer spacing={120} />
    </div>
  );
}
