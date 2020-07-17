let initialState = [];

export default (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {

        case 'AddToCart':
            return [...state,payload];
        default:
           return state;
    }


}


export const addToCart = payload => {
    return {
        type: 'AddToCart',
        payload: payload,

    }

}