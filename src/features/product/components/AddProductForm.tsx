import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { Button, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { t } from 'i18next';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { FormTextField } from '../../../libs/ui/components/FormTextField';
import { useProductService } from '../hooks/useProductService';
import { ProductRequest, ProductResponse } from '../types';

const AddProductForm = () => {
  const { addProduct } = useProductService();
  const navigate = useNavigate();

  const handleBackDncListClick = () => navigate('/product');

  const newDncValidationSchema = Yup.object().shape({
    title: Yup.string().required('Product title required'),
  });

  const methods = useForm<ProductRequest>({
    resolver: yupResolver(newDncValidationSchema),
  });
  const { handleSubmit, control } = methods;

  const onSubmit = (product: ProductResponse) => {
    addProduct(product);
  };

  return (
    <Stack
      sx={{
        bgcolor: '#fff',
        borderRadius: 2,
        p: 2.5,
        overflow: 'hidden',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              py: 2,
              px: 2,
              borderRadius: '10px',
              backgroundColor: '#F6F7F9',
            }}
          >
            <Link
              component="button"
              variant="button"
              onClick={handleBackDncListClick}
              sx={{
                border: '1px solid #7108aa',
                textDecoration: 0,
                borderRadius: 50,
                color: '#fff',
                px: 2,
                py: 0.6,
                textTransform: 'capitalize',
                backgroundColor: '#7108aa',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ChevronLeftOutlinedIcon sx={{ fontSize: '18px' }} />
              {'Back'}
            </Link>
            <Typography
              variant="h6"
              sx={{
                color: '#000',
                textTransform: 'uppercase',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Product Add
            </Typography>
          </Box>
          <Box>
            <FormTextField
              name="title"
              label={t('add-product.form.name')}
              control={control}
            />
            <FormTextField
              name="category"
              label={t('add-product.form.category')}
              control={control}
            />
            <FormTextField
              name="description"
              label={t('add-product.form.description')}
              control={control}
            />
            <FormTextField
              name="price"
              label={t('add-product.form.price')}
              control={control}
            />
            <FormTextField
              name="stock"
              label={t('add-product.form.stock')}
              control={control}
            />

            <Button
              component="button"
              onClick={handleSubmit(onSubmit)}
              variant={'contained'}
              sx={{
                bgcolor: '#848587',
                color: '#fff',
                float: 'right',
                mt: '8px',
                textTransform: 'capitalize',
                '&:hover': {
                  bgcolor: '#7108aa',
                },
              }}
            >
              {t('add-product.button.submit')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default AddProductForm;
