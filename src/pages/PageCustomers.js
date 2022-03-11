import { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import customers from '../data/customers.json';
import orders from '../data/orders.json';
import { Products } from '../components/Products';

const productsUrl = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/products.json';

export const PageCustomers = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(productsUrl);
			const data = await response.json();
			setProducts(data);
		})();
	}, []);

	return (
		<>
			<h2>Customers</h2>
			<ul>
				{customers.map(customer => {
					return (
						<li key={customer.customerID}>{customer.companyName}
							<ul>
								{orders.filter(m => m.customerID === customer.customerID).sort((a, b) => a.orderID - b.orderID).map((order, index, arr) => {
									return (
										<li key={index}>{order.orderID} - {order.orderDate.substring(0, 10)} ({index + 1} of {arr.length})
											{products.length === 0 && (
												<ul>
													<li><FaSpinner className="spinner" /></li>
												</ul>
											)}
											{products.length > 0 && (
												<Products order={order} products={products} />
											)}

										</li>
									)
								})}
							</ul>
						</li>
					)
				})}
			</ul>
		</>
	)
}