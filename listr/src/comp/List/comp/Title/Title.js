import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateTitle } from '../../../../actions/index.js';

class Title extends React.Component {
  state = {
    newTitleText: ''
  };

  updateTitle = e => {
    e.preventDefault();
    this.props.updateTitle(this.state.newTitleText)
  }

  render() {
    return (
      <div className='list-title'>
        <h1>{this.props.initialState}</h1>
        <button onClick={this.updateTitle}>Update</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    title: state.title
  }
}

export default connect(
  mapStateToProps,
  { updateTitle }
)(Title);
