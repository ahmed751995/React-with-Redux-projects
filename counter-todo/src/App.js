import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Main from './components/main';
import { configureStore } from './redux/configureStore';

const store = configureStore();

class App extends Component {
    render() {
	return(
	    <Provider store={store}>
	      <div className="App">
		<Main />
	      </div>
	    </Provider>
	);
    }
}


export default App;
