export type Product = {
  id?: number;
  name?: string;
  products?: any[];
};

export type ProductRequest = {
  id?: number;
  name?: string;
  data?: any;
};

export type ProductResponse = {
  id?: number;
  title?: string;
  category?: string;
  description?: string;
  price?: string;
  stock?: string;
};
