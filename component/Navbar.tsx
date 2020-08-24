import React, { useState } from "react";
import styled from "styled-components";
import { Text, typography } from "./Text";
import { useRouter } from "next/router";
import { colors } from "../styles/colors";
import { Link } from "./Link";
import { DesktopOnly, MobileOnly } from "./device";
import { Popover, Button } from "antd";
import { MenuOutlined, CaretDownOutlined } from "@ant-design/icons";
import NextLink from "next/link";
import Head from "next/head";

interface Props {}

export const Navbar = (props: Props) => {
  const { pathname } = useRouter();

  const [aboutIsOpen, setAboutIsOpen] = useState(false);
  const [mobileAboutIsOpen, setMobileAboutIsOpen] = useState(false);

  let text: string = "codes";
  switch (pathname) {
    case "/experience":
      text = "works at Cadmus";
      break;
    case "/project":
      text = "codes for fun";
      break;
    case "/about":
      text = "loves learning";
      break;
    case "/contact":
      text = "is here to help";
      break;
  }
  return (
    <>
      <Head>
        <title>WK {text}</title>
      </Head>
      <Container>
        <NextLink href="/">
          <Logo>WK</Logo>
        </NextLink>
        <Text>{text}</Text>
        <DesktopOnly>
          <DesktopLinkContainer>
            <Link
              href="/experience"
              active={pathname === "/experience"}
              color="red"
              size={typography.main.size}
            >
              Experience
            </Link>
            <Link
              href="/project"
              active={pathname === "/project"}
              color="green"
              size={typography.main.size}
            >
              Project
            </Link>
            <AboutLinkContainer>
              <Link
                href="/about"
                active={pathname === "/about"}
                color="blue"
                size={typography.main.size}
              >
                About
              </Link>
              <Popover
                trigger="click"
                visible={aboutIsOpen}
                onVisibleChange={() => setAboutIsOpen((o) => !o)}
                content={
                  <VerticalLinks>
                    <Link
                      href="/about#frontend"
                      onClick={() => setAboutIsOpen(false)}
                      size={typography.main.size}
                    >
                      Skills
                    </Link>
                    <Link
                      href="/about#languages"
                      onClick={() => setAboutIsOpen(false)}
                      size={typography.main.size}
                    >
                      Languages
                    </Link>
                    <Link
                      href="/about#education"
                      onClick={() => setAboutIsOpen(false)}
                      size={typography.main.size}
                    >
                      Education
                    </Link>
                  </VerticalLinks>
                }
              >
                <Button type="text" icon={<CaretDownOutlined />} />
              </Popover>
            </AboutLinkContainer>
            <Link
              href="/contact"
              active={pathname === "/contact"}
              color="purple"
              size={typography.main.size}
            >
              Contact
            </Link>
          </DesktopLinkContainer>
        </DesktopOnly>
        <MobileOnly>
          <Popover
            trigger="click"
            visible={mobileAboutIsOpen}
            onVisibleChange={() => setMobileAboutIsOpen((o) => !o)}
            placement="bottomRight"
            content={
              <VerticalLinks>
                <Link
                  href="/experience"
                  active={pathname === "/experience"}
                  color="red"
                  onClick={() => setMobileAboutIsOpen(false)}
                  size={typography.main.size}
                >
                  Experience
                </Link>
                <Link
                  href="/project"
                  active={pathname === "/project"}
                  color="green"
                  onClick={() => setMobileAboutIsOpen(false)}
                  size={typography.main.size}
                >
                  Project
                </Link>
                <Link
                  href="/about"
                  active={pathname === "/about"}
                  color="blue"
                  onClick={() => setMobileAboutIsOpen(false)}
                  size={typography.main.size}
                >
                  About
                </Link>
                <PaddedLink
                  href="/about#frontend"
                  onClick={() => setMobileAboutIsOpen(false)}
                  size={typography.main.size}
                >
                  Skills
                </PaddedLink>
                <PaddedLink
                  href="/about#languages"
                  onClick={() => setMobileAboutIsOpen(false)}
                  size={typography.main.size}
                >
                  Languages
                </PaddedLink>
                <PaddedLink
                  href="/about#education"
                  onClick={() => setMobileAboutIsOpen(false)}
                  size={typography.main.size}
                >
                  Education
                </PaddedLink>
                <Link
                  href="/contact"
                  active={pathname === "/contact"}
                  color="purple"
                  onClick={() => setMobileAboutIsOpen(false)}
                  size={typography.main.size}
                >
                  Contact
                </Link>
              </VerticalLinks>
            }
          >
            <Button type="text" icon={<MenuOutlined />} />
          </Popover>
        </MobileOnly>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 48px auto min-content;
  align-items: center;
  grid-gap: 12px;
  grid-auto-flow: row;
`;

const DesktopLinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, min-content);
  grid-gap: 48px;
`;

const AboutLinkContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const VerticalLinks = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 12px;
`;

const PaddedLink = styled(Link)`
  margin-left: 24px;
`;

const Logo = styled.button`
  width: 48px;
  height: 48px;

  border-radius: 10px;
  color: white;
  border: none;

  font-size: 20px;
  font-weight: bold;

  outline: none;
  :hover {
    cursor: pointer;
  }

  @keyframes rainbow {
    0% {
      background: ${colors.red};
    }
    17% {
      background: ${colors.green};
    }
    34% {
      background: ${colors.blue};
    }
    50% {
      background: ${colors.purple};
    }
    67% {
      background: ${colors.sky};
    }
    84% {
      background: ${colors.yellow};
    }
    100% {
      background: ${colors.red};
    }
  }
  animation: rainbow 48s ease infinite;
`;
