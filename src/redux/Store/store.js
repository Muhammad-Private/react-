// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import login_Slice from '../auth/login';
import registerSlice from '../auth/register';
import logout_Slice from '../auth/logout';
import mailApi_slice from '../auth/mailapi';
import updatepassword_Slice from '../auth/updatepassword';
import fetchProductsSlice from '../Products/fetchProducts';
import addproductSlice from '../Products/AddProduct';
import deleteProductSlice from '../Products/deleteProduct';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = configureStore({
  reducer: {
    login_Slice,
    registerSlice,
    logout_Slice,
    mailApi_slice,
    updatepassword_Slice,
    fetchProductsSlice,
    addproductSlice,
    deleteProductSlice,
    enhancers: [composeWithDevTools()],
  },
 
});

export default store;
