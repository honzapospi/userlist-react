import React from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import Menu from './Menu';
import { Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Menu />
      <Route path="/" exact component={UserList} />
      <Route path="/new" component={UserForm} />
      <Route path="/edit/:id" component={UserForm} />
    </div>
  );
}

export default App;
