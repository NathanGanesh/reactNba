import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './index.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import Videos from './pages/Videos';
import Error from './pages/Error';
import VideoDetail from './pages/VideoDetail';
import Article from './pages/Article';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Footer />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/news" component={News} />
				<Route exact path="/videos" component={Videos} />
				<Route exact path="/videos/:id" component={VideoDetail} />
				<Route exact path="/articles/:id" component={Article} />
				<Route component={Error} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
