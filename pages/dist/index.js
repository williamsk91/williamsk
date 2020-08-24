"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var Spacer_1 = require("../component/Spacer");
var Text_1 = require("../component/Text");
var Link_1 = require("../component/Link");
var styled_components_1 = require("styled-components");
function Home() {
    return (React.createElement(Container, null,
        React.createElement(Spacer_1.Spacer, { spacing: 48 }),
        React.createElement(Text_1.Text, { type: "disp" }, "Hi! I'm Williams Kwan."),
        React.createElement(Spacer_1.Spacer, { spacing: 48 }),
        React.createElement(Text_1.Text, { type: "title" },
            "I'm a",
            " ",
            React.createElement(Link_1.Link, { href: "/about#frontend", active: true, color: "red" }, "frontend"),
            " ",
            "engineer with",
            " ",
            React.createElement(Link_1.Link, { href: "/about#backend", active: true, color: "green" }, "backend"),
            ", and",
            " ",
            React.createElement(Link_1.Link, { href: "/about#operation", active: true, color: "blue" }, "operation"),
            " ",
            "experience."),
        React.createElement(Spacer_1.Spacer, { spacing: 18 }),
        React.createElement(Text_1.Text, { type: "title" },
            "I love to",
            " ",
            React.createElement(Link_1.Link, { href: "/project", active: true, color: "purple" }, "code"),
            " ",
            "and",
            " ",
            React.createElement(Link_1.Link, { href: "/about#education", active: true, color: "sky" }, "study"),
            " ",
            "new things."),
        React.createElement(Spacer_1.Spacer, { spacing: 240 })));
}
exports["default"] = Home;
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"], ["\n  flex: 1;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));
var templateObject_1;
