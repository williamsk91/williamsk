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
          I enjoy making projects during my free time. Projects are public and
          I've attached screenshots in GitHub README.
        </Text>
      </Quote>

      <Spacer spacing={60} />

      <Section
        title="Dasu"
        subtitle="Publish your book online"
        desc={
          <>
            All in one solution to self-publish your book online (
            <Anchor
              href="https://dasu-web.vercel.app/"
              active
              color="green"
              target="_blank"
            >
              Website
            </Anchor>
            ) (
            <Anchor
              href="https://github.com/williamsk91/dasu"
              active
              color="green"
              target="_blank"
            >
              GitHub
            </Anchor>
            )
          </>
        }
        color="green"
      >
        <List
          items={[
            [
              <Text type="sub">Typescript</Text>,
              <Text type="sub">Docusaurus 2</Text>,
              <Text type="sub">Remark & Rehype</Text>,
            ],
            [<Text type="sub">Pandoc</Text>, <Text type="sub">Lua</Text>],
            [<Text type="sub">Vercel</Text>],
          ]}
        />
      </Section>

      <Spacer spacing={120} />
      <Section
        title="Poopipado"
        subtitle="Beautiful poop tracker mobile app"
        desc={
          <>
            Mobile application for tracking your poops (
            <Anchor
              href="https://github.com/williamsk91/poopypado"
              active
              color="blue"
              target="_blank"
            >
              GitHub
            </Anchor>
            )
          </>
        }
        color="blue"
      >
        <List
          items={[
            [<Text type="sub">React-Native (Typescript)</Text>],
            [<Text type="sub">SQLite</Text>],
            [<Text type="sub">Expo</Text>],
          ]}
        />
      </Section>

      <Spacer spacing={120} />
      <Section
        title="Calendar data"
        desc={
          <>
            Weekly data visualization for Google Calendar user. It interacts
            with Google Calendar API and setup using Firebase (
            <Anchor
              href="https://calendar-data.vercel.app"
              active
              color="purple"
              target="_blank"
            >
              Website
            </Anchor>
            ) (
            <Anchor
              href="https://github.com/williamsk91/calendar-data"
              active
              color="purple"
              target="_blank"
            >
              GitHub
            </Anchor>
            )
          </>
        }
        color="purple"
      >
        <List
          items={[
            [
              <Text type="sub">React (Typescript)</Text>,
              <Text type="sub">NextJS</Text>,
            ],
            [
              <Text type="sub">Firebase Authentication</Text>,
              <Text type="sub">Google Calendar API</Text>,
            ],
            [<Text type="sub">Vercel</Text>, <Text type="sub">Firebase</Text>],
          ]}
        />
      </Section>

      <Spacer spacing={120} />

      <Section
        title="Overcast"
        subtitle="Your personal calendar"
        desc={
          <>
            Overcast is a calendar with a built in task list. Organize your
            schedules and tasks all in one place (
            <Anchor
              href="https://github.com/williamsk91/clock"
              active
              color="sky"
              target="_blank"
            >
              GitHub
            </Anchor>
            )
          </>
        }
        color="sky"
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
              <Text type="sub">Express (Typescript)</Text>,
              <Text type="sub">PostgreSQL</Text>,
              <Text type="sub">Apollo Server (GraphQL)</Text>,
              <Text type="sub">OAuth + JWT</Text>,
            ],
            [
              <Text type="sub">Vercel</Text>,
              <Text type="sub">Heroku</Text>,
              <Text type="sub">Figma</Text>,
            ],
          ]}
        />
      </Section>

      <Spacer spacing={120} />

      <Section
        title="Kaminote"
        subtitle="An evolving organisation tool"
        desc={
          <>
            KamiNote is an all in one organization tool for your to-dos, tasks,
            and projects (
            <Anchor
              href="https://github.com/williamsk91/KamiNote"
              active
              color="yellow"
              target="_blank"
            >
              GitHub
            </Anchor>
            )
          </>
        }
        color="yellow"
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
              <Text type="sub">Express (Typescript)</Text>,
              <Text type="sub">PostgreSQL</Text>,
              <Text type="sub">Apollo Server (GraphQL)</Text>,
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
        title="Mini projects"
        desc="A collection of smaller projects"
        color="red"
      >
        <List
          items={[
            [
              <Text type="sub">
                <Anchor
                  href="https://codepen.io/williamsk91/pen/KrBQXJ"
                  color="red"
                  target="_blank"
                >
                  Calculator
                </Anchor>
              </Text>,
              <Text type="sub">
                <Anchor
                  href="https://codepen.io/williamsk91/pen/oQQEwr"
                  color="red"
                  target="_blank"
                >
                  Pomodoro Timer
                </Anchor>
              </Text>,
              <Text type="sub">
                <Anchor
                  href="https://codepen.io/williamsk91/pen/vQrdye"
                  color="red"
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
