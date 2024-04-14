import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const Patent = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/mypatent.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  });

  const count = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main
      title="Patent"
      description="Patent of Anhar Risnumawan"
    >
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2><Link to="/patent">Patent</Link></h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default Patent;
