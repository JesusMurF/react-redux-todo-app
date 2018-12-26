import React from 'react';
import './Item.css';

function Item(props) {
  return (
    <li className="list-group-item clearfix">
      <input
        className="form-check-input"
        type="checkbox"
        checked={props.completed}
        onChange={props.onChange}
      />
      <label className={props.completed ? 'overline m-15' : 'm-15'}>
        {props.text}
      </label>
      <button onClick={props.onDelete} className="btn btn-danger pull-right">
        Borrar
      </button>
    </li>
  );
}

export default Item;
