import React, { Component } from 'react';
import './AssignmentPage.css';

export default class List extends Component {
  render() {
    return (
      <div className="AssignmentPage__content">
        {this.props.items && this.props.items.length < 1 ? <p className="noAssignment__text">There are currently no assignments.</p> : null }
        <ul className="AssignmentPage__items">
          {this.props.items.map((item, index) => {
            // Return a new li for each item
            return (
              <li
                className="AssignmentPage__listitem"
                key={index}>
                <i className="icon ion-ios-star-outline" onClick={this.props.onFavoriteClick.bind(this, index)} style={{color: item.favorite ? 'red' : 'auto'}}></i>
                <span>{item.text}</span>
                <i className="icon ion-trash-a" onClick={this.props.onItemClick.bind(this, index)}></i>
            </li>)
          })}
        </ul>
      </div>
    );
  }
}
