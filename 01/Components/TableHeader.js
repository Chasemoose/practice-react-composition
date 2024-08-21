import React from 'react';

class TableHeader extends React.Component {
    render() {
        const {data} = this.props;
        console.log(data);

        return (
            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>price</td>
                    <td>quantity</td>
                    <td>sum</td>
                </tr>
            </thead>
        )
    }
}

export default TableHeader