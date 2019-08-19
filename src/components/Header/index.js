import React from "react";
import './index.css'

export default function Header({ links, title }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <div/>
      <ul>
        {links.map((link, index) => (
          <li key={index}><a href={link.href}>{link.text}</a></li>
        ))}
      </ul>
    </header>
  );
}
