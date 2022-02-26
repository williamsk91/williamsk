import { Anchor } from "../component/Link";
import { List } from "../component/List";
import { Section } from "../component/Section";
import { Spacer } from "../component/Spacer";
import { Text } from "../component/Text";

export default function Work() {
  return (
    <div>
      <Spacer spacing={120} />

      <Section
        title="Now"
        subtitle="What I'm focused on right now"
        info="Last updated Feb 2022"
        color="sky"
      >
        <List
          items={[
            [
              <Text type="sub">
                Self Study{" "}
                <Anchor
                  href="https://teachyourselfcs.com/"
                  color="sky"
                  active
                  target="_blank"
                >
                  Computer Science
                </Anchor>
              </Text>,
              <Text type="sub">
                Work on{" "}
                <Anchor
                  href="https://dasu-web.vercel.app/"
                  color="sky"
                  active
                  target="_blank"
                >
                  Dasu
                </Anchor>
              </Text>,
              <Text type="sub">Boulder</Text>,
            ],
          ]}
        />
      </Section>
      <Spacer spacing={120} />
    </div>
  );
}
