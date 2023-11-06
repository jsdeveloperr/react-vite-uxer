import React, { useEffect, useMemo, useState } from 'react';

import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

import { CustomNoRowsOverlay } from '../../../libs/ui/components/CustomNoRowsDataGrid';
import LinearProgress from '../../../libs/ui/components/LinearProgress';
import { useProductService } from '../hooks/useProductService';
import DeleteMaterialListDialog from './DeleteProductListDialog';
import EditProductDialog from './EditProductDialog';

export const ProductContainer = () => {
  const { product, fetchAllProduct, fetchEditProduct } = useProductService();

  const [rowId, setRowId] = useState(null);
  const navigate = useNavigate();
  const productlist = product.products;

  const [openDialogs, setOpenDialogs] = useState({
    isEditProductDialogOpen: false,
    isDeleteProductListDialogOpen: false,
    id: 0,
    name: '',
  });

  const [pageSize, setPageSize] = useState(12);

  useEffect(() => {
    fetchAllProduct();
  }, [fetchAllProduct]);

  const handleEditProductDialog = (id: number, name: string) => {
    fetchEditProduct(id);
    setOpenDialogs({
      ...openDialogs,
      isEditProductDialogOpen: true,
      id,
      name,
    });
  };

  const handleAddProductClick = () => navigate('/add-product');

  const columns = useMemo(
    () => [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'title', headerName: 'Title', width: 200 },
      { field: 'category', headerName: 'Category', width: 200 },
      { field: 'description', headerName: 'description', width: 200 },
      { field: 'price', headerName: 'Price', width: 90 },
      { field: 'stock', headerName: 'Stock', width: 90 },
      {
        field: 'action',
        headerName: 'Action',
        type: 'actions',
        width: 200,
        getActions: (params: any) => [
          <GridActionsCellItem
            icon={
              <Tooltip title="Edit" placement="top" arrow>
                <CreateOutlinedIcon sx={{ color: '#2bce9a' }} />
              </Tooltip>
            }
            onClick={() =>
              handleEditProductDialog(params.row.id, params.row.title)
            }
            label="Edit"
          />,
          <GridActionsCellItem
            icon={
              <Tooltip title="Delete" placement="top" arrow>
                <DeleteForeverOutlinedIcon sx={{ color: '#ee6d2b' }} />
              </Tooltip>
            }
            onClick={() => {
              setOpenDialogs({
                ...openDialogs,
                isDeleteProductListDialogOpen: true,
                id: params.row.id,
                name: params.row.name,
              });
            }}
            label="Delete"
          />,
        ],
      },
    ],
    [rowId]
  );

  return (
    <>
      <Container style={{ padding: '1px' }} maxWidth={false}>
        <Box
          sx={{
            height: '100%',
            width: '100%',
            bgcolor: '#fff',
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '15px',
            }}
          >
            <Typography variant="h6">Products</Typography>
            <Link
              component="button"
              variant="button"
              onClick={handleAddProductClick}
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
              {'Add'}
              <ChevronRightOutlinedIcon
                sx={{ fontSize: '18px', marginLeft: '6px' }}
              />
            </Link>
          </Box>
          <DataGrid
            columns={columns}
            rows={productlist || []}
            autoHeight
            rowHeight={45}
            getRowId={(row: any) => row.id + Math.random()}
            rowsPerPageOptions={[5, 10, 20]}
            pageSize={pageSize}
            onPageSizeChange={newPageSize => setPageSize(newPageSize)}
            loading={product.length === 0}
            components={{
              LoadingOverlay: LinearProgress,
              NoRowsOverlay: CustomNoRowsOverlay,
            }}
            sx={{
              bgcolor: '#FFF',
              boxShadow: 0,
              border: 0,
              borderColor: '#F3F5F7',
              borderRadius: 2,
              '& .MuiDataGrid-row:hover': {
                bgcolor: '#eeddf8',
                borderColor: '#F3F5F7',
              },
              '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
                borderBottom: '1px solid #f0f0f0',
              },
              '*::-webkit-scrollbar': {
                maxHeight: '8px',
              },
              '*::-webkit-scrollbar-track': {
                backgroundColor: '#f5f5f5',
              },
              '*::-webkit-scrollbar-thumb': {
                backgroundColor: '#e4e4e4',
                borderRadius: '10px',
              },
              '*::-webkit-scrollbar-thumb:hover': {
                borderRadius: '10px',
                bgcolor: '#7108aa',
              },
            }}
            onCellEditCommit={(params: any) => setRowId(params.id)}
          />
        </Box>
        <EditProductDialog
          isOpen={openDialogs.isEditProductDialogOpen}
          onApprove={() => {}}
          onClose={() =>
            setOpenDialogs({
              ...openDialogs,
              isEditProductDialogOpen: false,
            })
          }
        />
        <DeleteMaterialListDialog
          id={openDialogs.id}
          name={openDialogs.name}
          isOpen={openDialogs.isDeleteProductListDialogOpen}
          onApprove={() => {}}
          onClose={() =>
            setOpenDialogs({
              ...openDialogs,
              isDeleteProductListDialogOpen: false,
            })
          }
        />
      </Container>
    </>
  );
};
