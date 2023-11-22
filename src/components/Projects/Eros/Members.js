import React from 'react';
import PropTypes from 'prop-types';

import Member from './Member';

const Members = ({ data }) => (
  <div className="education">
    <div className="link-to" id="team members" />
    <div className="title">
      <h3>Team Members</h3>
    </div>
    {data.map((member) => (
      <Member
        data={member}
        key={member.name}
      />
    ))}
  </div>
);

Members.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Members.defaultProps = {
  data: [],
};

export default Members;
