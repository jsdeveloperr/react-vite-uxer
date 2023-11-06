import { Env } from '../../../config/Env';
import makeApi from '../../../libs/core/configureAxios';
import { Product, ProductResponse, ProductRequest } from '../types';

const api = makeApi(`${Env.API_BASE_URL}`);

const PRODUCT_URL = 'https://dummyjson.com/auth/products';

export const getProduct = (): Promise<Product[]> =>
  api.get(PRODUCT_URL, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });

export const addProduct = (product: ProductRequest): Promise<ProductResponse> =>
  api.post(`${PRODUCT_URL}/add`, product, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });

export const editProduct = (name: string): Promise<ProductResponse> =>
  api.get(`${PRODUCT_URL}/${name}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });

export const updateProduct = ({
  id,
  name,
}: ProductRequest): Promise<ProductResponse> =>
  api.put(
    `${PRODUCT_URL}/${id}`,
    {
      title: name,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    }
  );

export const deleteProductList = ({ id }: ProductRequest): Promise<null> =>
  api.delete(`${PRODUCT_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });
