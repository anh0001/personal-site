import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Main from '../../../layouts/Main';

import gdriveData from '../../../data/projects/finalprojects/finalprojects';

// import ListTA from '../../../components/Projects/TA2019/TA2019';
import ListFinalProjects from '../../../components/Projects/FinalProjects/FinalProjects';

// const importAll = (r) => r.keys().map(r);
// const markdownContents = importAll(
//   require.context('../../../data/projects/ta2019/markdown', false, /\.md$/))

class FinalProjects extends Component {
  constructor() {
    super();

    this.searchData = {
      yearTo: new Date().getFullYear(),
      yearFrom: new Date().getFullYear() - 4,
    };

    this.state = {
      data: [],
      url: `${gdriveData.url}&yearfrom=${this.searchData.yearFrom}&yearto=${this.searchData.yearTo}&page=1`,
      loaded: false,
    };
  }

  componentDidMount() {
    axios.get(this.state.url)
      .then((resp) => {
        this.setState({ data: resp.data, loaded: true });
      });
    // .catch(error => console.log(error));
  }

  yearFromHandler = (props) => {
    this.searchData.yearFrom = props.target.value;
  };

  yearToHandler = (props) => {
    this.searchData.yearTo = props.target.value;
  };

  searchHandler = () => {
    this.setState(
      {
        url: `${gdriveData.url}&yearfrom=${this.searchData.yearFrom}&yearto=${this.searchData.yearTo}&page=1`,
        loaded: false,
      },
      () => {
        axios.get(this.state.url)
          .then((resp) => {
            this.setState({ data: resp.data, loaded: true });
          });
        // .catch(error => console.log(error));
      },
    );
  };

  render() {
    return (
      <Main
        title="Final Projects"
        description="List of student final projects under my supervision."
      >
        <article className="post" id="finalprojects">
          <header>
            <div className="title">
              <h2><Link to="./">Final Projects</Link></h2>

              <div
                className="year-from-to"
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <div className="year-from">
                  <h4>From: </h4>
                  <input type="number" defaultValue={this.searchData.yearFrom} onChange={this.yearFromHandler} />
                </div>
                <div className="year-to">
                  <h4>To: </h4>
                  <input type="number" defaultValue={this.searchData.yearTo} onChange={this.yearToHandler} />
                </div>
                <div className="search" style={{ alignSelf: 'flex-end' }}>
                  <button type="button" onClick={this.searchHandler}>Search</button>
                </div>
              </div>
              <br />

              <div className="link-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {this.state.loaded && this.state.data && this.state.data.data.length > 0 ? (
                  this.state.data.data.map((TA) => (
                    <h4 key={`${TA.year}${TA['last name']}`}>
                      <a href={`#${TA.year}${TA['last name']}`}>[{TA.year}{TA['last name']}]</a>
                    </h4>
                  ))
                ) : (
                  <p>Fetching data, please wait...</p>
                )}
              </div>

            </div>
          </header>

          {this.state.loaded && this.state.data.data
            ? <ListFinalProjects datas={this.state.data.data} /> : null}

          {/* <ListTA data={markdownContents.map((desc) => { return desc.default })} /> */}

        </article>
      </Main>
    );
  }
}

export default FinalProjects;
