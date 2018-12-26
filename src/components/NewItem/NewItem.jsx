import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeText } from '../../actions/index';

class NewTodo extends Component {
  constructor() {
    super();
    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleTextInputChange(event) {
    this.props.changeText(event.target.value);
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.save();
    }
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="todo">Nueva tarea</label>
        <input
          type="text"
          value={this.props.content}
          className="form-control"
          placeholder="Introduce una nueva tarea"
          onChange={this.handleTextInputChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.text
  };
}

export default connect(
  mapStateToProps,
  { changeText }
)(NewTodo);
