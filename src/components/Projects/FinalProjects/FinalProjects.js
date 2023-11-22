import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const FinalProjects = ({ datas }) => {
  const getImageUrl = (urlsOri) => {
    const urls = urlsOri.split(',');
    const url = urls[urls.length - 1];
    return url.replace('open?', 'uc?');
  };

  return (
    <div className="finalprojects-container">
      {/* {console.log(datas)} */}
      {datas.map((data) => {
        if (data['published?']) {
          return (
            <div className="finalprojects-post">
              <div className="link-to" id={data.year + data['last name']} />
              <div className="title">
                <h3>{data.title}</h3>
              </div>

              <article className="finalprojects-desc">
                {data.photo && data.photo.length !== 0 ? (
                  <a href={getImageUrl(data.photo)} className="photo">
                    <img
                      src={getImageUrl(data.photo)}
                      alt={data.title || 'Project Image'}
                      style={{ width: '100px', height: 'auto' }}
                    />
                  </a>
                ) : null}

                <header>
                  <h4>By: <a href={`mailto:${data['email address']}`}> {data['first name']} {data['last name']}</a></h4>
                  <time className="daterange">{dayjs(data.timestamp).format('MMMM, YYYY')}</time>
                </header>

                <div className="content">Category: {data.category}</div>
                <br />

                <div className="content">
                  {data.content}
                </div>

                {data['block diagram'] && data['block diagram'].length !== 0 ? (
                  <a href={getImageUrl(data['block diagram'])} className="image-block-diagram">
                    <img src={getImageUrl(data['block diagram'])} alt="Block Diagram" />
                  </a>
                ) : null}
                <br />

                {data['current job and position'] && data['current job and position'].length !== 0
                  ? <p>Current Job and Position: {data['current job and position']}.</p>
                  : null}
                <br />

                {data.video && data.video.length !== 0 ? <a href={data.video} className="video">[Video]</a> : null}
                {data.book && data.book.length !== 0 ? <a href={data.book} className="book">[Book]</a> : null}
                {data['source code'] && data['source code'].length !== 0 ? <a href={data['source code']} className="code">[Source Code]</a> : null}
                {data.dataset && data.dataset.length !== 0 ? <a href={data.dataset} className="code">[Dataset]</a> : null}
              </article>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

FinalProjects.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.shape({
    blockDiagram: PropTypes.string,
    category: PropTypes.string,
    content: PropTypes.string,
    currentJobAndPosition: PropTypes.string,
    emailAddress: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    photo: PropTypes.string,
    published: PropTypes.bool,
    results: PropTypes.string,
    timestamp: PropTypes.string,
    title: PropTypes.string,
    video: PropTypes.string,
    book: PropTypes.string,
    sourceCode: PropTypes.string,
    dataset: PropTypes.string,
    year: PropTypes.number,
  })),
};

FinalProjects.defaultProps = {
  datas: [],
};

export default FinalProjects;
