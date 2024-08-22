import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';
import Product from './Product'

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }


    addProduct = (id) => {
        const product = data.find(item => item.id === id)

        if(product) {
            this.setState({
                cart: [...this.state.cart, product]
            })
        }
    }
    
    render() {
        return (
            <section>
                <Category>
                    {/* {data.map(item => <li key={item.id}>{item.name} ({item.price}) <button>buy</button></li>)} */}
                    {data.map(item => <Product key={item.id} data={item} />)}
                </Category>
                <Cart />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
