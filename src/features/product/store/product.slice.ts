import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../../store/store';
import { Product, ProductResponse, ProductRequest } from '../types';

export interface ProductState {
  product: Product[];
  editProduct: ProductResponse;
}

const initialState: ProductState = {
  product: [],
  editProduct: {} as ProductResponse,
};

// slice
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchAllSucceeded(state, action: PayloadAction<Product[]>) {
      // eslint-disable-next-line no-param-reassign
      state.product = action.payload;
    },

    fetchEditProductSucceeded(state, action: PayloadAction<ProductResponse>) {
      // eslint-disable-next-line no-param-reassign
      state.editProduct = action.payload;
    },
  },
});

// Actions
export const productsActions = {
  addProduct: createAction(
    `${productSlice.name}/addProduct`,
    (product: ProductRequest) => ({
      payload: product,
    })
  ),
  editProduct: createAction(`${productSlice.name}/editProduct`, product => ({
    payload: product,
  })),
  updateProduct: createAction(
    `${productSlice.name}/updateProduct`,
    (product: ProductRequest) => ({
      payload: product,
    })
  ),
  delete: createAction(`${productSlice.name}/delete`, product => ({
    payload: product,
  })),
  fetchAll: createAction(`${productSlice.name}/fetchAll`),
  fetchAllSucceeded: productSlice.actions.fetchAllSucceeded,
  fetchEditProductSucceeded: productSlice.actions.fetchEditProductSucceeded,
};

// Selectors
export const selectProducts = (state: RootState) => state.product.product;
export const selectEditProduct = (state: RootState) =>
  state.product.editProduct;

// Reducer
export default productSlice.reducer;
