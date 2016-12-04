import React, { Component } from 'react';
import logo from './goldcheck.svg';
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
    var newItemValue = this.state.assignments.slice(0).concat([{
      text: this.state.newItemValue,
      completed: false,
      favorite: false
    }]);
    this.setState({
      assignments: newItemValue,
      newItemValue: ''
    });
    localStorage.setItem('assignments', JSON.stringify(newItemValue));
  }
  onNewItemValueChanged(e) {
    this.setState({
      newItemValue: e.target.value
    })
  }
  onItemClick(index, e) { //this is the click to delete stuff

    var head = this.state.assignments.slice(0, index);
    var tail = this.state.assignments.slice(index+1, this.state.assignments.length);

    var newItemValue = head.concat(tail);

    this.setState({
      assignments: newItemValue
    });
    localStorage.setItem('assignments', JSON.stringify(newItemValue));
  }

  onFavoriteClick(index, e) {
    let newFavorites = this.state.assignments.slice(0);
    console.log(newFavorites);
    console.log(newFavorites[index].favorite);
      newFavorites[index].favorite=!newFavorites[index].favorite;
      console.log(newFavorites[index].favorite);
      this.setState({
        assignments: newFavorites
      })
      localStorage.setItem(
        'assignments', JSON.stringify(newFavorites))
    }

    render() {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="thingstodo">Things to do:</h2>
          </div>
          <form onSubmit={this.onNewItemFormSubmit.bind(this)}>
            <input className="newAssignmentAdd" type="text" tabIndex="0" value={this.state.newItemValue} placeholder="enter a task..." onChange={this.onNewItemValueChanged.bind(this)} />
            <button onChange={this.onNewItemValueChanged.bind(this)} className="toDoListButton">add</button>
          </form>
            <AssignmentPage items={this.state.assignments} onFavoriteClick={this.onFavoriteClick.bind(this)} onItemClick={this.onItemClick.bind(this)}/>

        </div>
      );
    }
  }

export default App;
