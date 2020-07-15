const initState = {
    categories: [
        { name: 'Electronics', displayName: 'Electronics' },
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
      activeCategory: ''
    };


export default (state = initState, action) => {
    let { type, payload } = action;



    switch (type) {
        case 'CHANGE_CATEGORY':
            state = initState;
            let products = state.products.filter(product => product.category === payload);
            let activeCategory = state.categories.filter(cat => cat.name === payload)[0]['displayName'];
            return { categories: state.categories, products, activeCategory };
        default:
            return state;
    }
}

export const productBaseCategory = (name) => {
    return {
        type: 'CHANGE_CATEGORY',
        payload: name
    }
}