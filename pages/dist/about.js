"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var Section_1 = require("../component/Section");
var Text_1 = require("../component/Text");
var Spacer_1 = require("../component/Spacer");
var styled_components_1 = require("styled-components");
var List_1 = require("../component/List");
var device_1 = require("../component/device");
function About() {
    return (React.createElement("div", null,
        React.createElement(Spacer_1.Spacer, { spacing: 120 }),
        React.createElement(Section_1.Section, { title: "Frontend", id: "frontend", desc: "Frontend development is bread and butter. I love coding fast, responsive, and reactive web apps.", color: "red" },
            React.createElement(SkillList, null,
                React.createElement(Text_1.Colored, { color: "red" }, "Typescript"),
                ",",
                " ",
                React.createElement(Text_1.Colored, { color: "red" }, "React"),
                ", Redux, Storybook, Apollo (GraphQL), Styled Components, NextJS, Testing-Library, Jest, HTML, CSS, and ",
                React.createElement(Text_1.Colored, { color: "red" }, "JS"))),
        React.createElement(Spacer_1.Spacer, { spacing: 120 }),
        React.createElement(Section_1.Section, { title: "Backend", id: "backend", desc: React.createElement(React.Fragment, null,
                "Experienced in making ",
                React.createElement(Text_1.Colored, { color: "green" }, "GraphQL"),
                " &",
                " ",
                React.createElement(Text_1.Colored, { color: "green" }, "RESTful"),
                " APIs with efficient database integrations."), color: "green" },
            React.createElement(SkillList, null,
                React.createElement(Text_1.Colored, { color: "green" }, "NodeJS"),
                ", Express, Apollo,",
                " ",
                React.createElement(Text_1.Colored, { color: "green" }, "Elixir"),
                ", Phoenix, Absinthe, Ecto,",
                " ",
                React.createElement(Text_1.Colored, { color: "green" }, "PostgreSQL"),
                ", DynamoDB, MongoDB, OAuth, JWT, and Firebase")),
        React.createElement(Spacer_1.Spacer, { spacing: 120 }),
        React.createElement(Section_1.Section, { title: "Operation", id: "operation", desc: React.createElement(React.Fragment, null,
                "Automatic ",
                React.createElement(Text_1.Colored, { color: "blue" }, "testing"),
                ",",
                " ",
                React.createElement(Text_1.Colored, { color: "blue" }, "deployment"),
                ", and",
                " ",
                React.createElement(Text_1.Colored, { color: "blue" }, "monitoring"),
                " for the best developer experience."), color: "blue" },
            React.createElement(SkillList, null,
                React.createElement(Text_1.Colored, { color: "blue" }, "AWS"),
                " S3, CloudFront, Lambda, CloudWatch, APIGateway, Route53,",
                " ",
                React.createElement(Text_1.Colored, { color: "blue" }, "Serverless Framework"),
                ",",
                " ",
                React.createElement(Text_1.Colored, { color: "blue" }, "Heroku"),
                ", Vercel, Netlify,",
                " ",
                React.createElement(Text_1.Colored, { color: "blue" }, "Github Actions"),
                ", Travis CI, Contentful, and ",
                React.createElement(Text_1.Colored, { color: "blue" }, "Sentry"))),
        React.createElement(Spacer_1.Spacer, { spacing: 120 }),
        React.createElement(Section_1.Section, { title: "Other Programming Languages", desc: "Each language bring its own uniqueness and I love learning them.", color: "purple" },
            React.createElement(SkillList, null,
                React.createElement(Text_1.Colored, { color: "purple" }, "C"),
                ", Python, Rust, and Haskell")),
        React.createElement(Spacer_1.Spacer, { spacing: 120 }),
        React.createElement(Section_1.Section, { title: "Design", desc: "Mockups and prototypes", color: "sky" },
            React.createElement(SkillList, null,
                React.createElement(Text_1.Colored, { color: "sky" }, "Figma"),
                " and Framer")),
        React.createElement(Spacer_1.Spacer, { spacing: 120 }),
        React.createElement(Section_1.Section, { id: "languages", title: "Languages", desc: "The ones with ambiguous grammar", color: "yellow" },
            React.createElement(List_1.List, { items: [
                    [
                        React.createElement(Text_1.Text, { type: "sub" }, "\uD83C\uDDFA\uD83C\uDDF8 English - Fluent"),
                        React.createElement(Text_1.Text, { type: "sub" }, "\uD83C\uDDEF\uD83C\uDDF5 Japanese - Conversational"),
                        React.createElement(Text_1.Text, { type: "sub" }, "\uD83C\uDDEE\uD83C\uDDE9 Bahasa Indonesia - Fluent"),
                    ],
                ] })),
        React.createElement(Spacer_1.Spacer, { spacing: 120 }),
        React.createElement(Section_1.Section, { id: "education", title: "Education", desc: "High achieving student in 4 different countries", color: "red" },
            React.createElement(List_1.List, { items: [
                    [
                        React.createElement(Education, { desc: "Kyoto University - Exchange (Informatics)", country: "\uD83C\uDDEF\uD83C\uDDF5 Japan", achievements: [
                                React.createElement(React.Fragment, null,
                                    "Achieved ",
                                    React.createElement(Text_1.Colored, { color: "red" }, "High Distinction"),
                                    " in #2 ranked University in ",
                                    React.createElement(Text_1.Colored, { color: "red" }, "Japan")),
                                React.createElement(React.Fragment, null,
                                    "Obtained",
                                    " ",
                                    React.createElement(Text_1.Colored, { color: "red" }, "the only exchange position"),
                                    " to Kyoto University available from Melbourne University"),
                                React.createElement(React.Fragment, null,
                                    "Improved Japanese language skills from N3 to",
                                    " ",
                                    React.createElement(Text_1.Colored, { color: "red" }, "N2"),
                                    " within a year"),
                            ], color: "red" }),
                        React.createElement(Education, { desc: "Melbourne University - Bachelor of Science\n                (Mechatronics Engineering)", country: "\uD83C\uDDE6\uD83C\uDDFA Australia", achievements: [
                                React.createElement(React.Fragment, null,
                                    "Achieved ",
                                    React.createElement(Text_1.Colored, { color: "green" }, "High Distinction"),
                                    " ",
                                    "in #1 ranked University in",
                                    " ",
                                    React.createElement(Text_1.Colored, { color: "green" }, "Australia")),
                                React.createElement(React.Fragment, null,
                                    "Awarded a ",
                                    React.createElement(Text_1.Colored, { color: "green" }, "scholarship"),
                                    " for",
                                    " ",
                                    React.createElement(Text_1.Colored, { color: "green" }, "academic excellence")),
                                React.createElement(React.Fragment, null, "Demonstrated leadership skills in various group projects"),
                            ], color: "green" }),
                        React.createElement(Education, { desc: "Chua Chu Kang Secondary School - O'level", country: "\uD83C\uDDF8\uD83C\uDDEC Singapore", achievements: [
                                React.createElement(React.Fragment, null,
                                    "Achieved ",
                                    React.createElement(Text_1.Colored, { color: "purple" }, "#1 place"),
                                    " ",
                                    "academically"),
                                React.createElement(React.Fragment, null,
                                    React.createElement(Text_1.Colored, { color: "purple" }, "Star student"),
                                    " award"),
                            ], color: "purple" }),
                        React.createElement(Education, { desc: "Manado Independent School - Middle School", country: "\uD83C\uDDEE\uD83C\uDDE9 Indonesia", achievements: [
                                React.createElement(React.Fragment, null,
                                    "Achieved ",
                                    React.createElement(Text_1.Colored, { color: "sky" }, "#1 place"),
                                    " ",
                                    "academically"),
                            ], color: "sky" }),
                        React.createElement(Text_1.Text, { type: "sub" }),
                    ],
                ] })),
        React.createElement(Spacer_1.Spacer, { spacing: 120 })));
}
exports["default"] = About;
var SkillList = styled_components_1["default"](Text_1.Text).attrs({
    type: "sub"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: 480px;\n"], ["\n  max-width: 480px;\n"])));
var Education = function (_a) {
    var desc = _a.desc, country = _a.country, achievements = _a.achievements, color = _a.color;
    return (React.createElement("div", null,
        React.createElement(Text_1.Text, { type: "sub" }, desc),
        React.createElement(Text_1.Text, { type: "sub" },
            React.createElement(Text_1.Colored, { color: "sub" }, country)),
        React.createElement(Section_1.Hr, { color: color, width: 48 }),
        React.createElement("ul", null, achievements.map(function (a, i) { return (React.createElement(Li, { key: i }, a)); })),
        React.createElement(Spacer_1.Spacer, { spacing: 24 })));
};
var Li = styled_components_1["default"].li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 12px 0;\n\n  font-size: ", ";\n  @media ", " {\n    font-size: ", ";\n  }\n"], ["\n  margin: 12px 0;\n\n  font-size: ", ";\n  @media ", " {\n    font-size: ", ";\n  }\n"])), Text_1.typography.sub.size + "px", device_1.isMobile, Text_1.typography.sub.size - 4 + "px");
var templateObject_1, templateObject_2;
