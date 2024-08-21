import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableRow from './TableRow';
import TableFooter from './TableFooter'


class Table extends React.Component {
    render() {
        const {data} = this.props;
        console.log(data);

        return (
            <Table>
                <TableHeader/>
                <TableBody>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                </TableBody>
                <TableFooter/>
            </Table>  
        ) 
    }
}

export default Table;
