import React, { useState, useEffect } from 'react'; // Make sure to import useState and useEffect
import { Link } from 'react-router-dom';
// import ImageGallery from 'react-image-gallery';

import Main from '../../../layouts/Main';

import Achievements from '../../../components/Projects/Eros/Achievements';
import Members from '../../../components/Projects/Eros/Members';
import FormerMembers from '../../../components/Projects/Eros/FormerMembers';

import teamMembers from '../../../data/projects/eros/teamMembers';
import formerMembers from '../../../data/projects/eros/formerMembers';
// import erosImages from '../../../data/projects/eros/erosImages';

const sections = [
  'Achievements',
  'Team Members',
  'Former Members',
];

const Eros = () => {
  const [achievementsMarkdown, setAchievementsMarkdown] = useState('');

  useEffect(() => {
    import('../../../data/projects/eros/achievements.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setAchievementsMarkdown);
      });
  }, []); // Don't forget to add dependency array if needed

  return (
    <Main
      title="EROS Humanoid Robot Soccer"
      description="Learn about EROS Humanoid Robot Soccer."
    >
      <article className="post" id="eros">
        <header>
          <div className="title">
            <h2><Link to="./">EROS Humanoid Soccer Robot</Link></h2>
            <div className="link-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {sections.map((sec) => (
                <h4 key={sec}>
                  <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                </h4>))}
            </div>

          </div>
        </header>

        {/* <ImageGallery
          items={erosImages}
          additionalClass="eros-image-gallery"
        /> */}

        <div className="title" style={{ textAlign: 'center' }}>
          <h2>
            <a href="https://erosrobotic.id/">
              Official Website of EROS Humanoid Soccer Robot
            </a>
          </h2>
        </div>

        <Achievements data={achievementsMarkdown} />
        <Members data={teamMembers} />
        <FormerMembers data={formerMembers} />

      </article>
    </Main>
  );
};

export default Eros;
