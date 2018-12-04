import React, { Component, PropTypes } from 'react';
import { Redirect } from 'react-router-dom';

class Default extends Component {
  render() {
    return <Redirect to="/top/1" />
  }
}

export default Default;
