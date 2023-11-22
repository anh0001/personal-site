import React from 'react';
import PropTypes from 'prop-types';

const Member = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.name}</h4>
      <p className="school">{data.degree}, <a href={data.link}>{data.school}</a>, {data.year}</p>
    </header>
  </article>
);

Member.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Member;
