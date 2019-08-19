import React from "react";
import { render } from "@testing-library/react";
import Header from "./index";

const testData = {
  title: "Example text",
  links: [
    {
      text: "link 1",
      href: "https://link1.com"
    },
    {
      text: "link 2",
      href: "https://link2.com"
    }
  ]
};

it("allows title to be set via props", () => {
  const { title, links } = testData;
  const { container } = render(<Header links={links} title={title} />);
  expect(container.getElementsByTagName("h1")[0].textContent).toBe(title);
});

it("allows links to be set via props", () => {
  const { title, links } = testData;
  const { container } = render(<Header links={links} title={title} />);
  const linksElements = container.getElementsByTagName("a");
  links.forEach((link, index) => {
    expect(linksElements[index].textContent).toBe(link.text);
    expect(linksElements[index].getAttribute('href')).toBe(link.href);
  });
});
