import React from 'react';
import Body from './Body';

function Main({ body, externalLinks, extraContent }) {
  const renderLinks = () => {
    return externalLinks.map((link, index) => (
      <li key={index}>
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          {link.text}
        </a>
      </li>
    ));
  };

  return (
    <main>
      <Body body={body} />
      {extraContent}
      <nav>
        <ul>{renderLinks()}</ul>
      </nav>
    </main>
  );
}

export default Main;