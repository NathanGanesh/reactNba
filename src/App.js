import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Error from './pages/Error';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route component={Error} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
