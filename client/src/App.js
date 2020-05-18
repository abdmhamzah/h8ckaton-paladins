import React from 'react';
import { Provider } from 'react-redux'
import store from './store'

import TableView from './components/table'
//table

function App() {
  return (
    <Provider store={store}>
      <TableView></TableView>

    </Provider>
  );
}

export default App;
