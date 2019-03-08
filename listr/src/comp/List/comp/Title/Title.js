import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateTitle } from '../../../../actions/index.js';

class Title extends React.Component {
  state = {
    newTitleText: this.props.title,
    editing: false
  };

  updateTitle = e => {
    e.preventDefault();
    this.props.updateTitle(this.state.newTitleText)
    this.setState({editing: false})
  }

  handleChanges = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {

    if (this.state.editing === false) {
      return(<div className='list-title'>
        <h1>{this.props.title}</h1>
        <button onClick={() => this.setState({editing: true})}>Update</button>
      </div>)
    } else {
      return(<div className='list-title'>
        <input
          type='text'
          name='newTitleText'
          value={this.state.newTitleText}
          onChange={this.handleChanges}
        />
        <button onClick={this.updateTitle}>Update</button>
      </div>)
    }
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
