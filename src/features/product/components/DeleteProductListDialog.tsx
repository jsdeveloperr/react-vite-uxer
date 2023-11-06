import React from 'react';

import { useTranslation } from 'react-i18next';

import AlertDialog from '../../../libs/ui/components/AlertDialog';
import { useProductService } from '../hooks/useProductService';

const DeleteProductListDialog = ({
  id,
  name,
  isOpen,
  onClose,
}: {
  id: number;
  isOpen: boolean;
  name: string;
  onApprove?: () => void;
  onClose?: () => void;
}) => {
  const { deleteProductList } = useProductService();
  const { t } = useTranslation();

  const handleDeleteProductListItem = () => deleteProductList(id, name);

  return (
    <AlertDialog
      isOpen={isOpen}
      dialogTitle={t('delete-product-list.title')}
      dialogContent={`${t('delete-product-list.description')}`}
      approveBtnText={t('delete-product-list.button.delete')}
      cancelBtnText={t('delete-product-list.button.cancel')}
      onApprove={handleDeleteProductListItem}
      onClose={onClose}
    />
  );
};

export default DeleteProductListDialog;
