import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './App.module.scss';
import routes from './routes';

export const App = () => {
  return (
    <div className={styles.bodyContainer}>
      <div>
        <Switch>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </Switch>
      </div>
    </div>
  );
}

export default App;
