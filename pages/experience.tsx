import { List } from "../component/List";
import { Section } from "../component/Section";
import { Spacer } from "../component/Spacer";
import { Colored, Text } from "../component/Text";

export default function Experience() {
  return (
    <div>
      <Spacer spacing={120} />

      <Section
        title="Linkers"
        subtitle="Senior Web Developer"
        info="Tokyo (Remote), Japan - Nov 2020 - Present"
        desc="Marketplace for Japanese banks and businesses (FinTech)"
        color="red"
      >
        <List
          items={[
            [
              <Text type="sub">
                Architect the Frontend of a Server Side Rendered (SSR) app with{" "}
                <Colored color="red">Vue</Colored>
                <List
                  items={[
                    [
                      <Text type="sub">
                        Improved DX and reduced errors by introducing{" "}
                        <Colored color="red">Typescript</Colored>
                      </Text>,
                      <Text type="sub">
                        Improved UI & UX by developing design system and
                        component library using{" "}
                        <Colored color="red">SCSS</Colored> and{" "}
                        <Colored color="red">Storybook</Colored>
                      </Text>,
                      <Text type="sub">
                        Speed up development by improving{" "}
                        <Colored color="red">Webpack</Colored> bundler
                      </Text>,
                    ],
                  ]}
                />
              </Text>,
              <Text type="sub">
                Lead Frontend team
                <List
                  items={[
                    [
                      <Text type="sub">
                        Plan and deliver projects by working with business team
                        to create and assign tasks in{" "}
                        <Colored color="red">Japanese</Colored>
                      </Text>,
                      <Text type="sub">
                        Grow Frontend team by{" "}
                        <Colored color="red">interviewing</Colored> and{" "}
                        <Colored color="red">onboarding</Colored> new members
                      </Text>,
                      <Text type="sub">
                        Facilitates learning by{" "}
                        <Colored color="red">educating</Colored> juniors and
                        other members
                      </Text>,
                    ],
                  ]}
                />
              </Text>,
              <Text type="sub">
                Design APIs with Backend Engineer using{" "}
                <Colored color="red">Ruby on Rails</Colored>
              </Text>,
              <Text type="sub">
                Develop responsive UI for mobile, tablet, and PC users with
                designer
              </Text>,
            ],
          ]}
        />
      </Section>
      <Spacer spacing={120} />

      <Section
        title="Cadmus"
        subtitle="Web Developer"
        info="Melbourne, Australia - Mar 2019 - Oct 2020"
        desc="Online assessment platform for universities (EdTech)"
        color="green"
      >
        <List
          items={[
            [
              <Text type="sub">
                Write maintainable and high performing Single Page App (SPA)
                using <Colored color="green">React</Colored> and{" "}
                <Colored color="green">Redux</Colored> in{" "}
                <Colored color="green">Typescript</Colored>
              </Text>,
              <Text type="sub">
                Facilitates communication between designer and Backend
                developers using <Colored color="green">Elixir</Colored> and{" "}
                <Colored color="green">Phoenix</Colored>
              </Text>,
              <Text type="sub">
                Manager of our design system made with{" "}
                <Colored color="green">Styled Components</Colored> and
                documented using <Colored color="green">Storybook</Colored>
              </Text>,
              <Text type="sub">
                Manager of marketing website build with{" "}
                <Colored color="green">NextJS</Colored> and{" "}
                <Colored color="green">Contentful</Colored> CMS
              </Text>,
              <Text type="sub">
                Write tests to automatically catch errors using{" "}
                <Colored color="green">Testing-Library</Colored> and{" "}
                <Colored color="green">Jest</Colored>
              </Text>,
            ],
          ]}
        />
      </Section>

      <Spacer spacing={120} />

      <Section
        title="Rome2Rio"
        subtitle="Data Researcher"
        info="Remote - Dec 2017 - Mar 2019"
        desc="Door-to-door travel information and booking engine, helping users to get to and from any location in the world."
        color="blue"
      >
        <List
          items={[
            [
              <Text type="sub">
                Research route information in{" "}
                <Colored color="blue">Japanese</Colored> and translate data to{" "}
                <Colored color="blue">English</Colored>
              </Text>,
              <Text type="sub">
                Input, maintain and retrieve data using computer systems
              </Text>,
              <Text type="sub">
                Ensure information is collated and stored in an accurate and
                efficient manner
              </Text>,
            ],
          ]}
        />
      </Section>

      <Spacer spacing={120} />

      <Section
        title="八千代 Yachiyo"
        subtitle="Kitchen Hand"
        info="Kyoto, Japan - Oct 2017 - Jan 2018"
        desc="Worked as a kitchen hand in a popular ryokan (traditional Japanese inn) in Kyoto during exchange."
        color="purple"
      />

      <Spacer spacing={120} />

      <Section
        title="Various Companies"
        subtitle="Virtual Assistant"
        info="Remote - Jan 2016 - Mar 2019"
        desc="Worked with various companies remotely on mainly data-entry tasks."
        color="sky"
      />

      <Spacer spacing={120} />
    </div>
  );
}
