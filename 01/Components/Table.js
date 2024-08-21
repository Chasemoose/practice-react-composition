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



	render() {
		const { data } = this.props
		console.log(data)

		return (
			<Table>
				<TableHeader />
				<TableBody>
					{this.RowsRender()}
				</TableBody>
				<TableFooter />
			</Table>
		)
	}
}

export default Table
