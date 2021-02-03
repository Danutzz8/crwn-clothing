 //import SHOP_DATA from './shop.data';   // shop.data can be delletted now because we are getting data from firebase

import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: null   // SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            };
        default:
            return state;
    }
}

export default shopReducer;