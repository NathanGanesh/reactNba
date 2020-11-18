import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './components/context/context';
ReactDOM.render(
	<AppProvider>
		<Router>
			<App />
		</Router>
	</AppProvider>,
	document.getElementById('root')
);
