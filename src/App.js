import './App.css';
import customers from './data/customers.json';
import orders from './data/orders.json';

function App() {
  return (
    <div className="App">
		<h1>Northwind Site</h1>
		  <div>There are {customers.length} customers.</div>
		  <div>There are {orders.length} orders.</div>
		  <ul>
			  {customers.map(customer => {
				  return (
					  <li key={customer.customerID}>{customer.companyName}
						  <ul>
							  {orders.filter(m => m.customerID === customer.customerID).map((order, index) => {
								  return (
									  <li>{index + 1}. {order.orderID} - {order.orderDate.substring(0,10)}</li>
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
