import React, { Component } from 'react';
import logo from './smilyface.svg';
import './App.css';
import AssignmentPage from './AssignmentPage';

class App extends Component { //this thing is what "this" refers to throughout the assignment
  constructor(props) {
    super(props);
    this.state = {
      assignments: this.props.assignments,
      newItemValue: ''
    };
  }
  onNewItemFormSubmit(e) {
    e.preventDefault();
    var newItemValue = this.state.assignments.slice(0).concat([this.state.newItemValue]);
    this.setState({
      assignments: newItemValue,
      newItemValue: ''
    });
  }
  onNewItemValueChanged(e) {
    this.setState({
      newItemValue: e.target.value
    })
  }
  onItemClick(index, e) { //this is the click to delete stuff

    var head = this.state.assignments.slice(0, index);
    var tail = this.state.assignments.slice(index+1, this.state.assignments.length);

    this.setState({
      assignments: head.concat(tail)
    });
  }
    render() {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Happy To-Do List!</h2>
          </div>
          <form onSubmit={this.onNewItemFormSubmit.bind(this)}>
            <input
              className="newAssignmentAdd" type="text" tabIndex="0" value={this.state.newItemValue} placeholder="enter an assignment..." onChange={this.onNewItemValueChanged.bind(this)} />
            <button onChange={this.onNewItemValueChanged.bind(this)} className="toDoListButton">add</button>
          </form>
          <AssignmentPage items={this.state.assignments} onItemClick={this.onItemClick.bind(this)} />
        </div>
      );
    }
  }

export default App;
