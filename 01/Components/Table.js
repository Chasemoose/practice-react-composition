import React from "react"
import TableHeader from "./TableHeader"
import TableBody from "./TableBody"
import TableRow from "./TableRow"
import TableFooter from "./TableFooter"

class Table extends React.Component {

	RowsRender() {
		const {data} = this.props
		return data.map(({id, name, price, quantity}) => {
			return <TableRow key={id} items={[id, name, price, quantity, price * quantity]} />
		})
	}

	totalPrice() {
		const {data} = this.props
		
		data.reduce((acc, item) => acc + (item.price * item.quantity), 0)
	}



	render() {
		const { data } = this.props
		
		return (
			<Table>
				<TableHeader colNames={[id, name, price, quantity, sum]} />
				<TableBody>
					{this.RowsRender()}
				</TableBody>
				<TableFooter items={['', '', '', '', this.totalPrice()]}/>
			</Table>
		)
	}
}

export default Table
