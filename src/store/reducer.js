let initialState = [];

export default (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'get':
            state = initialState;
            if (Array.isArray(payload[0])) {

                return payload[0];
            }
            else {
                return payload;
            }
        case 'post':
            return [...state, payload];
        case 'delete':
            return state;
        case 'update':
            return state;
        default:
            return state;
    }
}
