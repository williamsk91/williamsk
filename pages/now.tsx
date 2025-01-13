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
        info="Last updated Jan 2024"
        color="sky"
      >
        <List
          items={[
            [
              <Text type="sub">
                I'm working at{" "}
                <Anchor
                  href="https://teachyourselfcs.com/"
                  color="sky"
                  active
                  target="_blank"
                >
                  Mercari
                </Anchor>{" "}
                as Frontend Tech Lead
              </Text>,
              <Text type="sub">
                I'm self studying{" "}
                <Anchor
                  href="https://teachyourselfcs.com/"
                  color="sky"
                  active
                  target="_blank"
                >
                  Computer Science.
                </Anchor>{" "}
                I'm almost done!
              </Text>,
              <Text type="sub">
                I'm working on{" "}
                <Anchor
                  href="https://dasu-web.vercel.app/"
                  color="sky"
                  active
                  target="_blank"
                >
                  Boulder Pass
                </Anchor>{" "}
                in my free time
              </Text>,
              <Text type="sub">
                I spend a lot of time{" "}
                <Anchor
                  href="https://www.instagram.com/wills_try_stuff/"
                  color="sky"
                  active
                  target="_blank"
                >
                  bouldering and travelling around Japan
                </Anchor>{" "}
              </Text>,
            ],
          ]}
        />
      </Section>
      <Spacer spacing={120} />
    </div>
  );
}
