import React, { Component } from 'react';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/index';
import Item from '../Item/Item';
import NewItem from '../NewItem/NewItem';

class ListItem extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderItems = item => {
    return (
      <Item
        key={item.id}
        {...item}
        onChange={event => this.onCheck(item, event.target.checked)}
        onDelete={() => this.onDelete(item)}
      />
    );
  };

  onDelete(item) {
    this.props.deleteTodo(item);
  }

  onTextInputChange(event) {
    this.props.changeText(event.target.value);
  }

  saveTodo() {
    if (this.props.text) {
      this.props.addTodo({
        id: v4(),
        text: this.props.text,
        completed: false
      });
      this.props.changeText('');
    }
  }

  onCheck(item, isChecked) {
    item.completed = isChecked ? isChecked : false;
    this.props.completeTodo(item);
  }

  render() {
    return (
      <div>
        <NewItem content={this.props.text} save={() => this.saveTodo()} />
        {this.props.items.length !== 0 ? (
          <ul className="list-group">
            {this.props.items.map(this.renderItems)}
          </ul>
        ) : (
          <div className="alert alert-info">No quedan tareas pendientes</div>
        )}
        <button onClick={this.saveTodo.bind(this)} className="btn btn-primary">
          Guardar
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items.todos,
    text: state.items.text
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem);
