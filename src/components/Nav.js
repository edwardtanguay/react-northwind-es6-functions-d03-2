import { NavLink } from 'react-router-dom';
export const Nav = () => {
	return (
		<nav>
			<ul>
				<li><NavLink to="/">Welcome</NavLink></li>
				<li><NavLink to="/customers">Customers</NavLink></li>
				<li><NavLink to="/orders">Orders</NavLink></li>
				<li><NavLink to="/products">Products</NavLink></li>
			</ul>
		</nav>
	)
}
