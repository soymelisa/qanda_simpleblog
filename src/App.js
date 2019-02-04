import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

class App extends Component {
  render() {
    return (
      // <div className="ui container comments">
      // </div>
      <ApprovalCard/>
      <CommentDetail
      author="Sam"
      timeAgo="Hoy a las 4:45pm"
      content="bonito blog"
      avatar={faker.image.avatar()}
      />
      
    );
  }
}

export default App;
