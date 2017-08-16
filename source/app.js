var React = require('react');
var ReactDOM = require('react-dom');

const Hello = function(name) {
  return (
    <div>Hello, {name}</div>
  );
};

const view = Hello("Will");
 const element = document.getElementById('react-container')
ReactDOM.render(view, element);
