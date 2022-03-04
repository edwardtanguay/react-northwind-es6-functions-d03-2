import { useEffect, useState } from 'react';
import './App.css';
import customers from './data/customers.json';
import orders from './data/orders.json';
import { FaSpinner } from 'react-icons/fa';

// const colors = ['yellow', 'orange', 'purple', 'blue', 'green'];
// colors.sort();
// console.log(colors);

// const amount = 99;
// const online = false;
// if(amount === 34 && online === true) {}

const productsUrl = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/products.json';

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			(async () => {
				const response = await fetch(productsUrl);
				const data = await response.json();
				setProducts(data);
			})();
		}, 2000);
	}, []);

	return (
		<div className="App">
			<h1>Northwind Site</h1>
			<div>There are {customers.length} customers.</div>
			<div>There are {orders.length} orders.</div>
			{products.length === 0 && (
				<FaSpinner className="spinner" />
			)}
			{products.length > 0 && (
				<div>There are {products.length} products.</div>
			)}
			<ul>
				{customers.map(customer => {
					return (
						<li key={customer.customerID}>{customer.companyName}
							<ul>
								{orders.filter(m => m.customerID === customer.customerID).sort((a, b) => a.orderID - b.orderID).map((order, index, arr) => {
									return (
										<li key={index}>{order.orderID} - {order.orderDate.substring(0, 10)} ({index + 1} of {arr.length})
											{products.length > 0 && (
												<ul>
													{order.details.map(product => {
														return (
															<li>{products.find(m => m.productID === product.productID).name}</li>
														)
													})}
												</ul>
											)}

										</li>
									)
								})}
							</ul>
						</li>
					)
				})}
			</ul>
		</div>
	);
}

export default App;
