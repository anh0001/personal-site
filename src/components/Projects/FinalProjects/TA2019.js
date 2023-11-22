import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const TA2019 = ({ data }) => (
  <div className="experience">
  {data.map((TA, idx) => (
    <div>
      <div className="link-to" id={idx+1} />
      <div className="title">
        <h3>[{idx+1}]</h3>
      </div>
      <ReactMarkdown
        source={TA}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </div>
  ))}
  </div>
);

TA2019.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};

TA2019.defaultProps = {
  data: [],
};


export default TA2019;
