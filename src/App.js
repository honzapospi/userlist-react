import React, { useState } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import Menu from './Menu';
import { Route } from 'react-router-dom';
import ThemeContext from './ThemeContext';

const App = () => {

  const [theme, setTheme] = useState('dark');

  return (
    <div>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Menu />
        <Route path="/" exact component={UserList} />
        <Route path="/new" component={UserForm} />
        <Route path="/edit/:id" component={UserForm} />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
