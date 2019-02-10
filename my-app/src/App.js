import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer';
import RootRouter from './routes/rootRouter';

const store = createStore(rootReducer);
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <RootRouter />
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
