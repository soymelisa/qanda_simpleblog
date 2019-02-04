import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'; 
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'; 

const App = () => {
    return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar}/>
        </a>

        <div className="content">
          <a href="/" className="author">Sam
          </a>
          <div className="metadata">
            <span className="date">
              Hoy a las 6:00pm
            </span>
          </div>
          <div className="text">post equis de prueba :)</div>
        </div>
      </div>
      </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
serviceWorker.unregister();
