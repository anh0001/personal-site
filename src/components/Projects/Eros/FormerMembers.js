import React from 'react';
import PropTypes from 'prop-types';

import Member from './Member';

const FormerMembers = ({ data }) => (
  <div className="education">
    <div className="link-to" id="former members" />
    <div className="title">
      <h3>Former Members</h3>
    </div>
    {data.map((member) => (
      <Member
        data={member}
        key={member.name}
      />
    ))}
  </div>
);

FormerMembers.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

FormerMembers.defaultProps = {
  data: [],
};

export default FormerMembers;
