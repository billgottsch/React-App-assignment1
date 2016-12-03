import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import moment from 'moment';

  let lastSeen = JSON.parse(localStorage.getItem('assignmenttracker:lastseen'));
  var lastMoment = moment(lastSeen);
  var thisMoment = moment();
  var numDaysBetween = moment.duration(lastMoment.diff(thisMoment)).asDays();

  let assignments = JSON.parse(localStorage.getItem('assignments'));
  if(!assignments || assignments.length === 0 || (numDaysBetween && numDaysBetween <= -1)) {

    assignments = [
        {
        text: 'solve 1st world problems',
        completed: false,
        favorite: false
      },{
        text: 'learn JavaScript',
        completed: false,
        favorite: false
      },{
        text: 'make pizza',
        completed: false,
        favorite: false
      }
    ];
  }
ReactDOM.render(
  <App assignments={assignments} />,
  document.getElementById('root')
);

window.setInterval(function() {
  localStorage.setItem('assignmenttracker:lastseen', JSON.stringify(moment()))
},2000)
