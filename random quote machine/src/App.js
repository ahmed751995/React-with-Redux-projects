import React, {Component} from 'react';
import Main from './components/Main';
import './App.css';
import { ConfigureStore } from "./redux/configureStore";
import { Provider } from 'react-redux';

const store = ConfigureStore();

class App extends Component {
    render() {
	return (
		<Provider store={store}>
		<Main />
		</Provider>
	);
    }
}

export default App;
