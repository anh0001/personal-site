import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

const Achievements = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="achievements" />
    <div className="title">
      <h3>Achievements</h3>
    </div>

    <Markdown>
      {data}
    </Markdown>
  </div>
);

Achievements.propTypes = {
  data: PropTypes.string,
};

Achievements.defaultProps = {
  data: '# Default Markdown',
};

export default Achievements;
