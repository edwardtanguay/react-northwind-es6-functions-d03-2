import { Routes, Route } from 'react-router-dom';
import './App.css';
import { PageWelcome } from './pages/PageWelcome';
import { PageCustomers } from './pages/PageCustomers';
import { PageOrders } from './pages/PageOrders';
import { PageProducts } from './pages/PageProducts';
import { Nav } from './components/Nav';

function App() {

	return (
		<div className="App">
			<h1>Northwind Site</h1>
			<hr />
			<Nav/>
			<hr />

			<Routes>
				<Route path="/" element={<PageWelcome />} />
				<Route path="/customers" element={<PageCustomers />} />
				<Route path="/orders" element={<PageOrders />} />
				<Route path="/products" element={<PageProducts />} />
			</Routes>

		</div>
	);
}

export default App;
