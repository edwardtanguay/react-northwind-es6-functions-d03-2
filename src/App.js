import './App.css';
import customers from './data/customers.json';

function App() {
  return (
    <div className="App">
		<h1>Northwind Site</h1>
		  <div>There are {customers.length} customers.</div>
		  <ul>
			  {customers.map(customer => {
				  return (
					  <li key={customer.customerID}>{customer.companyName}</li>
				 )
			 })}
		  </ul>
    </div>
  );
}

export default App;
