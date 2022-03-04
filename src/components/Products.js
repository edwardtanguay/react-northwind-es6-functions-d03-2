export const Products = ({ order, products}) => {
	return (
		<ul>
			{order.details.map((product, index) => {
				return (
					<li>{index+1}. {products.find(m => m.productID === product.productID).name}</li>
				)
			})}
		</ul>
	)
}