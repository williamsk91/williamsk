"use strict";
exports.__esModule = true;
var Section_1 = require("../component/Section");
var Text_1 = require("../component/Text");
var List_1 = require("../component/List");
var Spacer_1 = require("../component/Spacer");
function Experience() {
    return (React.createElement("div", null,
        React.createElement(Spacer_1.Spacer, { spacing: 120 }),
        React.createElement(Section_1.Section, { title: "Cadmus", subtitle: "Web Developer", info: "Melbourne, Australia - Mar 19 - Present", desc: "Online assessment platform for universities across Australia to create and deliver incredible learning experiences to thousands of students.", color: "red" },
            React.createElement(List_1.List, { items: [
                    [
                        React.createElement(Text_1.Text, { type: "sub" },
                            "Write maintainable and high performing Single Page App using",
                            " ",
                            React.createElement(Text_1.Colored, { color: "red" }, "React"),
                            " and",
                            " ",
                            React.createElement(Text_1.Colored, { color: "red" }, "Redux"),
                            " in",
                            " ",
                            React.createElement(Text_1.Colored, { color: "red" }, "Typescript")),
                        React.createElement(Text_1.Text, { type: "sub" },
                            "Facilitates communication between designer and Backend developers using ",
                            React.createElement(Text_1.Colored, { color: "red" }, "Elixir"),
                            " and",
                            " ",
                            React.createElement(Text_1.Colored, { color: "red" }, "Phoenix")),
                        React.createElement(Text_1.Text, { type: "sub" },
                            "Manager of our design system made with",
                            " ",
                            React.createElement(Text_1.Colored, { color: "red" }, "Styled Components"),
                            " and documented using ",
                            React.createElement(Text_1.Colored, { color: "red" }, "Storybook")),
                        React.createElement(Text_1.Text, { type: "sub" },
                            "Manager of marketing website build with",
                            " ",
                            React.createElement(Text_1.Colored, { color: "red" }, "NextJS"),
                            " and",
                            " ",
                            React.createElement(Text_1.Colored, { color: "red" }, "Contentful"),
                            " CMS"),
                        React.createElement(Text_1.Text, { type: "sub" },
                            "Write tests to automatically catch errors using",
                            " ",
                            React.createElement(Text_1.Colored, { color: "red" }, "Testing-Library"),
                            " and",
                            " ",
                            React.createElement(Text_1.Colored, { color: "red" }, "Jest")),
                    ],
                ] })),
        React.createElement(Spacer_1.Spacer, { spacing: 120 }),
        React.createElement(Section_1.Section, { title: "Rome2Rio", subtitle: "Data Researcher", info: "Remote - Dec 17 - Mar 19", desc: "Door-to-door travel information and booking engine, helping users to get to and from any location in the world.", color: "green" },
            React.createElement(List_1.List, { items: [
                    [
                        React.createElement(Text_1.Text, { type: "sub" },
                            "Research route information in",
                            " ",
                            React.createElement(Text_1.Colored, { color: "green" }, "Japanese"),
                            " and translate data to",
                            " ",
                            React.createElement(Text_1.Colored, { color: "green" }, "English")),
                        React.createElement(Text_1.Text, { type: "sub" }, "Input, maintain and retrieve data using computer systems"),
                        React.createElement(Text_1.Text, { type: "sub" }, "Ensure information is collated and stored in an accurate and efficient manner"),
                    ],
                ] })),
        React.createElement(Spacer_1.Spacer, { spacing: 120 }),
        React.createElement(Section_1.Section, { title: "\u516B\u5343\u4EE3 Yachiyo", subtitle: "Kitchen Hand", info: "Kyoto, Japan - Oct 17 - Jan 18", desc: "Worked as a kitchen hand in a popular ryokan (traditional Japanese inn) in Kyoto during exchange.", color: "blue" }),
        React.createElement(Spacer_1.Spacer, { spacing: 120 }),
        React.createElement(Section_1.Section, { title: "Various Companies", subtitle: "Virtual Assistant", info: "Remote - Jan 16 - Mar 19", desc: "Worked with various companies remotely on mainly data-entry tasks.", color: "purple" }),
        React.createElement(Spacer_1.Spacer, { spacing: 120 })));
}
exports["default"] = Experience;
