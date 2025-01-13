import { List } from "../component/List";
import { Section } from "../component/Section";
import { Spacer } from "../component/Spacer";
import { Colored, Text } from "../component/Text";

export default function Experience() {
  return (
    <div>
      <Spacer spacing={120} />

      <Section
        title="Mercari"
        subtitle="Senior Software Engineer"
        info="Tokyo, Japan - Aug 2022 - Present"
        desc="Largest C2C Marketplace in Japan"
        color="red"
      >
        <List
          items={[
            [
              <Text type="sub">
                Frontend lead for releasing Mercari{" "}
                <Colored color="red">globally</Colored>
                <List
                  items={[
                    [
                      <Text type="sub">
                        Architect projects in CrossBorder company as{" "}
                        <Colored color="red">tech lead</Colored>
                      </Text>,
                      <Text type="sub">
                        Review company wide initiatives and projects
                      </Text>,
                      <Text type="sub">
                        Develop critical features using{" "}
                        <Colored color="red">React</Colored> and{" "}
                        <Colored color="red">Go</Colored>
                      </Text>,
                    ],
                  ]}
                />
              </Text>,
              <Text type="sub">
                Frontend tech lead
                <List
                  items={[
                    [
                      <Text type="sub">
                        Hire, onboard, and educate new and existing engineers
                      </Text>,
                      <Text type="sub">
                        Improve Mercari web through initiatives such as{" "}
                        <Colored color="red">i18n</Colored> and{" "}
                        <Colored color="red">daily releases</Colored>
                      </Text>,
                    ],
                  ]}
                />
              </Text>,
            ],
          ]}
        />
      </Section>
      <Spacer spacing={120} />

      <Section
        title="Linkers"
        subtitle="Senior Web Developer"
        info="Tokyo (Remote), Japan - Nov 2020 - July 2022"
        desc="Marketplace for Japanese banks and businesses (FinTech)"
        color="green"
      >
        <List
          items={[
            [
              <Text type="sub">
                Architect the Frontend of a Server Side Rendered (SSR) app with{" "}
                <Colored color="green">Vue</Colored>
                <List
                  items={[
                    [
                      <Text type="sub">
                        Improved DX and reduced errors by introducing{" "}
                        <Colored color="green">Typescript</Colored>
                      </Text>,
                      <Text type="sub">
                        Improved UI & UX by developing design system and
                        component library using{" "}
                        <Colored color="green">SCSS</Colored> and{" "}
                        <Colored color="green">Storybook</Colored>
                      </Text>,
                      <Text type="sub">
                        Speed up development by improving{" "}
                        <Colored color="green">Webpack</Colored> bundler
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
                        <Colored color="green">Japanese</Colored>
                      </Text>,
                      <Text type="sub">
                        Grow Frontend team by{" "}
                        <Colored color="green">interviewing</Colored> and{" "}
                        <Colored color="green">onboarding</Colored> new members
                      </Text>,
                      <Text type="sub">
                        Facilitates learning by{" "}
                        <Colored color="green">educating</Colored> juniors and
                        other members
                      </Text>,
                    ],
                  ]}
                />
              </Text>,
              <Text type="sub">
                Design APIs with Backend Engineer using{" "}
                <Colored color="green">Ruby on Rails</Colored>
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
        color="blue"
      >
        <List
          items={[
            [
              <Text type="sub">
                Write maintainable and high performing Single Page App (SPA)
                using <Colored color="blue">React</Colored> and{" "}
                <Colored color="blue">Redux</Colored> in{" "}
                <Colored color="blue">Typescript</Colored>
              </Text>,
              <Text type="sub">
                Facilitates communication between designer and Backend
                developers using <Colored color="blue">Elixir</Colored> and{" "}
                <Colored color="blue">Phoenix</Colored>
              </Text>,
              <Text type="sub">
                Manager of our design system made with{" "}
                <Colored color="blue">Styled Components</Colored> and documented
                using <Colored color="blue">Storybook</Colored>
              </Text>,
              <Text type="sub">
                Manager of marketing website build with{" "}
                <Colored color="blue">NextJS</Colored> and{" "}
                <Colored color="blue">Contentful</Colored> CMS
              </Text>,
              <Text type="sub">
                Write tests to automatically catch errors using{" "}
                <Colored color="blue">Testing-Library</Colored> and{" "}
                <Colored color="blue">Jest</Colored>
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
        color="sky"
      >
        <List
          items={[
            [
              <Text type="sub">
                Research route information in{" "}
                <Colored color="sky">Japanese</Colored> and translate data to{" "}
                <Colored color="sky">English</Colored>
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
        title="Various Companies"
        subtitle="Virtual Assistant"
        info="Remote - Jan 2016 - Mar 2019"
        desc="Worked with various companies remotely on mainly data-entry tasks."
        color="purple"
      />

      <Spacer spacing={120} />
    </div>
  );
}
