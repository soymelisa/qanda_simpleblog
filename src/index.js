import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';  
import * as serviceWorker from './serviceWorker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'; 

const App = () => {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail 
            author="Melisa" 
            timeAgo="Sábado por la noche" 
            text="ya no voy a hacer tonterías"
            avatar={ faker.image.avatar() }
          />
        </ApprovalCard>
        
        <ApprovalCard>
          <CommentDetail 
            author="Beto" 
            timeAgo="Domingo por la mañana" 
            text="está bien levantarse tarde un día"
            avatar={ faker.image.avatar() }
            />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            author="Oscar" 
            timeAgo="Hace dos semanas" 
            text="cuál debe ser el ahorro promedio para una franquicia"
            avatar={ faker.image.avatar() }

            /> 
        </ApprovalCard>
      </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
serviceWorker.unregister();
