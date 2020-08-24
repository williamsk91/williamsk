import { Section, Hr } from "../component/Section";
import { Text, Colored, typography } from "../component/Text";
import { Spacer } from "../component/Spacer";
import styled from "styled-components";
import { List } from "../component/List";
import { ReactNode } from "react";
import { Color } from "../styles/colors";
import { isMobile } from "../component/device";

export default function About() {
  return (
    <div>
      <Spacer spacing={120} />
      <Section
        title="Frontend"
        id="frontend"
        desc="Frontend development is bread and butter. I love coding fast, responsive, and reactive web apps."
        color="red"
      >
        <SkillList>
          <Colored color="red">Typescript</Colored>,{" "}
          <Colored color="red">React</Colored>, Redux, Storybook, Apollo
          (GraphQL), Styled Components, NextJS, Testing-Library, Jest, HTML,
          CSS, and <Colored color="red">JS</Colored>
        </SkillList>
      </Section>
      <Spacer spacing={120} />
      <Section
        title="Backend"
        id="backend"
        desc={
          <>
            Experienced in making <Colored color="green">GraphQL</Colored> &{" "}
            <Colored color="green">RESTful</Colored> APIs with efficient
            database integrations.
          </>
        }
        color="green"
      >
        <SkillList>
          <Colored color="green">NodeJS</Colored>, Express, Apollo,{" "}
          <Colored color="green">Elixir</Colored>, Phoenix, Absinthe, Ecto,{" "}
          <Colored color="green">PostgreSQL</Colored>, DynamoDB, MongoDB, OAuth,
          JWT, and Firebase
        </SkillList>
      </Section>
      <Spacer spacing={120} />
      <Section
        title="Operation"
        id="operation"
        desc={
          <>
            Automatic <Colored color="blue">testing</Colored>,{" "}
            <Colored color="blue">deployment</Colored>, and{" "}
            <Colored color="blue">monitoring</Colored> for the best developer
            experience.
          </>
        }
        color="blue"
      >
        <SkillList>
          <Colored color="blue">AWS</Colored> S3, CloudFront, Lambda,
          CloudWatch, APIGateway, Route53,{" "}
          <Colored color="blue">Serverless Framework</Colored>,{" "}
          <Colored color="blue">Heroku</Colored>, Vercel, Netlify,{" "}
          <Colored color="blue">Github Actions</Colored>, Travis CI, Contentful,
          and <Colored color="blue">Sentry</Colored>
        </SkillList>
      </Section>
      <Spacer spacing={120} />
      <Section
        title="Other Programming Languages"
        desc="Each language bring its own uniqueness and I love learning them."
        color="purple"
      >
        <SkillList>
          <Colored color="purple">C</Colored>, Python, Rust, and Haskell
        </SkillList>
      </Section>
      <Spacer spacing={120} />
      <Section title="Design" desc="Mockups and prototypes" color="sky">
        <SkillList>
          <Colored color="sky">Figma</Colored> and Framer
        </SkillList>
      </Section>
      <Spacer spacing={120} />
      <Section
        id="languages"
        title="Languages"
        desc="The ones with ambiguous grammar"
        color="yellow"
      >
        <List
          items={[
            [
              <Text type="sub">🇺🇸 English - Fluent</Text>,
              <Text type="sub">🇯🇵 Japanese - Conversational</Text>,
              <Text type="sub">🇮🇩 Bahasa Indonesia - Fluent</Text>,
            ],
          ]}
        />
      </Section>
      <Spacer spacing={120} />
      <Section
        id="education"
        title="Education"
        desc="High achieving student in 4 different countries"
        color="red"
      >
        <List
          items={[
            [
              <Education
                desc="Kyoto University - Exchange (Informatics)"
                country="🇯🇵 Japan"
                achievements={[
                  <>
                    Achieved <Colored color="red">High Distinction</Colored> in
                    #2 ranked University in <Colored color="red">Japan</Colored>
                  </>,
                  <>
                    Obtained{" "}
                    <Colored color="red">the only exchange position</Colored> to
                    Kyoto University available from Melbourne University
                  </>,
                  <>
                    Improved Japanese language skills from N3 to{" "}
                    <Colored color="red">N2</Colored> within a year
                  </>,
                ]}
                color="red"
              />,
              <Education
                desc="Melbourne University - Bachelor of Science
                (Mechatronics Engineering)"
                country="🇦🇺 Australia"
                achievements={[
                  <>
                    Achieved <Colored color="green">High Distinction</Colored>{" "}
                    in #1 ranked University in{" "}
                    <Colored color="green">Australia</Colored>
                  </>,
                  <>
                    Awarded a <Colored color="green">scholarship</Colored> for{" "}
                    <Colored color="green">academic excellence</Colored>
                  </>,
                  <>Demonstrated leadership skills in various group projects</>,
                ]}
                color="green"
              />,
              <Education
                desc="Chua Chu Kang Secondary School - O'level"
                country="🇸🇬 Singapore"
                achievements={[
                  <>
                    Achieved <Colored color="purple">#1 place</Colored>{" "}
                    academically
                  </>,
                  <>
                    <Colored color="purple">Star student</Colored> award
                  </>,
                ]}
                color="purple"
              />,
              <Education
                desc="Manado Independent School - Middle School"
                country="🇮🇩 Indonesia"
                achievements={[
                  <>
                    Achieved <Colored color="sky">#1 place</Colored>{" "}
                    academically
                  </>,
                ]}
                color="sky"
              />,
              <Text type="sub"></Text>,
            ],
          ]}
        />
      </Section>
      <Spacer spacing={120} />
    </div>
  );
}

const SkillList = styled(Text).attrs({
  type: "sub",
})`
  max-width: 480px;
`;

interface EducationProps {
  desc: string;
  country: string;
  achievements: ReactNode[];
  color: Color;
}

const Education = ({ desc, country, achievements, color }: EducationProps) => (
  <div>
    <Text type="sub">{desc}</Text>
    <Text type="sub">
      <Colored color="sub">{country}</Colored>
    </Text>
    <Hr color={color} width={48} />
    <ul>
      {achievements.map((a, i) => (
        <Li key={i}>{a}</Li>
      ))}
    </ul>
    <Spacer spacing={24} />
  </div>
);

const Li = styled.li`
  margin: 12px 0;

  font-size: ${typography.sub.size + "px"};
  @media ${isMobile} {
    font-size: ${typography.sub.size - 4 + "px"};
  }
`;
