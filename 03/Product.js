import React from 'react';

function Product(props) {

    const {data} = props

    return (
        <li>{data.name} ({data.price}) <button>buy</button></li>
    )
}

export default Product;