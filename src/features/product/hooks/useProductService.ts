import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { productsActions, selectProducts, selectEditProduct } from '../store';
import { ProductResponse, ProductRequest } from '../types';

export type ProductServiceOperators = {
  product: any;
  editProduct: ProductResponse;
  fetchAllProduct: () => void;
  fetchEditProduct: (id: number) => void;
  addProduct: (data: ProductRequest) => void;
  updateProduct: (data: ProductRequest) => void;
  deleteProductList: (id: number, name: string) => void;
};

export const useProductService = (): Readonly<ProductServiceOperators> => {
  const dispatch = useAppDispatch();

  return {
    product: useAppSelector(selectProducts),
    editProduct: useAppSelector(selectEditProduct),

    fetchAllProduct: useCallback(() => {
      dispatch(productsActions.fetchAll());
    }, [dispatch]),

    fetchEditProduct: useCallback(
      (id: number) => {
        dispatch(productsActions.editProduct(id));
      },
      [dispatch]
    ),

    addProduct: useCallback(
      (product: ProductRequest) => {
        dispatch(productsActions.addProduct(product));
      },
      [dispatch]
    ),

    updateProduct: useCallback(
      (payload: ProductRequest) =>
        dispatch(
          productsActions.updateProduct({
            id: payload.id,
            name: payload.name,
          })
        ),
      [dispatch]
    ),

    deleteProductList: useCallback(
      (id: number, name: string) => {
        dispatch(productsActions.delete({ id, name }));
      },
      [dispatch]
    ),
  };
};

export default useProductService;
