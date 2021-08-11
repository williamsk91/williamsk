import styled from "styled-components";

import { Anchor } from "../component/Link";
import { List } from "../component/List";
import { Section } from "../component/Section";
import { Spacer } from "../component/Spacer";
import { Text } from "../component/Text";
import { colors } from "../styles/colors";

export default function Project() {
  return (
    <div>
      <Spacer spacing={120} />
      <Quote>
        <Text type="main">
          Some of these projects are saved in Github private repositories.
          Please share with me your github username or email and I will be more
          than happy to add you as a collaborator.
        </Text>
      </Quote>
      <Spacer spacing={60} />
      <Section
        title="Calendar data"
        subtitle="Weekly data visualization for Google Calendar"
        desc={
          <>
            Calendar data (
            <Anchor
              href="https://calendar-data.vercel.app"
              active
              color="green"
              target="_blank"
            >
              calendar-data.vercel.app
            </Anchor>
            ) is a weekly data visualization for Google Calendar. It interacts
            with Google Calendar API and setup using Firebase.
          </>
        }
        color="green"
      >
        <List
          items={[
            [
              <Text type="sub">React (Typescript)</Text>,
              <Text type="sub">Styled Components</Text>,
            ],
            [
              <Text type="sub">Firebase Authentication</Text>,
              <Text type="sub">Google Calendar API</Text>,
            ],
            [<Text type="sub">Vercel</Text>],
          ]}
        />
      </Section>
      <Spacer spacing={120} />
      <Section
        title="Overcast"
        subtitle="your personal calendar"
        desc={
          <>
            Overcast (
            <Anchor
              href="https://overcast.life/"
              active
              color="blue"
              target="_blank"
            >
              overcast.life
            </Anchor>
            ) is a calendar with a built in task list. Organise your schedules
            and tasks all in one place.
          </>
        }
        color="blue"
      >
        <List
          items={[
            [
              <Text type="sub">React (Typescript)</Text>,
              <Text type="sub">Styled Components</Text>,
              <Text type="sub">Apollo (GraphQL)</Text>,
              <Text type="sub">FullCalendar</Text>,
            ],
            [
              <Text type="sub">NodeJS (Typescript)</Text>,
              <Text type="sub">TypeGraphQL</Text>,
              <Text type="sub">PostgreSQL</Text>,
              <Text type="sub">Apollo Server</Text>,
              <Text type="sub">Express</Text>,
              <Text type="sub">OAuth + JWT</Text>,
            ],
            [
              <Text type="sub">Vercel</Text>,
              <Text type="sub">Heroku</Text>,
              <Text type="sub">Figma</Text>,
              <Text type="sub">Drift</Text>,
            ],
          ]}
        />
      </Section>
      <Spacer spacing={120} />
      <Section
        title="Kaminote"
        subtitle="an evolving organisation tool"
        desc={
          <>
            Kaminote (
            <Anchor
              href="https://kaminote.io/"
              active
              color="purple"
              target="_blank"
            >
              kaminote.io
            </Anchor>
            ) is an all in one organisation tool for your to-dos, tasks, and
            projects.
          </>
        }
        color="purple"
      >
        <List
          items={[
            [
              <Text type="sub">React (Typescript)</Text>,
              <Text type="sub">Styled Components</Text>,
              <Text type="sub">Apollo (GraphQL)</Text>,
              <Text type="sub">Prosemirror (WYSIWYG)</Text>,
            ],
            [
              <Text type="sub">NodeJS (Typescript)</Text>,
              <Text type="sub">PostgreSQL</Text>,
              <Text type="sub">Apollo Server</Text>,
              <Text type="sub">OAuth + JWT</Text>,
            ],
            [
              <Text type="sub">AWS S3</Text>,
              <Text type="sub">AWS ClouldFront</Text>,
              <Text type="sub">Heroku</Text>,
              <Text type="sub">Github Actions</Text>,
            ],
          ]}
        />
      </Section>
      <Spacer spacing={120} />
      <Section
        title="Small projects"
        desc="This is a collection of small projects that I have worked on."
        color="sky"
      >
        <List
          items={[
            [
              <Text type="sub">
                <Anchor
                  href="https://codepen.io/williamsk91/pen/KrBQXJ"
                  color="sky"
                  target="_blank"
                >
                  Calculator
                </Anchor>
              </Text>,
              <Text type="sub">
                <Anchor
                  href="https://codepen.io/williamsk91/pen/oQQEwr"
                  color="sky"
                  target="_blank"
                >
                  Pomodoro Timer
                </Anchor>
              </Text>,
              <Text type="sub">
                <Anchor
                  href="https://codepen.io/williamsk91/pen/vQrdye"
                  color="sky"
                  target="_blank"
                >
                  Markdown Editor
                </Anchor>
              </Text>,
              <Text type="sub">
                <Anchor
                  href="https://trello-clone.glitch.me/"
                  color="purple"
                  target="_blank"
                >
                  Kanban Board
                </Anchor>
              </Text>,
            ],
          ]}
        />
      </Section>
      <Spacer spacing={120} />
    </div>
  );
}

const Quote = styled.div`
  border-left: solid ${colors.green} 3px;
  padding-left: 12px;
`;
