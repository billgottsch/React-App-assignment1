import React, { Component } from 'react';
import './AssignmentPage.css';

export default class List extends Component {
  render() {
    return (
      <div className="AssignmentPage__content">
        {this.props.items && this.props.items.length < 1 ? <div>There are currently no assignments.</div> : null }
        <ul className="AssignmentPage__items">
          {this.props.items.map((item, index) => {
            // Return a new li for each item
            return (<li
              className="AssignmentPage__listitem"
              key={index}
              onClick={this.props.onItemClick.bind(this, index)}>
                {item}
              </li>)
          })}
        </ul>
      </div>
    );
  }
}
