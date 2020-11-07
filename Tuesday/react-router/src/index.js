import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import App from './AppNested';

const info = [
  { id: "rendering", title: "Rendering with React", info: "How to: Rendering with React" },
  { id: "components", title: "components", info: "Info about components" },
  { id: "props-v-state", title: "Props vs. State", info: "Who'll win?" },
  { id: "react-routing", title: "Routing with React Router", info: "How to: Routing with React Router" },
  { id: "react", title: "Learn React", info: "How to: React" },
]

ReactDOM.render(
  <React.StrictMode>
    <App info={info} />
  </React.StrictMode>,
  document.getElementById('root')
);