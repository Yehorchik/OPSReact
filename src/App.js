import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styles from './App.module.scss';
import routes from './routes';

const history = createBrowserHistory();

export const App = () => {
  return (
    <div className={styles.bodyContainer}>
      <Router history={history}>
        <div>
          <Switch>
            {routes.map(route => (
              <Route {...route} />
            ))}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
