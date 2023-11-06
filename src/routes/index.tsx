import React from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from '../components/Layout';
import AddProductForm from '../features/product/components/AddProductForm';
import AuthVerify from '../libs/helpers/AuthVerify';
import PrivateRoutes from '../libs/helpers/PrivateRoutes';
import DashboardPage from '../pages/DashboardPage';
import ProductsPage from '../pages/ProductsPage';
import SignInPage from '../pages/SignInPage';

const AppRoutes = () => (
  <>
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/add-product" element={<AddProductForm />} />
        </Route>
      </Route>
      <Route path="/signin" element={<SignInPage />} />

      <Route path="*" element={<Navigate to="/product" />} />
    </Routes>
    <AuthVerify />
  </>
);

export default AppRoutes;
