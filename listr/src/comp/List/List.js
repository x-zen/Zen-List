import React, { Component } from 'react';
/*Dependencies*/
import { connect } from 'react-redux';
/*Stylesheet*/
import './list.css';
/*Actions*/
import { updateTitle } from '../../actions/index.js';
/*Components*/
import Title from './comp/Title/Title.js';

class List extends React.Component {

  render() {
    return (
      <div className='list-card'>
        <Title />

        <div className='list-items'>

        </div>

        <div className='list-form'>

        </div>
      </div>
    )
  }
}

export default List;
/*export default connect(
  mapStateToProps,
  { updateTitle}
)(List);*/
