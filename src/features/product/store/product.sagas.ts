import { SagaIterator } from '@redux-saga/core';
import { push } from 'connected-react-router';
import { call, delay, put, takeEvery } from 'redux-saga/effects';

import { notificationsActions } from '../../../libs/stores/reducers/notifications.slice';
import {
  getProduct,
  deleteProductList,
  addProduct,
  updateProduct,
  editProduct,
} from '../api';
import { Product, ProductResponse, ProductRequest } from '../types';
import { productsActions } from './product.slice';

// Worker Sagas
export function* onGetProduct(): SagaIterator {
  const product: Product[] = yield call(getProduct);
  yield put(productsActions.fetchAllSucceeded(product));
}

function* onAddProduct({
  payload,
}: {
  type: typeof productsActions.addProduct;
  payload: ProductRequest;
}): SagaIterator {
  try {
    yield call(addProduct, payload);
    yield put(productsActions.fetchAll());
    yield put(
      notificationsActions.addNotification({
        message: 'Product added successfully.',
        type: 'success',
      })
    );
    yield delay(3000);
    // Redirect to Product page
    yield put(push('/product'));
  } catch (error: any) {
    const text =
      error?.response?.status === 400
        ? 'Product Name already exists.'
        : 'Product did not add';
    yield put(
      notificationsActions.addNotification({
        message: text,
        type: 'error',
      })
    );
  }
}

function* onEditProduct({
  payload,
}: {
  type: typeof productsActions.editProduct;
  payload: string;
}): SagaIterator {
  try {
    const editProducts: ProductResponse = yield call(editProduct, payload);
    yield put(productsActions.fetchEditProductSucceeded(editProducts));
  } catch (error) {
    yield put(
      notificationsActions.addNotification({
        message: 'Product Edit was not open.',
        type: 'error',
      })
    );
  }
}

function* onUpdateProduct({
  payload,
}: {
  type: typeof productsActions.updateProduct;
  payload: ProductRequest;
}): SagaIterator {
  try {
    yield call(updateProduct, payload);
    yield put(productsActions.fetchAll());
    yield put(
      notificationsActions.addNotification({
        message: 'Update Product was successfully.',
        type: 'success',
      })
    );
    yield delay(3000);
    // Redirect to Contact page
    yield put(push('/product'));
  } catch (error) {
    yield put(
      notificationsActions.addNotification({
        message: 'Update Product was not successfully.',
        type: 'error',
      })
    );
  }
}

function* onDeleteProductList({
  payload,
}: {
  type: typeof productsActions.delete;
  payload: ProductRequest;
}): SagaIterator {
  try {
    yield call(deleteProductList, payload);
    yield put(productsActions.fetchAll());
    yield put(
      notificationsActions.addNotification({
        message: 'Delete Product was successfully.',
        type: 'success',
      })
    );
    yield delay(3000);
    // Redirect to Contact page
    yield put(push('/product'));
  } catch (error) {
    yield put(
      notificationsActions.addNotification({
        message: 'Delete Product was not successfully.',
        type: 'error',
      })
    );
  }
}

// Watcher Saga
export function* productWatcherSaga(): SagaIterator {
  yield takeEvery(productsActions.fetchAll.type, onGetProduct);
  yield takeEvery(productsActions.addProduct.type, onAddProduct);
  yield takeEvery(productsActions.editProduct.type, onEditProduct);
  yield takeEvery(productsActions.updateProduct.type, onUpdateProduct);
  yield takeEvery(productsActions.delete.type, onDeleteProductList);
}

export default productWatcherSaga;
