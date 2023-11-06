import React, { useMemo, useEffect } from 'react';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import AlertDialog from '../../../libs/ui/components/AlertDialog';
import { FormTextField } from '../../../libs/ui/components/FormTextField';
import { useProductService } from '../hooks/useProductService';
import { ProductResponse } from '../types';

const EditProductDialog = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onApprove?: () => void;
  onClose?: () => void;
}) => {
  const { editProduct, updateProduct } = useProductService();
  const { t } = useTranslation();

  const editProductValidationSchema = Yup.object().shape({
    title: Yup.string().required(
      `${t('product-edit.form.validation.name-required')}`
    ),
  });

  const editProductObject = {
    title: editProduct.title,
    category: editProduct.category,
    description: editProduct.description,
    price: editProduct.price,
    stock: editProduct.stock,
  };

  const methods = useForm<ProductResponse>({
    reValidateMode: 'onChange',
    defaultValues: useMemo(() => editProductObject, [editProductObject]),
    resolver: yupResolver(editProductValidationSchema),
  });

  const { handleSubmit, control, reset } = methods;

  useEffect(() => {
    reset(editProduct);
  }, [editProduct, reset]);

  const onSubmit = ({ id, title }: ProductResponse) => {
    updateProduct({ id, name: title });
  };

  const editProductForm = (
    <Stack
      sx={{
        bgcolor: '#fff',
        borderRadius: '5px',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ p: '16px', pt: 0 }}>
        <FormTextField
          defaultValue={editProductObject.title ?? ''}
          name="title"
          label={t('product-edit.form.name')}
          control={control}
        />
        <FormTextField
          defaultValue={editProductObject.category ?? ''}
          name="category"
          label={t('product-edit.form.category')}
          control={control}
        />
        <FormTextField
          defaultValue={editProductObject.description ?? ''}
          name="description"
          label={t('product-edit.form.description')}
          control={control}
        />
        <FormTextField
          defaultValue={editProductObject.price ?? ''}
          name="price"
          label={t('product-edit.form.price')}
          control={control}
        />
        <FormTextField
          defaultValue={editProductObject.stock ?? ''}
          name="stock"
          label={t('product-edit.form.stock')}
          control={control}
        />
      </Box>
    </Stack>
  );

  return (
    <AlertDialog
      isOpen={isOpen}
      dialogTitle={t('product-edit.title')}
      dialogContent={editProductForm}
      approveBtnText={t('product-edit.button.submit')}
      cancelBtnText={t('product-edit.button.cancel')}
      onApprove={handleSubmit(onSubmit)}
      onClose={onClose}
    />
  );
};

export default EditProductDialog;
