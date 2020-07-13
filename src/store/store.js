import { createStore } from 'redux';


const initState = {
    categories: [
        { name: 'Electronics', displayName: 'Elecronics' },
        { name: 'Food', displayName: 'Food' },
        { name: 'Clothing', displayName: 'Clothing' },
      ],
      products: [
        { name: 'TV', category: 'Electronics', price: 699.00, inStock: 5 },
        { name: 'Radio', category: 'Electronics', price: 99.00, inStock: 15 },
        { name: 'Shirt', category: 'Clothing', price: 9.00, inStock: 25 },
        { name: 'Socks', category: 'Clothing', price: 12.00, inStock: 10 },
        { name: 'Apples', category: 'Food', price: .99, inStock: 500 },
        { name: 'Eggs', category: 'Food', price: 1.99, inStock: 12 },
        { name: 'Bread', category: 'Food', price: 2.39, inStock: 90 },
      ],
      activeCategory: 'food'
    };

const reducer = (state = initState, action) => {

    let newState = { ...state };

    switch (action.type) {

        case 'CHANGE_CATEGORY':
            newState.currentCategory = action.payload;
            break;
        default:
            break;
    }

    return newState;
};

export default createStore(reducer);