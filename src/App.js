import './App.css';
import customers from './data/customers.json';
import orders from './data/orders.json';

const colors = ['yellow', 'orange', 'purple', 'blue', 'green'];
colors.sort();
console.log(colors);


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
							  {orders.filter(m => m.customerID === customer.customerID).sort((a,b) => a.orderID - b.orderID).map((order, index, arr) => {
								  return (
									  <li key={index}>{order.orderID} - {order.orderDate.substring(0, 10)} ({index + 1} of {arr.length})</li>
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
