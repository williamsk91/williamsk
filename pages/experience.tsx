import { Section } from "../component/Section";
import { Text, Colored } from "../component/Text";
import { List } from "../component/List";
import { Spacer } from "../component/Spacer";

export default function Experience() {
  return (
    <div>
      <Spacer spacing={120} />
      <Section
        title="Cadmus"
        subtitle="Web Developer"
        info="Melbourne, Australia - Mar 19 - Present"
        desc="Online assessment platform for universities across Australia to create and deliver incredible learning experiences to thousands of students."
        color="red"
      >
        <List
          items={[
            [
              <Text type="sub">
                Write maintainable and high performing Single Page App using{" "}
                <Colored color="red">React</Colored> and{" "}
                <Colored color="red">Redux</Colored> in{" "}
                <Colored color="red">Typescript</Colored>
              </Text>,
              <Text type="sub">
                Facilitates communication between designer and Backend
                developers using <Colored color="red">Elixir</Colored> and{" "}
                <Colored color="red">Phoenix</Colored>
              </Text>,
              <Text type="sub">
                Manager of our design system made with{" "}
                <Colored color="red">Styled Components</Colored> and documented
                using <Colored color="red">Storybook</Colored>
              </Text>,
              <Text type="sub">
                Manager of marketing website build with{" "}
                <Colored color="red">NextJS</Colored> and{" "}
                <Colored color="red">Contentful</Colored> CMS
              </Text>,
              <Text type="sub">
                Write tests to automatically catch errors using{" "}
                <Colored color="red">Testing-Library</Colored> and{" "}
                <Colored color="red">Jest</Colored>
              </Text>,
            ],
          ]}
        />
      </Section>
      <Spacer spacing={120} />
      <Section
        title="Rome2Rio"
        subtitle="Data Researcher"
        info="Remote - Dec 17 - Mar 19"
        desc="Door-to-door travel information and booking engine, helping users to get to and from any location in the world."
        color="green"
      >
        <List
          items={[
            [
              <Text type="sub">
                Research route information in{" "}
                <Colored color="green">Japanese</Colored> and translate data to{" "}
                <Colored color="green">English</Colored>
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
        info="Kyoto, Japan - Oct 17 - Jan 18"
        desc="Worked as a kitchen hand in a popular ryokan (traditional Japanese inn) in Kyoto during exchange."
        color="blue"
      />
      <Spacer spacing={120} />
      <Section
        title="Various Companies"
        subtitle="Virtual Assistant"
        info="Remote - Jan 16 - Mar 19"
        desc="Worked with various companies remotely on mainly data-entry tasks."
        color="purple"
      />
      <Spacer spacing={120} />
    </div>
  );
}
