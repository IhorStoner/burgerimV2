import { addToCart, changeProductCount, deleteCartProduct,resetCart } from '../actions/cartAction';

export const saveLocalStorage = store => next => action => {

    if ([addToCart.type, changeProductCount.type, deleteCartProduct.type,resetCart.type].includes(action.type)) {
        next(action);
        const nextState = store.getState();
        try {
            localStorage.setItem('burgerimCart', JSON.stringify(nextState.cart));
        } catch (e) {
            console.log('ERROR SAVING STATE')
        }
        return;
    }
    return next(action);
};